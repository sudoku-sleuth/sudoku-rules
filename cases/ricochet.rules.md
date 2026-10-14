---
format: open-rules
title: Ricochet
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bp30nhryws
case: https://sudoku-sleuth.com/cases/ricochet
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c6=4
exported: 778012a1a6228f491caca3b8f40ec902
---

```rules
sudoku 9x9
kropki-1: kropki r4c9-r5c9 white
kropki-2: kropki r5c1-r6c1 white
kropki-3: kropki r2c5-r2c6 white
kropki-4: kropki r9c4-r9c5 white
kropki-5: kropki r2c3-r2c4 white
kropki-6: kropki r4c5-r5c5 white
kropki-7: kropki r5c5-r6c5 white
kropki-8: kropki r5c2-r6c2 white
kropki-9: kropki r2c1-r3c1 white
kropki-10: kropki r6c7-r7c7 white
kropki-11: kropki r2c8-r3c8 white
kropki-12: kropki r4c8-r5c8 white
kropki-13: kropki r5c4-r5c5 black
kropki-14: kropki r7c2-r8c2 black
kropki-15: kropki r3c3-r4c3 black
kropki-16: kropki r3c7-r4c7 black
arrow-1: arrow r3c2-r4c3-r5c4-r6c3-r7c2 bulb ["r2c1"]
arrow-2: arrow r3c8-r4c7-r5c6-r6c7-r7c8 bulb ["r2c9"]
arrow-3: arrow r7c3-r8c2-r9c1 bulb ["r6c4"]
arrow-4: arrow r3c3-r2c2-r1c1 bulb ["r4c4"]
arrow-5: arrow r3c7-r2c8-r1c9 bulb ["r4c6"]
arrow-6: arrow r7c7-r8c8 bulb ["r6c6"]
arrow-7: arrow r6c9-r5c9 bulb ["r5c8"]
arrow-8: arrow r2c4-r2c5 bulb ["r1c5"]
arrow-9: arrow r4c1-r5c1 bulb ["r5c2"]
arrow-10: arrow r9c6-r9c5 bulb ["r8c5"]
```

**Standard Sudoku, Arrow, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
