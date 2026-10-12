---
format: open-rules
title: Ups and Downs
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9mqycnyeay
case: https://sudoku-sleuth.com/cases/ups-and-downs
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 colour "black"
kropki-2: kropki r4c5-r5c5 colour "black"
kropki-3: kropki r3c9-r4c9 colour "black"
kropki-4: kropki r6c2-r7c2 colour "black"
kropki-5: kropki r5c8-r5c9 colour "black"
kropki-6: kropki r5c7-r6c7 colour "black"
kropki-7: kropki r7c5-r8c5 colour "black"
kropki-8: kropki r6c3-r7c3 colour "black"
kropki-9: kropki r4c3-r5c3 colour "black"
kropki-10: kropki r7c1-r8c1 colour "black"
kropki-11: kropki r8c6-r8c7 colour "black"
arrow-1: arrow r2c2-r3c2-r4c2 bulb ["r1c2"]
arrow-2: arrow r3c3-r4c3-r5c3 bulb ["r2c3"]
arrow-3: arrow r4c4-r5c4-r6c4 bulb ["r3c4"]
arrow-4: arrow r5c5-r6c5-r7c5 bulb ["r4c5"]
arrow-5: arrow r4c6-r3c6-r2c6 bulb ["r5c6"]
arrow-6: arrow r3c7-r2c7-r1c7 bulb ["r4c7"]
arrow-7: arrow r2c8-r1c8 bulb ["r3c8"]
arrow-8: arrow r3c9-r4c9-r5c9 bulb ["r2c9"]
arrow-9: arrow r3c1-r4c1 bulb ["r2c1"]
```

**Sudoku, Arrows, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
- Ratio pairs: Digits in cells separated by a black dot are in a 2:1 ratio. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
