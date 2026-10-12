---
format: open-rules
title: Of Mice and Ten
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/of-mice-and-ten
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=1 r3c5=1 r9c1=1
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3 total 10 connected true
cage-2: cage r9c1-r9c2-r9c3 total 10 connected true
cage-3: cage r1c9-r2c9-r3c9 total 10 connected true
cage-4: cage r7c9-r8c9-r9c9 total 12 connected true
kropki r5c6-r6c6 colour "black"
whispers-1: whispers r3c5-r2c6-r2c7-r3c8-r4c8-r5c8-r6c8-r7c8-r8c7-r8c6-r7c5-r6c5-r5c5-r4c5 gap 5
whispers-2: whispers r3c2-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3 gap 5
little-killer-1: little-killer r9c2-r8c1 sum 10
little-killer-2: little-killer r1c2-r2c1 sum 10
little-killer-3: little-killer r1c8-r2c9 sum 10
little-killer-4: little-killer r9c8-r8c9 sum 6
sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 0
```

Normal sudoku rules apply.
Digits along a green 'German Whisper' line must have a difference of at least 5.
Digits in a killer cage must sum to the total in the top left corner.
Digits seperated by a black dot must be in the ratio 1:2 (not all black dots are given.
Digits around the outside with an arrow show the sum of the digits along that arrow.
Digits around the outside without an arrow show the sum of all the digits between 1 and 9 in that row/column.
