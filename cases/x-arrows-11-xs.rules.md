---
format: open-rules
title: X Arrows, 11 Xs
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/53vn11e72w
case: https://sudoku-sleuth.com/cases/x-arrows-11-xs
library: https://rules.sudoku-sleuth.com/
status: read
exported: c2784fa9c5346b459c7faab9d92d6a6b
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1-r4c1 bulb ["r1c2"]
arrow-2: arrow r2c4-r3c4 bulb ["r1c3"]
arrow-3: arrow r8c6-r7c6 bulb ["r9c7"]
arrow-4: arrow r8c9-r7c9-r6c9 bulb ["r9c8"]
arrow-5: arrow r6c4-r5c4 bulb ["r7c3"]
arrow-6: arrow r4c6-r5c6 bulb ["r3c7"]
arrow-7: arrow r7c1-r8c2 bulb ["r6c1"]
arrow-8: arrow r3c9-r2c8 bulb ["r4c8"]
arrow-9: arrow r4c2-r5c2 bulb ["r3c2"]
arrow-10: arrow r6c8-r5c8 bulb ["r7c8"]
pair-1: pair r1c2-r1c3 sum 10
pair-2: pair r5c6-r6c6 sum 10
pair-3: pair r5c3-r5c4 sum 10
pair-4: pair r3c1-r3c2 sum 10
pair-5: pair r3c3-r3c4 sum 10
pair-6: pair r8c1-r9c1 sum 10
pair-7: pair r1c6-r1c7 sum 10
pair-8: pair r7c2-r8c2 sum 10
pair-9: pair r7c3-r8c3 sum 10
pair-10: pair r8c9-r9c9 sum 10
pair-11: pair r9c7-r9c8 sum 10
```

**Sudoku, Arrows, X Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- X Pairs: Digits separated by an X sum to 10.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
