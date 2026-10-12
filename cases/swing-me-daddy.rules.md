---
format: open-rules
title: Swing Me, Daddy!
setter: Will Power
source: https://sudokupad.app/uv5mp2euer
case: https://sudoku-sleuth.com/cases/swing-me-daddy
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r2c9-r3c8 total 10 connected true
cage-2: cage r8c5-r9c4-r9c5-r9c6 total 13 connected true
cage-3: cage r1c1-r1c2-r2c1-r2c2-r3c1-r3c2 total 21 connected true
cage-4: cage r1c5-r2c5-r2c6 total 21 connected true
cage-5: cage r2c4-r3c4-r3c5 total 16 connected true
cage-6: cage r3c6-r4c6-r4c7 total 16 connected true
cage-7: cage r4c1-r5c1 total 15 connected true
cage-8: cage r6c1-r7c1 total 15 connected true
cage-9: cage r6c7-r6c8 total 12 connected true
cage-10: cage r5c5-r6c5 total 5 connected true
cage-11: cage r5c6-r6c6 total 5 connected true
kropki-1: kropki r7c9-r8c9 colour "white"
kropki-2: kropki r8c7-r9c7 colour "white"
whispers-1: whispers r8c2-r7c3-r6c4 gap 5
whispers-2: whispers r6c4-r5c5 gap 5
whispers-3: whispers r6c3-r5c2-r4c3-r5c4 gap 5
whispers-4: whispers r5c4-r6c3 gap 5
whispers-5: whispers r9c1-r8c2-r8c1 gap 5
whispers-6: whispers r9c4-r9c5-r9c6 gap 4
whispers-7: whispers r8c5-r9c5 gap 4
renban-1: renban r9c9-r8c9-r7c8-r6c8
renban-2: renban r9c7-r9c8-r8c7-r7c6-r6c7
renban-3: renban r5c8-r4c7-r3c6-r4c6-r5c5
renban-4: renban r1c5-r2c6-r3c5-r2c4
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on green and red lines, if other rules allow. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with white dots between them are consecutive. Not all possible dots are shown.
