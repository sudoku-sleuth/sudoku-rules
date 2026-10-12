---
format: open-rules
title: Circular Logic or Ipso Facto?
setter: Will Power
source: https://sudokupad.app/qmmqhtfmse
case: https://sudoku-sleuth.com/cases/circular-logic-or-ipso-facto
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c6-r1c7 total 14 connected true
cage-2: cage r9c8-r9c9 total 14 connected true
kropki-1: kropki r1c7-r1c8 colour "white"
kropki-2: kropki r6c1-r7c1 colour "white"
kropki-3: kropki r5c7-r6c7 colour "white"
kropki-4: kropki r6c7-r7c7 colour "white"
kropki-5: kropki r3c4-r3c5 colour "white"
kropki-6: kropki r3c3-r3c4 colour "white"
kropki-7: kropki r4c4-r5c4 colour "white"
kropki-8: kropki r9c2-r9c3 colour "black"
kropki-9: kropki r9c4-r9c5 colour "black"
kropki-10: kropki r9c6-r9c7 colour "black"
kropki-11: kropki r5c1-r6c1 colour "black"
kropki-12: kropki r3c1-r4c1 colour "black"
kropki-13: kropki r7c6-r7c7 colour "black"
kropki-14: kropki r6c9-r7c9 colour "black"
arrow-1: arrow r8c9-r9c9 bulb ["r7c9"]
arrow-2: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-3: arrow r4c3-r3c3 bulb ["r5c3"]
whispers-1: whispers r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 gap 5
whispers-2: whispers r1c9-r2c9-r3c9-r4c9-r5c9-r6c9 gap 5
whispers-3: whispers r1c1-r2c1-r3c1-r4c1-r5c1 gap 4
whispers-4: whispers r3c7-r4c7-r5c7 gap 5
whispers-5: whispers r7c6-r7c5-r7c4-r7c3 gap 4
whispers-6: whispers r3c7-r3c6-r3c5 gap 4
whispers-7: whispers r7c3-r6c3-r5c3 gap 4
pair-1: pair r1c8-r1c9 relation {"op":"sum","value":10}
pair-2: pair r9c1-r9c2 relation {"op":"sum","value":10}
pair-3: pair r9c3-r9c4 relation {"op":"sum","value":10}
pair-4: pair r9c5-r9c6 relation {"op":"sum","value":10}
pair-5: pair r9c7-r9c8 relation {"op":"sum","value":10}
pair-6: pair r1c1-r2c1 relation {"op":"sum","value":10}
```

Normal Sudoku rules apply.

GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line.

DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines, if other rules allow.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1.

ARROWS- Numbers on arrows sum to the number in the arrow's circle.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

XV PAIRS- Numbers with an X between them sum to 10.
