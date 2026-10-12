---
format: open-rules
title: Mobius Strip
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/mobius-strip
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r8c3-r9c3 colour "white"
kropki-2: kropki r5c3-r6c3 colour "white"
kropki-3: kropki r1c3-r2c3 colour "white"
kropki-4: kropki r3c9-r4c9 colour "white"
kropki-5: kropki r1c2-r2c2 colour "black"
kropki-6: kropki r9c8-r9c9 colour "black"
kropki-7: kropki r7c2-r8c2 colour "black"
whispers r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7 gap 5
little-killer-1: little-killer r5c9-r4c8-r3c7-r2c6-r1c5 sum 29
little-killer-2: little-killer r4c1-r3c2-r2c3-r1c4 sum 16
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 17
little-killer-4: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 28
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers outside the grid show the sum of the indicated diagonal. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown. (THE ANSWER KEY ON LOGIC MASTERS DEUTSCHLAND, LISTED HERE, IS IMPORTANT TO SOLVE THIS PUZZLE: If the solver's family name begins with English letters A-M, list the numbers in column 7 from TOP TO BOTTOM, and on the 28 and 17 diagonals, moving away from the arrows (18 numbers total). If the solver's family name begins with English letters N-Z, list the numbers on the 29 and 16 diagonals, moving away from the arrows, and then column 3, from BOTTOM TO TOP (18 numbers total). HINT: The answer key must be the same no matter what your name is.
