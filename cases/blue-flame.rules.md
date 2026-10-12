---
format: open-rules
title: Blue Flame
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gg1jx66gmu
case: https://sudoku-sleuth.com/cases/blue-flame
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=5 r1c9=8 r5c6=6
---

```rules
sudoku 9x9
kropki-1: kropki r6c6-r6c7 colour "white"
kropki-2: kropki r5c1-r6c1 colour "white"
kropki-3: kropki r5c1-r5c2 colour "black"
kropki-4: kropki r5c8-r5c9 colour "black"
kropki-5: kropki r7c8-r8c8 colour "black"
kropki-6: kropki r1c7-r2c7 colour "black"
kropki-7: kropki r1c3-r2c3 colour "black"
kropki-8: kropki r4c3-r5c3 colour "black"
region-sum-1: region-sum r1c3-r2c3-r3c4 segments [["r1c3","r2c3"],["r3c4"]]
region-sum-2: region-sum r3c6-r2c7-r1c7 segments [["r3c6"],["r2c7","r1c7"]]
region-sum-3: region-sum r3c1-r3c2-r4c3-r5c3 segments [["r3c1","r3c2"],["r4c3","r5c3"]]
region-sum-4: region-sum r5c7-r4c7-r3c8-r3c9 segments [["r5c7","r4c7"],["r3c8","r3c9"]]
region-sum-5: region-sum r5c1-r6c1-r7c2-r7c3 segments [["r5c1","r6c1"],["r7c2","r7c3"]]
region-sum-6: region-sum r7c7-r7c8-r6c9-r5c9 segments [["r7c7","r7c8"],["r6c9","r5c9"]]
region-sum-7: region-sum r8c2-r9c3-r9c4-r8c5-r9c6-r9c7-r8c8 segments [["r8c2","r9c3"],["r9c4","r8c5","r9c6"],["r9c7","r8c8"]]
region-sum-8: region-sum r6c4-r6c3-r5c2 segments [["r6c4"],["r6c3","r5c2"]]
region-sum-9: region-sum r6c6-r6c7-r5c8 segments [["r6c6"],["r6c7","r5c8"]]
region-sum-10: region-sum r3c3-r4c4-r5c4 segments [["r3c3"],["r4c4","r5c4"]]
region-sum-11: region-sum r3c7-r4c6-r5c6 segments [["r3c7"],["r4c6","r5c6"]]
```

**Standard Sudoku, Region Sum Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Line: The sum of the digits on a region sum line within a particular region must be the same for all of the regions the line passes through.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
