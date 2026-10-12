---
format: open-rules
title: Blue Ridge Region Sums
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/38tb632hu1
case: https://sudoku-sleuth.com/cases/blue-ridge-region-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r7c2 colour "black"
kropki-2: kropki r4c6-r5c6 colour "black"
kropki-3: kropki r2c6-r3c6 colour "black"
kropki-4: kropki r2c4-r3c4 colour "black"
kropki-5: kropki r2c2-r3c2 colour "black"
kropki-6: kropki r4c2-r5c2 colour "black"
kropki-7: kropki r3c8-r4c8 colour "black"
kropki-8: kropki r1c3-r1c4 colour "black"
kropki-9: kropki r6c9-r7c9 colour "black"
kropki-10: kropki r8c6-r9c6 colour "black"
kropki-11: kropki r7c5-r8c5 colour "white"
kropki-12: kropki r1c6-r1c7 colour "white"
kropki-13: kropki r7c9-r8c9 colour "white"
kropki-14: kropki r7c2-r8c2 colour "white"
region-sum-1: region-sum r8c1-r7c2-r6c3-r7c4-r6c5-r5c6-r6c7-r6c8-r6c9 segments [["r8c1","r7c2"],["r6c3"],["r7c4"],["r6c5","r5c6"],["r6c7","r6c8","r6c9"]]
region-sum-2: region-sum r4c1-r3c2-r2c3-r3c4-r2c5-r3c6-r4c7-r5c8 segments [["r4c1"],["r3c2","r2c3"],["r3c4","r2c5","r3c6"],["r4c7","r5c8"]]
region-sum-3: region-sum r2c6-r1c7-r2c8-r3c9 segments [["r2c6"],["r1c7","r2c8","r3c9"]]
region-sum-4: region-sum r2c4-r1c3-r2c2 segments [["r2c4"],["r1c3","r2c2"]]
region-sum-5: region-sum r6c2-r5c3-r6c4-r5c5-r4c6 segments [["r6c2","r5c3"],["r6c4","r5c5","r4c6"]]
```

**Sudoku, RSL, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
