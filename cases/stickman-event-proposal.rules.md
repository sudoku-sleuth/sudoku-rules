---
format: open-rules
title: Stickman Event (Proposal)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stickman-event-proposal
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r8c2 colour "white"
kropki-2: kropki r8c5-r8c6 colour "white"
kropki-3: kropki r7c5-r8c5 colour "white"
kropki-4: kropki r5c3-r6c3 colour "white"
kropki-5: kropki r6c4-r6c5 colour "white"
kropki-6: kropki r6c8-r7c8 colour "white"
kropki-7: kropki r8c7-r8c8 colour "white"
kropki-8: kropki r2c3-r3c3 colour "white"
kropki-9: kropki r2c3-r2c4 colour "white"
kropki-10: kropki r2c4-r3c4 colour "white"
kropki-11: kropki r7c3-r8c3 colour "white"
kropki-12: kropki r1c1-r2c1 colour "black"
kropki-13: kropki r2c1-r3c1 colour "black"
kropki-14: kropki r3c1-r3c2 colour "black"
renban-1: renban r1c7-r1c8-r2c8-r2c7
renban-2: renban r3c8-r4c8-r5c9-r5c8-r5c7-r3c6-r3c7-r4c6-r4c7
renban-3: renban r2c3-r2c4-r3c3-r3c4
renban-4: renban r4c3-r5c4-r4c5-r6c2-r5c2
renban-5: renban r5c3-r6c3-r6c4-r6c5-r7c5-r8c5-r8c6
renban-6: renban r7c3-r8c3-r8c2-r8c1
renban-7: renban r8c7-r8c8-r7c8-r6c8
pair-1: pair r4c7-r4c8 sum 10
pair-2: pair r3c6-r3c7 sum 10
pair-3: pair r5c7-r5c8 sum 10
pair-4: pair r6c5-r7c5 sum 10
pair-5: pair r1c3-r2c3 sum 10
pair-6: pair r5c8-r5c9 sum 5
pair-7: pair r1c7-r1c8 sum 5
pair-8: pair r5c2-r6c2 sum 5
pair-9: pair r3c5-r4c5 sum 5
```

Normal Sudoku rules apply. Numbers on purple lines are a set of non-repeating, consecutive numbers, in any order. Numbers with an X between them sum to 10, a V between them sum to 5, a white dot between them are consecutive, and a black dot between them are in a ratio of 2:1. Not all possible X, V, and dots are given.
