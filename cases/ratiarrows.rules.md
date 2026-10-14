---
format: open-rules
title: Ratiarrows
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dft05ey02d
case: https://sudoku-sleuth.com/cases/ratiarrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: e2ec0de2ac44618fd10cae0e200a94c5
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r2c5 black
kropki-2: kropki r2c5-r2c6 black
kropki-3: kropki r6c2-r6c3 black
kropki-4: kropki r6c7-r6c8 black
kropki-5: kropki r6c1-r7c1 black
kropki-6: kropki r6c9-r7c9 black
kropki-7: kropki r7c5-r7c6 black
kropki-8: kropki r5c4-r5c5 black
kropki-9: kropki r4c6-r4c7 black
kropki-10: kropki r3c4-r4c4 black
arrow-1: arrow r1c2-r1c3-r2c4 bulb ["r1c1"]
arrow-2: arrow r1c8-r1c7-r2c6 bulb ["r1c9"]
arrow-3: arrow r8c1-r7c1-r6c2 bulb ["r9c1"]
arrow-4: arrow r8c9-r7c9-r6c8 bulb ["r9c9"]
arrow-5: arrow r7c4-r7c5 bulb ["r6c3"]
arrow-6: arrow r5c6-r5c5 bulb ["r6c7"]
arrow-7: arrow r4c6-r4c5 bulb ["r5c7"]
arrow-8: arrow r3c3-r4c4 bulb ["r3c2"]
```

**Sudoku, Arrows, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. 
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
