---
format: open-rules
title: Konami Code
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qpw0er02jt
case: https://sudoku-sleuth.com/cases/konami-code
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=7 r8c2=8 r9c7=3
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3 bulb ["r1c1"]
arrow-2: arrow r3c2-r3c3 bulb ["r3c1"]
arrow-3: arrow r2c5-r2c6 bulb ["r2c4"]
arrow-4: arrow r3c8-r3c9 bulb ["r3c7"]
arrow-5: arrow r1c5-r1c4 bulb ["r1c6"]
arrow-6: arrow r2c8-r2c9 bulb ["r2c7"]
arrow-7: arrow r5c1-r6c1 bulb ["r4c1"]
arrow-8: arrow r5c5-r4c5 bulb ["r6c5"]
arrow-9: arrow r5c8-r6c8 bulb ["r4c8"]
arrow-10: arrow r5c2-r6c2 bulb ["r4c2"]
arrow-11: arrow r7c9-r8c9 bulb ["r6c9"]
arrow-12: arrow r6c7-r7c7 bulb ["r5c7"]
arrow-13: arrow r7c3-r7c4 bulb ["r7c2"]
arrow-14: arrow r9c5-r9c4 bulb ["r9c6"]
index r1c5-r2c5-r3c5-r8c5-r9c5-r4c5-r5c5-r6c5-r7c5-r1c1-r2c1-r3c1-r4c1-r8c1-r9c1-r5c1-r6c1-r7c1-r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 axis "column"
```

**Sudoku, Column Indexing, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Column Indexing: Digits placed in red cells (all of columns 1, 5, and 9) indicate the position of the corresponding column number in that row.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
