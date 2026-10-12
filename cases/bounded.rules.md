---
format: open-rules
title: Bounded
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uif3639yku
case: https://sudoku-sleuth.com/cases/bounded
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=5 r3c3=1 r3c7=2 r4c6=7 r4c9=5 r6c1=6 r7c3=2 r7c7=3 r8c2=4 r9c4=4
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1-r4c1 bulb ["r1c1"]
arrow-2: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-3: arrow r9c8-r9c7-r9c6 bulb ["r9c9"]
arrow-4: arrow r8c9-r7c9-r6c9 bulb ["r9c9"]
arrow-5: arrow r1c8-r1c7 bulb ["r1c9"]
arrow-6: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-7: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-8: arrow r9c2-r9c3 bulb ["r9c1"]
arrow-9: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-10: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-11: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-12: arrow r6c5-r7c5 bulb ["r5c5"]
```

**Sudoku, Arrows**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
