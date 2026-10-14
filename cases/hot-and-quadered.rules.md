---
format: open-rules
title: Hot and Quadered
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kwak8dfg68
case: https://sudoku-sleuth.com/cases/hot-and-quadered
library: https://rules.sudoku-sleuth.com/
status: read
exported: e03dc4ddaa6057b54a7405afe40ada34
---

```rules
sudoku 9x9
thermo-1: thermo r8c1-r7c1-r6c1-r5c1-r4c1-r3c1
thermo-2: thermo r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
thermo-3: thermo r2c9-r3c9-r4c9-r5c9-r6c9-r7c9
thermo-4: thermo r9c8-r9c7-r9c6-r9c5-r9c4-r9c3
thermo-5: thermo r7c2-r6c2-r5c2-r4c2-r3c2
thermo-6: thermo r3c8-r4c8-r5c8-r6c8-r7c8
thermo-7: thermo r5c4-r4c4-r4c5-r5c5
thermo-8: thermo r4c6-r5c6-r6c6-r6c5
quadruple-1: quadruple r2c1-r2c2-r3c1-r3c2 digits [4,6]
quadruple-2: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,6]
quadruple-3: quadruple r7c3-r7c4-r8c3-r8c4 digits [1,8]
quadruple-4: quadruple r3c6-r3c7-r4c6-r4c7 digits [2,8]
quadruple-5: quadruple r7c6-r7c7-r8c6-r8c7 digits [4,9]
quadruple-6: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,3]
quadruple-7: quadruple r1c8-r1c9-r2c8-r2c9 digits [2,4]
```

- Normal sudoku rules apply.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
