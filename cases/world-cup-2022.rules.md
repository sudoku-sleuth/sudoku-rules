---
format: open-rules
title: World Cup 2022
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/world-cup-2022
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c7-r6c8 colour "white"
kropki-2: kropki r5c8-r6c8 colour "white"
kropki-3: kropki r5c7-r5c8 colour "white"
kropki-4: kropki r5c4-r5c5 colour "white"
kropki-5: kropki r6c5-r7c5 colour "white"
kropki-6: kropki r2c4-r2c5 colour "white"
kropki-7: kropki r6c2-r7c2 colour "white"
kropki-8: kropki r9c3-r9c4 colour "white"
kropki-9: kropki r2c4-r3c4 colour "white"
kropki-10: kropki r4c2-r4c3 colour "white"
kropki-11: kropki r3c1-r4c1 colour "white"
kropki-12: kropki r4c7-r4c8 colour "black"
kropki-13: kropki r3c7-r4c7 colour "black"
kropki-14: kropki r9c8-r9c9 colour "black"
kropki-15: kropki r6c3-r7c3 colour "black"
kropki-16: kropki r4c4-r5c4 colour "black"
kropki-17: kropki r2c6-r2c7 colour "black"
kropki-18: kropki r5c1-r5c2 colour "black"
kropki-19: kropki r7c2-r7c3 colour "black"
kropki-20: kropki r7c8-r7c9 colour "black"
kropki-21: kropki r5c7-r6c7 colour "black"
kropki-22: kropki r6c6-r6c7 colour "black"
whispers-1: whispers r8c3-r7c4-r7c5-r7c6-r8c7 gap 5
whispers-2: whispers r2c3-r3c4-r3c5-r3c6-r2c7 gap 5
whispers-3: whispers r4c5-r5c4-r6c5-r5c6 gap 5
whispers-4: whispers r4c5-r5c6 gap 5
renban-1: renban r1c2-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r1c8
renban-2: renban r9c2-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r9c8
renban-3: renban r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
```

Normal Sudoku rules apply. Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers on a purple line are a set of non-repeating, consecutive numbers, in any order. Numbers with a black shirt player between them are in a ratio of 2:1. Numbers with a white shirt player between them are consecutive. Not all dots are given.
