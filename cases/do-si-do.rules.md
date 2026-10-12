---
format: open-rules
title: Do-Si-Do
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7a0s6r254d
case: https://sudoku-sleuth.com/cases/do-si-do
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
region-sum-1: region-sum r3c2-r3c3-r3c4-r3c5-r3c6-r2c6 segments [["r3c2","r3c3"],["r3c4","r3c5","r3c6","r2c6"]]
region-sum-2: region-sum r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r6c8-r6c9 segments [["r1c7","r2c7","r3c7"],["r4c7","r5c7","r6c7","r6c8","r6c9"]]
region-sum-3: region-sum r7c8-r7c7-r7c6-r7c5-r7c4-r8c4 segments [["r7c8","r7c7"],["r7c6","r7c5","r7c4","r8c4"]]
region-sum-4: region-sum r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r4c2-r4c1 segments [["r9c3","r8c3","r7c3"],["r6c3","r5c3","r4c3","r4c2","r4c1"]]
region-sum-5: region-sum r5c1-r6c1-r7c1-r8c1-r9c1 segments [["r5c1","r6c1"],["r7c1","r8c1","r9c1"]]
region-sum-6: region-sum r5c9-r4c9-r3c9-r2c9-r2c8 segments [["r5c9","r4c9"],["r3c9","r2c9","r2c8"]]
pair-1: pair r3c2-r3c3 relation {"op":"sum","value":10}
pair-2: pair r2c7-r3c7 relation {"op":"sum","value":10}
pair-3: pair r7c7-r7c8 relation {"op":"sum","value":10}
pair-4: pair r7c3-r8c3 relation {"op":"sum","value":10}
pair-5: pair r6c6-r6c7 relation {"op":"sum","value":10}
pair-6: pair r4c3-r4c4 relation {"op":"sum","value":10}
pair-7: pair r1c9-r2c9 relation {"op":"sum","value":10}
pair-8: pair r3c1-r4c1 relation {"op":"sum","value":10}
pair-9: pair r7c1-r8c1 relation {"op":"sum","value":10}
pair-10: pair r3c3-r4c3 relation {"op":"sum","value":5}
pair-11: pair r2c6-r2c7 relation {"op":"sum","value":5}
pair-12: pair r8c3-r8c4 relation {"op":"sum","value":5}
pair-13: pair r6c7-r7c7 relation {"op":"sum","value":5}
pair-14: pair r6c5-r7c5 relation {"op":"sum","value":5}
pair-15: pair r3c5-r4c5 relation {"op":"sum","value":5}
pair-16: pair r1c2-r1c3 relation {"op":"sum","value":5}
pair-17: pair r8c9-r9c9 relation {"op":"sum","value":5}
pair-18: pair r3c5-r3c6 relation {"op":"sum","value":5}
pair-19: pair r7c4-r7c5 relation {"op":"sum","value":5}
```

**Sudoku, Region Sum Lines, XV Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Region Sum Lines: Box borders split blue region sum lines into sections and the digits on those section must sum to the same value.
- XV pairs: Digits in cells separated by an X sum to 10. Digits in cells separated by a V sum to 5. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
