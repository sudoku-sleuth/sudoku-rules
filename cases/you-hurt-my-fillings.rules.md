---
format: open-rules
title: You Hurt My Fillings
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/you-hurt-my-fillings
case: https://sudoku-sleuth.com/cases/you-hurt-my-fillings
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c8=4
exported: 57fbd38e15354176e91d3466c86a9721
---

```rules
sudoku 9x9
thermo-1: thermo r3c4-r3c5-r4c5-r5c5-r6c5-r7c5-r7c6
thermo-2: thermo r2c2-r2c3-r3c3-r4c3-r4c2
thermo-3: thermo r2c6-r3c6-r4c6-r5c6-r5c7
thermo-4: thermo r8c1-r7c1-r7c2-r7c3-r8c3-r9c3-r9c2
thermo-5: thermo r3c9-r2c9-r1c9-r1c8-r2c8
thermo-6: thermo r6c2-r5c2-r5c1-r6c1
sandwich-1: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 0
sandwich-2: sandwich r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 sum 0
sandwich-3: sandwich r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9 sum 0
sandwich-4: sandwich r9c3-r8c3-r7c3-r6c3-r5c3-r4c3-r3c3-r2c3-r1c3 sum 0
sandwich-5: sandwich r9c6-r8c6-r7c6-r6c6-r5c6-r4c6-r3c6-r2c6-r1c6 sum 0
sandwich-6: sandwich r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8 sum 0
sandwich-7: sandwich r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 0
```

**Sudoku, Sandwiches, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Sandwich sum: Clues outside the grid indicate the sum of the digits between 1 and 9 in that row or column.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
