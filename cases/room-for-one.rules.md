---
format: open-rules
title: Room for One
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/23cighauux
case: https://sudoku-sleuth.com/cases/room-for-one
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=4 r4c9=3 r8c4=3
exported: e7fd0923cea11fe418813682091f0397
---

```rules
sudoku 9x9
arrow-1: arrow r2c3-r2c4-r2c5 bulb ["r2c2"]
arrow-2: arrow r3c7-r3c6-r3c5 bulb ["r3c8"]
arrow-3: arrow r4c2-r4c3-r4c4 bulb ["r4c1"]
arrow-4: arrow r5c8-r5c7-r5c6 bulb ["r5c9"]
arrow-5: arrow r6c4-r6c5-r6c6 bulb ["r6c3"]
arrow-6: arrow r7c3-r7c4-r7c5 bulb ["r7c2"]
arrow-7: arrow r8c7-r8c6-r8c5 bulb ["r8c8"]
numbered-room-1: numbered-room r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 digit 1
numbered-room-2: numbered-room r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 digit 1
numbered-room-3: numbered-room r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 digit 1
numbered-room-4: numbered-room r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 digit 1
numbered-room-5: numbered-room r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 digit 1
numbered-room-6: numbered-room r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 digit 1
numbered-room-7: numbered-room r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 digit 1
numbered-room-8: numbered-room r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 digit 1
numbered-room-9: numbered-room r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 digit 1
numbered-room-10: numbered-room r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 digit 1
numbered-room-11: numbered-room r2c9-r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r2c1 digit 1
```

**Sudoku, Numbered Rooms, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Numbered Rooms: A clue outside the grid indicates the digit which has to be placed in the Nth cell in the corresponding direction, where N is the digit placed in the first cell in that direction.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
