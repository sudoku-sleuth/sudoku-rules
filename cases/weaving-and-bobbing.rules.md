---
format: open-rules
title: Weaving and Bobbing
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o672wvlyrq
case: https://sudoku-sleuth.com/cases/weaving-and-bobbing
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=2 r2c4=9 r5c1=9 r5c7=4 r6c5=2 r8c8=5 r9c1=3
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c3-r1c3-r1c4-r2c4 segments [["r2c3","r1c3"],["r1c4","r2c4"]]
region-sum-2: region-sum r1c6-r1c7-r2c7-r3c7-r4c7-r6c6-r5c6-r4c6-r7c4-r7c5-r7c6 segments [["r1c6"],["r1c7","r2c7","r3c7"],["r4c7"],["r6c6","r5c6","r4c6"],["r7c4","r7c5","r7c6"]]
region-sum-3: region-sum r9c5-r9c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c9-r5c9 segments [["r9c5","r9c6"],["r9c7","r9c8","r9c9","r8c9","r7c9"],["r6c9","r5c9"]]
region-sum-4: region-sum r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1 segments [["r2c1","r3c1"],["r4c1","r5c1","r6c1"],["r7c1","r8c1"]]
region-sum-5: region-sum r9c2-r9c3-r8c4-r8c5 segments [["r9c2","r9c3"],["r8c4","r8c5"]]
region-sum-6: region-sum r2c2-r3c2-r4c3-r5c3 segments [["r2c2","r3c2"],["r4c3","r5c3"]]
```

**Sudoku, Region Sum Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
