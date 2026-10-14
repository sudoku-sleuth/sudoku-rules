---
format: open-rules
title: What's done can't be undone
setter: The Bard
source: https://sudokupad.app/46qb09fycy
case: https://sudoku-sleuth.com/cases/what-s-done-can-t-be-undone
library: https://rules.sudoku-sleuth.com/
status: read
exported: ebe87bc6a25518a4355b5b040d233d3c
---

```rules
sudoku 9x9
kropki-1: kropki r8c9-r9c9 black
kropki-2: kropki r7c7-r7c8 black
kropki-3: kropki r7c7-r8c7 black
kropki-4: kropki r7c6-r7c7 black
kropki-5: kropki r9c6-r9c7 black
kropki-6: kropki r5c3-r6c3 black
kropki-7: kropki r8c2-r9c2 black
kropki-8: kropki r1c8-r1c9 black
kropki-9: kropki r2c5-r2c6 black
kropki-10: kropki r3c1-r3c2 black
kropki-11: kropki r4c4-r5c4 black
kropki-12: kropki r5c3-r5c4 black
kropki-13: kropki r9c2-r9c3 black
kropki-14: kropki r1c5-r1c6 black
kropki-15: kropki r2c8-r3c8 black
kropki-16: kropki r2c3-r3c3 black
kropki-17: kropki r4c5-r4c6 black
kropki-18: kropki r5c7-r6c7 black
kropki-19: kropki r6c2-r7c2 black
kropki-20: kropki r1c1-r1c2 black
negative relations [{"op":"ratio","value":2}] except [["r8c9","r9c9"],["r7c7","r7c8"],["r7c7","r8c7"],["r7c6","r7c7"],["r9c6","r9c7"],["r5c3","r6c3"],["r8c2","r9c2"],["r1c8","r1c9"],["r2c5","r2c6"],["r3c1","r3c2"],["r4c4","r5c4"],["r5c3","r5c4"],["r9c2","r9c3"],["r1c5","r1c6"],["r2c8","r3c8"],["r2c3","r3c3"],["r4c5","r4c6"],["r5c7","r6c7"],["r6c2","r7c2"],["r1c1","r1c2"]]
quadruple-1: quadruple r6c6-r6c7-r7c6-r7c7 digits [1,4,6,8]
quadruple-2: quadruple r6c3-r6c4-r7c3-r7c4 digits [2,3,5,9]
quadruple-3: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,3,4,7]
quadruple-4: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,3,5,9]
quadruple-5: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,7,9]
quadruple-6: quadruple r8c1-r8c2-r9c1-r9c2 digits [2,3,4,5]
quadruple-7: quadruple r8c8-r8c9-r9c8-r9c9 digits [3,5,6,9]
quadruple-8: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,3,4,8]
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.

Kropki Dots: Digits separated by a black dot have a ratio of 2:1, all black dots have been given.

Quadruples: digits in the small circle must appear in one of the four surrounding cells.
