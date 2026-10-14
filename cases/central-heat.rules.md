---
format: open-rules
title: Central Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/b635cfn48k
case: https://sudoku-sleuth.com/cases/central-heat
library: https://rules.sudoku-sleuth.com/
status: read
exported: 752e5dd450c4a3e4480251ccaa95a06a
---

```rules
sudoku 9x9
thermo-1: thermo r4c4-r3c3-r2c2-r1c1
thermo-2: thermo r4c5-r3c5-r2c5-r1c5
thermo-3: thermo r4c6-r3c7-r2c8-r1c9
thermo-4: thermo r6c6-r7c7-r8c8-r9c9
thermo-5: thermo r6c5-r7c5-r8c5-r9c5
thermo-6: thermo r6c4-r7c3-r8c2-r9c1
thermo-7: thermo r5c3-r5c2-r5c1
thermo-8: thermo r5c7-r5c8-r5c9
thermo-9: thermo r3c4-r2c3-r1c2
thermo-10: thermo r7c6-r8c7-r9c8
thermo-11: thermo r8c9-r7c8-r6c7-r5c6
thermo-12: thermo r2c1-r3c2-r4c3-r5c4
thermo-13: thermo r2c9-r3c8-r4c7
thermo-14: thermo r9c2-r8c3-r7c4
kropki-1: kropki r5c3-r6c3 black
kropki-2: kropki r7c9-r8c9 black
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on Thermos are strictly increasing from bulb to tip.
- Ratio Dots: Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are given.
