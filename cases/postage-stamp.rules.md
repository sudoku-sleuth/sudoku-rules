---
format: open-rules
title: Postage Stamp
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p1lb8dtjm1
case: https://sudoku-sleuth.com/cases/postage-stamp
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0bf4afb9a3879233b382ee74f7450f42
---

```rules
sudoku 9x9
kropki-1: kropki r7c2-r7c3 white
kropki-2: kropki r3c7-r3c8 white
kropki-3: kropki r6c8-r7c8 white
kropki-4: kropki r3c2-r4c2 white
kropki-5: kropki r7c5-r8c5 white
kropki-6: kropki r4c6-r5c6 white
kropki-7: kropki r5c4-r6c4 white
kropki-8: kropki r1c4-r1c5 white
kropki-9: kropki r3c6-r3c7 black
kropki-10: kropki r7c3-r7c4 black
kropki-11: kropki r3c3-r4c3 black
kropki-12: kropki r6c7-r7c7 black
kropki-13: kropki r1c5-r2c5 black
kropki-14: kropki r5c8-r5c9 black
kropki-15: kropki r6c3-r6c4 black
kropki-16: kropki r9c7-r9c8 black
kropki-17: kropki r2c1-r2c2 black
kropki-18: kropki r2c8-r3c8 black
arrow-1: arrow r2c3-r3c4-r2c5-r3c6 bulb ["r3c2"]
arrow-2: arrow r3c8-r4c7-r5c8-r6c7 bulb ["r2c7"]
arrow-3: arrow r8c7-r7c6-r8c5-r7c4 bulb ["r7c8"]
arrow-4: arrow r7c2-r6c3-r5c2-r4c3 bulb ["r8c3"]
```

**Sudoku, Arrows, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the value in the circle from which the arrow emerges.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
