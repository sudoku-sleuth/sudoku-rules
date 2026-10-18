import { coordinates, key, sortedCells } from "./board.js";
import type { CanonicalBoard, Cell, FogPlay, NormalForm } from "./types.js";

/** Validate and canonicalise fog setup without evaluating an answer. */
export function fogPlay(raw: unknown, board: CanonicalBoard): FogPlay {
  if (!raw || typeof raw !== "object" || Array.isArray(raw)) throw Error("Write fog as named fields.");
  const p = raw as Record<string, unknown>;
  if (Object.keys(p).some(k => !["initiallyLit", "links"].includes(k))) throw Error("Unknown fog field.");
  const cells = (raw: unknown, triggers = false): Cell[] => {
    if (!Array.isArray(raw)) throw Error("Supply a fog cell list.");
    const decoded = raw.map(c => {
      if (typeof c === "number" && Number.isSafeInteger(c)) c = `r${Math.floor(c / board.cols)+1}c${((c % board.cols)+board.cols) % board.cols+1}`;
      const match = typeof c === "string" && /^r(-?\d+)c(-?\d+)$/.exec(c);
      if (!match || !Number.isSafeInteger(Number(match[1])) || !Number.isSafeInteger(Number(match[2]))) throw Error("Supply fog coordinates or safe integer cell indices.");
      return `r${Number(match[1])}c${Number(match[2])}` as Cell;
    });
    if (!triggers && decoded.some(c => !board.activeCells.includes(c))) throw Error("Fog lights must be active board cells.");
    return sortedCells(decoded as Cell[]);
  };
  const play: FogPlay = { op: "Fog", initiallyLit: cells(p.initiallyLit === undefined ? [] : p.initiallyLit) };
  if (Object.hasOwn(p, "links")) {
    if (!Array.isArray(p.links)) throw Error("Supply a fog link list.");
    const links = p.links.map(raw => {
      if (!raw || typeof raw !== "object" || Array.isArray(raw) || Object.keys(raw).some(k => !["trigger", "lights"].includes(k))) throw Error("Write a fog link with trigger and lights.");
      const link = raw as Record<string, unknown>, trigger = cells(link.trigger, true), lights = cells(link.lights);
      if (!trigger.length) throw Error("A fog link needs a trigger cell.");
      return { trigger, lights };
    });
    const grouped = new Map<string, { trigger: Cell[]; lights: Cell[] }>();
    for (const { trigger, lights } of links) {
      // A spot outside the active board can never be correct, so its link never fires.
      if (trigger.some(c => !board.activeCells.includes(c))) continue;
      const id = key(trigger), previous = grouped.get(id);
      grouped.set(id, { trigger, lights: sortedCells([...(previous?.lights ?? []), ...lights]) });
    }
    play.links = [...grouped.entries()].sort(([a],[b]) => a < b ? -1 : a > b ? 1 : 0).map(([,l]) => l);
  }
  return play;
}

/** Current visibility. An omitted answer means no answer is available; an empty answer has no known cells. */
export function visibleCells(form: NormalForm, entries: Partial<Record<Cell, number>>, answer?: Partial<Record<Cell, number>>): Cell[] {
  if (form.play === "unresolved") throw Error("Visibility semantics are unresolved.");
  if (form.play === "all-visible") return [...form.board.activeCells];
  const play = form.play, lit = new Set(play.initiallyLit);
  const answered = answer !== undefined;
  const givens = new Map(form.board.givens.map(g => [g.cell, g.digit]));
  const correct = (c: Cell) => form.board.activeCells.includes(c) && entries[c] !== undefined &&
    (!givens.has(c) || entries[c] === givens.get(c)) &&
    (!answered || answer[c] !== undefined && entries[c] === answer[c]);
  if (play.links !== undefined) {
    for (const link of play.links) if (link.trigger.every(correct)) link.lights.forEach(c => lit.add(c));
  } else {
    for (const a of form.board.activeCells) if (correct(a)) {
      if (givens.has(a)) lit.add(a);
      else {
        const [ar,ac] = coordinates(a);
        for (const c of form.board.activeCells) { const [r,col] = coordinates(c); if (Math.abs(ar-r)<=1 && Math.abs(ac-col)<=1) lit.add(c); }
      }
    }
  }
  return sortedCells([...lit]);
}
