---
format: open-rules
title: Fibonacci
setter: Jobo
source: https://sudokupad.app/fy135l7its
case: https://sudoku-sleuth.com/cases/fibonacci
library: https://rules.sudoku-sleuth.com/
status: read
givens: ..1345....2....5..3......8.1.......98.......1.5...1..4..321..4...................
exported: 770841ae8326afb305fe2137e7779216
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r5c6-r5c7 white
kropki-2: kropki r8c5-r9c5 black
```

Normal sudoku rules apply.

Digits cannot repeat on either diagonal

Digits separated by a white dot must be consecutive.
Digits separated by a black dot must be in a 1:2 ratio.
Not all dots are given.
