---
format: open-rules
title: Rickrack
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/g2ngeo5k6k
case: https://sudoku-sleuth.com/cases/rickrack
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c8=6 r7c2=5
---

```rules
sudoku 9x9
kropki-1: kropki r7c7-r7c8 colour "white"
kropki-2: kropki r3c2-r3c3 colour "white"
kropki-3: kropki r6c1-r6c2 colour "white"
kropki-4: kropki r4c8-r4c9 colour "white"
kropki-5: kropki r1c3-r1c4 colour "white"
kropki-6: kropki r2c6-r3c6 colour "white"
kropki-7: kropki r6c3-r7c3 colour "white"
kropki-8: kropki r4c1-r4c2 colour "white"
kropki-9: kropki r4c3-r5c3 colour "white"
kropki-10: kropki r3c7-r4c7 colour "white"
kropki-11: kropki r5c8-r6c8 colour "white"
kropki-12: kropki r8c3-r9c3 colour "white"
arrow-1: arrow r4c4-r3c5-r4c6-r3c7 bulb ["r3c3"]
arrow-2: arrow r6c6-r7c5-r6c4-r7c3 bulb ["r7c7"]
arrow-3: arrow r8c6-r9c5-r8c4 bulb ["r9c7"]
arrow-4: arrow r2c4-r1c5-r2c6 bulb ["r1c3"]
arrow-5: arrow r4c3-r5c2-r6c3 bulb ["r3c2"]
arrow-6: arrow r6c7-r5c8-r4c7 bulb ["r7c8"]
arrow-7: arrow r7c1-r8c2-r9c1 bulb ["r6c2"]
arrow-8: arrow r3c9-r2c8-r1c9 bulb ["r4c8"]
```

**Sudoku, Arrows, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Consecutive pairs: Digits in cells separated by a white dot are consecutive. 


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
