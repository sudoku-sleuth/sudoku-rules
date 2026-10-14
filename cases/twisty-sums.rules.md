---
format: open-rules
title: Twisty Sums
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/twisty-sums
case: https://sudoku-sleuth.com/cases/twisty-sums
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5a99f9ce472df69af408e1eb4f748c37
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c3-r3c4-r3c5-r3c6 segments [["r2c3"],["r3c4","r3c5","r3c6"]]
region-sum-2: region-sum r3c2-r4c3-r5c3-r6c3 segments [["r3c2"],["r4c3","r5c3","r6c3"]]
region-sum-3: region-sum r8c7-r7c6-r7c5-r7c4 segments [["r8c7"],["r7c6","r7c5","r7c4"]]
region-sum-4: region-sum r7c8-r6c7-r5c7-r4c7 segments [["r7c8"],["r6c7","r5c7","r4c7"]]
region-sum-5: region-sum r3c3-r4c4-r4c5 segments [["r3c3"],["r4c4","r4c5"]]
region-sum-6: region-sum r7c7-r6c6-r6c5 segments [["r7c7"],["r6c6","r6c5"]]
region-sum-7: region-sum r8c3-r7c3-r6c4-r5c4 segments [["r8c3","r7c3"],["r6c4","r5c4"]]
region-sum-8: region-sum r2c7-r3c7-r4c6-r5c6 segments [["r2c7","r3c7"],["r4c6","r5c6"]]
region-sum-9: region-sum r5c8-r4c9-r3c9-r2c9 segments [["r5c8","r4c9"],["r3c9","r2c9"]]
region-sum-10: region-sum r8c1-r7c1-r6c2-r5c2 segments [["r8c1","r7c1"],["r6c2","r5c2"]]
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [8,9]
quadruple-2: quadruple r8c8-r8c9-r9c8-r9c9 digits [5,9]
quadruple-3: quadruple r4c3-r4c4-r5c3-r5c4 digits [4]
quadruple-4: quadruple r5c6-r5c7-r6c6-r6c7 digits [3]
quadruple-5: quadruple r6c4-r6c5-r7c4-r7c5 digits [4,7]
quadruple-6: quadruple r3c5-r3c6-r4c5-r4c6 digits [4,5]
quadruple-7: quadruple r2c7-r2c8-r3c7-r3c8 digits [2,7]
quadruple-8: quadruple r7c2-r7c3-r8c2-r8c3 digits [1,7]
```

**Sudoku, Region Sum Lines, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
