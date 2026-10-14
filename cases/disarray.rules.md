---
format: open-rules
title: DisArray
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/disarray
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7f332f9be2666c854b668de195baff2e
---

```rules
sudoku 9x9
cage-1: cage r7c1-r7c2 total 13 connected true
cage-2: cage r1c3-r2c3 total 14 connected true
cage-3: cage r3c8-r3c9 total 17 connected true
cage-4: cage r8c7-r9c7 total 16 connected true
kropki-1: kropki r4c3-r5c3 white
kropki-2: kropki r5c7-r6c7 white
arrow-1: arrow r8c2-r8c1-r9c1 bulb ["r7c3"]
arrow-2: arrow r8c8-r9c8-r9c9 bulb ["r7c7"]
arrow-3: arrow r2c8-r2c9-r1c9 bulb ["r3c7"]
arrow-4: arrow r2c2-r1c2-r1c1 bulb ["r3c3"]
arrow-5: arrow r6c3-r5c3-r4c3 bulb ["r5c2"]
arrow-6: arrow r3c4-r3c5-r3c6 bulb ["r2c5"]
arrow-7: arrow r4c7-r5c7-r6c7 bulb ["r5c8"]
arrow-8: arrow r7c6-r7c5-r7c4 bulb ["r8c5"]
arrow-9: arrow r5c4-r6c5-r6c6 bulb ["r4c4"]
arrow-10: arrow r4c5-r5c6-r6c6 bulb ["r4c4"]
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

Standard sudoku constraints apply: each row, column, and box must contain a complete set of the digits 1-9.

Standard arrow constraint applies: digits along an arrow must sum to the number shown in the attached circle and can repeat if allowed by other constraints.

Standard killer cage constraint applies: digits within a cage marked by a dashed border cannot repeat and must sum to the total shown in the upper left corner of the cage.

Standard kropki difference dot constraint: digits on either side of a white dot are consecutive. No negative constraint applies.

Standard disjoint groups constraint applies: Digits in the same relative position within boxes must be different.
