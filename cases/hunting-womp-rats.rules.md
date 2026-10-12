---
format: open-rules
title: Hunting Womp Rats
setter: Will Power
source: https://sudokupad.app/a43ul24ekj
case: https://sudoku-sleuth.com/cases/hunting-womp-rats
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c8-r5c9-r6c9 total 18 connected true
cage-2: cage r4c1-r5c1-r5c2-r6c1 total 25 connected true
cage-3: cage r7c5-r8c5-r9c4-r9c5-r9c6 total 21 connected true
cage-4: cage r1c4-r1c5-r1c6 total 6 connected true
cage-5: cage r2c5-r3c5 total 9 connected true
cage-6: cage r4c6-r5c6-r6c6 total 9 connected true
cage-7: cage r1c2-r1c3 total 10 connected true
cage-8: cage r4c3-r5c3-r6c3 total 7 connected true
cage-9: cage r3c8-r3c9 total 6 connected true
kropki-1: kropki r8c6-r8c7 colour "white"
kropki-2: kropki r5c9-r6c9 colour "white"
whispers-1: whispers r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 gap 5
whispers-2: whispers r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 gap 5
whispers-3: whispers r2c9-r3c8-r4c7-r5c6-r6c7-r7c8-r8c9 gap 4
whispers-4: whispers r3c9-r4c8-r5c7-r6c8-r7c9 gap 4
whispers-5: whispers r3c1-r4c2-r5c3-r6c2-r7c1 gap 4
whispers-6: whispers r4c3-r5c4-r6c3-r7c2-r8c1 gap 4
```

Normal Sudoku rules apply.

GERMAN WHISPERS- Numbers on the green line are at least 5 apart from their neighbors on the line.

DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
