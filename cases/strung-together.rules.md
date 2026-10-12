---
format: open-rules
title: Strung Together
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/33kcqj4mc8
case: https://sudoku-sleuth.com/cases/strung-together
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=5 r2c2=2 r2c7=7 r4c3=5 r4c8=2 r5c5=8 r6c4=1 r8c3=9 r8c7=1 r8c9=3
---

```rules
sudoku 9x9
renban-1: renban r3c1-r2c1-r1c1-r1c2-r1c3-r2c3-r3c3
renban-2: renban r4c1-r5c1-r6c1-r6c2-r6c3-r5c3-r4c3
renban-3: renban r1c4-r1c5-r1c6-r2c6-r3c6-r3c5-r3c4
renban-4: renban r6c4-r5c4-r4c4-r4c5-r4c6-r5c6-r6c6
renban-5: renban r1c7-r1c8-r1c9-r2c9
renban-6: renban r2c7-r3c7-r3c8-r3c9
renban-7: renban r6c7-r5c7-r4c7-r4c8
renban-8: renban r6c8-r6c9-r5c9-r4c9
renban-9: renban r7c7-r7c8-r8c8-r9c8-r9c9
renban-10: renban r8c4-r8c5-r8c6
renban-11: renban r9c4-r9c5-r9c6
renban-12: renban r7c4-r7c5-r7c6
renban-13: renban r7c2-r8c2-r9c2
```

**Sudoku, Renban**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
