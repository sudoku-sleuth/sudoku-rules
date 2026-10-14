---
format: open-rules
title: Tipi
setter: Jobo
source: https://tinyurl.com/chvxu4cc
case: https://sudoku-sleuth.com/cases/tipi
library: https://rules.sudoku-sleuth.com/
status: read
exported: 82cc30b8b79b62b06d9a7554564f584d
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r3c5 white
kropki-2: kropki r3c5-r3c6 white
kropki-3: kropki r6c3-r7c3 white
kropki-4: kropki r6c7-r7c7 white
arrow-1: arrow r7c2-r7c1-r6c2-r5c3-r4c4-r3c5-r2c6 bulb ["r7c3","r7c4"]
arrow-2: arrow r7c8-r7c9-r6c8-r5c7-r4c6-r3c5-r2c4 bulb ["r7c6","r7c7"]
arrow-3: arrow r3c5-r2c5 bulb ["r4c5"]
whispers-1: whispers r2c6-r3c5-r4c4-r5c3-r6c2-r7c1-r7c2 gap 5
whispers-2: whispers r2c4-r3c5-r4c6-r5c7-r6c8-r7c9-r7c8 gap 5
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

Normal sudoku rules apply.

Digits along an arrow must sum to the number in that arrow's circle or pill (read from left to right). Arrows go straight where they cross.

Adjacent digits along a green line must differ by at least 5.

Digits separated by a white dot must be consecutive. Not all dots are given.

Cells in the same position within two 3x3 boxes cannot contain the same digit (disjoint sets).
