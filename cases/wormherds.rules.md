---
format: open-rules
title: Wormherds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/wormherds
case: https://sudoku-sleuth.com/cases/wormherds
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2919c33c4fcf467c7d6790e0ee9571b9
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r2c1-r2c2-r3c2-r4c2-r4c3
thermo-2: thermo r2c7-r2c8-r3c8-r3c7-r3c6-r4c6
thermo-3: thermo r7c3-r7c2-r8c2-r8c3-r8c4-r9c4
thermo-4: thermo r6c6-r6c5-r7c5-r7c6-r7c7-r8c7
quadruple-1: quadruple r3c2-r3c3-r4c2-r4c3 digits [1,9]
quadruple-2: quadruple r1c1-r1c2-r2c1-r2c2 digits [2]
quadruple-3: quadruple r3c7-r3c8-r4c7-r4c8 digits [3,3]
quadruple-4: quadruple r1c8-r1c9-r2c8-r2c9 digits [9]
quadruple-5: quadruple r8c1-r8c2-r9c1-r9c2 digits [7]
quadruple-6: quadruple r6c2-r6c3-r7c2-r7c3 digits [1,3]
quadruple-7: quadruple r6c7-r6c8-r7c7-r7c8 digits [1,4]
quadruple-8: quadruple r8c8-r8c9-r9c8-r9c9 digits [2]
quadruple-9: quadruple r8c4-r8c5-r9c4-r9c5 digits [8]
quadruple-10: quadruple r1c5-r1c6-r2c5-r2c6 digits [7]
```

**Sudoku, Thermometers, Quadruples**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Quadruples: Digits in a quadruple circle must be placed at least once in the four cells touching that circle. If a digit appears twice in a quadruple circle, it must be placed twice in the four cells touching that circle.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
