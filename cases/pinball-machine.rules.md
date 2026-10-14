---
format: open-rules
title: Pinball Machine
setter: Will Power
source: https://sudokupad.app/3e1muc9z1v
case: https://sudoku-sleuth.com/cases/pinball-machine
library: https://rules.sudoku-sleuth.com/
status: read
exported: a0b436c98ec97e680b00d7df4e27c121
---

```rules
sudoku 9x9
cage-1: cage r2c6-r2c7-r3c6-r3c7 total 10 connected true
cage-2: cage r1c3-r1c4-r2c3-r2c4 total 26 connected true
cage-3: cage r3c1-r3c2-r4c1-r4c2 total 30 connected true
cage-4: cage r4c4-r4c5-r5c4-r5c5 total 18 connected true
cage-5: cage r4c6-r4c7-r4c8-r4c9 total 23 connected true
cage-6: cage r1c8-r2c8 total 10 connected true
cage-7: cage r7c2-r7c3-r7c4 total 23 connected true
cage-8: cage r5c1-r6c1-r7c1 total 13 connected true
cage-9: cage r6c6-r6c7 total 14 connected true
anti-king
thermo r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c8
kropki-1: kropki r2c4-r3c4 white
kropki-2: kropki r2c4-r2c5 white
whispers-1: whispers r5c8-r6c8-r7c7 gap 5
whispers-2: whispers r8c2-r9c3 gap 4
whispers-3: whispers r8c6-r9c5 gap 4
whispers-4: whispers r5c1-r6c1-r7c1 gap 5
renban-1: renban r3c1-r4c1-r4c2-r3c2
renban-2: renban r4c4-r5c4-r5c5-r4c5
renban-3: renban r1c3-r1c4-r2c4-r2c3
renban-4: renban r2c6-r2c7-r3c7-r3c6
```

Normal Sudoku rules apply.

ANTI-KING- Cells a chess king's move apart cannot have the same number.

RENBAN-Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order.
GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. 
DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line.

THERMOMETER- Numbers on the thermometer increase from the bulb end.
KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
