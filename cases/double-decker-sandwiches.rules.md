---
format: open-rules
title: Double Decker Sandwiches
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/n7n3yh07q4
case: https://sudoku-sleuth.com/cases/double-decker-sandwiches
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c8-r5c9 colour "black"
kropki-2: kropki r6c1-r6c2 colour "black"
kropki-3: kropki r7c5-r7c6 colour "black"
kropki-4: kropki r7c7-r7c8 colour "black"
kropki-5: kropki r9c7-r9c8 colour "black"
kropki-6: kropki r6c4-r7c4 colour "black"
kropki-7: kropki r5c3-r5c4 colour "black"
kropki-8: kropki r5c3-r6c3 colour "black"
kropki-9: kropki r1c2-r1c3 colour "black"
kropki-10: kropki r3c1-r3c2 colour "black"
kropki-11: kropki r3c4-r3c5 colour "black"
kropki-12: kropki r1c5-r1c6 colour "black"
kropki-13: kropki r1c7-r1c8 colour "black"
kropki-14: kropki r3c6-r4c6 colour "black"
sandwich-1: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 9
sandwich-2: sandwich r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 10
sandwich-3: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 11
sandwich-4: sandwich r7c9-r7c8-r7c7-r7c6-r7c5-r7c4-r7c3-r7c2-r7c1 sum 12
sandwich-5: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 13
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sandwiches: Clues outside the grid give the sum of the digits appearing between 1 and 9 in that row or column.
- Ratio pairs: Digits separated by a black dot are in a 1:2 ratio. Not all dots are necessarily given.
