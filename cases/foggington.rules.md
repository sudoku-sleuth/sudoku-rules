---
fog:
  initiallyLit:
    - r4c4
    - r4c5
    - r4c6
    - r5c4
    - r5c5
    - r5c6
    - r6c4
    - r6c5
    - r6c6
format: open-rules
title: Foggington
setter: Meggen033
source: https://sudokupad.app/888apmcz9e
case: https://sudoku-sleuth.com/cases/foggington
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=4
exported: 92ebe7ef9c084d181a337f47c977ea1e
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r4c4 white
kropki-2: kropki r3c6-r4c6 white
kropki-3: kropki r7c5-r8c5 white
kropki-4: kropki r7c3-r7c4 white
kropki-5: kropki r6c7-r7c7 white
kropki-6: kropki r1c4-r2c4 white
kropki-7: kropki r7c7-r8c7 white
kropki-8: kropki r4c3-r5c3 white
kropki-9: kropki r3c8-r4c8 white
kropki-10: kropki r8c3-r8c4 white
kropki-11: kropki r5c8-r5c9 white
kropki-12: kropki r5c4-r5c5 black
kropki-13: kropki r5c5-r5c6 black
kropki-14: kropki r3c5-r3c6 black
kropki-15: kropki r6c3-r7c3 black
kropki-16: kropki r7c6-r7c7 black
pair-1: pair r5c4-r6c4 sum 10
pair-2: pair r5c6-r6c6 sum 10
pair-3: pair r3c4-r3c5 sum 10
pair-4: pair r2c7-r3c7 sum 10
pair-5: pair r2c6-r2c7 sum 10
pair-6: pair r4c7-r5c7 sum 10
pair-7: pair r7c2-r8c2 sum 10
pair-8: pair r6c7-r6c8 sum 10
pair-9: pair r4c5-r5c5 sum 5
pair-10: pair r2c3-r2c4 sum 5
pair-11: pair r2c3-r3c3 sum 5
pair-12: pair r6c2-r7c2 sum 5
```

•    Normal Sudoku rules apply. 
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.  No guessing is required.
