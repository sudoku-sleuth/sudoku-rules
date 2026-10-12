---
format: open-rules
title: Tadpoles, Apart
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3i2k8inbt5
case: https://sudoku-sleuth.com/cases/tadpoles-apart
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=7 r2c6=2 r3c1=3 r4c7=1 r5c3=9 r6c5=8 r7c8=4 r8c2=6 r9c4=5
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c2-r1c3-r2c4-r1c5
thermo-2: thermo r2c3-r3c4-r2c5-r3c6-r2c7
thermo-3: thermo r3c5-r4c6-r3c7-r4c8-r3c9
thermo-4: thermo r8c4-r9c5-r8c6-r9c7-r8c8-r9c9
negative relations [{"op":"difference","value":1}] except []
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Nonconsecutive: Digits in orthogonally adjacent cells cannot be consecutive.
