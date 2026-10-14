---
format: open-rules
title: Harmonious Thermos
setter: sujoyku
source: https://sudokupad.app/uvd06f67g3
case: https://sudoku-sleuth.com/cases/harmonious-thermos
library: https://rules.sudoku-sleuth.com/
status: read
exported: c28271b73f8ca7fc9fb5f21e3fb2b121
---

```rules
sudoku 9x9
thermo-1: thermo r7c1-r8c1-r9c2-r9c3
thermo-2: thermo r7c6-r7c5-r7c4-r6c4-r6c3-r5c3-r4c3
thermo-3: thermo r4c6-r4c5-r3c5-r3c4-r2c4-r2c3
thermo-4: thermo r8c9-r7c9-r6c8-r5c8
thermo-5: thermo r4c7-r3c7-r3c8-r2c8-r2c9
thermo-6: thermo r4c2-r3c2-r2c2
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Harmonious Thermometers: Digits along a thermometer must strictly increase from the bulb end. Additionally, the sum of the digits along a thermometer must be divisible by its number of cells. For example, if a thermometer consists of three cells, the sum of its digits must be a multiple of 3.
