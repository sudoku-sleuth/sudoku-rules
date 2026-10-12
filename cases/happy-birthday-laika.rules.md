---
format: open-rules
title: Happy Birthday, Laika!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o1hh3vs9is
case: https://sudoku-sleuth.com/cases/happy-birthday-laika
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c8=2 r3c8=1
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r4c3 colour "white"
kropki-2: kropki r4c4-r4c5 colour "white"
kropki-3: kropki r5c4-r5c5 colour "white"
kropki-4: kropki r5c6-r6c6 colour "white"
kropki-5: kropki r8c7-r8c8 colour "white"
kropki-6: kropki r7c8-r8c8 colour "white"
kropki-7: kropki r5c7-r5c8 colour "white"
kropki-8: kropki r7c5-r7c6 colour "white"
kropki-9: kropki r8c1-r9c1 colour "white"
kropki-10: kropki r4c3-r4c4 colour "black"
kropki-11: kropki r7c8-r7c9 colour "black"
kropki-12: kropki r2c5-r3c5 colour "black"
region-sum-1: region-sum r2c1-r3c1-r4c1-r4c2 segments [["r2c1","r3c1"],["r4c1","r4c2"]]
region-sum-2: region-sum r5c4-r4c4-r3c3-r4c3-r5c3 segments [["r5c4","r4c4"],["r3c3"],["r4c3","r5c3"]]
region-sum-3: region-sum r3c5-r4c5-r5c5 segments [["r3c5"],["r4c5","r5c5"]]
region-sum-4: region-sum r8c8-r7c8-r6c8-r7c9-r8c9 segments [["r8c8","r7c8"],["r6c8"],["r7c9","r8c9"]]
region-sum-5: region-sum r5c6-r6c6-r7c6-r5c7-r8c7-r7c7 segments [["r5c6","r6c6"],["r7c6"],["r5c7"],["r8c7","r7c7"]]
little-killer-1: little-killer r1c3-r2c2-r3c1 sum 11
little-killer-2: little-killer r1c7-r2c8-r3c9 sum 10
little-killer-3: little-killer r6c9-r7c8-r8c7-r9c6 sum 21
little-killer-4: little-killer r7c1-r8c2-r9c3 sum 20
little-killer-5: little-killer r8c1-r9c2 sum 4
```

**Sudoku, Region Sum Lines, Diagonal Sums, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. If a line has multiple sections within a box, these sections are summed separately.
- Diagonal Sums: Clues outside the grid are the sum of the digits along the indicated diagonal.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

SOLVING NOTE: Each segment of the K has the same total, so r5c6 + r6c6 = r7c6 = r5c7 = r7c7 + r8c7 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
