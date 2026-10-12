---
format: open-rules
title: Tight Turns
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/k0434w38x0
case: https://sudoku-sleuth.com/cases/tight-turns
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c1=9 r5c3=5
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r3c1-r2c2-r1c3-r1c4
thermo-2: thermo r4c9-r3c9-r2c8-r1c7-r1c6
thermo-3: thermo r6c1-r7c1-r8c2-r9c3-r9c4
thermo-4: thermo r9c6-r9c7-r8c8-r7c9-r6c9
thermo-5: thermo r4c3-r3c3-r3c4
thermo-6: thermo r4c7-r3c7-r3c6
thermo-7: thermo r6c3-r7c3-r7c4
thermo-8: thermo r7c6-r7c7-r6c7
thermo-9: thermo r2c4-r1c5-r2c6
thermo-10: thermo r8c4-r9c5-r8c6
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2]
quadruple-2: quadruple r3c3-r3c4-r4c3-r4c4 digits [3,4]
quadruple-3: quadruple r5c5-r5c6-r6c5-r6c6 digits [5,6]
quadruple-4: quadruple r7c7-r7c8-r8c7-r8c8 digits [7,8]
quadruple-5: quadruple r1c8-r1c9-r2c8-r2c9 digits [3,4]
quadruple-6: quadruple r3c6-r3c7-r4c6-r4c7 digits [7,8]
quadruple-7: quadruple r6c3-r6c4-r7c3-r7c4 digits [1,2]
quadruple-8: quadruple r8c1-r8c2-r9c1-r9c2 digits [5,6]
quadruple-9: quadruple r4c4-r4c5-r5c4-r5c5 digits [2,8]
```

**Standard Sudoku, Thermometer, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermos: Digits on Thermos are strictly increasing from bulb (grey circle) to tip (along the grey line).
- Quadruples: Digits in a white Quadruple circle must appear at least once in the four cells touching the circle.

For more of our puzzles, please visit https://missingdeck.net
