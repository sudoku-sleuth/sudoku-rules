import { expect, test } from "bun:test";
import { readFileSync } from "node:fs";
import { runInNewContext } from "node:vm";

const script = readFileSync(new URL("../site/theme.js", import.meta.url), "utf8");
function bootstrap(saved: string | null = null, blocked = false) {
  const dataset: Record<string, string> = {};
  const listeners = new Map<string, (event?: unknown) => void>();
  const clicks = new Map<string, () => void>();
  const pressed = new Map<string, string>();
  const buttons = ["light", "dark", "system"].map(theme => ({
    dataset: { themeChoice: theme },
    setAttribute: (_name: string, value: string) => pressed.set(theme, value),
    addEventListener: (_name: string, callback: () => void) => clicks.set(theme, callback),
  }));
  const control = { hidden: true, querySelectorAll: () => buttons };
  let stored = saved;
  runInNewContext(script, {
    document: {
      documentElement: { dataset }, querySelector: () => control,
      addEventListener: (name: string, callback: () => void) => listeners.set(name, callback),
    },
    window: { addEventListener: (name: string, callback: () => void) => listeners.set(name, callback) },
    localStorage: {
      getItem: () => { if (blocked) throw new Error("Storage blocked"); return stored; },
      setItem: (_key: string, value: string) => { if (blocked) throw new Error("Storage blocked"); stored = value; },
    },
  });
  return { dataset, control, pressed, clicks, listeners, stored: () => stored };
}

test("saved preference is applied before DOM ready; absent or invalid preferences use System", () => {
  for (const [saved, expected] of [[null, "system"], ["invalid", "system"], ["light", "light"], ["dark", "dark"], ["system", "system"]]) {
    const ui = bootstrap(saved);
    expect(ui.dataset.theme).toBe(expected!);
    expect(ui.control.hidden).toBe(true);
    ui.listeners.get("DOMContentLoaded")!();
    expect(ui.control.hidden).toBe(false);
    expect(ui.pressed.get(expected!)).toBe("true");
    expect([...ui.pressed.values()].filter(value => value === "true")).toHaveLength(1);
  }
});

test("each theme choice updates the page, pressed state, and persisted preference", () => {
  const ui = bootstrap();
  ui.listeners.get("DOMContentLoaded")!();
  for (const theme of ["dark", "light", "system"]) {
    ui.clicks.get(theme)!();
    expect(ui.dataset.theme).toBe(theme);
    expect(ui.stored()).toBe(theme);
    expect(ui.pressed.get(theme)).toBe("true");
    expect([...ui.pressed.values()].filter(value => value === "true")).toHaveLength(1);
  }
  ui.listeners.get("storage")!({ key: "open-rules-theme", newValue: "dark" });
  expect(ui.dataset.theme).toBe("dark");
  ui.listeners.get("storage")!({ key: null, newValue: null });
  expect(ui.dataset.theme).toBe("system");
});

test("blocked storage still allows all theme choices", () => {
  const ui = bootstrap(null, true);
  expect(ui.dataset.theme).toBe("system");
  ui.listeners.get("DOMContentLoaded")!();
  ui.clicks.get("dark")!();
  expect(ui.dataset.theme).toBe("dark");
  ui.clicks.get("system")!();
  expect(ui.dataset.theme).toBe("system");
});
