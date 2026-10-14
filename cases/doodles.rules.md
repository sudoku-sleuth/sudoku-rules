---
format: open-rules
title: Doodles
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9evj945nl5
case: https://sudoku-sleuth.com/cases/doodles
library: https://rules.sudoku-sleuth.com/
status: read
exported: c218c228f95e21c0e2ab8a70a583d7cc
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r5c2 white
kropki-2: kropki r6c3-r6c4 white
kropki-3: kropki r3c4-r3c5 white
kropki-4: kropki r7c4-r7c5 white
kropki-5: kropki r5c8-r5c9 white
kropki-6: kropki r2c1-r3c1 white
kropki-7: kropki r3c7-r3c8 white
kropki-8: kropki r1c7-r1c8 white
kropki-9: kropki r8c5-r8c6 white
kropki-10: kropki r6c1-r7c1 white
kropki-11: kropki r5c5-r5c6 white
kropki-12: kropki r1c1-r1c2 white
region-sum-1: region-sum r6c3-r5c2-r4c2-r3c3-r3c4-r3c5-r4c6-r5c7-r6c7-r7c6-r7c5-r7c4-r7c2-r7c3-r5c5-r6c4 segments [["r6c3","r5c2","r4c2"],["r3c3"],["r3c4","r3c5"],["r4c6"],["r5c7","r6c7"],["r7c6","r7c5","r7c4"],["r7c2","r7c3"],["r5c5","r6c4"]]
region-sum-2: region-sum r5c9-r5c8-r4c7-r3c6-r2c6-r1c7-r1c8-r2c9-r3c8-r3c7 segments [["r5c9","r5c8","r4c7"],["r3c6","r2c6"],["r1c7","r1c8","r2c9","r3c8","r3c7"]]
region-sum-3: region-sum r8c6-r9c7-r9c8-r8c9 segments [["r8c6"],["r9c7","r9c8","r8c9"]]
region-sum-4: region-sum r5c1-r4c1-r3c1-r2c1-r1c2-r1c3-r2c4-r2c5-r1c6 segments [["r5c1","r4c1"],["r3c1","r2c1","r1c2","r1c3"],["r2c4","r2c5","r1c6"]]
region-sum-5: region-sum r7c1-r8c1-r9c2-r9c3-r9c4-r8c5 segments [["r7c1","r8c1","r9c2","r9c3"],["r9c4","r8c5"]]
```

**Standard Sudoku, Sum Lines, Consecutive Pairs

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. If a line has multiple sections within a box, these sections are summed separately.
- Consecutive Pairs: Digits separated by a white dot are consecutive.
