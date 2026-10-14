---
format: open-rules
title: Rocket Man
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/l1re95lqb9
case: https://sudoku-sleuth.com/cases/rocket-man
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c5=9
exported: ac2d4abca0026875b9498707f6197510
---

```rules
sudoku 9x9
kropki-1: kropki r8c3-r9c3 white
kropki-2: kropki r8c7-r9c7 white
kropki-3: kropki r6c3-r7c3 white
kropki-4: kropki r6c7-r7c7 white
kropki-5: kropki r3c7-r4c7 white
kropki-6: kropki r3c5-r4c5 white
kropki-7: kropki r1c3-r1c4 white
kropki-8: kropki r1c6-r1c7 white
kropki-9: kropki r1c1-r1c2 white
kropki-10: kropki r5c5-r6c5 white
kropki-11: kropki r7c5-r8c5 white
kropki-12: kropki r1c5-r2c5 white
kropki-13: kropki r3c4-r4c4 white
kropki-14: kropki r3c6-r4c6 white
kropki-15: kropki r8c3-r8c4 white
kropki-16: kropki r2c3-r3c3 white
kropki-17: kropki r6c5-r7c5 black
kropki-18: kropki r9c7-r9c8 black
kropki-19: kropki r2c6-r3c6 black
region-sum-1: region-sum r9c4-r8c5-r9c6-r8c7-r7c7-r6c6-r5c6-r4c5-r5c4-r6c4-r7c3-r8c3 segments [["r9c4","r8c5","r9c6"],["r8c7","r7c7"],["r6c6","r5c6","r4c5","r5c4","r6c4"],["r7c3","r8c3"]]
region-sum-2: region-sum r7c1-r7c2-r6c3-r5c3-r4c2-r1c2-r2c1-r3c1 segments [["r7c1","r7c2"],["r6c3","r5c3","r4c2"],["r1c2","r2c1","r3c1"]]
region-sum-3: region-sum r7c9-r7c8-r6c7-r5c7-r4c8-r1c8-r2c9-r3c9 segments [["r7c9","r7c8"],["r6c7","r5c7","r4c8"],["r1c8","r2c9","r3c9"]]
region-sum-4: region-sum r3c3-r2c3-r1c4-r1c5-r1c6-r2c7-r3c7 segments [["r3c3","r2c3"],["r1c4","r1c5","r1c6"],["r2c7","r3c7"]]
```

**Sudoku, Region Sum Lines, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. Different lines may have different section sums.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
