---
format: open-rules
title: Point to the Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cspltvn85q
case: https://sudoku-sleuth.com/cases/point-to-the-heat
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r9c3-r8c3-r7c3-r6c3-r5c3
thermo-2: thermo r4c8-r4c7-r4c6-r4c5
thermo-3: thermo r5c1-r6c1-r7c1-r8c1
thermo-4: thermo r2c9-r2c8-r2c7-r2c6-r2c5
thermo-5: thermo r9c8-r8c8-r7c8-r6c8
thermo-6: thermo r4c2-r3c2-r2c2
arrow-1: arrow r7c5-r6c4-r5c3 bulb ["r8c6"]
arrow-2: arrow r2c4-r3c4-r4c5 bulb ["r1c4"]
arrow-3: arrow r6c2-r7c2-r8c1 bulb ["r5c2"]
arrow-4: arrow r1c7-r1c8-r2c9 bulb ["r1c6"]
arrow-5: arrow r8c7-r9c8 bulb ["r7c7"]
arrow-6: arrow r3c1-r2c2 bulb ["r4c1"]
```

**Sudoku, Arrows, Thermos**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
