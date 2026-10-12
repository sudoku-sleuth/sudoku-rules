---
format: open-rules
title: Slow Cooker
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3llb2jcz74
case: https://sudoku-sleuth.com/cases/slow-cooker
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c4-r2c5-r2c6 total 8 connected true
cage-2: cage r8c4-r8c5-r8c6 total 12 connected true
cage-3: cage r5c7-r5c8-r5c9 total 20 connected true
cage-4: cage r5c1-r5c2-r5c3 total 10 connected true
cage-5: cage r1c3-r2c3-r3c3 total 9 connected true
cage-6: cage r1c7-r2c7-r3c7 total 12 connected true
cage-7: cage r7c3-r8c3-r9c3 total 16 connected true
cage-8: cage r7c7-r8c7-r9c7 total 23 connected true
cage-9: cage r9c5-r9c6 total 13 connected true
cage-10: cage r1c4-r1c5 total 11 connected true
cage-11: cage r8c1-r9c1 total 10 connected true
slow-thermo-1: slow-thermo r1c3-r2c4-r3c3-r4c4-r5c3-r6c4-r7c3-r8c4-r9c3
slow-thermo-2: slow-thermo r1c7-r2c6-r3c7-r4c6-r5c7-r6c6-r7c7-r8c6-r9c7
slow-thermo-3: slow-thermo r3c1-r4c2-r5c1-r6c2-r7c1
slow-thermo-4: slow-thermo r7c9-r6c8-r5c9-r4c8-r3c9
```

**Sudoku, Slow Thermometers, Cages**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Slow Thermometers: Digits along thermometers can repeat but cannot decrease as you move from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

For more of our puzzles, visit https://missingdeck.net
