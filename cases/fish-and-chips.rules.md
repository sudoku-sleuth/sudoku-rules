---
format: open-rules
title: Fish and Chips
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/z9tqry4n6w
case: https://sudoku-sleuth.com/cases/fish-and-chips
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6243cdacfc5aab8a0ff858e83e94f1d9
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,9]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,9]
quadruple-3: quadruple r7c3-r7c4-r8c3-r8c4 digits [1,9]
quadruple-4: quadruple r4c6-r4c7-r5c6-r5c7 digits [1]
sandwich-1: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 26
sandwich-2: sandwich r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 9
sandwich-3: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 8
sandwich-4: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 14
sandwich-5: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 8
sandwich-6: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 5
sandwich-7: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 12
sandwich-8: sandwich r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 24
sandwich-9: sandwich r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4 sum 20
sandwich-10: sandwich r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 sum 26
sandwich-11: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 22
sandwich-12: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 21
sandwich-13: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 17
sandwich-14: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 13
```

**Sudoku, Sandwiches, Quads** 

- Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
- Sandwich: The numbers outside the grid give the sum of the digits between the 1 and the 9 in that row or column.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
