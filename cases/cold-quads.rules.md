---
format: open-rules
title: Cold Quads
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/o29tpbn7mp
case: https://sudoku-sleuth.com/cases/cold-quads
library: https://rules.sudoku-sleuth.com/
status: read
exported: d72eb152738ab05283d83d9de40b4a6a
---

```rules
sudoku 9x9
thermo-1: thermo r4c1-r4c2-r3c3-r2c4-r1c4
thermo-2: thermo r1c6-r2c6-r3c7-r4c8-r4c9
thermo-3: thermo r6c9-r6c8-r7c7-r8c6-r9c6
thermo-4: thermo r9c4-r8c4-r7c3-r6c2-r6c1
thermo-5: thermo r4c7-r3c6-r2c5
thermo-6: thermo r6c3-r7c4-r8c5
thermo-7: thermo r3c4-r4c3-r5c2
thermo-8: thermo r7c6-r6c7
thermo-9: thermo r8c1-r9c1-r9c2
thermo-10: thermo r8c9-r9c9-r9c8
thermo-11: thermo r3c9-r2c9-r1c9-r1c8
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1,2,3,4]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [6,7,8,9]
quadruple-3: quadruple r7c7-r7c8-r8c7-r8c8 digits [1,2,3,4]
quadruple-4: quadruple r7c2-r7c3-r8c2-r8c3 digits [6,7,8,9]
```

**Sudoku, Thermos, Quadruples**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
