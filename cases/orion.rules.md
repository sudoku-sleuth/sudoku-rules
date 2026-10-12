---
format: open-rules
title: Orion
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/orion
case: https://sudoku-sleuth.com/cases/orion
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r4c5-r5c5 colour "white"
kropki-3: kropki r8c7-r9c7 colour "white"
kropki-4: kropki r9c6-r9c7 colour "white"
kropki-5: kropki r6c9-r7c9 colour "white"
kropki-6: kropki r2c5-r3c5 colour "white"
kropki-7: kropki r3c1-r4c1 colour "white"
kropki-8: kropki r4c1-r4c2 colour "white"
kropki-9: kropki r5c2-r5c3 colour "white"
kropki-10: kropki r4c2-r5c2 colour "black"
arrow-1: arrow r3c2-r3c1-r4c1 bulb ["r3c3"]
arrow-2: arrow r2c3-r1c3-r1c4 bulb ["r3c3"]
arrow-3: arrow r4c3-r5c3-r5c2 bulb ["r3c3"]
arrow-4: arrow r3c4-r3c5-r2c5 bulb ["r3c3"]
arrow-5: arrow r6c6-r5c5 bulb ["r7c7"]
arrow-6: arrow r8c7-r9c7-r9c6 bulb ["r7c7"]
arrow-7: arrow r7c8-r7c9-r6c9 bulb ["r7c7"]
arrow-8: arrow r7c2-r6c1 bulb ["r8c2"]
arrow-9: arrow r8c3-r9c4 bulb ["r8c2"]
arrow-10: arrow r2c8-r1c8 bulb ["r3c8"]
arrow-11: arrow r4c8-r4c7 bulb ["r3c8"]
```

**Sudoku, Arrow, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Kropki pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
