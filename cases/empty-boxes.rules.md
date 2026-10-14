---
format: open-rules
title: Empty Boxes
setter: Meggen033
source: https://sudokupad.app/u4uxhchgyc
case: https://sudoku-sleuth.com/cases/empty-boxes
library: https://rules.sudoku-sleuth.com/
status: read
exported: 84cea3826c3aeef5ffe52a5785bedba0
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2-r7c1 total 7 connected true
cage-2: cage r1c6-r1c7-r2c6 total 23 connected true
cage-3: cage r2c1-r3c1 total 6 connected true
cage-4: cage r1c2-r1c3 total 15 connected true
cage-5: cage r2c9-r3c8-r3c9 total 8 connected true
cage-6: cage r8c3-r9c2-r9c3 total 22 connected true
kropki-1: kropki r4c2-r5c2 white
kropki-2: kropki r8c3-r9c3 white
kropki-3: kropki r1c4-r2c4 white
kropki-4: kropki r4c2-r4c3 white
kropki-5: kropki r2c4-r2c5 black
whispers r5c3-r4c4-r3c5 gap 5
parity-cells r5c3 parity "odd"
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

Adjacent digits along a green german whisper line must have a difference of at least 5.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Cells with a filled circle must be odd.
