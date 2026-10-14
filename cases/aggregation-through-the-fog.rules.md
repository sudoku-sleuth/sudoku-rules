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
title: Aggregation Through The Fog
setter: Meggen033
source: https://sudokupad.app/tje5bohba5
case: https://sudoku-sleuth.com/cases/aggregation-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
exported: cd9a4e4104377ec945ff268d8a573f36
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r3c3 white
kropki-2: kropki r4c5-r4c6 white
kropki-3: kropki r6c1-r6c2 white
kropki-4: kropki r2c9-r3c9 white
kropki-5: kropki r4c8-r5c8 white
kropki-6: kropki r5c3-r5c4 white
kropki-7: kropki r3c2-r3c3 black
kropki-8: kropki r4c3-r4c4 black
kropki-9: kropki r6c3-r7c3 black
kropki-10: kropki r7c6-r8c6 black
kropki-11: kropki r9c5-r9c6 black
kropki-12: kropki r7c7-r7c8 black
kropki-13: kropki r1c8-r2c8 black
renban r1c1-r2c2-r3c3
region-sum r2c1-r3c1-r3c2-r4c2-r4c3-r5c4-r5c5-r6c5-r6c4-r8c3-r8c2-r7c2-r7c3-r1c2-r1c3-r2c3-r3c4-r2c5-r2c6-r3c6-r3c7-r2c8-r3c8-r4c9-r5c9-r6c9-r7c9-r8c9-r9c8-r9c7-r9c6-r8c5-r8c4 segments [["r2c1","r3c1","r3c2"],["r4c2","r4c3"],["r5c4","r5c5","r6c5","r6c4"],["r8c3","r8c2","r7c2","r7c3"],["r1c2","r1c3","r2c3"],["r3c4","r2c5","r2c6","r3c6"],["r3c7","r2c8","r3c8"],["r4c9","r5c9","r6c9"],["r7c9","r8c9","r9c8","r9c7"],["r9c6","r8c5","r8c4"]]
pair-1: pair r4c1-r4c2 sum 10
pair-2: pair r1c4-r2c4 sum 10
pair-3: pair r4c4-r5c4 sum 10
pair-4: pair r8c4-r9c4 sum 10
pair-5: pair r1c3-r2c3 sum 10
pair-6: pair r2c4-r3c4 sum 5
```

•    Normal Sudoku rules apply. 
•    THERE IS ONE, AND ONLY ONE, blue sumline,where box borders divide the line into segments of equal sum.
•    Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
