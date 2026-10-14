---
format: open-rules
title: Interwoven
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/54lssgrtq6
case: https://sudoku-sleuth.com/cases/interwoven
library: https://rules.sudoku-sleuth.com/
status: read
exported: 711fd5e95cafe9f6c9942adbfb0f2d90
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c2-r1c3-r2c4-r3c5-r4c6
thermo-2: thermo r7c9-r8c8-r9c7-r8c6-r7c5-r6c4
thermo-3: thermo r2c8-r1c7-r2c6-r1c5
thermo-4: thermo r8c2-r9c3-r8c4-r9c5
thermo-5: thermo r5c1-r4c2-r3c3-r4c4
thermo-6: thermo r5c9-r6c8-r7c7-r6c6
thermo-7: thermo r3c9-r4c8-r3c7
thermo-8: thermo r7c1-r6c2-r7c3
arrow-1: arrow r5c5-r6c6 bulb ["r4c4"]
arrow-2: arrow r3c4-r2c4 bulb ["r4c4"]
arrow-3: arrow r5c5-r6c4 bulb ["r4c6"]
arrow-4: arrow r8c2-r9c1 bulb ["r7c3"]
arrow-5: arrow r8c4 bulb ["r7c3"]
arrow-6: arrow r7c7 bulb ["r8c6"]
arrow-7: arrow r6c9-r7c9 bulb ["r5c9"]
arrow-8: arrow r2c6 bulb ["r3c7"]
arrow-9: arrow r2c8-r1c9 bulb ["r1c7"]
arrow-10: arrow r8c8-r9c7 bulb ["r9c9"]
```

**Standard Sudoku, Thermo, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermos strictly increase from bulb to tip.
- Arrows: Digits along the shaft of an arrow sum the value in the circle from which the arrow emerges. Arrows continue straight at intersections.
