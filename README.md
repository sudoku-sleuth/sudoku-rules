# Open Rules

One rule, one meaning. Open Rules gives setters and solvers a shared language for Sudoku puzzles, readable by people and tools. Write your puzzle’s rules once and share them without ambiguity.

Explore a growing library of familiar rules, each with an icon, clear wording and a precise definition. Find the rule you know, see what it means and use it in your next puzzle.

## Describe a puzzle

A case file is a Markdown document that names the rules and says where they apply. Its `rules` block can be as simple as:

```rules
sudoku 9x9
whispers-5 r1c1-r1c2-r1c3
```

A standard Sudoku grid, with a German Whispers line through three cells: neighbouring values along the line differ by at least 5.

The library has three layers:

- **[Rules](RULES.md)** are the names setters know, with icons, wording and examples.
- **[Blocks](BLOCKS.md)** are shared constraints behind those rules. Whispers 5 uses Difference Line with a gap of 5.
- **[Predicates](PREDICATES.md)** are the maths vocabulary that blocks combine into complete constraints.

## Get started

1. **[Browse the library](https://rules.sudoku-sleuth.com/#library-title).** Find the rules your puzzle uses.
2. **[Write your first case file](SYNTAX.md).** Copy the example header, then add your rules and their cells.
3. **Check it with `openrules lint puzzle.rules.md`.** Follow the [command-line guide](TOOLS.md) to run the checker and fix diagnostics.

## Where to go next

| I want to… | Read |
| --- | --- |
| Write a case file | [Syntax introduction](SYNTAX.md) |
| Run the checker | [Command-line tools](TOOLS.md) |
| Browse familiar rules by shape | [Rules](RULES.md) |
| Explore shared constraints | [Blocks](BLOCKS.md) |
| Read the mathematical vocabulary | [Predicates](PREDICATES.md) |
| Find every rule, block and binding | [Library tables](docs/library.md) |
| Look up declaration syntax | [Rule-line syntax](rules/syntax.md) |
| Use the package, CLI or AI skill | [Developer guide](DEVELOPMENT.md) |
| Upgrade an older case file | [Migration guide](docs/migration.md) |
| Add or improve a definition | [Contributing](CONTRIBUTING.md) |
| Work with the language and file format | [Case files](spec/case-files.md), [declarations](spec/declarations.md), [types](spec/types.md) and [formula grammar](spec/grammar.ebnf) |

[MIT licensed](LICENSE), including the rule icons.
