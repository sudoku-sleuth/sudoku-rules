---
format: open-rules
title: Brandenburger tor (Gate)
setter: Will Power
source: https://sudokupad.app/wlgrxytiu6
case: https://sudoku-sleuth.com/cases/brandenburger-tor-gate
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r5c2-r5c3-r5c4 total 14 connected true
cage-2: cage r5c6-r5c7-r5c8 total 13 connected true
cage-3: cage r3c2-r3c3-r3c4 total 14 connected true
cage-4: cage r3c6-r3c7-r3c8 total 19 connected true
cage-5: cage r1c1-r1c2-r1c3 total 9 connected true
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r3c1-r3c2 colour "white"
kropki-3: kropki r2c1-r3c1 colour "white"
kropki-4: kropki r2c1-r2c2 colour "white"
kropki-5: kropki r2c2-r2c3 colour "white"
kropki-6: kropki r6c4-r6c5 colour "white"
kropki-7: kropki r5c3-r6c3 colour "white"
kropki-8: kropki r6c3-r6c4 colour "white"
whispers-1: whispers r6c2-r7c2-r8c2 gap 4
whispers-2: whispers r6c3-r7c3 gap 4
whispers-3: whispers r6c4-r7c4-r8c4 gap 4
whispers-4: whispers r6c6-r7c6-r8c6 gap 4
whispers-5: whispers r6c7-r7c7 gap 4
whispers-6: whispers r6c8-r7c8-r8c8 gap 4
whispers-7: whispers r3c2-r4c2-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r4c8-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3 gap 4
whispers-8: whispers r3c3-r3c2 gap 4
whispers-9: whispers r1c5-r2c5-r3c5 gap 4
whispers-10: whispers r2c4-r3c4-r4c4-r4c5-r4c6-r3c6 gap 4
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines, if other rules allow. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
