---
format: open-rules
title: An Oddly Satisfying Sandwich
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o6k8dzrr4m
case: https://sudoku-sleuth.com/cases/an-oddly-satisfying-sandwich
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7c45ab284d5f479bfaa04999046c317e
---

```rules
sudoku 9x9
kropki-1: kropki r3c3-r3c4 black
kropki-2: kropki r5c4-r6c4 black
parity-1: parity r2c1-r2c2-r2c3-r2c4
parity-2: parity r2c9-r2c8-r2c7-r2c6
parity-3: parity r8c1-r8c2-r8c3-r8c4
parity-4: parity r8c6-r8c7-r8c8-r8c9
parity-5: parity r2c5-r3c5
parity-6: parity r7c5-r8c5
parity-7: parity r5c4-r5c5
parity-8: parity r3c2-r4c2
parity-9: parity r6c1-r7c2
parity-10: parity r3c8-r4c9
sandwich-1: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 10
sandwich-2: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 10
sandwich-3: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 4
sandwich-4: sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 12
sandwich-5: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 5
sandwich-6: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 6
sandwich-7: sandwich r4c9-r4c8-r4c7-r4c6-r4c5-r4c4-r4c3-r4c2-r4c1 sum 7
sandwich-8: sandwich r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 11
sandwich-9: sandwich r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 3
sandwich-10: sandwich r9c7-r8c7-r7c7-r6c7-r5c7-r4c7-r3c7-r2c7-r1c7 sum 13
sandwich-11: sandwich r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 sum 15
```

**Sudoku, Sandwich Sums, Parity Lines, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sandwich Sums: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.
- Parity Lines: Digits along a parity line alternate odd/even.
- Ratio Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
