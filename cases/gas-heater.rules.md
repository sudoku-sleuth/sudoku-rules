---
format: open-rules
title: GAS Heater
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/2rh027p049
case: https://sudoku-sleuth.com/cases/gas-heater
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r1c9=9 r9c1=8 r9c9=1
exported: f7c7cd0a778cee4db7c62eab38a690a8
---

```rules
sudoku 9x9
thermo-1: thermo r6c1-r5c1-r4c1-r3c1-r2c2-r1c3
thermo-2: thermo r7c1-r8c2-r9c3-r9c4-r9c5-r9c6
thermo-3: thermo r3c9-r2c8-r1c7-r1c6-r1c5-r1c4
thermo-4: thermo r4c9-r5c9-r6c9-r7c9-r8c8-r9c7
thermo-5: thermo r2c4-r2c5-r2c6
thermo-6: thermo r4c8-r5c8-r6c8
thermo-7: thermo r6c2-r5c2-r4c2
thermo-8: thermo r8c6-r8c5-r8c4
thermo-9: thermo r7c4-r7c5-r7c6
thermo-10: thermo r4c7-r5c7-r6c7
thermo-11: thermo r4c6-r4c5-r4c4
thermo-12: thermo r6c6-r6c5-r6c4
thermo-13: thermo r4c3-r5c3-r6c3
```

**Standard Sudoku, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermometers are strictly increasing from bulb (grey circle) to tip (along the grey line).

For more of our puzzles, please visit https://missingdeck.net
