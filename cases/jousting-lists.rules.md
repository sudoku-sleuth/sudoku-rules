---
format: open-rules
title: Jousting Lists
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f3sbj39gye
case: https://sudoku-sleuth.com/cases/jousting-lists
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c2=6 r4c5=2 r5c4=3 r5c6=7 r6c5=6
exported: 007fc26e20625d69731686090ed7f6ad
---

```rules
sudoku 9x9
anti-knight
arrow-1: arrow r4c2-r5c1-r6c2 bulb ["r3c3"]
arrow-2: arrow r2c4-r1c5-r2c6 bulb ["r3c3"]
arrow-3: arrow r6c8-r5c9-r4c8 bulb ["r7c7"]
arrow-4: arrow r8c6-r9c5-r8c4 bulb ["r7c7"]
arrow-5: arrow r2c8-r3c8 bulb ["r1c8"]
arrow-6: arrow r8c2-r7c2 bulb ["r9c2"]
arrow-7: arrow r4c6-r3c7 bulb ["r5c7"]
arrow-8: arrow r7c3-r6c4-r5c5 bulb ["r8c3"]
arrow-9: arrow r9c9-r9c8 bulb ["r8c8"]
arrow-10: arrow r1c1-r1c2 bulb ["r2c2"]
```

**Sudoku, Antiknight, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Antiknight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
