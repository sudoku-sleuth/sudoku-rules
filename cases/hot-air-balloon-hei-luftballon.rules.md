---
format: open-rules
title: Hot Air Balloon Heißluftballon
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/hot-air-balloon-hei-luftballon
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r5c3 colour "white"
kropki-2: kropki r5c1-r5c2 colour "white"
kropki-3: kropki r5c1-r6c1 colour "white"
kropki-4: kropki r6c1-r6c2 colour "white"
kropki-5: kropki r6c2-r6c3 colour "white"
kropki-6: kropki r8c8-r9c8 colour "white"
kropki-7: kropki r7c9-r8c9 colour "white"
kropki-8: kropki r4c2-r4c3 colour "white"
kropki-9: kropki r4c9-r5c9 colour "white"
kropki-10: kropki r6c7-r6c8 colour "white"
kropki-11: kropki r4c1-r4c2 colour "white"
kropki-12: kropki r7c2-r7c3 colour "white"
kropki-13: kropki r9c2-r9c3 colour "white"
kropki-14: kropki r3c2-r3c3 colour "black"
kropki-15: kropki r3c3-r3c4 colour "black"
kropki-16: kropki r2c6-r2c7 colour "black"
whispers r1c6-r1c5-r1c4-r2c3-r3c3-r4c3-r5c3-r6c4-r7c5-r7c6-r6c7-r5c8-r4c8-r3c8 gap 5
renban-1: renban r5c4-r6c5-r7c6
renban-2: renban r6c7-r5c6-r4c5-r3c4-r2c4-r1c4
renban-3: renban r1c5-r2c5-r3c6-r4c7-r5c8
renban-4: renban r1c6-r2c7-r3c8-r2c8-r1c7
pair-1: pair r7c5-r7c6 sum 10
pair-2: pair r4c8-r5c8 sum 10
pair-3: pair r8c5-r8c6 sum 10
pair-4: pair r9c5-r9c6 sum 10
pair-5: pair r7c2-r8c2 sum 10
parity-cells r8c5-r9c5-r9c6-r8c6 parity "even"
```

Normal Sudoku rules apply. German Whispers- Numbers on green lines are at least 5 apart from their neighbors on the line. Renban- Numbers on a purple line are a consecutive set of non-repeating numbers, in any order. Numbers with a black dot between them are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Numbers with an X between them sum to 10. Not all dots and X are given. Cells with a gray square are even.
