---
format: open-rules
title: Multiples of Ten
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/e9rkkwf5cf
case: https://sudoku-sleuth.com/cases/multiples-of-ten
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c7=1
---

```rules
sudoku 9x9
little-killer-1: little-killer r4c9-r3c8-r2c7-r1c6 sum 10
little-killer-2: little-killer r3c9-r2c8-r1c7 sum 20
little-killer-3: little-killer r1c3-r2c2-r3c1 sum 10
little-killer-4: little-killer r1c4-r2c3-r3c2-r4c1 sum 20
little-killer-5: little-killer r9c3-r8c2-r7c1 sum 20
little-killer-6: little-killer r9c7-r8c8-r7c9 sum 20
little-killer-7: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 50
little-killer-8: little-killer r6c9-r5c8-r4c7-r3c6-r2c5-r1c4 sum 30
sandwich-1: sandwich r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9 sum 30
sandwich-2: sandwich r9c8-r8c8-r7c8-r6c8-r5c8-r4c8-r3c8-r2c8-r1c8 sum 30
sandwich-3: sandwich r9c2-r8c2-r7c2-r6c2-r5c2-r4c2-r3c2-r2c2-r1c2 sum 30
sandwich-4: sandwich r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c5-r2c5-r1c5 sum 30
sandwich-5: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 20
sandwich-6: sandwich r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9 sum 10
sandwich-7: sandwich r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9 sum 10
sandwich-8: sandwich r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9 sum 10
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Little Killers: Smaller clues (associated with an arrow) outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
- Sandwich sum: Larger clues (not associated with an arrow) outside the grid indicate the sum of the digits between 1 and 9 in that row or column.
