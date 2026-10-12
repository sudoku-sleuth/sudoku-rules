---
format: open-rules
title: No More Dots!!!
setter: Meggen033
source: https://sudokupad.app/necsed7st8
case: https://sudoku-sleuth.com/cases/no-more-dots
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r5c2 colour "black"
kropki-2: kropki r8c2-r8c3 colour "black"
kropki-3: kropki r8c3-r9c3 colour "black"
kropki-4: kropki r8c5-r8c6 colour "black"
kropki-5: kropki r8c7-r8c8 colour "black"
kropki-6: kropki r7c8-r8c8 colour "black"
kropki-7: kropki r6c6-r6c7 colour "black"
negative relations [{"op":"ratio","value":2}] except [["r4c2","r5c2"],["r8c2","r8c3"],["r8c3","r9c3"],["r8c5","r8c6"],["r8c7","r8c8"],["r7c8","r8c8"],["r6c6","r6c7"]]
quadruple-1: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,2]
quadruple-2: quadruple r6c6-r6c7-r7c6-r7c7 digits [2,4]
quadruple-3: quadruple r6c3-r6c4-r7c3-r7c4 digits [4,8]
quadruple-4: quadruple r3c6-r3c7-r4c6-r4c7 digits [3,6]
quadruple-5: quadruple r4c8-r4c9-r5c8-r5c9 digits [4,8]
quadruple-6: quadruple r4c1-r4c2-r5c1-r5c2 digits [1,2]
quadruple-7: quadruple r5c4-r5c5-r6c4-r6c5 digits [4,8]
quadruple-8: quadruple r1c1-r1c2-r2c1-r2c2 digits [3,6]
quadruple-9: quadruple r1c8-r1c9-r2c8-r2c9 digits [7,9]
quadruple-10: quadruple r4c5-r4c6-r5c5-r5c6 digits [5,7]
quadruple-11: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,7]
quadruple-12: quadruple r8c1-r8c2-r9c1-r9c2 digits [6,7]
quadruple-13: quadruple r2c5-r2c6-r3c5-r3c6 digits [7,9]
```

Normal Sudoku rules apply.

A black dot between cells indicates cell values with a 2:1 ratio. ***ALL black dots are shown***

Digits in a white circle must appear at least once in the four surrounding cells.
