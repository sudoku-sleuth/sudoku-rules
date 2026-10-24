# Command-line tools

Use `openrules lint` to check a case file and `openrules overlap` to compare library definitions. From a checkout, use Bun 1.2.23 and run `bun install --frozen-lockfile` first. Prefix CLI commands with `bun run`: `openrules lint puzzle.rules.md` becomes `bun run openrules lint puzzle.rules.md`.

The paths under `tests/` are sample files you can try yourself.

## Check a case file or folder

```sh
bun run openrules lint tests/valid/cases/custom-syntax.rules.md
```

Replace the path with your own `.rules.md` file, or a folder to check its case files together. Fix any diagnostics, then rerun the command. A clean report checks the file's declarations and custom formulas; review the setter wording and example digits yourself. The pending items mean the command has not fetched external definitions or evaluated examples.

### Read and fix a diagnostic

Three common mistakes are an unknown setting, a value of the wrong type, and a cell outside the grid. Run these commands to see each one:

```sh
bun run openrules lint tests/invalid/cases/unknown-parameter.rules.md
bun run openrules lint tests/invalid/cases/wrong-boolean.rules.md
bun run openrules lint tests/invalid/cases/off-board-pair.rules.md
```

Diagnostic lines, in the same order:

```text
tests/invalid/cases/unknown-parameter.rules.md:13:18 E_CASE_PARAMETERS: Unknown parameter class; use the parameters on the rule page.
tests/invalid/cases/wrong-boolean.rules.md:13:24 E_CASE_PARAMETERS: repeats must be true or false.
tests/invalid/cases/off-board-pair.rules.md:13:11 E_CASE_PARAMETERS: cells item 2 must be an in-board cell in r1c1 form.
```

Read `file:13:24` as line 13, column 24, counting from one. The code identifies the kind of problem; the message explains what to change.

| Message | What happened | Fix |
| --- | --- | --- |
| Unknown parameter `class` | `thermo` has no setting named `class`. | Remove `class "first-order"`; use the settings listed on the Thermo rule page. |
| `repeats must be true or false` | `repeats "false"` supplies text. | Write `repeats false` without quotes. |
| `cells item 2 must be an in-board cell` | The pair includes `r10c1` on a 9×9 grid. | Correct the row or column to match the intended cell, then check both endpoints. |

The command exits with `0` when accepted, `1` for diagnostics, and `2` for usage or file errors. A decoration-overlap warning alone still exits with `0`.

## Get machine-readable diagnostics

Add `--json` when an editor, script or CI job needs structured results:

```sh
bun run openrules lint tests/invalid/cases/wrong-boolean.rules.md --json
```

Excerpt from the diagnostic object:

```json
{
  "code": "E_CASE_PARAMETERS",
  "check": "E_CASE_PARAMETERS",
  "message": "repeats must be true or false.",
  "span": {
    "file": "tests/invalid/cases/wrong-boolean.rules.md",
    "start": {
      "offset": 177,
      "line": 13,
      "column": 24
    },
    "end": {
      "offset": 184,
      "line": 13,
      "column": 31
    }
  }
}
```

The complete report contains a `diagnostics` array and a `pending` list. Read `code` to classify a problem, display `message`, and use `span` to highlight its source. Redirect stdout to a file to save the JSON; the command still exits with `1` for this example, so a script should handle that status while reading the report.

## Compare library definitions

For library contributors, overlap helps find formulas that may share a building block:

```sh
bun run openrules overlap
```

Excerpt:

```text
Overlap across meanings:
predicate moveRelation / predicate selectedPair: 0.7907
```

The report also prints the shared formula and, where recorded, a reason for keeping the meanings separate:

```text
  moveRelation selects a geometric move; selectedPair additionally selects all, incident or scoped pairs.
```

An overlap is shared formula structure, measured after expanding shared predicates to depth three. A high score invites comparison; it does not prove two rules mean the same thing. Read both definitions and their inputs. Reuse a shared block when their meaning is shared; if the meanings differ, explain the distinction in the overlap allowlist. Pairs under “Same block, different settings” already share a block and show how their settings differ. See [Library overlap](docs/overlap.md) for the comparison method and contribution rules.

## Check a contribution

Run these commands from the repository root.

### Lint the library

```sh
bun run lint
```

This checks metadata, formulas, skill examples, declaration contracts and library tables. Fix any reported file and rerun lint. If you deliberately changed public page metadata, regenerate the tables with `bun scripts/library-report.ts` before checking again; [Contributing](CONTRIBUTING.md) covers definition changes.

Individual checks are `bun run lint:yaml`, `bun run lint:spec`, `bun run lint:skill`, `bun run lint:declarations` and `bun run lint:library`. See the [developer guide](DEVELOPMENT.md#local-commands) for their scope.

### Run the tests

```sh
bun test
```

Read a failure's expected and received values and its file location, make the correction, then rerun the affected test. Run the full suite before submitting the contribution.

### Build the portable package

```sh
bun run typecheck
bun run build:package
node dist/cli.js lint rules
```

`build:package` writes the portable package and CLI to `dist/`. For checking assignments from code, see the [evaluator API](docs/evaluator.md).

### Build and preview the site

```sh
bun run build
```

The build writes the site to `_site/`. To browse it locally, serve that folder:

```sh
python3 -m http.server 8000 --directory _site
```

```text
Serving HTTP on :: port 8000 (http://[::]:8000/) ...
```

Open <http://localhost:8000/> and check the pages you changed. Stop the server with Ctrl-C; rebuild and refresh after further edits.

## AI skill

The [Open Rules skill](plugins/open-rules/skills/open-rules/SKILL.md) helps turn puzzle wording and drawings into a case file or draft a new rule definition. Give it the original wording and review its declarations against the puzzle before sharing them.

For package APIs and repository structure, see the [developer guide](DEVELOPMENT.md).
