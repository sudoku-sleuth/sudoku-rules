---
format: open-rules
title: Layers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3l1iydvkjo
case: https://sudoku-sleuth.com/cases/layers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=9 r2c8=8 r8c1=2
exported: ce41b0332516ee10b397562caff8db8a
---

```rules
sudoku 9x9
region-sum-1: region-sum r7c2-r6c3-r5c4-r5c5-r5c6-r5c7-r6c8 segments [["r7c2"],["r6c3"],["r5c4","r5c5","r5c6"],["r5c7","r6c8"]]
region-sum-2: region-sum r6c6-r6c5-r6c4-r7c3-r8c2 segments [["r6c6","r6c5","r6c4"],["r7c3","r8c2"]]
region-sum-3: region-sum r4c6-r4c5-r4c4-r5c3-r6c2-r6c1 segments [["r4c6","r4c5","r4c4"],["r5c3","r6c2","r6c1"]]
region-sum-4: region-sum r5c1-r5c2-r4c3-r3c4 segments [["r5c1","r5c2","r4c3"],["r3c4"]]
region-sum-5: region-sum r3c5-r3c6-r4c7-r4c8-r4c9 segments [["r3c5","r3c6"],["r4c7","r4c8","r4c9"]]
region-sum-6: region-sum r2c6-r3c7-r3c8-r3c9 segments [["r2c6"],["r3c7","r3c8","r3c9"]]
region-sum-7: region-sum r6c7-r7c8-r7c9 segments [["r6c7"],["r7c8","r7c9"]]
region-sum-8: region-sum r9c1-r9c2-r8c3-r7c4 segments [["r9c1","r9c2","r8c3"],["r7c4"]]
region-sum-9: region-sum r7c5-r7c6-r7c7-r8c8 segments [["r7c5","r7c6"],["r7c7","r8c8"]]
region-sum-10: region-sum r9c3-r8c4-r8c5 segments [["r9c3"],["r8c4","r8c5"]]
region-sum-11: region-sum r8c6-r9c7 segments [["r8c6"],["r9c7"]]
region-sum-12: region-sum r3c2-r3c3-r2c4-r2c5-r1c6 segments [["r3c2","r3c3"],["r2c4","r2c5","r1c6"]]
region-sum-13: region-sum r2c2-r2c3-r1c4-r1c5 segments [["r2c2","r2c3"],["r1c4","r1c5"]]
```

**Sudoku, Region Sum Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
