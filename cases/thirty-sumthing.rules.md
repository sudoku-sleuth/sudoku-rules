---
format: open-rules
title: Thirty-sumthing
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/thirty-sumthing
case: https://sudoku-sleuth.com/cases/thirty-sumthing
library: https://rules.sudoku-sleuth.com/
status: read
exported: b8912137ef13312e75d24488ca3aa289
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r2c2 black
kropki-2: kropki r2c9-r3c9 black
kropki-3: kropki r9c8-r9c9 black
kropki-4: kropki r3c3-r4c3 black
kropki-5: kropki r4c3-r5c3 black
kropki-6: kropki r4c8-r5c8 black
kropki-7: kropki r5c8-r6c8 black
kropki-8: kropki r7c4-r7c5 black
kropki-9: kropki r7c5-r7c6 black
kropki-10: kropki r5c6-r6c6 black
sandwich-1: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 30
sandwich-2: sandwich r8c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 sum 30
sandwich-3: sandwich r5c9-r5c8-r5c7-r5c6-r5c5-r5c4-r5c3-r5c2-r5c1 sum 27
sandwich-4: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 6
sandwich-5: sandwich r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3 sum 30
sandwich-6: sandwich r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 30
sandwich-7: sandwich r9c4-r8c4-r7c4-r6c4-r5c4-r4c4-r3c4-r2c4-r1c4 sum 9
```

**Sudoku, Sandwiches, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sandwich sum: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
