---
format: open-rules
title: RENBAN BOX FOLDING FACILITY
setter: Will Power
source: https://sudokupad.app/1uu4vz4o2m
case: https://sudoku-sleuth.com/cases/renban-box-folding-facility
library: https://rules.sudoku-sleuth.com/
status: read
exported: c7a1a4a4c2e9bfd0f9ea5211bee3130a
---

```rules
sudoku 9x9
cage r8c8-r8c9-r9c8-r9c9 total 12 connected true
kropki-1: kropki r9c1-r9c2 white
kropki-2: kropki r9c2-r9c3 white
kropki-3: kropki r9c3-r9c4 white
kropki-4: kropki r6c3-r6c4 black
kropki-5: kropki r5c3-r5c4 black
kropki-6: kropki r3c5-r4c5 black
kropki-7: kropki r2c5-r2c6 black
kropki-8: kropki r3c6-r3c7 black
renban-1: renban r1c1-r1c2-r2c2-r2c1
renban-2: renban r1c3-r1c4-r2c4-r2c3
renban-3: renban r2c5-r2c6-r3c6-r3c5
renban-4: renban r3c8-r3c9-r4c9-r4c8
renban-5: renban r5c8-r5c9-r6c9-r6c8
renban-6: renban r6c6-r6c7-r7c7-r7c6
renban-7: renban r4c4-r4c5-r5c5-r5c4
renban-8: renban r5c2-r5c3-r6c3-r6c2
renban-9: renban r3c1-r3c2-r4c2-r4c1
renban-10: renban r8c3-r8c4-r9c4-r9c3
renban-11: renban r8c5-r8c6-r9c6-r9c5
renban-12: renban r6c4-r6c5-r5c6-r4c6
renban-13: renban r9c7-r8c7-r7c8-r7c9
renban-14: renban r9c1-r8c2-r7c2-r7c3
renban-15: renban r3c7-r2c7-r2c8-r1c9
```

Normal Sudoku rules apply. RENBAN(+)- Numbers on purple lines are each a set of non-repeating, consecutive numbers, IN ORDER. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.
