---
format: open-rules
title: Goodbye 2025!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k98l6hphhl
case: https://sudoku-sleuth.com/cases/goodbye-2025
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c1=2 r2c2=5 r8c8=2 r8c9=6
---

```rules
sudoku 9x9
kropki-1: kropki r5c3-r5c4 colour "white"
kropki-2: kropki r6c5-r7c5 colour "white"
kropki-3: kropki r2c3-r3c3 colour "white"
kropki-4: kropki r2c5-r3c5 colour "white"
kropki-5: kropki r4c6-r4c7 colour "black"
kropki-6: kropki r4c4-r5c4 colour "black"
arrow r4c4-r5c5-r6c6-r7c7 bulb ["r3c3"]
region-sum-1: region-sum r3c2-r4c3-r5c4-r6c5-r7c6-r8c7 segments [["r3c2"],["r4c3"],["r5c4","r6c5"],["r7c6"],["r8c7"]]
region-sum-2: region-sum r3c1-r4c2-r5c3 segments [["r3c1"],["r4c2","r5c3"]]
region-sum-3: region-sum r7c5-r8c6-r9c7 segments [["r7c5","r8c6"],["r9c7"]]
region-sum-4: region-sum r2c3-r3c4-r4c5 segments [["r2c3"],["r3c4"],["r4c5"]]
region-sum-5: region-sum r5c6-r6c7-r7c8 segments [["r5c6"],["r6c7"],["r7c8"]]
region-sum-6: region-sum r1c3-r2c4-r3c5-r4c6 segments [["r1c3"],["r2c4","r3c5"],["r4c6"]]
region-sum-7: region-sum r5c7-r6c8-r7c9 segments [["r5c7","r6c8"],["r7c9"]]
```

**Sudoku, Arrow, Region Sum Line, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrow: Digits along the shaft of the arrow sum to the value in the attached circle.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
