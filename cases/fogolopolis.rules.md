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
title: Fogolopolis
setter: Meggen033
source: https://sudokupad.app/8r3j0u2por
case: https://sudoku-sleuth.com/cases/fogolopolis
library: https://rules.sudoku-sleuth.com/
status: read
exported: b5ad14233b937681ddf27784f0b8dfab
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r6c5 white
kropki-2: kropki r5c5-r5c6 white
kropki-3: kropki r4c3-r4c4 white
kropki-4: kropki r5c2-r5c3 white
kropki-5: kropki r1c6-r2c6 white
kropki-6: kropki r8c8-r9c8 white
kropki-7: kropki r1c4-r2c4 white
kropki-8: kropki r1c7-r2c7 white
kropki-9: kropki r8c6-r8c7 white
kropki-10: kropki r9c4-r9c5 white
kropki-11: kropki r5c4-r6c4 black
kropki-12: kropki r4c5-r4c6 black
kropki-13: kropki r4c7-r4c8 black
kropki-14: kropki r7c7-r7c8 black
arrow-1: arrow r5c5-r4c6 bulb ["r6c4"]
arrow-2: arrow r3c6-r3c7-r4c7-r5c7 bulb ["r3c5"]
arrow-3: arrow r7c4-r7c3-r6c3-r5c3 bulb ["r7c5"]
arrow-4: arrow r3c3-r3c4 bulb ["r4c3"]
arrow-5: arrow r7c7-r7c6 bulb ["r6c7"]
arrow-6: arrow r2c8-r2c7 bulb ["r3c8"]
arrow-7: arrow r2c2-r2c3 bulb ["r3c2"]
```

•	Normal Sudoku rules apply. 
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	The digits along each arrow must sum to the digit in the circled cell.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
