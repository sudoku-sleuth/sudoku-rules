---
format: open-rules
title: Block Chain
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/n1x8l9afbt
case: https://sudoku-sleuth.com/cases/block-chain
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8e65f1a7a1f5e86fbed82982f1969b69
---

```rules
sudoku 9x9
kropki-1: kropki r8c4-r9c4 white
kropki-2: kropki r1c4-r2c4 white
kropki-3: kropki r9c4-r9c5 white
kropki-4: kropki r1c4-r1c5 white
kropki-5: kropki r4c9-r5c9 white
kropki-6: kropki r5c1-r6c1 white
kropki-7: kropki r2c3-r2c4 black
kropki-8: kropki r7c3-r8c3 black
kropki-9: kropki r4c7-r5c7 black
kropki-10: kropki r8c6-r9c6 black
kropki-11: kropki r6c1-r7c1 black
kropki-12: kropki r3c2-r3c3 black
region-sum-1: region-sum r4c1-r3c1-r3c2-r3c3-r3c4-r2c4 segments [["r4c1"],["r3c1","r3c2","r3c3"],["r3c4","r2c4"]]
region-sum-2: region-sum r6c1-r7c1-r7c2-r7c3-r7c4-r8c4 segments [["r6c1"],["r7c1","r7c2","r7c3"],["r7c4","r8c4"]]
region-sum-3: region-sum r4c9-r3c9-r2c8-r1c7-r1c6-r1c5 segments [["r4c9"],["r3c9","r2c8","r1c7"],["r1c6","r1c5"]]
region-sum-4: region-sum r6c9-r7c9-r8c8-r9c7-r9c6-r9c5 segments [["r6c9"],["r7c9","r8c8","r9c7"],["r9c6","r9c5"]]
region-sum-5: region-sum r4c3-r5c3-r6c3-r6c4-r6c5 segments [["r4c3","r5c3","r6c3"],["r6c4","r6c5"]]
region-sum-6: region-sum r4c5-r4c6-r4c7-r5c7-r6c7 segments [["r4c5","r4c6"],["r4c7","r5c7","r6c7"]]
```

**Sudoku, Region Sum Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
