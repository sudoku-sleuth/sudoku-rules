---
format: open-rules
title: Stitches
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/yinal1514r
case: https://sudoku-sleuth.com/cases/stitches
library: https://rules.sudoku-sleuth.com/
status: read
exported: e06f17c58b587ddb8dfc40d07e83ff6e
---

```rules
sudoku 9x9
kropki-1: kropki r4c8-r5c8 white
kropki-2: kropki r7c5-r8c5 white
kropki-3: kropki r6c3-r6c4 white
kropki-4: kropki r9c6-r9c7 white
kropki-5: kropki r2c5-r3c5 white
kropki-6: kropki r1c5-r2c5 white
kropki-7: kropki r9c3-r9c4 white
kropki-8: kropki r6c6-r6c7 white
kropki-9: kropki r5c7-r5c8 white
kropki-10: kropki r5c2-r5c3 white
kropki-11: kropki r4c2-r5c2 black
kropki-12: kropki r2c3-r2c4 black
kropki-13: kropki r2c6-r2c7 black
kropki-14: kropki r3c3-r3c4 black
kropki-15: kropki r3c6-r3c7 black
kropki-16: kropki r5c4-r6c4 black
kropki-17: kropki r5c6-r6c6 black
kropki-18: kropki r9c7-r9c8 black
kropki-19: kropki r9c2-r9c3 black
arrow-1: arrow r3c3-r2c3-r1c3 bulb ["r4c2"]
arrow-2: arrow r5c1-r6c1-r7c1 bulb ["r4c2"]
arrow-3: arrow r5c3-r5c4 bulb ["r4c2"]
arrow-4: arrow r3c7-r2c7-r1c7 bulb ["r4c8"]
arrow-5: arrow r5c9-r6c9-r7c9 bulb ["r4c8"]
arrow-6: arrow r5c7-r5c6 bulb ["r4c8"]
arrow-7: arrow r8c6-r7c5 bulb ["r9c7"]
arrow-8: arrow r8c4-r7c5 bulb ["r9c3"]
```

**Sudoku, Arrow, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
