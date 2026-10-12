---
format: open-rules
title: Mr. Grumpyface
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/pjq8c57j7b
case: https://sudoku-sleuth.com/cases/mr-grumpyface
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c2-r8c3 colour "white"
kropki-2: kropki r7c8-r8c8 colour "white"
kropki-3: kropki r6c3-r6c4 colour "white"
kropki-4: kropki r6c7-r6c8 colour "white"
kropki-5: kropki r3c4-r3c5 colour "black"
kropki-6: kropki r3c5-r3c6 colour "black"
kropki-7: kropki r7c6-r8c6 colour "black"
kropki-8: kropki r6c2-r7c2 colour "black"
kropki-9: kropki r6c8-r6c9 colour "black"
kropki-10: kropki r3c1-r4c1 colour "black"
kropki-11: kropki r2c3-r2c4 colour "black"
kropki-12: kropki r6c4-r6c5 colour "black"
kropki-13: kropki r6c5-r6c6 colour "black"
arrow-1: arrow r1c3-r2c3-r2c2-r3c2-r3c3 bulb ["r1c1","r1c2"]
arrow-2: arrow r1c7-r2c7-r2c8-r3c8-r3c7 bulb ["r1c8","r1c9"]
arrow-3: arrow r4c4-r5c4-r6c4-r6c3-r6c2 bulb ["r3c5","r4c5"]
arrow-4: arrow r4c6-r5c6-r6c6-r6c7-r6c8 bulb ["r3c5","r4c5"]
arrow-5: arrow r7c7-r7c8 bulb ["r7c6"]
arrow-6: arrow r8c7-r8c8 bulb ["r8c6"]
arrow-7: arrow r7c3-r7c2 bulb ["r7c4"]
arrow-8: arrow r8c3-r8c2 bulb ["r8c4"]
arrow-9: arrow r9c7-r9c6 bulb ["r9c8"]
```

**Sudoku, Diagonals, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle or pill. Sums in two-digit pills are read left to right or top to bottom.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
