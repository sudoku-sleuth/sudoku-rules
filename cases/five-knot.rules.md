---
format: open-rules
title: Five Knot
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/jdmwskhqhv
case: https://sudoku-sleuth.com/cases/five-knot
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r2c4=2 r2c8=1 r3c2=5 r4c3=9 r5c5=5 r6c7=1 r7c8=5 r8c2=9 r8c6=8 r9c9=8
---

```rules
sudoku 9x9
renban-1: renban r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5
renban-2: renban r9c5-r9c6-r9c7-r8c8-r7c9-r6c9-r5c9
renban-3: renban r2c4-r2c5-r2c6-r3c7-r4c8-r5c8-r6c8
renban-4: renban r4c2-r5c2-r6c2-r7c3-r8c4-r8c5-r8c6
renban-5: renban r3c2-r3c3-r3c4-r3c5
renban-6: renban r7c8-r7c7-r7c6-r7c5
renban-7: renban r7c4-r6c4-r5c4
renban-8: renban r3c6-r4c6-r5c6
renban-9: renban r5c7-r4c7
renban-10: renban r5c3-r6c3
renban-11: renban r8c1-r9c1-r9c2
renban-12: renban r1c8-r1c9-r2c9
```

**Sudoku, Renban**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
