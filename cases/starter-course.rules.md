---
format: open-rules
title: Starter Course
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/slicedsudoku/startercourse
case: https://sudoku-sleuth.com/cases/starter-course
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5a6c696578d9ed1a24379358664d134a
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 3 connected true
cage-2: cage r2c3-r2c4 total 8 connected true
cage-3: cage r4c6-r5c6-r6c6 total 15 connected true
cage-4: cage r6c4-r6c5 total 11 connected true
cage-5: cage r1c9-r2c9 total 11 connected true
cage-6: cage r9c1-r9c2 total 6 connected true
sandwich-1: sandwich r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 13
sandwich-2: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 25
sandwich-3: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 28
sandwich-4: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 32
sandwich-5: sandwich r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 26
sandwich-6: sandwich r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 18
sandwich-7: sandwich r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r3c9-r2c9-r1c9 sum 20
sandwich-8: sandwich r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 28
sandwich-9: sandwich r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 21
sandwich-10: sandwich r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 sum 4
sandwich-11: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 20
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Sandwich: The numbers outside the grid give the sum of the digits between the 1 and the 9 in that row or column.
• Cages: Digits in cages may not repeat and must sum to the number in the top left corner of the cage.
