---
format: open-rules
title: Olive Flat Bread
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/slicedsudoku/oliveflatbread
case: https://sudoku-sleuth.com/cases/olive-flat-bread
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r2c2 colour "black"
kropki-2: kropki r1c8-r1c9 colour "black"
kropki-3: kropki r3c7-r4c7 colour "black"
kropki-4: kropki r4c6-r5c6 colour "black"
kropki-5: kropki r6c5-r6c6 colour "black"
kropki-6: kropki r6c2-r7c2 colour "black"
kropki-7: kropki r4c2-r5c2 colour "black"
sandwich-1: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 33
sandwich-2: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 33
sandwich-3: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 20
sandwich-4: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 29
sandwich-5: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 17
sandwich-6: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 21
sandwich-7: sandwich r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 13
sandwich-8: sandwich r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 0
sandwich-9: sandwich r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 25
sandwich-10: sandwich r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 27
sandwich-11: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 5
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Sandwich: The numbers outside the grid give the sum of the digits between the 1 and the 9 in that row or column.
• Ratio Pairs: Digits separated by a black dot must be in a 2:1 ratio.
