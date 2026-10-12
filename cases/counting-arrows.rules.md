---
format: open-rules
title: Counting Arrows
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r9tqs7i63f
case: https://sudoku-sleuth.com/cases/counting-arrows
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=9 r2c5=4 r3c3=8 r6c2=6 r7c1=7 r8c8=6 r9c6=8
---

```rules
sudoku 9x9
arrow-1: arrow r3c2 bulb ["r4c1"]
arrow-2: arrow r3c4 bulb ["r4c3"]
arrow-3: arrow r7c6 bulb ["r6c7"]
arrow-4: arrow r7c8 bulb ["r6c9"]
arrow-5: arrow r1c7-r1c8 bulb ["r1c6"]
arrow-6: arrow r3c7-r4c6 bulb ["r2c8"]
arrow-7: arrow r9c3-r9c2 bulb ["r9c4"]
arrow-8: arrow r7c3-r8c4 bulb ["r8c2"]
arrow-9: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-10: arrow r7c5 bulb ["r6c4"]
counting-circles r1c6-r2c8-r4c1-r4c3-r5c5-r6c4-r6c7-r6c9-r8c2-r9c4
```

**Sudoku, Counting Circles, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Counting Circles: A digit placed in circle tells the number of times that digit appears in a circle in the puzzle.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.

All circles in this puzzle are both counting circles and arrow circles. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
