---
format: open-rules
title: BremSter 52nd
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6auaecaj92
case: https://sudoku-sleuth.com/cases/bremster-52nd
library: https://rules.sudoku-sleuth.com/
status: read
givens: r6c5=5 r7c5=2 r8c1=5 r9c1=2
exported: 5fe16b729a032af6891099921b7e01da
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c1-r3c1
thermo-2: thermo r1c1-r1c2-r1c3-r2c2-r3c3-r3c2
thermo-3: thermo r6c3-r5c3-r4c3-r5c2-r4c1-r5c1-r6c1
thermo-4: thermo r3c4-r2c4-r1c4-r1c5-r1c6-r2c5-r3c6
thermo-5: thermo r3c7-r2c7-r1c7-r1c8
thermo-6: thermo r3c7-r2c7-r2c8
thermo-7: thermo r3c7-r3c8-r3c9
thermo-8: thermo r7c4-r8c4-r9c4-r9c5-r9c6
thermo-9: thermo r7c4-r7c5
thermo-10: thermo r7c4-r8c4-r8c5
thermo-11: thermo r9c7-r8c7-r7c7
thermo-12: thermo r9c7-r8c7-r7c8-r7c9
thermo-13: thermo r7c1-r7c2-r8c2-r9c2
thermo-14: thermo r7c1-r7c2-r7c3
thermo-15: thermo r4c8-r4c7-r5c8-r6c9-r6c8-r5c7
thermo-16: thermo r5c6-r5c5-r5c4
thermo-17: thermo r4c5-r5c5-r6c5
```

- Normal sudoku rules apply.
- Digits along grey Thermos must strictly increase from bulb to tip.
