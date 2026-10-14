---
format: open-rules
title: Going Round And Round
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3nxr64noxh
case: https://sudoku-sleuth.com/cases/going-round-and-round
library: https://rules.sudoku-sleuth.com/
status: read
exported: cf598de6463b616e8d40df28cac0cf6f
---

```rules
sudoku 9x9
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 22
little-killer-2: little-killer r4c1-r3c2-r2c3-r1c4 sum 31
little-killer-3: little-killer r7c9-r8c8-r9c7 sum 23
little-killer-4: little-killer r6c9-r7c8-r8c7-r9c6 sum 30
little-killer-5: little-killer r9c3-r8c2-r7c1 sum 8
little-killer-6: little-killer r9c4-r8c3-r7c2-r6c1 sum 9
little-killer-7: little-killer r1c7-r2c8-r3c9 sum 8
little-killer-8: little-killer r1c6-r2c7-r3c8-r4c9 sum 10
little-killer-9: little-killer r8c1-r9c2 sum 15
little-killer-10: little-killer r1c2-r2c1 sum 5
little-killer-11: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 17
little-killer-12: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 28
little-killer-13: little-killer r9c5-r8c4-r7c3-r6c2-r5c1 sum 28
little-killer-14: little-killer r9c6-r8c5-r7c4-r6c3-r5c2-r4c1 sum 34
little-killer-15: little-killer r9c7-r8c6-r7c5-r6c4-r5c3-r4c2-r3c1 sum 41
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
