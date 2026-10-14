---
format: open-rules
title: Circular Firing Squad
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wz8gov6fnu
case: https://sudoku-sleuth.com/cases/circular-firing-squad
library: https://rules.sudoku-sleuth.com/
status: read
exported: 00ac070bb05c0e3a52b998945cc33fe4
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r1c5 black
kropki-2: kropki r9c5-r9c6 black
kropki-3: kropki r5c2-r6c2 black
kropki-4: kropki r4c8-r5c8 black
kropki-5: kropki r2c3-r2c4 black
kropki-6: kropki r8c6-r8c7 black
kropki-7: kropki r4c5-r4c6 black
kropki-8: kropki r7c3-r7c4 black
kropki-9: kropki r9c8-r9c9 black
kropki-10: kropki r3c7-r3c8 black
kropki-11: kropki r8c6-r9c6 black
arrow-1: arrow r2c3-r1c4-r1c5-r1c6-r2c7 bulb ["r3c2"]
arrow-2: arrow r8c7-r9c6-r9c5-r9c4-r8c3 bulb ["r7c8"]
arrow-3: arrow r6c2-r5c2-r4c2 bulb ["r7c2"]
arrow-4: arrow r4c8-r5c8-r6c8 bulb ["r3c8"]
arrow-5: arrow r6c6-r6c5 bulb ["r5c7"]
arrow-6: arrow r4c4-r4c5 bulb ["r5c3"]
arrow-7: arrow r8c8-r7c9 bulb ["r9c7"]
arrow-8: arrow r8c2-r7c1 bulb ["r9c3"]
arrow-9: arrow r2c2-r3c1 bulb ["r1c3"]
arrow-10: arrow r2c8-r3c9 bulb ["r1c7"]
```

**Sudoku, Arrows, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. 
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
