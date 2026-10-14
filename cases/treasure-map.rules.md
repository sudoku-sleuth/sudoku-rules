---
format: open-rules
title: Treasure Map
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/15i9xeq08y
case: https://sudoku-sleuth.com/cases/treasure-map
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6d0f4a1d6eb9755eb4bca3f6cc82691f
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 white
kropki-2: kropki r5c7-r5c8 white
kropki-3: kropki r2c6-r3c6 white
kropki-4: kropki r8c4-r9c4 white
kropki-5: kropki r3c6-r4c6 white
kropki-6: kropki r3c4-r4c4 black
kropki-7: kropki r6c6-r7c6 black
kropki-8: kropki r5c6-r5c7 black
kropki-9: kropki r5c2-r5c3 black
kropki-10: kropki r7c5-r8c5 black
kropki-11: kropki r3c8-r3c9 black
kropki-12: kropki r6c1-r6c2 black
kropki-13: kropki r9c8-r9c9 black
kropki-14: kropki r1c1-r2c1 black
arrow-1: arrow r2c3-r3c4-r4c4 bulb ["r1c2"]
arrow-2: arrow r2c7-r3c6-r4c6 bulb ["r1c8"]
arrow-3: arrow r8c3-r7c4-r6c4 bulb ["r9c2"]
arrow-4: arrow r8c7-r7c6-r6c6 bulb ["r9c8"]
arrow-5: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-6: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-7: arrow r6c5-r7c5 bulb ["r5c5"]
arrow-8: arrow r5c4-r5c3 bulb ["r5c5"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.
