---
format: open-rules
title: Broken Chains
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fyz17q2gx3
case: https://sudoku-sleuth.com/cases/broken-chains
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=4 r2c2=8 r9c1=5
exported: 36f1ac901370f304c533c3b948653a5b
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r4c3 white
kropki-2: kropki r2c4-r3c4 white
kropki-3: kropki r2c7-r3c7 white
kropki-4: kropki r3c7-r3c8 white
kropki-5: kropki r4c3-r4c4 white
kropki-6: kropki r3c4-r4c4 white
kropki-7: kropki r6c2-r6c3 white
kropki-8: kropki r7c4-r8c4 white
kropki-9: kropki r6c4-r7c4 white
kropki-10: kropki r6c3-r6c4 white
kropki-11: kropki r7c6-r7c7 white
kropki-12: kropki r6c7-r7c7 white
kropki-13: kropki r8c8-r8c9 white
kropki-14: kropki r5c6-r6c6 white
kropki-15: kropki r7c5-r8c5 white
region-sum-1: region-sum r4c2-r4c1-r3c1-r3c2-r3c3-r2c3-r1c3-r1c4-r2c4 segments [["r4c2","r4c1"],["r3c1","r3c2","r3c3","r2c3","r1c3"],["r1c4","r2c4"]]
region-sum-2: region-sum r2c6-r1c6-r1c7-r2c7 segments [["r2c6","r1c6"],["r1c7","r2c7"]]
region-sum-3: region-sum r4c8-r4c9-r3c9-r3c8 segments [["r4c8","r4c9"],["r3c9","r3c8"]]
region-sum-4: region-sum r8c4-r9c4-r9c3-r8c3 segments [["r8c4","r9c4"],["r9c3","r8c3"]]
region-sum-5: region-sum r7c2-r7c1-r6c1-r6c2 segments [["r7c2","r7c1"],["r6c1","r6c2"]]
region-sum-6: region-sum r7c9-r7c8-r7c7-r8c7-r9c7-r9c6-r8c6-r7c6-r7c5-r5c7-r6c7-r6c8-r6c9 segments [["r7c9","r7c8","r7c7","r8c7","r9c7"],["r9c6","r8c6","r7c6","r7c5"],["r5c7","r6c7","r6c8","r6c9"]]
region-sum-7: region-sum r7c3-r6c4-r5c4 segments [["r7c3"],["r6c4","r5c4"]]
region-sum-8: region-sum r5c5-r4c6-r3c7-r2c8 segments [["r5c5","r4c6"],["r3c7","r2c8"]]
```

**Sudoku, Region Sum Lines, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.
- Consecutive pairs: Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
