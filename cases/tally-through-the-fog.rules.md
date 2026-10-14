---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r1c3
    - r2c1
    - r2c2
    - r2c3
    - r3c1
    - r3c2
    - r3c3
format: open-rules
title: Tally through the Fog
setter: Meggen033
source: https://sudokupad.app/m2827o31uq
case: https://sudoku-sleuth.com/cases/tally-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
exported: 26eb70eb6ed193f0e1cb05eda0d7f8be
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r1c3 white
kropki-2: kropki r1c2-r2c2 white
kropki-3: kropki r3c2-r3c3 white
kropki-4: kropki r1c4-r2c4 white
kropki-5: kropki r3c7-r4c7 white
kropki-6: kropki r6c7-r7c7 white
kropki-7: kropki r2c1-r2c2 black
kropki-8: kropki r2c4-r2c5 black
kropki-9: kropki r3c2-r4c2 black
kropki-10: kropki r5c1-r6c1 black
kropki-11: kropki r6c3-r7c3 black
kropki-12: kropki r6c3-r6c4 black
kropki-13: kropki r6c4-r7c4 black
kropki-14: kropki r5c4-r5c5 black
region-sum r1c3-r1c4-r2c5-r3c5-r4c6-r3c7-r3c8-r4c9-r5c9-r6c9-r7c8-r7c7-r6c6-r6c5-r7c4-r8c4-r9c3-r8c2-r7c1-r6c2-r5c3-r4c2-r3c2-r3c1-r2c1 segments [["r1c3"],["r1c4","r2c5","r3c5"],["r4c6"],["r3c7","r3c8"],["r4c9","r5c9","r6c9"],["r7c8","r7c7"],["r6c6","r6c5"],["r7c4","r8c4"],["r9c3","r8c2","r7c1"],["r6c2","r5c3","r4c2"],["r3c2","r3c1","r2c1"]]
```

•    Normal Sudoku rules apply. 
•    THERE IS ONE, AND ONLY ONE, blue sumline, where box borders divide the line into segments of equal sum.  Distinct segments of the line within the same box count as separate sums to the same value.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
