---
format: open-rules
title: Four Corners (UT, CO, AZ, NM)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/four-corners-ut-co-az-nm
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c4-r3c4 total 10 connected true
cage-2: cage r5c9-r6c9 total 10 connected true
cage-3: cage r6c1-r6c2 total 11 connected true
cage-4: cage r7c5-r8c5 total 10 connected true
cage-5: cage r3c2-r3c3 total 10 connected true
kropki-1: kropki r4c5-r4c6 colour "white"
kropki-2: kropki r4c6-r5c6 colour "white"
kropki-3: kropki r5c6-r6c6 colour "white"
kropki-4: kropki r4c4-r5c4 colour "white"
kropki-5: kropki r5c4-r6c4 colour "white"
kropki-6: kropki r6c4-r6c5 colour "white"
kropki-7: kropki r4c4-r4c5 colour "black"
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,4,5,9]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,5,7,9]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [4,5,7,9]
quadruple-4: quadruple r8c1-r8c2-r9c1-r9c2 digits [2,4,7,9]
extremum r6c6-r1c9-r1c1 type "min" exhaustive false
```

Normal Sudoku rules apply. QUADRUPLES- Numbers in circles are in the four cells surrounding the circle, in any order. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. MINIMUMS- Numbers in gray cells are less than all orthogonal neighbors. 180 DEGREE SYMMETRY- Except for the number 9, numbers that are in the same position as one another when the puzzle is rotated 180 degrees sum to 9. Example: If row 1 column 2 is a 5, then row 9 column 8 is a 4. If you have an unresolvable pattern at the end of the puzzle, be sure that all partners sum to 9.
