---
format: open-rules
title: Love, light and truth 4
setter: Chip Sounder
source: https://sudokupad.app/bhkz750g2x
case: https://sudoku-sleuth.com/cases/love-light-and-truth-4
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1a22d67bb79f99333459bb8fb9008dab
---

```rules
sudoku 9x9
cage-1: cage r7c1-r7c2-r8c1-r8c2 total 20 connected true
cage-2: cage r4c7-r4c8-r5c7 total 20 connected true
cage-3: cage r9c7-r9c8 total 7 connected true
cage-4: cage r5c8-r6c7-r6c8-r7c7 connected true
cage-5: cage r1c4-r2c4-r3c4-r4c1-r4c2-r4c3-r4c4 total 31 connected true
cage-6: cage r5c1-r5c2-r5c3 total 19 connected true
cage-7: cage r2c1-r3c1 total 10 connected true
kropki-1: kropki r8c5-r8c6 black
kropki-2: kropki r8c6-r9c6 black
kropki-3: kropki r7c3-r8c3 black
kropki-4: kropki r4c3-r4c4 black
kropki-5: kropki r5c8-r5c9 black
kropki-6: kropki r2c4-r3c4 black
kropki-7: kropki r1c6-r1c7 black
kropki-8: kropki r1c8-r1c9 black
kropki-9: kropki r9c5-r9c6 black
kropki-10: kropki r1c3-r2c3 white
arrow-1: arrow r8c5-r9c6 bulb ["r7c4"]
arrow-2: arrow r5c6-r4c6-r3c6 bulb ["r6c6"]
arrow-3: arrow r3c8-r3c9-r2c9 bulb ["r3c7"]
arrow-4: arrow r2c7-r1c7 bulb ["r2c6"]
arrow-5: arrow r6c9-r5c9-r4c9 bulb ["r7c9"]
pair r6c8-r7c8 sum 10
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
-Digits on an arrowed line sum to the total given in the connected circle, digits may repeat if other rules allow.
-Cells separated by a black dot has one digit double the other (1:2 ratio).
-Digits in a dotted cage without repeat sum to the total given in the top left corner of the cage (if given).
-Cells separated by a white dot are consecutive.
-Cells separated by an X sum to 10.
No negative constraints.
