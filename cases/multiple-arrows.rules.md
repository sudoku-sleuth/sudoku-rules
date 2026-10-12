---
format: open-rules
title: Multiple Arrows
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/elfwm5ygp9
case: https://sudoku-sleuth.com/cases/multiple-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c6-r7c7 colour "white"
kropki-2: kropki r5c6-r6c6 colour "white"
kropki-3: kropki r2c4-r3c4 colour "black"
kropki-4: kropki r4c5-r5c5 colour "black"
kropki-5: kropki r6c6-r7c6 colour "black"
kropki-6: kropki r8c7-r9c7 colour "black"
kropki-7: kropki r1c1-r1c2 colour "black"
kropki-8: kropki r5c1-r5c2 colour "black"
kropki-9: kropki r6c4-r7c4 colour "black"
kropki-10: kropki r8c5-r9c5 colour "black"
kropki-11: kropki r6c8-r6c9 colour "black"
kropki-12: kropki r6c2-r6c3 colour "black"
kropki-13: kropki r7c1-r8c1 colour "black"
kropki-14: kropki r8c8-r8c9 colour "black"
kropki-15: kropki r2c6-r3c6 colour "black"
kropki-16: kropki r3c7-r3c8 colour "black"
kropki-17: kropki r8c3-r9c3 colour "black"
kropki-18: kropki r4c9-r5c9 colour "black"
arrow-1: arrow r1c3-r2c4-r3c4-r4c5-r5c5-r6c6-r7c6-r8c7-r9c7 bulb ["r1c1","r1c2"]
arrow-2: arrow r5c3-r6c4-r7c4-r8c5-r9c5 bulb ["r5c1","r5c2"]
arrow-3: arrow r9c2-r8c1-r7c1-r6c2-r6c3 bulb ["r9c3","r9c4"]
arrow-4: arrow r8c8-r8c9 bulb ["r7c7"]
arrow-5: arrow r5c7-r4c7-r3c6-r2c6-r1c5 bulb ["r6c8","r6c9"]
arrow-6: arrow r3c8-r3c7 bulb ["r4c9"]
```

**Normal Sudoku, Arrows, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle or pill from which the arrow emerges. Multi-digit pills are read top-to-bottom or left-to-right.
- Kropki Pairs: Cells separated by a black dot are in a 2:1 ratio. Cells separated by a white dot are consecutive. Not all dots are necessarily given.
