---
format: open-rules
title: Crossings
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/90frp7xdgh
case: https://sudoku-sleuth.com/cases/crossings
library: https://rules.sudoku-sleuth.com/
status: read
exported: c90dcf2a8170d6ff5316b3f911703e8d
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r2c2-r2c3-r2c4-r3c4
thermo-2: thermo r3c9-r3c8-r3c7-r3c6-r4c6
thermo-3: thermo r4c1-r4c2-r4c3-r4c4-r5c4
thermo-4: thermo r5c9-r5c8-r5c7-r5c6-r6c6
thermo-5: thermo r7c1-r7c2-r7c3-r7c4-r8c4
thermo-6: thermo r8c9-r8c8-r8c7-r8c6-r9c6
arrow-1: arrow r3c2-r4c3 bulb ["r2c1"]
arrow-2: arrow r5c7-r4c8 bulb ["r6c6"]
arrow-3: arrow r3c5 bulb ["r4c6"]
arrow-4: arrow r6c8 bulb ["r7c7"]
arrow-5: arrow r8c7-r9c6 bulb ["r7c8"]
arrow-6: arrow r8c3 bulb ["r7c4"]
arrow-7: arrow r6c4-r5c5 bulb ["r7c3"]
```

**Standard Sudoku, Thermo, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits along grey thermos strictly increase from bulb to tip.
- Arrows: Digits along the shaft of an arrow sum the value in the circle from which the arrow emerges.
