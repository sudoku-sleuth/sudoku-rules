---
format: open-rules
title: Liberation
setter: BremSter, FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdkbzfq200
case: https://sudoku-sleuth.com/cases/liberation
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 6 connected true
cage-2: cage r8c9-r9c8-r9c9 total 9 connected true
cage-3: cage r2c5-r3c5-r4c5 total 9 connected true
cage-4: cage r8c3-r8c4 connected true
cage-5: cage r1c8-r1c9 connected true
cage-6: cage r8c1-r9c1 total 12 connected true
cage-7: cage r5c8-r6c8 connected true
cage-8: cage r5c5-r5c6-r6c5-r6c6 connected true
cage-9: cage r5c9-r6c9 connected true
cage-10: cage r9c5-r9c6 connected true
cage-11: cage r5c2-r5c3-r5c4 connected true
cage-12: cage r3c8-r4c8 connected true
n-mate-1: n-mate cell "r1c2" ray ["r2c2","r3c2","r4c2","r5c2","r6c2","r7c2","r8c2","r9c2"] cage ["r1c1","r1c2","r2c1"]
n-mate-2: n-mate cell "r2c1" ray ["r2c2","r2c3","r2c4","r2c5","r2c6","r2c7","r2c8","r2c9"] cage ["r1c1","r1c2","r2c1"]
n-mate-3: n-mate cell "r1c1" ray ["r2c2","r3c3","r4c4","r5c5","r6c6","r7c7","r8c8","r9c9"] cage ["r1c1","r1c2","r2c1"]
n-mate-4: n-mate cell "r5c5" ray ["r5c6","r5c7","r5c8","r5c9"] cage ["r5c5","r5c6","r6c5","r6c6"]
n-mate-5: n-mate cell "r5c5" ray ["r6c5","r7c5","r8c5","r9c5"] cage ["r5c5","r5c6","r6c5","r6c6"]
n-mate-6: n-mate cell "r6c9" ray ["r7c8","r8c7","r9c6"] cage ["r5c9","r6c9"]
n-mate-7: n-mate cell "r9c6" ray ["r8c7","r7c8","r6c9"] cage ["r9c5","r9c6"]
n-mate-8: n-mate cell "r9c9" ray ["r8c8","r7c7","r6c6","r5c5","r4c4","r3c3","r2c2","r1c1"] cage ["r8c9","r9c8","r9c9"]
n-mate-9: n-mate cell "r3c5" ray ["r3c6","r3c7","r3c8","r3c9"] cage ["r2c5","r3c5","r4c5"]
n-mate-10: n-mate cell "r3c8" ray ["r4c7","r5c6","r6c5","r7c4","r8c3","r9c2"] cage ["r3c8","r4c8"]
n-mate-11: n-mate cell "r5c3" ray ["r6c3","r7c3","r8c3","r9c3"] cage ["r5c2","r5c3","r5c4"]
n-mate-12: n-mate cell "r8c4" ray ["r7c4","r6c4","r5c4","r4c4","r3c4","r2c4","r1c4"] cage ["r8c3","r8c4"]
n-mate-13: n-mate cell "r1c8" ray ["r2c7","r3c6","r4c5","r5c4","r6c3","r7c2","r8c1"] cage ["r1c8","r1c9"]
n-mate-14: n-mate cell "r9c1" ray ["r8c2","r7c3","r6c4","r5c5","r4c6","r3c7","r2c8","r1c9"] cage ["r8c1","r9c1"]
n-mate-15: n-mate cell "r6c8" ray ["r5c7","r4c6","r3c5","r2c4","r1c3"] cage ["r5c8","r6c8"]
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Cages: Digits in cages may not repeat and must sum to the number in the top left corner of the cage, if given.
• Caged N-Mates: A digit N in a cell with an arrow, when added to the digit N cells away in the direction of the arrow, sums to the same total as the digits in the cage that contains the arrow.
