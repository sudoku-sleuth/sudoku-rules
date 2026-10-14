---
format: open-rules
title: Clues In The Clutter
setter: Will Power
source: https://sudokupad.app/4bygvaiq47
case: https://sudoku-sleuth.com/cases/clues-in-the-clutter
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2a352db6796c060418d1a19f92603a59
---

```rules
sudoku 9x9
cage r5c1-r5c2-r5c3 total 13 connected true
kropki-1: kropki r5c8-r6c8 white
kropki-2: kropki r6c8-r7c8 white
kropki-3: kropki r4c8-r4c9 white
kropki-4: kropki r4c7-r4c8 white
kropki-5: kropki r4c5-r5c5 black
kropki-6: kropki r5c5-r6c5 black
arrow-1: arrow r3c7-r2c8 bulb ["r4c6"]
arrow-2: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-3: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-4: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-5: arrow r2c1-r3c1 bulb ["r1c1"]
arrow-6: arrow r3c3-r2c2 bulb ["r4c4"]
arrow-7: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-8: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-9: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-10: arrow r9c8-r9c7 bulb ["r9c9"]
arrow-11: arrow r7c7-r8c8 bulb ["r6c6"]
arrow-12: arrow r7c3-r8c2 bulb ["r6c4"]
whispers-1: whispers r1c7-r1c8-r1c9-r2c9-r3c9 gap 5
whispers-2: whispers r1c6-r1c5-r2c4 gap 4
whispers-3: whispers r2c4-r2c5-r1c6 gap 4
whispers-4: whispers r2c4-r3c5-r3c6 gap 4
whispers-5: whispers r2c5-r3c6 gap 4
whispers-6: whispers r2c4-r1c4 gap 4
whispers-7: whispers r2c4-r3c4 gap 4
parity-cells r4c4-r4c6-r6c6-r6c4 parity "odd"
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum tro the number in the arrow's circle.

GERMAN WHISPERS- Numbers on the green line are at least 5 apart from their neighbors on the line.

DUTCH WHISPERS- Numbers on the red line are at least 4 apart from their neighbors on the line.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown. 

ODD- Cells with a gray circle are odd.

KILLER CAGE- Numbers in the cage sum to 13.
