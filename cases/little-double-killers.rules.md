---
format: open-rules
title: Little Double Killers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/od53dt3ddq
case: https://sudoku-sleuth.com/cases/little-double-killers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c7=5 r6c3=3
exported: f2dc1051369ebdbc4ef8049b2279a9bd
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 black
kropki-2: kropki r1c2-r1c3 black
kropki-3: kropki r1c7-r1c8 black
kropki-4: kropki r3c8-r3c9 black
kropki-5: kropki r9c8-r9c9 black
kropki-6: kropki r8c8-r8c9 black
kropki-7: kropki r7c1-r7c2 black
kropki-8: kropki r8c1-r8c2 black
kropki-9: kropki r4c4-r4c5 black
kropki-10: kropki r5c4-r6c4 black
little-killer-1: little-killer r7c9-r8c8-r9c7 sum 10
little-killer-2: little-killer r8c9-r9c8 sum 10
little-killer-3: little-killer r3c1-r2c2-r1c3 sum 8
little-killer-4: little-killer r2c1-r1c2 sum 8
little-killer-5: little-killer r1c7-r2c8-r3c9 sum 9
little-killer-6: little-killer r1c8-r2c9 sum 9
little-killer-7: little-killer r9c2-r8c1 sum 11
little-killer-8: little-killer r9c3-r8c2-r7c1 sum 11
little-killer-9: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 37
little-killer-10: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 36
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are necessarily given.
