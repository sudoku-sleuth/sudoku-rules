---
format: open-rules
title: Look At That Little S-Car Go
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bie1bt80rj
case: https://sudoku-sleuth.com/cases/look-at-that-little-s-car-go
library: https://rules.sudoku-sleuth.com/
status: read
exported: fc6e87b144d501b13a5b58ad98de9a85
---

```rules
sudoku 9x9
thermo-1: thermo r3c2-r2c3-r1c4-r2c5-r3c4-r3c3
thermo-2: thermo r3c5-r2c6-r1c7-r2c8-r3c7-r3c6
thermo-3: thermo r6c1-r5c2-r4c3-r5c4-r6c3-r6c2
thermo-4: thermo r6c4-r5c5-r4c6-r5c7-r6c6-r6c5
thermo-5: thermo r9c3-r8c4-r7c5-r8c6-r9c5-r9c4
thermo-6: thermo r9c6-r8c7-r7c8-r8c9-r9c8-r9c7
kropki-1: kropki r9c5-r9c6 black
kropki-2: kropki r1c4-r2c4 black
```

**Standard Sudoku, Thermometers, Ratio Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermometers are strictly increasing from bulb to tip.
- Ratio dots: Digits in cells separated by a black dot are in a 2:1 ratio.
