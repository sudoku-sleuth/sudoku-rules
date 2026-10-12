---
format: open-rules
title: Where I'm 64
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dc36etd0ya
case: https://sudoku-sleuth.com/cases/where-i-m-64
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [2,9]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [3]
quadruple-3: quadruple r3c3-r3c4-r4c3-r4c4 digits [1,9]
quadruple-4: quadruple r3c6-r3c7-r4c6-r4c7 digits [6,1]
quadruple-5: quadruple r7c3-r7c4-r8c3-r8c4 digits [2,9]
quadruple-6: quadruple r7c5-r7c6-r8c5-r8c6 digits [3]
quadruple-7: quadruple r6c2-r6c3-r7c2-r7c3 digits [6,1]
quadruple-8: quadruple r6c7-r6c8-r7c7-r7c8 digits [2,9]
quadruple-9: quadruple r4c8-r4c9-r5c8-r5c9 digits [1,9]
numbered-room-1: numbered-room r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 digit 6
numbered-room-2: numbered-room r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 digit 4
numbered-room-3: numbered-room r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 digit 4
numbered-room-4: numbered-room r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 digit 6
numbered-room-5: numbered-room r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 digit 6
numbered-room-6: numbered-room r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 digit 4
numbered-room-7: numbered-room r1c9-r1c8-r1c7-r1c6-r1c5-r1c4-r1c3-r1c2-r1c1 digit 6
numbered-room-8: numbered-room r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 digit 4
numbered-room-9: numbered-room r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6 digit 6
numbered-room-10: numbered-room r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 digit 4
numbered-room-11: numbered-room r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 digit 6
numbered-room-12: numbered-room r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 digit 4
numbered-room-13: numbered-room r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 digit 6
numbered-room-14: numbered-room r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 digit 4
numbered-room-15: numbered-room r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 digit 6
numbered-room-16: numbered-room r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 digit 4
```

**Sudoku, Numbered Rooms, Quadruples**

- Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
- Numbered Rooms: A clue outside the grid indicates the digit which has to be placed in the Nth cell in the corresponding direction, where N is the digit placed in the first cell in that direction.
-  Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

Set for Missing's 64th birthday. For more of our puzzles, visit https://missingdeck.net
