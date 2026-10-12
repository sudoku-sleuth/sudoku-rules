---
format: open-rules
title: December 15 CaDS and Dots
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nxum0iau6c
case: https://sudoku-sleuth.com/cases/december-15-cads-and-dots
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r2c9-r3c9-r4c9 total 15 connected true
cage-2: cage r1c2-r1c3-r1c4 total 15 connected true
cage-3: cage r7c7-r7c8-r7c9 total 15 connected true
cage-4: cage r6c3-r7c3 total 15 connected true
cage-5: cage r3c7-r4c7 total 15 connected true
cage-6: cage r3c2-r4c2-r4c3 total 12 connected true
cage-7: cage r5c8-r5c9-r6c9 total 12 connected true
cage-8: cage r8c2-r8c3-r8c4 total 12 connected true
cage-9: cage r4c5-r5c4-r5c5 total 12 connected true
kropki-1: kropki r2c1-r3c1 colour "black"
kropki-2: kropki r2c8-r2c9 colour "black"
kropki-3: kropki r7c9-r8c9 colour "black"
kropki-4: kropki r8c1-r8c2 colour "black"
kropki-5: kropki r5c1-r6c1 colour "black"
kropki-6: kropki r8c4-r9c4 colour "black"
kropki-7: kropki r9c4-r9c5 colour "black"
kropki-8: kropki r3c1-r3c2 colour "black"
kropki-9: kropki r3c2-r3c3 colour "black"
kropki-10: kropki r7c8-r7c9 colour "black"
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 12
little-killer-2: little-killer r2c1-r1c2 sum 15
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 15
little-killer-4: little-killer r2c9-r1c8 sum 12
little-killer-5: little-killer r7c1-r8c2-r9c3 sum 15
little-killer-6: little-killer r8c1-r9c2 sum 12
little-killer-7: little-killer r7c9-r8c8-r9c7 sum 12
little-killer-8: little-killer r8c9-r9c8 sum 15
little-killer-9: little-killer r4c1-r3c2-r2c3-r1c4 sum 25
little-killer-10: little-killer r4c9-r3c8-r2c7-r1c6 sum 25
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffffff","stroke":"#000000","thickness":2}}
```

**Sudoku, Cages, Diagonal Sums, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.


Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
