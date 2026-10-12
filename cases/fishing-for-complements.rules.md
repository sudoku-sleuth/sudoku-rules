---
format: open-rules
title: Fishing for Complements
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/fishing-for-complements
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=7 r4c9=6 r5c5=5 r6c1=4 r9c4=3
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c2-r3c3-r4c4
thermo-2: thermo r6c6-r7c7-r8c8-r9c9
thermo-3: thermo r1c9-r2c8-r3c7-r4c6
thermo-4: thermo r6c4-r7c3-r8c2-r9c1
thermo-5: thermo r4c5-r3c5-r2c5-r1c5
thermo-6: thermo r9c5-r8c5-r7c5-r6c5
thermo-7: thermo r1c2-r2c3-r3c4
thermo-8: thermo r7c6-r8c7-r9c8
thermo-9: thermo r7c4-r8c3-r9c2
thermo-10: thermo r1c8-r2c7-r3c6
thermo-11: thermo r4c3-r3c2-r2c1
thermo-12: thermo r8c9-r7c8-r6c7
thermo-13: thermo r4c7-r3c8-r2c9
thermo-14: thermo r8c1-r7c2-r6c3
thermo-15: thermo r5c9-r5c8-r5c7
thermo-16: thermo r5c3-r5c2-r5c1
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Digits on thermometers must increase from bulb to tip.
