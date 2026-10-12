---
format: open-rules
title: Prevailing Winds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/r89o9hwfq9
case: https://sudoku-sleuth.com/cases/prevailing-winds
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r7c1-r7c2 colour "white"
kropki-2: kropki r7c2-r7c3 colour "white"
kropki-3: kropki r7c3-r7c4 colour "white"
kropki-4: kropki r4c4-r4c5 colour "white"
kropki-5: kropki r4c5-r4c6 colour "white"
kropki-6: kropki r7c4-r7c5 colour "white"
kropki-7: kropki r4c7-r4c8 colour "white"
kropki-8: kropki r9c3-r9c4 colour "white"
kropki-9: kropki r1c2-r2c2 colour "white"
kropki-10: kropki r1c4-r2c4 colour "white"
kropki-11: kropki r1c6-r2c6 colour "white"
kropki-12: kropki r4c1-r5c1 colour "white"
kropki-13: kropki r5c8-r6c8 colour "white"
kropki-14: kropki r8c3-r9c3 colour "white"
kropki-15: kropki r5c4-r6c4 colour "white"
kropki-16: kropki r8c9-r9c9 colour "black"
kropki-17: kropki r7c9-r8c9 colour "black"
kropki-18: kropki r1c9-r2c9 colour "black"
kropki-19: kropki r6c1-r7c1 colour "black"
kropki-20: kropki r5c1-r6c1 colour "black"
kropki-21: kropki r1c3-r2c3 colour "black"
kropki-22: kropki r1c5-r2c5 colour "black"
kropki-23: kropki r8c8-r9c8 colour "black"
arrow-1: arrow r2c3-r3c4-r4c5 bulb ["r1c2"]
arrow-2: arrow r2c5-r3c6-r4c7 bulb ["r1c4"]
arrow-3: arrow r2c7-r3c8-r4c9 bulb ["r1c6"]
arrow-4: arrow r5c3-r6c2-r7c1 bulb ["r4c4"]
arrow-5: arrow r5c5-r6c4-r7c3 bulb ["r4c6"]
arrow-6: arrow r5c7-r6c6 bulb ["r4c8"]
arrow-7: arrow r8c4-r7c5 bulb ["r9c3"]
arrow-8: arrow r4c2-r3c3 bulb ["r5c1"]
arrow-9: arrow r7c7-r8c6 bulb ["r6c8"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
- Kropki: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.
