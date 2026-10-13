---
format: open-rules
title: Octagong
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1imiofqdp5
case: https://sudoku-sleuth.com/cases/octagong
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r8c8-r7c9-r6c9 segments [["r8c8","r7c9"],["r6c9"]]
region-sum-2: region-sum r2c1-r2c2-r1c3-r1c4 segments [["r2c1","r2c2","r1c3"],["r1c4"]]
region-sum-3: region-sum r6c7-r7c6-r7c5-r7c4-r6c3-r5c3-r4c3-r3c4-r3c5-r3c6-r4c7-r5c7 segments [["r6c7","r4c7","r5c7"],["r7c6","r7c5","r7c4"],["r6c3","r5c3","r4c3"],["r3c4","r3c5","r3c6"]]
region-sum-4: region-sum r2c3-r3c2-r4c2-r5c2-r6c2-r7c2-r8c3-r8c4-r8c5-r8c6-r8c7-r7c8-r6c8-r5c8-r4c8-r3c8-r2c7-r2c6-r2c5-r2c4 segments [["r2c3","r3c2"],["r4c2","r5c2","r6c2"],["r7c2","r8c3"],["r8c4","r8c5","r8c6"],["r8c7","r7c8"],["r6c8","r5c8","r4c8"],["r3c8","r2c7"],["r2c6","r2c5","r2c4"]]
pair-1: pair r1c3-r1c4 sum 8
pair-2: pair r2c3-r2c4 sum 8
pair-3: pair r1c6-r1c7 sum 8
pair-4: pair r2c6-r2c7 sum 8
pair-5: pair r6c3-r6c4 sum 8
pair-6: pair r5c6-r5c7 sum 8
pair-7: pair r7c8-r7c9 sum 8
pair-8: pair r9c7-r9c8 sum 8
pair-9: pair r9c3-r9c4 sum 8
pair-10: pair r8c3-r8c4 sum 8
pair-11: pair r6c1-r6c2 sum 8
pair-12: pair r3c1-r4c1 sum 8
pair-13: pair r3c2-r4c2 sum 8
pair-14: pair r6c2-r7c2 sum 8
pair-15: pair r6c8-r7c8 sum 8
pair-16: pair r3c8-r4c8 sum 8
pair-17: pair r8c5-r9c5 sum 8
pair-18: pair r7c6-r8c6 sum 8
pair-19: pair r6c3-r7c3 sum 8
```

**Standard Sudoku, Sum Lines, 8-Blocks**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. If a line has multiple sections within a box, these sections are summed separately.
- 8-Blocks: Pairs of digits connected by a red block sum to 8.

For more of our puzzles, please visit https://missingdeck.net
