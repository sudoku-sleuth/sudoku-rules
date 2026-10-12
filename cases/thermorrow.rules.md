---
format: open-rules
title: Thermorrow
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3y5w8i9zmd
case: https://sudoku-sleuth.com/cases/thermorrow
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c5=3
---

```rules
sudoku 9x9
thermo-1: thermo r1c5-r2c5-r3c5-r4c5-r5c4
thermo-2: thermo r6c6-r5c6-r5c7-r5c8
arrow-1: arrow r1c4-r2c4-r3c4-r4c3-r3c2 bulb ["r1c3"]
arrow-2: arrow r9c6-r8c6-r7c6-r6c7-r7c8 bulb ["r9c7"]
arrow-3: arrow r8c2-r7c3-r6c4 bulb ["r9c1"]
arrow-4: arrow r8c1-r7c1 bulb ["r9c1"]
arrow-5: arrow r2c8-r3c7-r4c6 bulb ["r1c9"]
arrow-6: arrow r2c9-r3c9 bulb ["r1c9"]
arrow-7: arrow r5c3-r5c2-r5c1 bulb ["r5c4"]
arrow-8: arrow r8c4-r9c3 bulb ["r8c5"]
arrow-9: arrow r7c5-r6c5 bulb ["r8c5"]
arrow-10: arrow r8c9-r9c9 bulb ["r7c9"]
```

**Standard Sudoku, Arrows, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Thermometers: Along grey thermometers, digits strictly increase from bulb to tip.

For more puzzles from us, visit https://missingdeck.net
