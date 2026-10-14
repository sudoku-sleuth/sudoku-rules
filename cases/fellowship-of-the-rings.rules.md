---
format: open-rules
title: Fellowship of the Rings
setter: Will Power
source: https://sudokupad.app/u5fcuq96wl
case: https://sudoku-sleuth.com/cases/fellowship-of-the-rings
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5520c53eb6585b50771b6311377c4d95
---

```rules
sudoku 9x9
kropki-1: kropki r8c4-r8c5 white
kropki-2: kropki r8c5-r8c6 white
kropki-3: kropki r8c6-r8c7 white
kropki-4: kropki r7c7-r8c7 white
kropki-5: kropki r2c6-r2c7 white
kropki-6: kropki r1c4-r1c5 white
kropki-7: kropki r8c1-r8c2 white
kropki-8: kropki r4c1-r5c1 white
kropki-9: kropki r6c2-r7c2 white
whispers-1: whispers r6c4-r6c5-r6c6-r5c6-r4c6-r4c5-r4c4-r5c4 gap 5
whispers-2: whispers r7c3-r6c3-r5c3-r4c3-r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4 gap 5
whispers-3: whispers r7c4-r7c3 gap 5
pair-1: pair r8c4-r9c4 sum 10
pair-2: pair r8c5-r9c5 sum 10
pair-3: pair r8c2-r9c2 sum 10
pair-4: pair r8c8-r9c8 sum 10
pair-5: pair r5c8-r5c9 sum 10
pair-6: pair r1c6-r2c6 sum 10
pair-7: pair r3c8-r3c9 sum 10
pair-8: pair r8c7-r9c7 sum 10
pair-9: pair r1c3-r2c3 sum 10
pair-10: pair r1c8-r2c8 sum 10
pair-11: pair r7c1-r7c2 sum 10
pair-12: pair r9c1-r9c2 sum 5
```

Normal Sudoku rules apply. German Whispers- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines if other rules allow. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Numbers with a white dot between them are consecutive. Not all X, V and dots are given.
