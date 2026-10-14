---
format: open-rules
title: Lennon or Potter
setter: Will Power
source: https://sudokupad.app/2kmmtycdma
case: https://sudoku-sleuth.com/cases/lennon-or-potter
library: https://rules.sudoku-sleuth.com/
status: read
exported: b30d662cb141f99f85c58b423b03504c
---

```rules
sudoku 9x9
cage-1: cage r5c1-r6c1 total 10 connected true
cage-2: cage r7c2-r7c3 total 10 connected true
cage-3: cage r2c9-r3c9 total 10 connected true
cage-4: cage r2c8-r3c8 total 10 connected true
cage-5: cage r1c6-r2c6 total 10 connected true
cage-6: cage r3c4-r3c5 total 10 connected true
cage-7: cage r1c1-r2c1 total 10 connected true
cage-8: cage r5c2-r6c2 total 10 connected true
cage-9: cage r7c4-r8c4 total 10 connected true
cage-10: cage r9c5-r9c6 total 10 connected true
cage-11: cage r8c5-r8c6 total 10 connected true
cage-12: cage r7c5-r7c6 total 10 connected true
cage-13: cage r8c8-r8c9 total 10 connected true
cage-14: cage r4c5-r5c5-r6c5 total 15 connected true
cage-15: cage r1c5-r2c5 total 15 connected true
cage-16: cage r4c7-r5c7-r6c7-r6c8 total 12 connected true
cage-17: cage r8c3-r9c3 total 11 connected true
cage-18: cage r4c8-r5c8 total 15 connected true
cage-19: cage r9c8-r9c9 total 7 connected true
kropki-1: kropki r1c2-r1c3 black
kropki-2: kropki r5c9-r6c9 black
whispers-1: whispers r2c5-r2c4-r3c3-r4c2 gap 4
whispers-2: whispers r5c4-r4c3-r4c2-r5c1-r6c1-r7c2-r7c3-r6c4 gap 4
whispers-3: whispers r6c4-r5c4-r5c5-r5c6-r6c6 gap 4
whispers-4: whispers r1c8-r2c9-r3c9-r4c9-r5c9 gap 4
whispers-5: whispers r5c9-r4c8-r4c7-r5c6 gap 4
whispers-6: whispers r6c6-r7c7-r7c8-r6c9 gap 4
renban-1: renban r1c6-r2c6-r3c6-r3c7
renban-2: renban r8c4-r8c5-r9c4-r7c4-r7c5
```

Normal Sudoku rules apply. DUTCH WHISPERS LINE- Numbers on the red line are at least 4 apart from their neighbors on the line. Numbers may repeat on the red line. RENBAN LINES- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers are duplicated in some cages because the red line can obscure the number in some puzzle formats. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
