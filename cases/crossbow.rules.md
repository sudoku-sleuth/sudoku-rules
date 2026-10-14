---
format: open-rules
title: Crossbow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/b1opzfiz7w
case: https://sudoku-sleuth.com/cases/crossbow
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=7 r3c2=4 r3c5=1 r3c7=7 r4c8=5 r5c3=5 r5c7=3 r7c2=3 r7c5=4 r8c3=9 r8c7=5
exported: fe6568eb63f4e97276eeb1cfe13e307b
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1-r4c1-r5c2-r6c3 bulb ["r1c1"]
arrow-2: arrow r9c8-r9c7-r9c6-r8c5-r7c4 bulb ["r9c9"]
arrow-3: arrow r8c2-r7c3-r6c4 bulb ["r9c1"]
arrow-4: arrow r1c7-r1c6-r2c5 bulb ["r1c8"]
arrow-5: arrow r3c9-r4c9-r5c8 bulb ["r2c9"]
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Digits along arrows must sum to the number shown in the circle attached to the arrow. Digits may repeat along arrows if allowed by other rules.

Exported from f-puzzles.com
