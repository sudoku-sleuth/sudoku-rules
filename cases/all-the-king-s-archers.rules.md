---
format: open-rules
title: All The King's Archers
setter: Tingo
source: https://tinyurl.com/allthekingsarchers
case: https://sudoku-sleuth.com/cases/all-the-king-s-archers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r5c6-r5c7 colour "white"
kropki-2: kropki r5c5-r6c5 colour "white"
kropki-3: kropki r1c1-r1c2 colour "white"
kropki-4: kropki r7c1-r7c2 colour "black"
kropki-5: kropki r5c3-r5c4 colour "black"
kropki-6: kropki r7c8-r8c8 colour "black"
arrow-1: arrow r2c2-r1c1 bulb ["r3c3"]
arrow-2: arrow r8c2-r9c1 bulb ["r7c3"]
arrow-3: arrow r8c8-r9c9 bulb ["r7c7"]
arrow-4: arrow r2c8-r1c9 bulb ["r3c7"]
arrow-5: arrow r6c5-r7c5 bulb ["r5c5"]
arrow-6: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-7: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-8: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-9: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-10: arrow r4c6-r3c7 bulb ["r5c5"]
arrow-11: arrow r6c4-r7c3 bulb ["r5c5"]
arrow-12: arrow r6c6-r7c7 bulb ["r5c5"]
arrow-13: arrow r4c2-r5c3 bulb ["r4c1"]
arrow-14: arrow r6c2-r5c3 bulb ["r6c1"]
arrow-15: arrow r4c8-r5c7 bulb ["r4c9"]
arrow-16: arrow r6c8-r5c7 bulb ["r6c9"]
pair-1: pair r4c1-r5c1 relation {"op":"sum","value":10}
pair-2: pair r4c3-r4c4 relation {"op":"sum","value":5}
```

Normal Sudoku Rules Apply
Cells separated by a kings move (in chess) cannot contain the same value.
Cells connected by Xs sum to 10. Cells connected by Vs sum to 5. Not all Xs or Vs are given.
Cells separated by white dots have consecutive values. Cells separated by black dots have a value ratio of 2:1. Not all dots are given.
Cells along an arrow must sum to the total in the arrow's circle.
