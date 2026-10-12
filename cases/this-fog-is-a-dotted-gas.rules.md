---
fog:
  initiallyLit:
    - 13
    - 40
    - 67
format: open-rules
title: This FOG is a Dotted GAS
setter: Meggen033
source: https://sudokupad.app/iuwjuacl4v
case: https://sudoku-sleuth.com/cases/this-fog-is-a-dotted-gas
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r6c5 colour "white"
kropki-2: kropki r4c5-r5c5 colour "white"
kropki-3: kropki r7c4-r7c5 colour "white"
kropki-4: kropki r6c4-r7c4 colour "white"
kropki-5: kropki r3c4-r3c5 colour "white"
kropki-6: kropki r4c4-r5c4 colour "white"
kropki-7: kropki r8c3-r8c4 colour "white"
kropki-8: kropki r6c3-r7c3 colour "white"
kropki-9: kropki r5c3-r5c4 colour "white"
kropki-10: kropki r3c6-r4c6 colour "white"
kropki-11: kropki r3c6-r3c7 colour "white"
kropki-12: kropki r3c7-r3c8 colour "white"
kropki-13: kropki r4c7-r5c7 colour "white"
kropki-14: kropki r5c7-r6c7 colour "white"
kropki-15: kropki r2c9-r3c9 colour "white"
kropki-16: kropki r5c9-r6c9 colour "white"
kropki-17: kropki r4c2-r5c2 colour "white"
kropki-18: kropki r4c2-r4c3 colour "white"
kropki-19: kropki r5c1-r6c1 colour "white"
kropki-20: kropki r6c1-r7c1 colour "white"
kropki-21: kropki r8c1-r8c2 colour "white"
kropki-22: kropki r9c2-r9c3 colour "white"
kropki-23: kropki r7c8-r7c9 colour "white"
kropki-24: kropki r8c5-r9c5 colour "black"
kropki-25: kropki r2c5-r3c5 colour "black"
kropki-26: kropki r1c5-r2c5 colour "black"
kropki-27: kropki r4c6-r5c6 colour "black"
kropki-28: kropki r7c3-r8c3 colour "black"
kropki-29: kropki r5c3-r6c3 colour "black"
kropki-30: kropki r3c7-r4c7 colour "black"
kropki-31: kropki r3c9-r4c9 colour "black"
kropki-32: kropki r1c8-r1c9 colour "black"
kropki-33: kropki r1c1-r1c2 colour "black"
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell.  No guessing is required.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
