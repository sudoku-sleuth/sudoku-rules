# Rule icons

The rule SVGs in `rules/` are original Sudoku Sleuth artwork, distributed under
this repository’s [MIT licence](../../LICENSE). Shape navigation icons remain
at the top level.

`rules.json` maps page slugs to SVG paths relative to this directory. Rule IDs
use their page slugs. Aliases render their canonical rule’s symbol. The SVGs
are inlined beside names, hidden from screen readers and coloured with
`currentColor` and the site’s theme tokens.

The set covers rule pages, including shorthands, and setup/reference pages
(`README`, `fog`, `predicates`, `syntax`). Every SVG maps to an existing page.
`decoration` has no rule symbol; its name remains visible. The `killer` and
`whisper` assets match their canonical `cage` and `whispers` symbols.
