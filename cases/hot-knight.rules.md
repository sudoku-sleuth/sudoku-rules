---
format: open-rules
title: Hot Knight
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ryovwtwc2g
case: https://sudoku-sleuth.com/cases/hot-knight
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=2 r3c3=1 r3c8=6 r4c6=4 r5c3=3 r5c7=5 r7c3=7 r9c4=8 r9c9=9
---

```rules
sudoku 9x9
anti-knight
thermo-1: thermo r3c1-r2c1-r2c2-r1c2-r1c3
thermo-2: thermo r1c7-r1c8-r2c8-r2c9-r3c9
thermo-3: thermo r7c9-r8c9-r8c8-r9c8-r9c7
thermo-4: thermo r9c3-r9c2-r8c2-r8c1-r7c1
thermo-5: thermo r4c4-r3c4-r3c5-r3c6
thermo-6: thermo r7c6-r6c6-r6c5-r6c4
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
