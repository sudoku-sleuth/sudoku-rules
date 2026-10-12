---
fog:
  initiallyLit:
    - 40
format: open-rules
title: Bread Crumbs Through the Fog
setter: Meggen033
source: https://sudokupad.app/043st4ofdh
case: https://sudoku-sleuth.com/cases/bread-crumbs-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c5-r5c5 colour "white"
kropki-2: kropki r5c5-r6c5 colour "white"
kropki-3: kropki r4c4-r4c5 colour "white"
kropki-4: kropki r5c3-r5c4 colour "white"
kropki-5: kropki r5c6-r5c7 colour "white"
kropki-6: kropki r4c7-r5c7 colour "white"
kropki-7: kropki r5c1-r5c2 colour "white"
kropki-8: kropki r3c7-r3c8 colour "white"
kropki-9: kropki r3c6-r3c7 colour "white"
kropki-10: kropki r3c4-r3c5 colour "white"
kropki-11: kropki r3c3-r3c4 colour "white"
kropki-12: kropki r7c4-r7c5 colour "white"
kropki-13: kropki r6c7-r6c8 colour "white"
kropki-14: kropki r6c7-r7c7 colour "white"
kropki-15: kropki r7c7-r8c7 colour "white"
kropki-16: kropki r2c2-r3c2 colour "white"
kropki-17: kropki r2c2-r2c3 colour "white"
kropki-18: kropki r8c2-r8c3 colour "white"
kropki-19: kropki r7c2-r8c2 colour "white"
kropki-20: kropki r7c9-r8c9 colour "white"
kropki-21: kropki r8c8-r8c9 colour "white"
kropki-22: kropki r8c4-r8c5 colour "white"
kropki-23: kropki r8c5-r8c6 colour "white"
kropki-24: kropki r1c8-r2c8 colour "white"
kropki-25: kropki r5c4-r5c5 colour "black"
kropki-26: kropki r5c5-r5c6 colour "black"
kropki-27: kropki r4c3-r5c3 colour "black"
kropki-28: kropki r3c8-r4c8 colour "black"
kropki-29: kropki r3c5-r3c6 colour "black"
kropki-30: kropki r6c3-r7c3 colour "black"
kropki-31: kropki r7c3-r7c4 colour "black"
kropki-32: kropki r5c8-r6c8 colour "black"
kropki-33: kropki r2c1-r2c2 colour "black"
```

•    Normal Sudoku rules apply. 
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.
