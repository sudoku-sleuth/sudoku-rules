---
format: open-rules
title: Broken Glass
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/sefw3vvwhu
case: https://sudoku-sleuth.com/cases/broken-glass
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r1c3-r1c4-r2c4-r3c4 segments [["r1c3"],["r1c4","r2c4","r3c4"]]
region-sum-2: region-sum r9c7-r9c6-r8c6-r7c6 segments [["r9c7"],["r9c6","r8c6","r7c6"]]
region-sum-3: region-sum r4c4-r4c3-r4c2-r3c2 segments [["r4c4"],["r4c3","r4c2"],["r3c2"]]
region-sum-4: region-sum r6c6-r6c7-r6c8-r7c8 segments [["r6c6"],["r6c7","r6c8"],["r7c8"]]
region-sum-5: region-sum r8c2-r7c3-r6c4-r5c3 segments [["r8c2","r7c3"],["r6c4"],["r5c3"]]
region-sum-6: region-sum r5c7-r4c6-r3c7-r2c8 segments [["r5c7"],["r4c6"],["r3c7","r2c8"]]
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 9
little-killer-2: little-killer r9c7-r8c8-r7c9 sum 10
little-killer-3: little-killer r1c4-r2c3-r3c2-r4c1 sum 10
little-killer-4: little-killer r6c9-r7c8-r8c7-r9c6 sum 13
little-killer-5: little-killer r2c9-r1c8 sum 11
little-killer-6: little-killer r9c3-r8c2-r7c1 sum 13
little-killer-7: little-killer r6c1-r7c2-r8c3-r9c4 sum 26
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value.
