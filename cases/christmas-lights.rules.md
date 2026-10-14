---
format: open-rules
title: Christmas Lights
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/christmas-lights
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1571431577cd94e2a3fb041a84efd714
---

```rules
sudoku 9x9
pair-1: pair r7c6-r7c7 difference 4
pair-2: pair r6c5-r7c5 difference 4
pair-3: pair r6c5-r6c6 difference 4
pair-4: pair r5c6-r6c6 difference 4
pair-5: pair r5c7-r5c8 difference 4
pair-6: pair r5c9-r6c9 difference 4
pair-7: pair r9c8-r9c9 difference 4
pair-8: pair r9c4-r9c5 difference 4
pair-9: pair r8c1-r9c1 difference 4
pair-10: pair r4c1-r5c1 difference 4
pair-11: pair r6c1-r6c2 difference 4
pair-12: pair r7c5-r7c6 difference 3
pair-13: pair r5c8-r6c8 difference 3
pair-14: pair r7c7-r7c8 difference 3
pair-15: pair r7c9-r8c9 difference 3
pair-16: pair r9c7-r9c8 difference 3
pair-17: pair r9c3-r9c4 difference 3
pair-18: pair r9c1-r9c2 difference 3
pair-19: pair r2c1-r3c1 difference 3
pair-20: pair r2c4-r2c5 difference 3
pair-21: pair r2c6-r2c7 difference 3
pair-22: pair r2c8-r2c9 difference 3
pair-23: pair r6c8-r6c9 difference 2
pair-24: pair r4c7-r5c7 difference 2
pair-25: pair r5c1-r6c1 difference 2
pair-26: pair r7c2-r8c2 difference 2
pair-27: pair r6c9-r7c9 difference 2
pair-28: pair r2c9-r3c9 difference 2
pair-29: pair r2c5-r2c6 difference 2
pair-30: pair r7c8-r7c9 difference 5
pair-31: pair r9c5-r9c6 difference 5
pair-32: pair r9c2-r9c3 difference 5
pair-33: pair r6c1-r7c1 difference 5
pair-34: pair r6c2-r6c3 difference 5
pair-35: pair r2c2-r2c3 difference 5
pair-36: pair r3c1-r4c1 difference 5
pair-37: pair r2c7-r2c8 difference 5
pair-38: pair r3c9-r4c9 difference 5
pair-39: pair r8c5-r9c5 difference 6
pair-40: pair r9c6-r9c7 difference 6
pair-41: pair r8c9-r9c9 difference 6
pair-42: pair r5c6-r5c7 difference 6
pair-43: pair r4c9-r5c9 difference 6
pair-44: pair r2c3-r2c4 difference 6
pair-45: pair r7c1-r8c1 difference 6
pair-46: pair r7c3-r8c3 difference 6
pair-47: pair r6c3-r6c4 difference 6
pair-48: pair r2c1-r2c2 difference 7
pair-49: pair r6c4-r6c5 difference 7
pair-50: pair r7c2-r7c3 difference 4
pair-51: pair r8c2-r8c3 difference 4
pair-52: pair r7c5-r8c5 difference 4
pair-53: pair r1c6-r2c6 sum 5
negative relations [{"op":"difference","value":1}] except [["r1c6","r2c6"],["r7c6","r7c7"],["r6c5","r7c5"],["r6c5","r6c6"],["r5c6","r6c6"],["r5c7","r5c8"],["r5c9","r6c9"],["r9c8","r9c9"],["r9c4","r9c5"],["r8c1","r9c1"],["r4c1","r5c1"],["r6c1","r6c2"],["r7c5","r7c6"],["r5c8","r6c8"],["r7c7","r7c8"],["r7c9","r8c9"],["r9c7","r9c8"],["r9c3","r9c4"],["r9c1","r9c2"],["r2c1","r3c1"],["r2c4","r2c5"],["r2c6","r2c7"],["r2c8","r2c9"],["r6c8","r6c9"],["r4c7","r5c7"],["r5c1","r6c1"],["r7c2","r8c2"],["r6c9","r7c9"],["r2c9","r3c9"],["r2c5","r2c6"],["r7c8","r7c9"],["r9c5","r9c6"],["r9c2","r9c3"],["r6c1","r7c1"],["r6c2","r6c3"],["r2c2","r2c3"],["r3c1","r4c1"],["r2c7","r2c8"],["r3c9","r4c9"],["r8c5","r9c5"],["r9c6","r9c7"],["r8c9","r9c9"],["r5c6","r5c7"],["r4c9","r5c9"],["r2c3","r2c4"],["r7c1","r8c1"],["r7c3","r8c3"],["r6c3","r6c4"],["r2c1","r2c2"],["r6c4","r6c5"],["r7c2","r7c3"],["r8c2","r8c3"],["r7c5","r8c5"]]
```

Normal Sudoku rules apply. Numbers with the following dots between them have the indicated difference: RED- 2, ORANGE- 3, YELLOW- 4, GREEN- 5, BLUE- 6, VIOLET- 7. There are no adjacent numbers that are consecutive in the whole grid. Numbers with a V between them sum to 5. Not all possible V and dots are given. You can change to dark mode in settings there. I like this puzzle better in Dark Mode.
