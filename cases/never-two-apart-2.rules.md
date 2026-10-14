---
format: open-rules
title: Never two apart
setter: sujoyku
source: https://tinyurl.com/bd6f89wu
case: https://sudoku-sleuth.com/cases/never-two-apart-2
library: https://rules.sudoku-sleuth.com/
status: read
givens: ..8...1...4.....7.3.......2...1...................2...6.......5.9.....3...5...4..
exported: 5b872c5af9ab5b04269136767c1adb88
---

```rules
sudoku 9x9
negative relations [{"op":"difference","value":2}] except []
```

Normal sudoku rules apply.  Orthogonally adjacent digits never differ by exactly 2, e.g. a 3 is never orthogonally adjacent to either 1 or 5.
