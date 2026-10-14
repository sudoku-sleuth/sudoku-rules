---
format: open-rules
title: Heat Index
setter: Marty Sears
source: https://sudokupad.app/brwn1e4cbb
case: https://sudoku-sleuth.com/cases/heat-index
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c1=2 r8c2=9
exported: db99b80b4f9c77ca1087be853f5b5a08
---

```rules
sudoku 9x9
thermo-1: thermo r5c6-r6c7-r7c8
thermo-2: thermo r2c4-r3c5-r3c6
thermo-3: thermo r1c2-r2c3-r3c4
thermo-4: thermo r7c4-r8c4-r9c4
thermo-5: thermo r5c4-r5c5-r4c5
thermo-6: thermo r6c1-r5c2-r5c3
thermo-7: thermo r4c7-r5c8-r6c9
thermo-8: thermo r1c8-r2c8-r3c9
thermo-9: thermo r9c2-r8c1-r7c1
thermo-10: thermo r9c9-r8c8-r7c7
```

Normal sudoku rules apply.

THERMOS - Digits along a thermo increase from the bulb end.

COORDINATES - Read from the bulb end, "XYZ" along a thermo indicates "row X column Y is Z". Different thermos cannot reference the same cell. Every referenced cell happens to lie on a thermo.
