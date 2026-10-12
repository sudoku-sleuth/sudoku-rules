---
format: open-rules
title: Merge
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kog678jpox
case: https://sudoku-sleuth.com/cases/merge
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 colour "black"
kropki-2: kropki r1c3-r2c3 colour "black"
kropki-3: kropki r2c6-r2c7 colour "black"
kropki-4: kropki r8c3-r8c4 colour "black"
kropki-5: kropki r8c7-r8c8 colour "black"
kropki-6: kropki r7c8-r7c9 colour "black"
kropki-7: kropki r6c5-r7c5 colour "black"
kropki-8: kropki r3c7-r4c7 colour "black"
region-sum-1: region-sum r5c3-r4c2-r3c1-r3c2-r2c2-r2c3-r1c3-r2c4-r3c5 segments [["r5c3","r4c2"],["r3c1","r3c2","r2c2","r2c3","r1c3"],["r2c4","r3c5"]]
region-sum-2: region-sum r7c5-r8c6-r9c7-r8c7-r8c8-r7c8-r7c9-r6c8-r5c7 segments [["r7c5","r8c6"],["r9c7","r8c7","r8c8","r7c8","r7c9"],["r6c8","r5c7"]]
region-sum-3: region-sum r6c2-r7c2-r7c3-r8c3-r8c4 segments [["r6c2"],["r7c2","r7c3","r8c3"],["r8c4"]]
region-sum-4: region-sum r2c6-r2c7-r3c7-r3c8-r4c8 segments [["r2c6"],["r2c7","r3c7","r3c8"],["r4c8"]]
region-sum-5: region-sum r8c1-r7c1-r6c1-r5c2-r6c3 segments [["r8c1","r7c1"],["r6c1","r5c2","r6c3"]]
region-sum-6: region-sum r1c5-r1c6-r1c7 segments [["r1c5","r1c6"],["r1c7"]]
region-sum-7: region-sum r4c3-r5c4-r6c5 segments [["r4c3"],["r5c4","r6c5"]]
```

**Sudoku, Sum Lines, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. 
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
