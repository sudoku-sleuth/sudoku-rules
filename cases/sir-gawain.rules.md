---
format: open-rules
title: Sir Gawain
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/sir-gawain
library: https://rules.sudoku-sleuth.com/
status: read
givens: 5...6...............4.5.1...........1.8.9.6.3...........3.7.2...............8...7
exported: c28ee7d855bb148d3f1e5ac4600e318e
---

```rules
sudoku 9x9
anti-knight
```

Normal sudoku rules apply: every row column and 3x3 box must contain a complete set of the digits 1 through 9.

Normal anti-knight rules apply: cells separated by a chess knight's move cannot contain the same digit.
