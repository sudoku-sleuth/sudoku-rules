---
format: open-rules
title: Son of Man by Rene Magritte
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/son-of-man-by-rene-magritte
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6c232d5e764be5ff49f47c1bfad0dc0b
---

```rules
sudoku 9x9
kropki-1: kropki r2c6-r2c7 white
kropki-2: kropki r2c7-r2c8 white
kropki-3: kropki r4c9-r5c9 white
kropki-4: kropki r6c8-r6c9 white
kropki-5: kropki r7c8-r8c8 white
kropki-6: kropki r8c8-r8c9 white
kropki-7: kropki r8c9-r9c9 white
kropki-8: kropki r9c7-r9c8 white
kropki-9: kropki r7c7-r8c7 white
kropki-10: kropki r7c3-r8c3 white
kropki-11: kropki r6c3-r7c3 white
kropki-12: kropki r6c1-r6c2 white
kropki-13: kropki r4c2-r5c2 white
kropki-14: kropki r3c2-r4c2 white
kropki-15: kropki r3c3-r4c3 white
kropki-16: kropki r6c4-r6c5 white
kropki-17: kropki r6c5-r6c6 white
kropki-18: kropki r4c7-r5c7 white
kropki-19: kropki r3c7-r4c7 white
kropki-20: kropki r6c7-r7c7 black
kropki-21: kropki r8c5-r9c5 black
kropki-22: kropki r9c1-r9c2 black
kropki-23: kropki r5c2-r6c2 black
kropki-24: kropki r1c5-r1c6 black
whispers-1: whispers r3c4-r3c5-r3c6 gap 5
whispers-2: whispers r4c6-r4c5 gap 5
whispers-3: whispers r4c6-r5c6 gap 5
whispers-4: whispers r5c6-r5c5-r5c4 gap 5
whispers-5: whispers r5c4-r4c4 gap 5
whispers-6: whispers r4c4-r4c5 gap 5
whispers-7: whispers r3c5-r4c5 gap 5
renban-1: renban r6c7-r7c7-r8c7-r9c7-r9c8-r9c9-r8c9-r8c8-r7c8
renban-2: renban r6c3-r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r8c2-r7c2
renban-3: renban r2c5-r1c5-r2c3-r2c4-r1c4-r1c6-r2c6-r2c7-r2c8
renban-4: renban r8c5-r9c5
renban-5: renban r3c7-r4c7-r5c7-r6c6-r6c5-r6c4-r5c3-r4c3-r3c3
renban-6: renban r7c1-r6c1-r6c2-r5c2-r4c2-r3c2
renban-7: renban r4c8-r4c9-r5c9-r6c9-r7c9-r6c8
pair-1: pair r5c2-r5c3 sum 5
pair-2: pair r3c3-r3c4 sum 5
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers can repeat on the green line. The red line is for matching the necktie on Magritte's painting only. Numbers on all other lines are each a set of non-repeating, consecutive numbers, in any order. Numbers with a V between them sum to 5. Not all possible V are given. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. All possible dots between adjacent numbers on the same line are given. Dots are not shown for other pairs of numbers.
