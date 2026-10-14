---
format: open-rules
title: Killing Me Modularly
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/40pptga6w6
case: https://sudoku-sleuth.com/cases/killing-me-modularly
library: https://rules.sudoku-sleuth.com/
status: read
exported: d0ad9a14d86105ac6313c72744fc6f7f
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c2 total 7 connected true
cage-2: cage r1c9-r2c8-r2c9 total 8 connected true
cage-3: cage r8c8-r9c8-r9c9 total 9 connected true
cage-4: cage r8c1-r8c2-r9c1 total 10 connected true
cage-5: cage r5c3-r6c3-r7c3 total 6 connected true
cage-6: cage r5c7-r6c7-r7c7 total 12 connected true
modular-1: modular r1c1-r1c2-r1c3-r1c4
modular-2: modular r1c9-r2c9-r3c9-r4c9
modular-3: modular r9c9-r9c8-r9c7-r9c6
modular-4: modular r9c1-r8c1-r7c1-r6c1
modular-5: modular r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
modular-6: modular r2c8-r3c8-r4c8-r5c8-r6c8-r7c8
modular-7: modular r8c8-r8c7-r8c6-r8c5-r8c4-r8c3
modular-8: modular r8c2-r7c2-r6c2-r5c2-r4c2-r3c2
modular-9: modular r3c4-r4c4-r4c3
modular-10: modular r3c6-r4c6-r4c7
little-killer-1: little-killer r2c1-r1c2 sum 8
little-killer-2: little-killer r2c9-r1c8 sum 9
little-killer-3: little-killer r9c8-r8c9 sum 4
little-killer-4: little-killer r9c2-r8c1 sum 8
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a teal modular line has three different remainders when divided by 3.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
- Little Killers: Clues outside the grid are the sum of the digits along the indicated diagonal. Digits may repeat if allowed by other rules.
