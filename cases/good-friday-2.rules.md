---
format: open-rules
title: Good Friday
setter: Will Power
source: https://f-puzzles.com/?id=y2efj6uo
case: https://sudoku-sleuth.com/cases/good-friday-2
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r2c9 colour "white"
kropki-2: kropki r2c6-r2c7 colour "white"
kropki-3: kropki r2c6-r3c6 colour "white"
kropki-4: kropki r3c6-r4c6 colour "white"
kropki-5: kropki r4c6-r4c7 colour "white"
kropki-6: kropki r4c7-r4c8 colour "white"
kropki-7: kropki r7c2-r7c3 colour "white"
kropki-8: kropki r8c2-r9c2 colour "white"
kropki-9: kropki r8c3-r8c4 colour "white"
kropki-10: kropki r7c4-r8c4 colour "white"
kropki-11: kropki r6c4-r7c4 colour "white"
kropki-12: kropki r8c4-r9c4 colour "white"
kropki-13: kropki r5c2-r6c2 colour "white"
kropki-14: kropki r9c5-r9c6 colour "white"
kropki-15: kropki r3c2-r3c3 colour "black"
kropki-16: kropki r2c2-r3c2 colour "black"
kropki-17: kropki r2c2-r2c3 colour "black"
kropki-18: kropki r4c4-r5c4 colour "black"
kropki-19: kropki r8c8-r8c9 colour "black"
kropki-20: kropki r1c5-r2c5 colour "black"
whispers-1: whispers r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8 gap 5
whispers-2: whispers r5c1-r4c2-r3c3-r2c4-r1c5 gap 5
whispers-3: whispers r2c6-r3c7-r4c8-r5c9 gap 5
whispers-4: whispers r4c6-r3c7-r2c8 gap 5
whispers-5: whispers r6c2-r7c3-r8c4-r9c5 gap 5
whispers-6: whispers r8c2-r7c3-r6c4 gap 5
whispers-7: whispers r7c8-r8c7-r9c7-r9c8-r8c9-r7c9 gap 5
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except [["r2c8","r2c9"],["r2c6","r2c7"],["r2c6","r3c6"],["r3c6","r4c6"],["r4c6","r4c7"],["r4c7","r4c8"],["r7c2","r7c3"],["r8c2","r9c2"],["r8c3","r8c4"],["r7c4","r8c4"],["r6c4","r7c4"],["r8c4","r9c4"],["r5c2","r6c2"],["r9c5","r9c6"],["r3c2","r3c3"],["r2c2","r3c2"],["r2c2","r2c3"],["r4c4","r5c4"],["r8c8","r8c9"],["r1c5","r2c5"]]
```

Normal Sudoku rules apply. Numbers on all lines are at least 5 apart from their neighbors on the line. Numbers with white dots between them are consecutive. All possible white dots that have one number on the 2 SMALL CROSSES are given. Numbers with black dots between them are in a ratio of 2:1. All possible black dots that have one number on the LARGE CROSS are given.
