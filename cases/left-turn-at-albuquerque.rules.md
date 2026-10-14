---
format: open-rules
title: Left Turn at Albuquerque
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gen37jjvoh
case: https://sudoku-sleuth.com/cases/left-turn-at-albuquerque
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=9 r5c2=5
exported: a42c6ce3948b1cc0939833175a86dff5
---

```rules
sudoku 9x9
arrow-1: arrow r4c4-r3c3-r3c4 bulb ["r5c5"]
arrow-2: arrow r4c6-r3c7-r3c6 bulb ["r5c5"]
arrow-3: arrow r6c4-r7c3-r7c4 bulb ["r5c5"]
arrow-4: arrow r6c6-r7c7-r7c6 bulb ["r5c5"]
arrow-5: arrow r4c2-r4c3-r5c3 bulb ["r4c1"]
arrow-6: arrow r1c1-r2c1-r3c1 bulb ["r1c2"]
arrow-7: arrow r1c9-r2c9-r3c9 bulb ["r1c8"]
arrow-8: arrow r6c8-r6c9-r5c9 bulb ["r6c7"]
arrow-9: arrow r6c2-r6c1 bulb ["r6c3"]
arrow-10: arrow r8c1-r9c1-r9c2 bulb ["r7c1"]
arrow-11: arrow r9c8-r8c8 bulb ["r9c9"]
arrow-12: arrow r2c5-r2c4 bulb ["r3c5"]
arrow-13: arrow r1c6-r1c5-r1c4 bulb ["r2c6"]
arrow-14: arrow r7c5-r8c5 bulb ["r6c5"]
arrow-15: arrow r5c8-r4c9 bulb ["r5c7"]
arrow-16: arrow r7c8-r8c7 bulb ["r8c9"]
arrow-17: arrow r8c3-r8c2 bulb ["r9c3"]
```

**Standard Sudoku, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along the shaft of the arrow sum to the value in the attached circle.
