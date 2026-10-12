---
format: open-rules
title: Still No Kings
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9yna11l5zp
case: https://sudoku-sleuth.com/cases/still-no-kings
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=7 r2c5=4 r8c5=7 r9c6=6
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r3c6-r4c6 colour "white"
kropki-2: kropki r8c9-r9c9 colour "white"
kropki-3: kropki r1c1-r2c1 colour "white"
kropki-4: kropki r1c1-r1c2 colour "black"
kropki-5: kropki r5c2-r6c2 colour "black"
kropki-6: kropki r8c2-r9c2 colour "black"
kropki-7: kropki r7c9-r8c9 colour "black"
kropki-8: kropki r7c4-r8c4 colour "black"
kropki-9: kropki r8c3-r9c3 colour "black"
kropki-10: kropki r8c1-r9c1 colour "black"
arrow-1: arrow r8c7-r7c6-r6c5 bulb ["r8c8"]
arrow-2: arrow r7c8-r6c7-r5c6 bulb ["r8c8"]
arrow-3: arrow r2c3-r3c4-r4c5 bulb ["r2c2"]
arrow-4: arrow r3c2-r4c3-r5c4 bulb ["r2c2"]
arrow-5: arrow r2c7-r3c6 bulb ["r2c8"]
arrow-6: arrow r3c8-r4c7 bulb ["r2c8"]
arrow-7: arrow r7c2-r6c3 bulb ["r8c2"]
arrow-8: arrow r8c3-r7c4 bulb ["r8c2"]
```

**Sudoku, Antiking, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Antiking: Cells that are a chess king’s move apart cannot contain the same digit.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
