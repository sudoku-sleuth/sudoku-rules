---
format: open-rules
title: Sum Wheel
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kh5cdte0c8
case: https://sudoku-sleuth.com/cases/sum-wheel
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=3 r3c8=8 r4c6=1 r5c3=4 r7c5=2 r8c7=5
exported: 4cf5f7847aca170265b0653aa3e71126
---

```rules
sudoku 9x9
region-sum-1: region-sum r9c3-r9c4-r8c5-r7c6-r7c7 segments [["r9c3"],["r9c4","r8c5","r7c6"],["r7c7"]]
region-sum-2: region-sum r7c9-r6c9-r5c8-r4c7-r3c7 segments [["r7c9"],["r6c9","r5c8","r4c7"],["r3c7"]]
region-sum-3: region-sum r1c7-r1c6-r2c5-r3c4-r3c3 segments [["r1c7"],["r1c6","r2c5","r3c4"],["r3c3"]]
region-sum-4: region-sum r3c1-r4c1-r5c2-r6c3-r7c3 segments [["r3c1"],["r4c1","r5c2","r6c3"],["r7c3"]]
region-sum-5: region-sum r2c1-r1c1-r1c2-r1c3-r1c4-r2c4 segments [["r2c1","r1c1","r1c2","r1c3"],["r1c4","r2c4"]]
region-sum-6: region-sum r1c8-r1c9-r2c9-r3c9-r4c9-r4c8 segments [["r1c8","r1c9","r2c9","r3c9"],["r4c9","r4c8"]]
region-sum-7: region-sum r8c9-r9c9-r9c8-r9c7-r9c6-r8c6 segments [["r8c9","r9c9","r9c8","r9c7"],["r9c6","r8c6"]]
region-sum-8: region-sum r9c2-r9c1-r8c1-r7c1-r6c1-r6c2 segments [["r9c2","r9c1","r8c1","r7c1"],["r6c1","r6c2"]]
region-sum-9: region-sum r3c6-r2c7-r2c8 segments [["r3c6"],["r2c7","r2c8"]]
region-sum-10: region-sum r7c4-r8c3-r8c2 segments [["r7c4"],["r8c3","r8c2"]]
```

**Sudoku, Region Sum Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
