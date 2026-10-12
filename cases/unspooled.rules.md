---
format: open-rules
title: Unspooled
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z456gkf3iv
case: https://sudoku-sleuth.com/cases/unspooled
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r2c9=4 r4c5=2 r6c8=6 r7c4=3 r9c3=7 r9c7=8
---

```rules
sudoku 9x9
region-sum-1: region-sum r5c2-r4c3-r3c4-r2c5 segments [["r5c2","r4c3"],["r3c4","r2c5"]]
region-sum-2: region-sum r3c5-r4c6-r5c7 segments [["r3c5"],["r4c6"],["r5c7"]]
region-sum-3: region-sum r5c8-r6c7-r7c6-r8c5 segments [["r5c8","r6c7"],["r7c6","r8c5"]]
region-sum-4: region-sum r7c5-r6c4-r5c3 segments [["r7c5"],["r6c4"],["r5c3"]]
region-sum-5: region-sum r4c1-r4c2-r3c2-r3c3-r2c3-r2c4-r1c4 segments [["r4c1","r4c2"],["r3c2","r3c3","r2c3"],["r2c4","r1c4"]]
region-sum-6: region-sum r1c6-r2c6-r2c7-r3c7-r3c8-r4c8-r4c9 segments [["r1c6","r2c6"],["r2c7","r3c7","r3c8"],["r4c8","r4c9"]]
region-sum-7: region-sum r9c6-r8c6-r8c7-r7c7-r7c8-r6c8-r6c9 segments [["r9c6","r8c6"],["r8c7","r7c7","r7c8"],["r6c8","r6c9"]]
region-sum-8: region-sum r6c1-r6c2-r7c2-r7c3-r8c3-r8c4-r9c4 segments [["r6c1","r6c2"],["r7c2","r7c3","r8c3"],["r8c4","r9c4"]]
renban-1: renban r5c2-r5c3
renban-2: renban r2c5-r3c5
renban-3: renban r5c7-r5c8
renban-4: renban r7c5-r8c5
renban-5: renban r3c2-r3c3-r2c3
renban-6: renban r8c7-r7c7-r7c8
renban-7: renban r2c7-r3c7-r3c8
renban-8: renban r8c3-r8c4
renban-9: renban r6c2-r7c2
```

**Sudoku, Region Sum Lines, Renban**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 
- Renban lines: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
