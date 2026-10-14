---
format: open-rules
title: Disjoint Mechanic
setter: Meggen033
source: https://sudokupad.app/kz8de8grt8
case: https://sudoku-sleuth.com/cases/disjoint-mechanic
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6b45620eb706643ec65c89e77bfe2e37
---

```rules
sudoku 9x9
cage-1: cage r4c2-r5c2 total 15 connected true
cage-2: cage r1c5-r2c5 total 15 connected true
cage-3: cage r4c8-r5c8 total 15 connected true
cage-4: cage r7c5-r8c5 total 15 connected true
cage-5: cage r6c8-r7c8 total 5 connected true
cage-6: cage r5c3-r5c4 total 11 connected true
cage-7: cage r8c4-r9c4 total 12 connected true
cage-8: cage r8c6-r9c6 total 10 connected true
cage-9: cage r5c6-r5c7 total 8 connected true
kropki-1: kropki r3c9-r4c9 white
kropki-2: kropki r1c1-r2c1 white
arrow-1: arrow r2c3-r3c4-r4c5 bulb ["r1c2"]
arrow-2: arrow r2c7-r3c6-r4c5 bulb ["r1c8"]
arrow-3: arrow r7c2-r8c2 bulb ["r6c2"]
parity-cells r8c2-r5c5 parity "even"
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

Normal Sudoku rules apply. 

Disjoint Set: Digits must not repeat at corresponding box positions.

The digits in a cage must sum to the number printed in its corner.

The digits along each arrow must sum to the digit in the circled cell.  Digits may repeat along an arrow if other rules apply.

A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Cells with a filled square must be even.
