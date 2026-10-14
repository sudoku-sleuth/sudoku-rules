---
format: open-rules
title: Whirling Knives
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2ohj1ljgsk
case: https://sudoku-sleuth.com/cases/whirling-knives
library: https://rules.sudoku-sleuth.com/
status: read
exported: 341b32f2186ffbcdb78d44bfeb4a3beb
---

```rules
sudoku 9x9
cage-1: cage r2c2-r2c3 total 10 connected true
cage-2: cage r2c8-r3c8 total 8 connected true
cage-3: cage r8c7-r8c8 total 9 connected true
cage-4: cage r7c2-r8c2 total 5 connected true
cage-5: cage r3c2-r4c2 total 7 connected true
cage-6: cage r8c3-r8c4 total 9 connected true
cage-7: cage r6c8-r7c8 total 6 connected true
cage-8: cage r2c6-r2c7 total 5 connected true
cage-9: cage r7c4-r7c5 total 10 connected true
cage-10: cage r5c7-r6c7 total 13 connected true
cage-11: cage r3c5-r3c6 total 15 connected true
cage-12: cage r4c3-r5c3 total 16 connected true
cage-13: cage r1c6-r1c7 total 7 connected true
little-killer-1: little-killer r4c1-r3c2-r2c3-r1c4 sum 5
little-killer-2: little-killer r1c6-r2c7-r3c8-r4c9 sum 7
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 5
little-killer-4: little-killer r9c4-r8c3-r7c2-r6c1 sum 8
little-killer-5: little-killer r2c1-r1c2 sum 16
little-killer-6: little-killer r1c8-r2c9 sum 16
little-killer-7: little-killer r8c9-r9c8 sum 17
little-killer-8: little-killer r9c2-r8c1 sum 15
```

- Normal Sudoku rules apply.
- Digits in cages cannot repeat and must sum to the value given in the top left corner.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
