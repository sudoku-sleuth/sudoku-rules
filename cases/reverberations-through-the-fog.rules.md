---
fog:
  initiallyLit:
    - 20
    - 21
    - 22
    - 29
    - 30
    - 31
    - 38
    - 39
    - 40
format: open-rules
title: Reverberations through the Fog
setter: Meggen033
source: https://sudokupad.app/m2nzr66459
case: https://sudoku-sleuth.com/cases/reverberations-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r3c3-r4c3 colour "white"
kropki-3: kropki r6c3-r6c4 colour "white"
kropki-4: kropki r6c4-r7c4 colour "white"
kropki-5: kropki r9c8-r9c9 colour "white"
kropki-6: kropki r9c7-r9c8 colour "white"
kropki-7: kropki r3c3-r3c4 colour "black"
kropki-8: kropki r3c2-r3c3 colour "black"
kropki-9: kropki r2c5-r2c6 colour "black"
kropki-10: kropki r8c1-r8c2 colour "black"
palindrome r3c4-r4c3-r3c2-r2c1-r2c2-r1c3-r2c4-r1c5-r2c5-r2c6-r3c7-r4c7-r4c8-r5c9-r6c9-r6c8-r7c8-r7c7-r8c6-r8c5-r9c5-r8c4-r7c3-r8c2-r9c2-r8c1-r7c1-r7c2-r6c3-r7c4-r7c5-r7c6-r6c7-r5c7-r6c6-r5c5-r4c5
pair-1: pair r6c5-r7c5 sum 10
pair-2: pair r2c7-r3c7 sum 10
pair-3: pair r5c4-r5c5 sum 5
```

•    Normal Sudoku rules apply. 
•    THERE IS ONE, AND ONLY ONE, grey palindrome line which reads the same forwards or backwards.
•    Adjacent cells connected with a V must sum to 5.
•    Adjacent cells connected with a X must sum to 10.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
