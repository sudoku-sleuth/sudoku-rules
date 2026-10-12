---
format: open-rules
title: Mild Heat
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1hn4fcanry
case: https://sudoku-sleuth.com/cases/mild-heat
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c4=3 r4c5=1 r7c8=9
---

```rules
sudoku 9x9
thermo-1: thermo r2c3-r3c3-r4c3-r4c4
thermo-2: thermo r2c7-r3c7-r4c7-r4c6
thermo-3: thermo r8c3-r7c3-r6c3-r6c4
thermo-4: thermo r8c7-r7c7-r6c7-r6c6
thermo-5: thermo r5c2-r5c1-r4c1-r3c1-r2c1
thermo-6: thermo r5c8-r5c9-r6c9-r7c9
thermo-7: thermo r5c8-r5c9-r4c9-r3c9
thermo-8: thermo r5c2-r5c1-r6c1-r7c1-r8c1
thermo-9: thermo r9c4-r9c5-r9c6-r8c6-r8c5-r8c4
thermo-10: thermo r9c9-r8c9-r8c8-r9c8
thermo-11: thermo r1c9-r2c9-r2c8-r1c8
thermo-12: thermo r1c1-r1c2-r2c2-r3c2
thermo-13: thermo r8c2-r9c2-r9c1
```

- Normal sudoku rules apply.
- Thermometers: Digits on gray thermometers must increase from bulb to tip.
