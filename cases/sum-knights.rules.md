---
format: open-rules
title: Sum Knights
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hojqp1it1r
case: https://sudoku-sleuth.com/cases/sum-knights
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=2 r5c7=5 r6c4=3 r9c2=4 r9c6=1
---

```rules
sudoku 9x9
anti-knight
region-sum-1: region-sum r4c2-r4c3-r3c4-r3c5-r3c6-r2c7-r1c1-r2c1-r3c1 segments [["r4c2","r4c3"],["r3c4","r3c5","r3c6"],["r2c7"],["r1c1","r2c1","r3c1"]]
region-sum-2: region-sum r6c2-r6c3-r7c4-r7c5-r7c6-r8c7-r8c2-r7c1 segments [["r6c2","r6c3"],["r7c4","r7c5","r7c6"],["r8c7"],["r8c2","r7c1"]]
region-sum-3: region-sum r4c6-r4c7-r4c8-r3c9 segments [["r4c6"],["r4c7","r4c8"],["r3c9"]]
region-sum-4: region-sum r6c6-r6c7-r6c8 segments [["r6c6"],["r6c7","r6c8"]]
region-sum-5: region-sum r5c4-r5c3-r5c2 segments [["r5c4"],["r5c3","r5c2"]]
```

**Sudoku, Antiknight, Region Sum Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Antiknight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
