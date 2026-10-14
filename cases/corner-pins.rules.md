---
format: open-rules
title: Corner Pins
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/corner-pins
case: https://sudoku-sleuth.com/cases/corner-pins
library: https://rules.sudoku-sleuth.com/
status: read
exported: 12d1a48a75b7eb7596b68ee00bb5050f
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c1-r2c2-r1c3-r1c4-r1c5-r1c6
thermo-2: thermo r6c1-r7c1-r8c1-r9c1-r9c2
thermo-3: thermo r9c6-r9c7-r8c8-r7c9-r6c9-r5c9-r4c9
thermo-4: thermo r3c9-r2c9-r1c9-r1c8-r1c7
thermo-5: thermo r2c5-r2c4-r3c3-r4c3
thermo-6: thermo r5c3-r5c4-r4c4-r3c4
thermo-7: thermo r8c5-r7c6-r6c6-r5c6
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3]
quadruple-2: quadruple r8c8-r8c9-r9c8-r9c9 digits [5,7,8]
```

**Sudoku, Thermometers, Quadruples**

- Normal Sudoku Rules: Each row, column, and box contains a complete set of the digits 1-9.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Quadruples: Digits in a quadruple circle must be placed at least once in the four cells touching that circle. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
