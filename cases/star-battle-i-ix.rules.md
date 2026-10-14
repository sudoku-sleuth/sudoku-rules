---
format: open-rules
title: Star Battle I - IX
setter: Meggen033
source: https://f-puzzles.com/?id=2kl4skct
case: https://sudoku-sleuth.com/cases/star-battle-i-ix
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8034b58f40d47221c61a4fda91cf4e71
---

```rules
sudoku 9x9
cage-1: cage r7c2-r8c2 total 13 connected true
cage-2: cage r1c6-r1c7 total 13 connected true
kropki-1: kropki r2c3-r3c3 white
kropki-2: kropki r6c6-r7c6 white
kropki-3: kropki r1c9-r2c9 black
arrow-1: arrow r3c3-r4c3 bulb ["r2c4"]
arrow-2: arrow r7c3-r6c3 bulb ["r8c4"]
pair-1: pair r2c8-r3c8 sum 10
pair-2: pair r5c1-r5c2 sum 5
little-killer r9c6-r8c7-r7c8-r6c9 sum 21
sandwich-1: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 16
sandwich-2: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 35
sandwich-3: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 8
```

Normal Sudoku rules apply.

The 1's and 9's are in a Star Battle.  1's and 9's cannot be a king's move away from other 1's and 9's.

Digits outside the grid (with no arrow) give the sum of the digits placed between 1 and 9 in that row or column.

Digits outside the grid (with an arrow) give the sum of the digits along the diagonal indicated.

The digits along each arrow must sum to the digit in the circled cell. Digits may repeat along an arrow if permitted by other rules.

Digits in a cage sum to the digit in that cage's top left corner.  Digits cannot repeat within a cage. 

Digits separated by an X sum to 10.
Digits separated by a V sum to 5.
Digits Separated by a white dot must be consecutive with one another.
Digits separated by a black dot must be in a ratio of 2:1 with one another.
