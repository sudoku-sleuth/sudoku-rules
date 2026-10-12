---
format: open-rules
title: Starting Points
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/lzycfmri62
case: https://sudoku-sleuth.com/cases/starting-points
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=6 r2c8=4 r4c9=6 r5c2=6 r5c7=5 r8c3=1 r9c1=7 r9c5=3
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r2c9-r3c9-r4c9 bulb ["r1c9"]
arrow-3: arrow r8c1-r7c1-r6c1 bulb ["r9c1"]
arrow-4: arrow r8c5-r7c5 bulb ["r9c5"]
arrow-5: arrow r5c6-r5c5 bulb ["r5c7"]
arrow-6: arrow r4c7-r3c7 bulb ["r5c7"]
arrow-7: arrow r6c2-r5c2 bulb ["r7c2"]
arrow-8: arrow r9c8-r9c7-r9c6 bulb ["r9c9"]
arrow-9: arrow r8c9-r7c9 bulb ["r9c9"]
arrow-10: arrow r3c4-r3c5 bulb ["r3c3"]
arrow-11: arrow r4c3-r5c3 bulb ["r3c3"]
arrow-12: arrow r7c8-r6c8 bulb ["r8c8"]
```

**Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
