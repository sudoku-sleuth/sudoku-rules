---
format: open-rules
title: On The Wing
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gyutaq2c7a
case: https://sudoku-sleuth.com/cases/on-the-wing
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6d8ba95b75ae036fc7c0b5ff2f4dc8f3
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r7c5 white
kropki-2: kropki r3c5-r4c5 white
kropki-3: kropki r5c3-r5c4 white
kropki-4: kropki r5c6-r5c7 white
kropki-5: kropki r8c3-r8c4 white
kropki-6: kropki r1c6-r1c7 white
kropki-7: kropki r4c3-r4c4 black
kropki-8: kropki r6c6-r7c6 black
kropki-9: kropki r1c9-r2c9 black
kropki-10: kropki r8c1-r9c1 black
kropki-11: kropki r5c1-r6c1 black
kropki-12: kropki r4c9-r5c9 black
region-sum-1: region-sum r9c3-r9c2-r9c1-r8c1-r7c1-r6c2-r5c3-r5c4-r6c5-r7c5-r8c4 segments [["r9c3","r9c2","r9c1","r8c1","r7c1"],["r6c2","r5c3"],["r5c4","r6c5"],["r7c5","r8c4"]]
region-sum-2: region-sum r4c5-r5c6-r5c7-r4c8-r3c9-r2c9-r1c9-r1c8-r1c7-r2c6-r3c5 segments [["r4c5","r5c6"],["r5c7","r4c8"],["r3c9","r2c9","r1c9","r1c8","r1c7"],["r2c6","r3c5"]]
region-sum-3: region-sum r4c4-r3c3-r2c2 segments [["r4c4"],["r3c3","r2c2"]]
region-sum-4: region-sum r6c6-r7c7-r8c8 segments [["r6c6"],["r7c7","r8c8"]]
```

**Sudoku, Region Sum Lines, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
