---
format: open-rules
title: You Cut, I Choose
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vd4ydwspli
case: https://sudoku-sleuth.com/cases/you-cut-i-choose
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8 segments [["r2c2","r2c3"],["r2c4","r2c5","r2c6"],["r2c7","r2c8"]]
region-sum-2: region-sum r3c2-r4c2-r5c2-r6c2-r7c2-r8c2 segments [["r3c2"],["r4c2","r5c2","r6c2"],["r7c2","r8c2"]]
region-sum-3: region-sum r8c3-r8c4-r8c5-r8c6-r8c7-r8c8 segments [["r8c3"],["r8c4","r8c5","r8c6"],["r8c7","r8c8"]]
region-sum-4: region-sum r7c5-r6c5-r5c6-r4c7 segments [["r7c5"],["r6c5","r5c6"],["r4c7"]]
region-sum-5: region-sum r7c7-r6c8-r5c8-r4c8-r3c9-r2c9 segments [["r7c7"],["r6c8","r5c8","r4c8"],["r3c9","r2c9"]]
sandwich-1: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 33
sandwich-2: sandwich r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 sum 0
sandwich-3: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 33
sandwich-4: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 0
sandwich-5: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 2
sandwich-6: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 11
sandwich-7: sandwich r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 3
sandwich-8: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 8
sandwich-9: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 12
```

**Sudoku, Region Sum Lines, Sandwich Sums**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Region Sum Lines: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 
- Sandwich sum: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
