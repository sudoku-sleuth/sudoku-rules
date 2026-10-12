---
format: open-rules
title: A Mother's Love
setter: Will Power
source: https://sudokupad.app/4nd4nr5oj5
case: https://sudoku-sleuth.com/cases/a-mother-s-love
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2 total 5 connected true
cage-2: cage r2c1-r2c2-r2c3 total 15 connected true
cage-3: cage r4c3-r4c4-r5c4 total 6 connected true
cage-4: cage r8c7-r9c7 total 14 connected true
cage-5: cage r8c1-r8c2 total 16 connected true
cage-6: cage r6c9-r7c8-r7c9 total 24 connected true
kropki-1: kropki r2c5-r3c5 colour "white"
kropki-2: kropki r1c5-r2c5 colour "white"
kropki-3: kropki r1c4-r2c4 colour "white"
kropki-4: kropki r2c4-r3c4 colour "white"
kropki-5: kropki r3c2-r3c3 colour "white"
kropki-6: kropki r8c8-r8c9 colour "white"
kropki-7: kropki r8c3-r8c4 colour "white"
kropki-8: kropki r8c3-r9c3 colour "white"
kropki-9: kropki r7c5-r8c5 colour "white"
kropki-10: kropki r8c6-r9c6 colour "white"
kropki-11: kropki r9c2-r9c3 colour "white"
kropki-12: kropki r3c1-r4c1 colour "white"
kropki-13: kropki r8c9-r9c9 colour "white"
kropki-14: kropki r3c7-r3c8 colour "white"
kropki-15: kropki r2c2-r3c2 colour "white"
kropki-16: kropki r8c8-r9c8 colour "white"
renban-1: renban r4c8-r5c9-r6c8-r5c7
renban-2: renban r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r6c3-r5c2-r6c1
renban-3: renban r7c7-r6c6-r5c5-r4c5-r3c5
renban-4: renban r2c6-r3c6-r3c7-r2c7
renban-5: renban r4c6-r3c5-r4c4-r4c3-r5c4
```

Normal Sudoku rules apply. RENBAN- Numbers on purple AND orange lines are each a set of non-repeating, consecutive numbers, in any order. KROPKI PAIRS- Numbers with white dots between them are consecutive. Not all possible dots are shown. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages.
