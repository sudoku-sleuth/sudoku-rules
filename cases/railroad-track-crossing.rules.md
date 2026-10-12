---
format: open-rules
title: Railroad Track Crossing
setter: Will Power
source: https://sudokupad.app/vqdzw6wpzl
case: https://sudoku-sleuth.com/cases/railroad-track-crossing
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r6c6 colour "white"
kropki-2: kropki r6c6-r6c7 colour "white"
kropki-3: kropki r8c1-r8c2 colour "white"
kropki-4: kropki r8c2-r9c2 colour "white"
kropki-5: kropki r2c1-r2c2 colour "white"
kropki-6: kropki r1c2-r2c2 colour "white"
kropki-7: kropki r1c8-r2c8 colour "white"
kropki-8: kropki r2c8-r2c9 colour "white"
kropki-9: kropki r8c7-r8c8 colour "white"
kropki-10: kropki r8c8-r9c8 colour "white"
kropki-11: kropki r6c9-r7c9 colour "white"
kropki-12: kropki r5c9-r6c9 colour "white"
kropki-13: kropki r7c8-r7c9 colour "white"
kropki-14: kropki r2c7-r2c8 colour "black"
kropki-15: kropki r8c8-r8c9 colour "black"
kropki-16: kropki r8c2-r8c3 colour "black"
kropki-17: kropki r2c2-r3c2 colour "black"
arrow-1: arrow r6c7-r6c6-r6c5 bulb ["r6c8"]
arrow-2: arrow r7c6-r6c6 bulb ["r8c6"]
arrow-3: arrow r7c4-r6c4 bulb ["r8c4"]
arrow-4: arrow r6c3-r6c4-r6c5 bulb ["r6c2"]
arrow-5: arrow r3c4-r4c4 bulb ["r2c4"]
arrow-6: arrow r3c6-r4c6 bulb ["r2c6"]
arrow-7: arrow r4c3-r4c4-r4c5 bulb ["r4c2"]
arrow-8: arrow r4c7-r4c6-r4c5 bulb ["r4c8"]
extremum r8c5 type "max" exhaustive false
```

Normal Sudoku rules apply.
ARROWS- Numbers on arrows sum to the number in the arrow's circle.
KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
MAXIMUM- The gray cell containing greater-than symbols is greater than all four orthogonally adjacent cells.
