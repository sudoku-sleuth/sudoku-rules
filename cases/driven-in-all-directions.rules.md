---
format: open-rules
title: Driven in all Directions
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2rssugxhjt
case: https://sudoku-sleuth.com/cases/driven-in-all-directions
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=4 r1c9=2 r9c1=9 r9c9=5
exported: 3c067894bfedb3994c31d9a0f17b6fa5
---

```rules
sudoku 9x9
thermo-1: thermo r2c2-r1c3-r1c4-r1c5
thermo-2: thermo r2c8-r3c9-r4c9-r5c9
thermo-3: thermo r8c8-r9c7-r9c6-r9c5
thermo-4: thermo r8c2-r7c1-r6c1-r5c1
thermo-5: thermo r5c2-r5c3-r5c4
thermo-6: thermo r2c5-r3c5-r4c5
thermo-7: thermo r5c8-r5c7-r5c6
thermo-8: thermo r8c5-r7c5-r6c5
arrow-1: arrow r7c1-r8c2-r9c3 bulb ["r6c1"]
arrow-2: arrow r9c7-r8c8-r7c9 bulb ["r9c6"]
arrow-3: arrow r3c9-r2c8-r1c7 bulb ["r4c9"]
arrow-4: arrow r1c3-r2c2-r3c1 bulb ["r1c4"]
arrow-5: arrow r8c3-r9c4 bulb ["r7c2"]
arrow-6: arrow r4c4-r3c3 bulb ["r5c5"]
arrow-7: arrow r4c6-r3c7 bulb ["r5c5"]
arrow-8: arrow r6c6-r7c7 bulb ["r5c5"]
```

**Sudoku, Thermometers, Arrows**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
 - Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
