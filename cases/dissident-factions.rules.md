---
format: open-rules
title: Dissident Factions
setter: Meggen033
source: https://sudokupad.app/28u1exyaow
case: https://sudoku-sleuth.com/cases/dissident-factions
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6978702a3d7ace1f4aa3aa1a453f3239
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c9 total 21 connected true
cage-2: cage r8c1-r9c1-r9c2 total 22 connected true
cage-3: cage r8c9-r9c8-r9c9 total 18 connected true
cage-4: cage r1c1-r1c2-r2c1 total 13 connected true
cage-5: cage r8c5-r8c6 total 14 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki r5c1-r5c2 black
arrow-1: arrow r6c8-r6c9 bulb ["r7c7"]
arrow-2: arrow r4c8-r4c9 bulb ["r3c7"]
arrow-3: arrow r4c2-r4c1 bulb ["r3c3"]
arrow-4: arrow r6c2-r6c1 bulb ["r7c3"]
arrow-5: arrow r6c5-r7c5 bulb ["r5c6"]
arrow-6: arrow r4c7 bulb ["r5c6"]
arrow-7: arrow r4c5-r3c5 bulb ["r5c4"]
arrow-8: arrow r6c3 bulb ["r5c4"]
pair-1: pair r5c7-r5c8 sum 10
pair-2: pair r2c2-r3c2 sum 10
pair-3: pair r2c8-r3c8 sum 5
pair-4: pair r7c2-r8c2 sum 5
```

Normal Sudoku rules apply.

Digits along diagonals must not repeat.

The digits along each arrow must sum to the digit in the circled cell.

The digits in a cage must sum to the number printed in its corner. 

Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5.

A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.
