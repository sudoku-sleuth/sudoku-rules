---
format: open-rules
title: No more lucky numbers
setter: sujoyku
source: https://tinyurl.com/yurnuy6r
case: https://sudoku-sleuth.com/cases/no-more-lucky-numbers
library: https://rules.sudoku-sleuth.com/
status: read
givens: ....2..5......1..6...9......8.........7....4.3.......5......3..8...6..9..7...4..2
---

```rules
sudoku 9x9
negative relations [{"op":"sum","value":7},{"op":"sum","value":13}] except []
```

Normal Sudoku rules apply. Orthogonally adjacent digits never sum to either 7 or 13, e.g. a 4 is never adjacent to either 3 or 9.
