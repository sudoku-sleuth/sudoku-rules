---
format: open-rules
title: The Lesser of Two Weevils
setter: Meggen033
source: https://sudokupad.app/cvr9lhonl2
case: https://sudoku-sleuth.com/cases/the-lesser-of-two-weevils
library: https://rules.sudoku-sleuth.com/
status: read
exported: f69b3d160da7c8857aa4f09a2e92f76c
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2 total 8 connected true
cage-2: cage r1c4-r2c4 total 8 connected true
cage-3: cage r6c7-r7c6-r7c7 total 21 connected true
cage-4: cage r1c7-r2c7 total 13 connected true
cage-5: cage r7c1-r7c2 total 7 connected true
cage-6: cage r1c1-r1c2-r2c1 total 19 connected true
kropki-1: kropki r8c3-r9c3 white
kropki-2: kropki r3c8-r3c9 white
kropki-3: kropki r5c2-r5c3 white
kropki-4: kropki r2c5-r3c5 white
kropki-5: kropki r4c8-r4c9 black
kropki-6: kropki r8c4-r9c4 black
kropki-7: kropki r2c2-r3c2 black
arrow-1: arrow r3c4-r4c4-r4c3 bulb ["r3c3"]
arrow-2: arrow r6c1-r5c1 bulb ["r6c2"]
whispers-1: whispers r4c7-r4c6-r4c5 gap 5
whispers-2: whispers r7c4-r6c4-r5c4 gap 5
whispers-3: whispers r8c6-r9c7-r9c8-r9c9-r8c9-r7c9-r6c8 gap 5
whispers-4: whispers r1c5-r1c6 gap 5
whispers-5: whispers r1c8-r1c9 gap 5
whispers-6: whispers r8c1-r9c1 gap 5
```

Normal Sudoku rules apply.

Adjacent digits along a green german whisper line must have a difference of at least 5.

The digits along each arrow must sum to the digit in the circled cell.  Digits may repeat along an arrow if other rules apply.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.
