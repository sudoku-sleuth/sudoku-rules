---
format: open-rules
title: Feeding the Flames
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/eig2fjundk
case: https://sudoku-sleuth.com/cases/feeding-the-flames
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c4=7
exported: 27cd9297dc31e69d842c0887dbc35390
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c2-r2c3-r1c4
thermo-2: thermo r1c6-r2c7-r3c8-r4c9
thermo-3: thermo r6c9-r7c8-r8c7-r9c6
thermo-4: thermo r9c4-r8c3-r7c2-r6c1
thermo-5: thermo r5c2-r4c3-r3c4
thermo-6: thermo r5c8-r6c7-r7c6
thermo-7: thermo r8c9-r9c8
arrow-1: arrow r2c3-r3c2-r4c1 bulb ["r1c4"]
arrow-2: arrow r2c5-r3c6-r4c7 bulb ["r1c4"]
arrow-3: arrow r3c8-r2c7-r1c6 bulb ["r4c9"]
arrow-4: arrow r5c8-r6c7-r7c6 bulb ["r4c9"]
arrow-5: arrow r8c7-r7c8-r6c9 bulb ["r9c6"]
arrow-6: arrow r8c5-r7c4 bulb ["r9c6"]
arrow-7: arrow r5c2-r4c3-r3c4 bulb ["r6c1"]
arrow-8: arrow r7c2-r8c3-r9c4 bulb ["r6c1"]
arrow-9: arrow r6c5-r5c4 bulb ["r5c6"]
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Thermometers: Digits along a thermometer increase from bulb to tip.
