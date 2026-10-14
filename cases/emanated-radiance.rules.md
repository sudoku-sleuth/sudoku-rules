---
format: open-rules
title: Emanated Radiance
setter: Will Power
source: https://f-puzzles.com/?id=y9wztvxf
case: https://sudoku-sleuth.com/cases/emanated-radiance
library: https://rules.sudoku-sleuth.com/
status: read
exported: 687015cf3d77e727ef31461d727595fc
---

```rules
sudoku 9x9
kropki-1: kropki r8c8-r9c8 white
kropki-2: kropki r6c6-r7c6 white
kropki-3: kropki r8c1-r8c2 white
kropki-4: kropki r7c2-r7c3 white
kropki-5: kropki r1c2-r2c2 white
kropki-6: kropki r2c3-r3c3 white
kropki-7: kropki r3c4-r4c4 white
kropki-8: kropki r4c6-r4c7 white
kropki-9: kropki r3c7-r3c8 white
kropki-10: kropki r5c6-r6c6 white
kropki-11: kropki r6c4-r6c5 white
kropki-12: kropki r4c5-r4c6 black
kropki-13: kropki r7c1-r8c1 black
pair-1: pair r1c9-r2c9 sum 10
pair-2: pair r2c8-r3c8 sum 10
pair-3: pair r3c7-r4c7 sum 10
pair-4: pair r4c4-r4c5 sum 10
pair-5: pair r4c6-r5c6 sum 10
pair-6: pair r6c5-r6c6 sum 10
pair-7: pair r5c4-r6c4 sum 10
pair-8: pair r1c1-r1c2 sum 10
pair-9: pair r2c2-r2c3 sum 10
pair-10: pair r3c3-r3c4 sum 10
pair-11: pair r7c6-r7c7 sum 10
pair-12: pair r8c7-r8c8 sum 10
pair-13: pair r9c8-r9c9 sum 10
pair-14: pair r8c1-r9c1 sum 10
pair-15: pair r7c2-r8c2 sum 10
pair-16: pair r6c3-r7c3 sum 10
pair-17: pair r3c1-r3c2 sum 10
pair-18: pair r7c7-r8c7 sum 5
pair-19: pair r6c3-r6c4 sum 5
pair-20: pair r2c8-r2c9 sum 5
parity-cells r8c9 parity "even"
```

Normal Sudoku rules apply.  Numbers with an X between them sum to 10.  Numbers with a V between them sum to 5.  Numbers with a white dot between them are consecutive.  Numbers with a black dot between them are in a ratio of 1:2.  The number in the gray square is even.
