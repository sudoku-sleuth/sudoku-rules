---
format: open-rules
title: Signal Received
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4jmez2wdd4
case: https://sudoku-sleuth.com/cases/signal-received
library: https://rules.sudoku-sleuth.com/
status: read
givens: 1......6..2......4..3.........4.8.......5.......2.6.........7..7......8..3......9
exported: a4e89879a891eb4b0cda8fae100e30fb
---

```rules
sudoku 9x9
renban-1: renban r9c1-r8c2-r7c3-r6c4-r5c5-r4c6-r3c7-r2c8-r1c9
renban-2: renban r8c1-r7c2-r6c3-r5c4-r4c5-r3c6-r2c7-r1c8
renban-3: renban r9c2-r8c3-r7c4-r6c5-r5c6-r4c7-r3c8-r2c9
renban-4: renban r9c4-r8c5-r7c6-r6c7-r5c8-r4c9
renban-5: renban r6c1-r5c2-r4c3-r3c4-r2c5-r1c6
renban-6: renban r3c3-r4c2-r5c1
renban-7: renban r1c7-r2c6
renban-8: renban r2c1-r3c1-r3c2
renban-9: renban r1c2-r1c3-r2c3
renban-10: renban r8c7-r9c8-r8c9-r7c8
```

- Normal sudoku rules apply.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
