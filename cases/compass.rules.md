---
format: open-rules
title: Compass
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/70lxloutxy
case: https://sudoku-sleuth.com/cases/compass
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c7=7 r6c9=1 r8c2=3
exported: 9dfbad91a9f030c69a7b1b09ed06a8ca
---

```rules
sudoku 9x9
cage-1: cage r1c5-r2c5-r3c5 total 8 connected true
cage-2: cage r5c1-r5c2-r5c3 total 9 connected true
cage-3: cage r5c7-r5c8-r5c9 total 18 connected true
cage-4: cage r7c5-r8c5-r9c5 total 19 connected true
thermo-1: thermo r5c5-r4c4-r3c3-r2c2
thermo-2: thermo r5c5-r6c6-r7c7-r8c8
thermo-3: thermo r7c1-r8c1-r9c1-r9c2-r9c3
thermo-4: thermo r3c9-r2c9-r1c9-r1c8-r1c7
thermo-5: thermo r1c3-r1c2-r1c1-r2c1-r3c1
thermo-6: thermo r9c7-r9c8-r9c9-r8c9-r7c9
arrow-1: arrow r4c6-r3c7 bulb ["r5c5"]
arrow-2: arrow r6c4-r7c3 bulb ["r5c5"]
```

**Sudoku, Thermometers, Arrows, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
 - Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.

NOTE: r5c5 is both the bulb of the two-directional thermometer and also the circle summing each of the two arrows extending from the cell.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
