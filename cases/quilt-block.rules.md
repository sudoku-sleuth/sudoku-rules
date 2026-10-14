---
format: open-rules
title: Quilt Block
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/quilt-block
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r1c5=6 r1c9=3 r3c5=8 r5c2=6 r5c5=1 r5c8=7 r7c5=9 r9c1=5 r9c5=2 r9c9=4
exported: e2287137e1004b31285a9a495620617f
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r3c3-r4c4 bulb ["r3c2"]
arrow-2: arrow r2c8-r3c7-r4c6 bulb ["r3c8"]
arrow-3: arrow r8c2-r7c3-r6c4 bulb ["r7c2"]
arrow-4: arrow r8c8-r7c7-r6c6 bulb ["r7c8"]
arrow-5: arrow r8c5-r7c6 bulb ["r9c4"]
arrow-6: arrow r2c5-r3c4 bulb ["r1c6"]
arrow-7: arrow r8c6 bulb ["r9c7"]
arrow-8: arrow r2c4 bulb ["r1c3"]
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1 - 9.

Normal arrow rules apply: digits along an arrow must sum to the number shown in the circle attached to the arrow. Digits may repeat along an arrow if allowed by other rules.
