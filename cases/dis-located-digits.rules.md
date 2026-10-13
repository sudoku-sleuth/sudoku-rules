---
format: open-rules
title: DIS-LOCATED DIGITS
setter: Will Power
source: https://sudokupad.app/edujumojhs
case: https://sudoku-sleuth.com/cases/dis-located-digits
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c6-r6c6 colour "black"
kropki-2: kropki r6c4-r6c5 colour "black"
kropki-3: kropki r4c4-r5c4 colour "black"
kropki-4: kropki r4c8-r4c9 colour "black"
kropki-5: kropki r8c7-r9c7 colour "black"
kropki-6: kropki r7c8-r7c9 colour "black"
kropki-7: kropki r8c8-r8c9 colour "black"
kropki-8: kropki r7c1-r8c1 colour "black"
kropki-9: kropki r8c2-r9c2 colour "black"
kropki-10: kropki r5c3-r6c3 colour "black"
kropki-11: kropki r4c1-r5c1 colour "black"
kropki-12: kropki r4c2-r5c2 colour "black"
kropki-13: kropki r1c3-r2c3 colour "black"
kropki-14: kropki r2c1-r3c1 colour "black"
kropki-15: kropki r2c5-r3c5 colour "black"
kropki-16: kropki r2c4-r2c5 colour "black"
kropki-17: kropki r1c6-r2c6 colour "black"
kropki-18: kropki r8c1-r8c2 colour "black"
kropki-19: kropki r6c5-r6c6 colour "black"
pair-1: pair r2c8-r2c9 sum 10
pair-2: pair r3c8-r3c9 sum 10
pair-3: pair r4c1-r4c2 sum 10
pair-4: pair r4c7-r4c8 sum 10
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

Normal Sudoku rules apply. 

DISJOINT SETS- Cells that appear in the same position in the 9 different boxes cannot have the same digit.

KROPKI PAIRS- Digits with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

XV PAIRS- Digits with an X between them sum to 10. Not all possible Xs are given.
