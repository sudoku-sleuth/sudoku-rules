---
format: open-rules
title: Shoot to Thrill
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5vczv3m3ur
case: https://sudoku-sleuth.com/cases/shoot-to-thrill
library: https://rules.sudoku-sleuth.com/
status: read
exported: ce50952c251eb2ddca11349e8050190a
---

```rules
sudoku 9x9
kropki-1: kropki r4c7-r4c8 white
kropki-2: kropki r7c3-r8c3 white
kropki-3: kropki r2c6-r3c6 white
kropki-4: kropki r1c4-r1c5 white
kropki-5: kropki r5c8-r5c9 white
kropki-6: kropki r5c3-r6c3 white
kropki-7: kropki r7c9-r8c9 white
kropki-8: kropki r9c8-r9c9 white
kropki-9: kropki r9c3-r9c4 white
kropki-10: kropki r8c4-r9c4 white
kropki-11: kropki r8c1-r8c2 white
kropki-12: kropki r2c2-r3c2 white
kropki-13: kropki r2c8-r3c8 white
kropki-14: kropki r1c8-r1c9 white
kropki-15: kropki r3c1-r3c2 black
kropki-16: kropki r8c4-r8c5 black
kropki-17: kropki r7c8-r7c9 black
kropki-18: kropki r6c2-r6c3 black
kropki-19: kropki r1c5-r1c6 black
kropki-20: kropki r4c9-r5c9 black
kropki-21: kropki r1c7-r2c7 black
kropki-22: kropki r7c8-r8c8 black
arrow-1: arrow r1c3-r1c4-r1c5-r2c5 bulb ["r1c2"]
arrow-2: arrow r3c9-r4c9-r5c9-r5c8 bulb ["r2c9"]
arrow-3: arrow r9c7-r9c6-r9c5-r8c5 bulb ["r9c8"]
arrow-4: arrow r7c1-r6c1-r5c1-r5c2 bulb ["r8c1"]
arrow-5: arrow r3c2-r3c1 bulb ["r4c2"]
arrow-6: arrow r2c7-r1c7 bulb ["r2c6"]
arrow-7: arrow r7c8-r7c9 bulb ["r6c8"]
arrow-8: arrow r8c3-r9c3 bulb ["r8c4"]
arrow-9: arrow r4c7 bulb ["r3c6"]
arrow-10: arrow r7c6 bulb ["r6c7"]
arrow-11: arrow r6c3 bulb ["r7c4"]
arrow-12: arrow r3c4 bulb ["r4c3"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
