---
format: open-rules
title: Good Things Come in Threes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bz2e33hi8m
case: https://sudoku-sleuth.com/cases/good-things-come-in-threes
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=5
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r1c4 colour "white"
kropki-2: kropki r9c7-r9c8 colour "white"
kropki-3: kropki r8c7-r8c8 colour "white"
kropki-4: kropki r7c7-r7c8 colour "white"
kropki-5: kropki r6c3-r7c3 colour "white"
kropki-6: kropki r6c1-r6c2 colour "white"
kropki-7: kropki r3c8-r4c8 colour "white"
kropki-8: kropki r1c9-r2c9 colour "white"
kropki-9: kropki r3c1-r4c1 colour "white"
kropki-10: kropki r3c2-r4c2 colour "white"
kropki-11: kropki r2c3-r3c3 colour "white"
kropki-12: kropki r1c8-r2c8 colour "white"
kropki-13: kropki r6c8-r7c8 colour "white"
kropki-14: kropki r8c5-r9c5 colour "white"
arrow-1: arrow r2c4-r3c3-r4c3 bulb ["r1c5"]
arrow-2: arrow r2c3-r3c2-r4c2 bulb ["r1c4"]
arrow-3: arrow r2c2-r3c1-r4c1 bulb ["r1c3"]
arrow-4: arrow r2c8-r2c7 bulb ["r3c8"]
arrow-5: arrow r3c7-r3c6 bulb ["r4c7"]
arrow-6: arrow r1c9-r1c8 bulb ["r2c9"]
arrow-7: arrow r7c2-r8c3 bulb ["r6c1"]
arrow-8: arrow r7c3-r8c4 bulb ["r6c2"]
arrow-9: arrow r7c4-r8c5 bulb ["r6c3"]
arrow-10: arrow r8c7-r7c7 bulb ["r9c6"]
arrow-11: arrow r8c8-r7c8 bulb ["r9c7"]
arrow-12: arrow r8c9-r7c9 bulb ["r9c8"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Consecutive Pairs: Digits separated by a white dot are consecutive.
