---
format: open-rules
title: Consecutive X Speed Run
setter: Will Power
source: https://sudokupad.app/vr66xu0u8o
case: https://sudoku-sleuth.com/cases/consecutive-x-speed-run
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c2-r7c3 colour "white"
kropki-2: kropki r7c1-r8c1 colour "white"
kropki-3: kropki r8c3-r9c3 colour "white"
kropki-4: kropki r8c2-r9c2 colour "white"
kropki-5: kropki r7c4-r7c5 colour "white"
kropki-6: kropki r8c4-r8c5 colour "white"
kropki-7: kropki r8c6-r9c6 colour "white"
kropki-8: kropki r8c9-r9c9 colour "white"
kropki-9: kropki r8c8-r9c8 colour "white"
kropki-10: kropki r4c7-r4c8 colour "white"
kropki-11: kropki r5c7-r5c8 colour "white"
kropki-12: kropki r6c8-r6c9 colour "white"
kropki-13: kropki r4c9-r5c9 colour "white"
kropki-14: kropki r4c1-r5c1 colour "white"
kropki-15: kropki r6c1-r6c2 colour "white"
kropki-16: kropki r6c2-r6c3 colour "white"
kropki-17: kropki r4c3-r5c3 colour "white"
kropki-18: kropki r4c2-r5c2 colour "white"
kropki-19: kropki r4c4-r5c4 colour "white"
kropki-20: kropki r4c6-r5c6 colour "white"
kropki-21: kropki r5c5-r5c6 colour "white"
kropki-22: kropki r5c4-r5c5 colour "white"
kropki-23: kropki r2c7-r3c7 colour "white"
kropki-24: kropki r2c7-r2c8 colour "white"
kropki-25: kropki r1c7-r1c8 colour "white"
kropki-26: kropki r1c1-r1c2 colour "white"
kropki-27: kropki r2c1-r3c1 colour "white"
kropki-28: kropki r3c2-r3c3 colour "white"
kropki-29: kropki r1c3-r2c3 colour "white"
kropki-30: kropki r1c4-r1c5 colour "white"
kropki-31: kropki r2c6-r3c6 colour "white"
kropki-32: kropki r6c4-r6c5 colour "white"
kropki-33: kropki r6c5-r6c6 colour "white"
kropki-34: kropki r7c8-r8c8 colour "white"
kropki-35: kropki r8c7-r9c7 colour "white"
pair-1: pair r7c1-r7c2 sum 10
pair-2: pair r7c3-r8c3 sum 10
pair-3: pair r9c2-r9c3 sum 10
pair-4: pair r8c1-r9c1 sum 10
pair-5: pair r7c4-r8c4 sum 10
pair-6: pair r7c5-r8c5 sum 10
pair-7: pair r9c5-r9c6 sum 10
pair-8: pair r7c6-r8c6 sum 10
pair-9: pair r7c9-r8c9 sum 10
pair-10: pair r9c8-r9c9 sum 10
pair-11: pair r8c7-r8c8 sum 10
pair-12: pair r5c9-r6c9 sum 10
pair-13: pair r4c8-r4c9 sum 10
pair-14: pair r4c7-r5c7 sum 10
pair-15: pair r6c7-r6c8 sum 10
pair-16: pair r1c9-r2c9 sum 10
pair-17: pair r1c8-r2c8 sum 10
pair-18: pair r1c7-r2c7 sum 10
pair-19: pair r3c7-r3c8 sum 10
pair-20: pair r5c4-r6c4 sum 10
pair-21: pair r4c4-r4c5 sum 10
pair-22: pair r5c5-r6c5 sum 10
pair-23: pair r5c6-r6c6 sum 10
pair-24: pair r5c2-r5c3 sum 10
pair-25: pair r4c2-r4c3 sum 10
pair-26: pair r5c1-r6c1 sum 10
pair-27: pair r2c2-r3c2 sum 10
pair-28: pair r3c4-r3c5 sum 10
pair-29: pair r1c4-r2c4 sum 10
pair-30: pair r2c5-r2c6 sum 10
extremum r3c1 type "max" exhaustive false
```

Normal Sudoku rules apply. 

XV PAIRS- Numbers with an X between them sum to 10.

KROPKI PAIRS- Numbers with a white dot between them are consecutive.

MAXIMUM- The cell highlighted gray is greater than all 3 orthogonally adjacent cells.

No negative constraints apply.

Watch for my special birthday puzzle coming soon.
