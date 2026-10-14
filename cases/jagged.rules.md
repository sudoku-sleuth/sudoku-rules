---
format: open-rules
title: Jagged
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2krhx8xwdf
case: https://sudoku-sleuth.com/cases/jagged
library: https://rules.sudoku-sleuth.com/
status: read
exported: 810df59cb1b391e1d0cf7e1eff34b569
---

```rules
sudoku 9x9
kropki-1: kropki r6c1-r7c1 white
kropki-2: kropki r3c2-r4c2 white
kropki-3: kropki r6c8-r7c8 white
kropki-4: kropki r2c9-r3c9 white
kropki-5: kropki r3c5-r3c6 white
kropki-6: kropki r4c8-r5c8 white
kropki-7: kropki r2c8-r3c8 white
kropki-8: kropki r8c8-r8c9 white
kropki-9: kropki r2c1-r3c1 white
kropki-10: kropki r1c1-r2c1 white
kropki-11: kropki r6c3-r6c4 white
kropki-12: kropki r1c7-r2c7 white
kropki-13: kropki r9c7-r9c8 white
kropki-14: kropki r1c4-r1c5 black
kropki-15: kropki r8c6-r9c6 black
kropki-16: kropki r9c2-r9c3 black
kropki-17: kropki r1c7-r1c8 black
kropki-18: kropki r2c1-r2c2 black
kropki-19: kropki r6c5-r6c6 black
kropki-20: kropki r4c3-r4c4 black
kropki-21: kropki r2c6-r3c6 black
arrow-1: arrow r3c3-r4c4-r3c5-r2c6-r1c7 bulb ["r4c2"]
arrow-2: arrow r7c7-r6c6-r7c5-r8c4-r9c3 bulb ["r6c8"]
arrow-3: arrow r6c2-r7c3-r6c4-r5c5 bulb ["r7c1"]
arrow-4: arrow r9c7-r8c8 bulb ["r9c6"]
arrow-5: arrow r1c3-r2c2 bulb ["r1c4"]
arrow-6: arrow r4c8-r3c7 bulb ["r3c9"]
```

**Standard Sudoku, Arrows, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
