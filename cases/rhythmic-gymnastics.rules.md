---
format: open-rules
title: Rhythmic Gymnastics
setter: Will Power
source: https://sudokupad.app/lvzzdtppv0
case: https://sudoku-sleuth.com/cases/rhythmic-gymnastics
library: https://rules.sudoku-sleuth.com/
status: read
exported: 435f54c2dba374fd25f3c9d9939d1c64
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c4 total 5 connected true
cage-2: cage r6c1-r6c2 total 10 connected true
kropki-1: kropki r3c2-r3c3 white
kropki-2: kropki r9c1-r9c2 white
kropki-3: kropki r7c1-r8c1 white
kropki-4: kropki r7c3-r8c3 white
kropki-5: kropki r5c1-r6c1 white
kropki-6: kropki r4c1-r4c2 white
kropki-7: kropki r2c1-r3c1 white
kropki-8: kropki r1c1-r1c2 white
kropki-9: kropki r2c2-r2c3 white
kropki-10: kropki r1c7-r1c8 white
kropki-11: kropki r5c7-r6c7 white
kropki-12: kropki r5c9-r6c9 white
kropki-13: kropki r6c8-r6c9 white
kropki-14: kropki r7c8-r7c9 white
kropki-15: kropki r9c7-r9c8 white
kropki-16: kropki r8c7-r8c8 white
kropki-17: kropki r2c4-r3c4 white
kropki-18: kropki r3c5-r3c6 white
kropki-19: kropki r2c6-r3c6 white
kropki-20: kropki r4c5-r4c6 white
kropki-21: kropki r8c5-r9c5 white
kropki-22: kropki r7c4-r7c5 white
whispers-1: whispers r4c5-r4c4-r3c3 gap 5
whispers-2: whispers r9c3-r9c4-r8c4-r7c4-r6c4-r5c4-r4c5 gap 5
whispers-3: whispers r5c8-r5c7-r5c6-r4c5 gap 5
whispers-4: whispers r9c6-r8c6-r7c5-r6c4 gap 5
whispers-5: whispers r3c6-r4c6-r4c7-r3c7 gap 5
whispers-6: whispers r3c6-r3c7 gap 5
renban-1: renban r5c8-r4c9-r3c9-r2c8-r1c7-r1c6-r2c5-r2c4-r1c3
renban-2: renban r3c3-r3c2-r4c1-r5c2-r6c3-r7c3-r8c2-r9c2-r9c1
```

Normal Sudoku rules apply. GERMAN WHISPERS (gymnast)- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. RENBAN (ribbons)- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given. KILLER CAGE- Numbers in cages sum to the number in the top left corner of the cage.
