---
format: open-rules
title: Friendly Fire II
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/friendly-fire-ii
library: https://rules.sudoku-sleuth.com/
status: read
exported: 64581811fb608d6e2fce23941538b549
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1 total 14 connected true
cage-2: cage r5c2-r6c2 total 14 connected true
cage-3: cage r4c8-r5c8 total 14 connected true
cage-4: cage r5c9-r6c9 total 14 connected true
cage-5: cage r4c5-r4c6 total 15 connected true
kropki-1: kropki r2c2-r3c2 white
kropki-2: kropki r3c2-r3c3 black
arrow-1: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-2: arrow r2c3-r1c3 bulb ["r3c3"]
arrow-3: arrow r2c2-r2c3 bulb ["r2c1"]
arrow-4: arrow r2c2-r1c2 bulb ["r3c2"]
arrow-5: arrow r2c2-r1c3 bulb ["r3c1"]
arrow-6: arrow r2c8-r3c9 bulb ["r1c7"]
arrow-7: arrow r2c8-r3c8 bulb ["r1c8"]
arrow-8: arrow r2c8-r2c9 bulb ["r2c7"]
arrow-9: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-10: arrow r3c8-r3c9 bulb ["r3c7"]
arrow-11: arrow r8c8-r7c7 bulb ["r9c9"]
arrow-12: arrow r8c7-r7c7 bulb ["r9c7"]
arrow-13: arrow r8c8-r7c8 bulb ["r9c8"]
arrow-14: arrow r8c8-r8c7 bulb ["r8c9"]
arrow-15: arrow r7c8-r7c7 bulb ["r7c9"]
arrow-16: arrow r8c2-r9c1 bulb ["r7c3"]
arrow-17: arrow r8c2-r8c1 bulb ["r8c3"]
arrow-18: arrow r8c1-r9c1 bulb ["r7c1"]
arrow-19: arrow r9c2-r9c1 bulb ["r9c3"]
arrow-20: arrow r8c2-r9c2 bulb ["r7c2"]
extremum-1: extremum r5c7-r8c5-r5c5 type "min" exhaustive false
extremum-2: extremum r5c4-r2c5-r1c3-r3c9-r6c5 type "max" exhaustive false
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. All arrows are 2 digits in length and straight. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Numbers in blue squares are Maximums. They are greater than all adjacent numbers. Numbers in red squares are Minimums. They are less than all adjacent digits. All eight maximums and minimums are different numbers.
