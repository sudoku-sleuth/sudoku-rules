---
format: open-rules
title: Gentle Mist
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/73xwdoa75f
case: https://sudoku-sleuth.com/cases/gentle-mist
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=6 r2c1=3 r3c1=7 r4c6=6 r6c3=9 r8c7=5
exported: 15838bbf66eb0c6e2560d33b70d34ec3
---

```rules
sudoku 9x9
arrow-1: arrow r3c2-r4c3-r5c4 bulb ["r2c1"]
arrow-2: arrow r4c2-r5c3-r6c4 bulb ["r3c1"]
arrow-3: arrow r2c2-r3c3-r4c4 bulb ["r1c1"]
arrow-4: arrow r2c4-r3c5 bulb ["r1c3"]
arrow-5: arrow r2c6-r3c7 bulb ["r1c5"]
arrow-6: arrow r2c8-r3c9 bulb ["r1c7"]
arrow-7: arrow r7c2 bulb ["r6c1"]
arrow-8: arrow r8c2-r9c3 bulb ["r7c1"]
arrow-9: arrow r7c4-r8c5 bulb ["r6c3"]
arrow-10: arrow r7c6-r8c7 bulb ["r6c5"]
arrow-11: arrow r5c7-r6c8 bulb ["r4c6"]
arrow-12: arrow r4c9 bulb ["r3c8"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
