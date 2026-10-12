---
format: open-rules
title: Merry XVMas
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/55g0taabsx
case: https://sudoku-sleuth.com/cases/merry-xvmas
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 total 25 connected true
cage-2: cage r3c1-r3c2-r3c3 total 12 connected true
cage-3: cage r2c7-r3c7-r3c8-r3c9 total 25 connected true
cage-4: cage r8c7-r8c8-r9c8-r9c9 total 25 connected true
cage-5: cage r7c5-r8c5-r8c6 total 12 connected true
cage-6: cage r4c4-r5c4-r5c5 total 12 connected true
pair-1: pair r1c5-r2c5 relation {"op":"sum","value":10}
pair-2: pair r2c4-r3c4 relation {"op":"sum","value":10}
pair-3: pair r2c6-r3c6 relation {"op":"sum","value":10}
pair-4: pair r5c3-r6c3 relation {"op":"sum","value":10}
pair-5: pair r5c7-r6c7 relation {"op":"sum","value":10}
pair-6: pair r7c2-r8c2 relation {"op":"sum","value":10}
pair-7: pair r7c8-r8c8 relation {"op":"sum","value":10}
pair-8: pair r3c4-r4c4 relation {"op":"sum","value":5}
pair-9: pair r3c6-r4c6 relation {"op":"sum","value":5}
pair-10: pair r4c3-r5c3 relation {"op":"sum","value":5}
pair-11: pair r4c7-r5c7 relation {"op":"sum","value":5}
pair-12: pair r6c8-r7c8 relation {"op":"sum","value":5}
pair-13: pair r6c2-r7c2 relation {"op":"sum","value":5}
pair-14: pair r8c1-r9c1 relation {"op":"sum","value":5}
pair-15: pair r8c9-r9c9 relation {"op":"sum","value":5}
little-killer-1: little-killer r1c6-r2c7-r3c8-r4c9 sum 25
little-killer-2: little-killer r1c8-r2c9 sum 12
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 25
little-killer-4: little-killer r7c9-r8c8-r9c7 sum 12
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• XV Pairs: Digits separated by an X sum to 10. Digits separated by a V sum to 5. Not all Xs and Vs are necessarily given.
• Little Killer: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
• Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
