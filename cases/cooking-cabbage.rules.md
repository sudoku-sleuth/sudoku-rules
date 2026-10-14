---
format: open-rules
title: Cooking Cabbage
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ng6ai5m3r0
case: https://sudoku-sleuth.com/cases/cooking-cabbage
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c4=9 r4c7=8 r5c2=7 r7c8=1 r8c4=3
exported: 2f882f08916e080197ff112a9da56710
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r1c2-r1c3-r2c3-r3c3-r3c2-r3c1
thermo-2: thermo r2c4-r2c5-r2c6-r3c6-r4c6-r4c5-r4c4
thermo-3: thermo r3c7-r3c8-r3c9-r4c9-r5c9-r5c8-r5c7
thermo-4: thermo r7c3-r7c2-r7c1-r8c1-r9c1-r9c2
thermo-5: thermo r9c5-r9c6-r9c7-r8c7-r7c7
thermo-6: thermo r5c6-r5c5-r6c5-r7c5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermos: Digits on Thermos are strictly increasing from bulb (grey circle) to tip (along the grey line).
