---
format: open-rules
title: Loaded Trebuchet 9, 8, 7, 6, 5
setter: Will Power
source: https://sudokupad.app/wlmdohtj2o
case: https://sudoku-sleuth.com/cases/loaded-trebuchet-9-8-7-6-5
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9dc04f6511e8b65e07a6493f2ce2f9a9
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2 total 6 connected true
cage-2: cage r9c1-r9c2 total 8 connected true
kropki-1: kropki r5c1-r6c1 white
kropki-2: kropki r7c5-r7c6 white
kropki-3: kropki r7c6-r7c7 white
kropki-4: kropki r6c4-r6c5 white
kropki-5: kropki r6c5-r6c6 white
kropki-6: kropki r1c6-r1c7 white
kropki-7: kropki r1c7-r1c8 white
kropki-8: kropki r4c5-r4c6 white
kropki-9: kropki r5c5-r5c6 white
kropki-10: kropki r5c4-r6c4 white
arrow-1: arrow r3c3-r2c2-r1c1 bulb ["r4c4"]
arrow-2: arrow r5c5-r6c6-r7c7 bulb ["r4c4"]
arrow-3: arrow r5c4-r6c5-r7c6 bulb ["r4c3"]
arrow-4: arrow r5c3-r6c4-r7c5 bulb ["r4c2"]
arrow-5: arrow r7c5-r7c6-r7c7 bulb ["r7c4"]
arrow-6: arrow r6c4-r6c5-r6c6 bulb ["r6c3"]
arrow-7: arrow r2c1-r1c1 bulb ["r3c1"]
arrow-8: arrow r5c3-r5c4 bulb ["r5c2"]
arrow-9: arrow r1c6-r1c7-r1c8 bulb ["r2c5"]
whispers-1: whispers r9c4-r9c3-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r9c8-r9c7 gap 4
whispers-2: whispers r8c7-r9c7 gap 4
whispers-3: whispers r8c4-r9c4 gap 4
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. All arrows are straight lines, except for the one in box 2 and 3. Numbers may repeat on arrows, if other rules allow. DUTCH WHISPERS- Numbers on the red line are at least 4 apart from their neighbors on the line. Numbers may repeat on the red line. The number 5 does NOT appear on the red line. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
