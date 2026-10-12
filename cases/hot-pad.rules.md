---
format: open-rules
title: Hot Pad
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kekb4p8t0n
case: https://sudoku-sleuth.com/cases/hot-pad
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c5=6 r3c9=8 r4c1=2 r6c9=5 r9c3=3 r9c6=9
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r1c2-r1c3-r2c3-r3c3-r3c2-r2c2
thermo-2: thermo r3c7-r2c7-r1c7-r1c8-r1c9-r2c9-r2c8
thermo-3: thermo r9c9-r9c8-r9c7-r8c7-r7c7-r7c8-r8c8
thermo-4: thermo r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r8c2
thermo-5: thermo r5c8-r6c8-r6c7-r5c7
thermo-6: thermo r5c2-r4c2-r4c3-r5c3
thermo-7: thermo r8c4-r7c4-r7c5-r8c5
thermo-8: thermo r2c6-r3c6-r3c5-r2c5
thermo-9: thermo r4c5-r4c4-r5c4
thermo-10: thermo r6c5-r6c6-r5c6
```

Normal sudoku rules apply: every row, column and box has to contain a complete set of the digits 1-9.

Normal thermo rules apply: digits along a thermo have to strictly increase from the bulb to the tip.
