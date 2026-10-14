---
format: open-rules
title: Easter Basket
setter: Will Power
source: https://sudokupad.app/cn2iamxlj7
case: https://sudoku-sleuth.com/cases/easter-basket
library: https://rules.sudoku-sleuth.com/
status: read
exported: ce086477e4040fe0349df0c96dc0b12c
---

```rules
sudoku 9x9
cage-1: cage r7c7-r8c7-r9c7 total 20 connected true
cage-2: cage r9c1-r9c2 total 4 connected true
cage-3: cage r3c2-r4c2 total 12 connected true
cage-4: cage r2c3-r2c4 total 10 connected true
cage-5: cage r5c1-r6c1 total 5 connected true
cage-6: cage r6c2-r7c2 total 7 connected true
cage-7: cage r7c3-r8c3 total 11 connected true
cage-8: cage r4c8-r5c8 total 5 connected true
cage-9: cage r1c3-r1c4 total 4 connected true
cage-10: cage r1c9-r2c9 total 11 connected true
kropki-1: kropki r4c4-r4c5 white
kropki-2: kropki r8c5-r8c6 white
kropki-3: kropki r8c6-r8c7 white
kropki-4: kropki r3c8-r4c8 white
kropki-5: kropki r7c5-r7c6 white
whispers-1: whispers r9c3-r8c3-r7c3-r6c4-r6c5-r7c6-r8c6-r9c6 gap 5
whispers-2: whispers r7c6-r6c7-r6c8-r7c9-r8c9-r9c9 gap 4
whispers-3: whispers r6c7-r5c7-r4c8-r4c9 gap 5
whispers-4: whispers r5c4-r4c5-r4c6-r5c7 gap 4
whispers-5: whispers r3c5-r2c4-r2c3-r3c2-r4c2 gap 5
renban-1: renban r7c1-r6c1-r5c1-r4c2-r4c3-r5c4-r6c4-r8c2-r8c3
renban-2: renban r4c5-r3c5-r2c6-r2c7-r3c8-r4c8
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. No 5's appear on red lines. Numbers may repeat on green and red lines, if other rules allow. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
