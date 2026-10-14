---
format: open-rules
title: Stickman Bowling:12 X Strikes
setter: Will Power
source: https://sudokupad.app/i1gpn4716p
case: https://sudoku-sleuth.com/cases/stickman-bowling-12-x-strikes
library: https://rules.sudoku-sleuth.com/
status: read
exported: b9edf578cec4bd9f0f888c28d3f51097
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 white
kropki-2: kropki r3c4-r3c5 white
kropki-3: kropki r3c5-r3c6 white
kropki-4: kropki r3c6-r3c7 white
kropki-5: kropki r8c8-r9c8 white
kropki-6: kropki r6c8-r7c8 white
kropki-7: kropki r5c5-r6c5 white
kropki-8: kropki r1c6-r1c7 black
kropki-9: kropki r1c4-r1c5 black
kropki-10: kropki r1c2-r1c3 black
kropki-11: kropki r7c4-r7c5 black
kropki-12: kropki r4c2-r4c3 black
renban-1: renban r6c8-r7c8-r7c7-r6c7-r4c6-r5c6
renban-2: renban r4c3-r3c4-r3c5-r3c6-r4c5-r2c6-r2c7-r3c7
renban-3: renban r5c4-r6c5-r7c5-r8c5-r8c6-r6c4-r6c3-r6c2-r7c2
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r1c3-r1c4 sum 10
pair-3: pair r1c5-r1c6 sum 10
pair-4: pair r1c7-r1c8 sum 10
pair-5: pair r4c1-r4c2 sum 10
pair-6: pair r4c3-r4c4 sum 10
pair-7: pair r7c1-r7c2 sum 10
pair-8: pair r4c8-r4c9 sum 10
pair-9: pair r7c8-r7c9 sum 10
pair-10: pair r4c6-r4c7 sum 10
pair-11: pair r7c3-r7c4 sum 10
pair-12: pair r7c5-r7c6 sum 10
```

Normal Sudoku rules apply. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. XV PAIRS- Numbers with an X between them sum to 10. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible X and dots are given.
