---
format: open-rules
title: Flying East
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uc1awzpzlj
case: https://sudoku-sleuth.com/cases/flying-east
library: https://rules.sudoku-sleuth.com/
status: read
exported: 109efa340bfa6e2f610838828eadeeca
---

```rules
sudoku 9x9
cage-1: cage r4c3-r5c3-r6c3 total 9 connected true
cage-2: cage r4c8-r5c8-r6c8 total 22 connected true
cage-3: cage r8c1-r8c2-r9c2 total 10 connected true
cage-4: cage r1c2-r2c1-r2c2 total 9 connected true
cage-5: cage r4c5-r5c5-r6c5 total 14 connected true
cage-6: cage r8c6-r9c5-r9c6 total 17 connected true
cage-7: cage r1c5-r1c6-r2c6 total 14 connected true
cage-8: cage r2c3-r2c4 total 11 connected true
cage-9: cage r8c3-r8c4 total 11 connected true
slow-thermo-1: slow-thermo r7c2-r6c3-r7c4-r6c5-r7c6-r6c7-r5c6-r4c7-r3c6-r4c5-r3c4-r4c3-r3c2
slow-thermo-2: slow-thermo r2c6-r3c7-r4c8-r5c9-r6c8-r7c7-r8c6
slow-thermo-3: slow-thermo r7c1-r6c2-r5c1-r4c2-r3c1
```

**Sudoku, Slow Thermometers, Cages**

- Normal sudoku: A complete set of the digits 1-9 must be placed in each row, column, and box without repetition.
- Slow thermometers: Digits along thermometers can repeat but cannot decrease as you move from bulb to tip.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
