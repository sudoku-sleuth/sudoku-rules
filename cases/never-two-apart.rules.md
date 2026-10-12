---
format: open-rules
title: Never two apart
setter: sujoyku
source: ""
case: https://sudoku-sleuth.com/cases/never-two-apart
library: https://rules.sudoku-sleuth.com/
status: read
givens: ..8...1...4.....7.3.......2...1...................2...6.......5.9.....3...5...4..
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":2}] except []
```

Normal sudoku rules apply.  Orthogonally adjacent digits never differ by exactly 2, e.g. a 3 is never orthogonally adjacent to either 1 or 5.
