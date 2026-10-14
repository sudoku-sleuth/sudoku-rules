---
format: open-rules
title: Starry Night by VincentVanGogh
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/starry-night-by-vincentvangogh
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0060fa63111df2850c3163bda0a38f8f
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r5c5 black
kropki-2: kropki r4c6-r5c6 black
kropki-3: kropki r4c7-r5c7 black
kropki-4: kropki r1c7-r2c7 black
kropki-5: kropki r1c4-r1c5 black
kropki-6: kropki r1c2-r1c3 black
kropki-7: kropki r2c1-r3c1 black
kropki-8: kropki r9c2-r9c3 black
kropki-9: kropki r6c2-r6c3 black
kropki-10: kropki r8c8-r8c9 black
kropki-11: kropki r7c4-r7c5 black
kropki-12: kropki r7c2-r8c2 black
kropki-13: kropki r5c1-r5c2 black
kropki-14: kropki r2c7-r3c7 black
whispers-1: whispers r8c1-r7c2-r6c2-r5c3 gap 5
whispers-2: whispers r1c3-r2c3-r3c3-r4c3-r5c3-r6c4-r7c4-r8c4 gap 5
whispers-3: whispers r3c3-r4c2-r5c2 gap 5
whispers-4: whispers r8c1-r9c1 gap 5
whispers-5: whispers r8c4-r8c5-r9c5 gap 5
renban-1: renban r1c1-r2c2-r2c3-r2c4-r1c5-r1c6-r2c7-r3c7-r4c6
renban-2: renban r2c6-r3c5-r4c5-r5c6-r5c7-r4c8
renban-3: renban r6c9-r6c8-r6c7-r7c6-r7c5-r7c4
renban-4: renban r1c9-r2c8-r3c8-r4c9
```

Normal Sudoku rules apply. Numbers on the gray line are at least 5 apart from their neighbors on the line. Numbers may repeat on the gray line if other rules allow. Numbers on all other lines are each a set of non-repeating, consecutive numbers, in any order. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
