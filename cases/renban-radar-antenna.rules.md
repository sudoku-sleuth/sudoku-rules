---
format: open-rules
title: Renban RADAR Antenna
setter: Will Power
source: https://sudokupad.app/8xkiqdg83w
case: https://sudoku-sleuth.com/cases/renban-radar-antenna
library: https://rules.sudoku-sleuth.com/
status: read
exported: 76355f55fa01366c8b301beb81819cca
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 6 connected true
cage-2: cage r1c5-r1c6 total 7 connected true
cage-3: cage r2c7-r3c7 total 10 connected true
cage-4: cage r5c9-r6c8-r6c9 total 16 connected true
cage-5: cage r8c9-r9c9 total 13 connected true
cage-6: cage r8c1-r9c1 total 9 connected true
cage-7: cage r6c1-r7c1 total 14 connected true
cage-8: cage r5c2-r5c3-r5c4 total 9 connected true
cage-9: cage r2c3-r3c3 total 13 connected true
kropki-1: kropki r5c3-r5c4 white
kropki-2: kropki r7c6-r8c6 white
kropki-3: kropki r3c5-r4c5 black
kropki-4: kropki r4c5-r5c5 black
kropki-5: kropki r8c4-r9c4 black
kropki-6: kropki r9c5-r9c6 black
kropki-7: kropki r7c4-r8c4 black
renban-1: renban r9c9-r8c9-r7c9-r6c9
renban-2: renban r5c5-r6c5-r7c5
renban-3: renban r6c6-r6c7-r6c8
renban-4: renban r7c7-r8c7-r8c8
renban-5: renban r3c7-r4c7-r5c7
renban-6: renban r2c6-r2c7-r2c8
renban-7: renban r1c9-r2c9-r3c9
renban-8: renban r1c5-r2c5-r3c5
renban-9: renban r2c4-r2c3-r2c2
renban-10: renban r1c1-r2c1-r3c1
renban-11: renban r4c1-r5c1-r6c1
renban-12: renban r7c1-r8c1-r9c1
renban-13: renban r8c2-r8c3-r7c3
renban-14: renban r6c2-r6c3-r6c4
renban-15: renban r3c3-r4c3-r5c3
renban-16: renban r4c4-r4c5-r4c6
```

Normal Sudoku rules apply. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
