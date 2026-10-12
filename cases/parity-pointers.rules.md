---
format: open-rules
title: Parity Pointers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7fwqymp4bt
case: https://sudoku-sleuth.com/cases/parity-pointers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c4-r3c5 bulb ["r1c3"]
arrow-2: arrow r4c2-r5c2 bulb ["r3c1"]
arrow-3: arrow r6c2-r5c3 bulb ["r7c1"]
arrow-4: arrow r4c3-r3c2 bulb ["r5c4"]
arrow-5: arrow r5c5-r4c6 bulb ["r6c4"]
arrow-6: arrow r8c3-r7c4 bulb ["r9c3"]
arrow-7: arrow r8c6-r7c5 bulb ["r9c7"]
arrow-8: arrow r6c9-r5c8 bulb ["r7c9"]
arrow-9: arrow r4c8-r5c7 bulb ["r3c9"]
arrow-10: arrow r2c6-r2c5 bulb ["r1c7"]
parity-cells-1: parity-cells r5c6 parity "odd"
parity-cells-2: parity-cells r5c1-r5c2-r4c3-r3c1-r1c3-r3c5-r1c7-r4c9-r3c9-r5c8-r7c9-r9c7-r7c1-r9c3-r6c4 parity "even"
```

**Sudoku, Arrows, Even/Odd**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges.
- Even/Odd: Cells marked with a blue-bordered grey square contain even digits. Cells marked with an orange-bordered grey circle contain odd digits.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
