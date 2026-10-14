---
format: open-rules
title: Fixed Parity Thermos
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ysd2ojufso
case: https://sudoku-sleuth.com/cases/fixed-parity-thermos
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=7 r3c8=1 r4c7=8 r6c3=4 r7c2=1 r9c7=3
exported: 015b63ab6d2fe78889b8c237575a7234
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c2-r3c3-r4c4-r5c5
thermo-2: thermo r9c9-r8c8-r7c7-r6c6
thermo-3: thermo r6c4-r7c3-r8c2-r9c1
thermo-4: thermo r4c6-r3c7-r2c8-r1c9
thermo-5: thermo r5c1-r5c2-r5c3
thermo-6: thermo r5c9-r5c8-r5c7
thermo-7: thermo r1c5-r2c5-r3c5
thermo-8: thermo r9c5-r8c5-r7c5
same-class-1: same-class r1c1-r2c2-r3c3-r4c4-r5c5 classes "parity"
same-class-2: same-class r9c9-r8c8-r7c7-r6c6 classes "parity"
same-class-3: same-class r6c4-r7c3-r8c2-r9c1 classes "parity"
same-class-4: same-class r4c6-r3c7-r2c8-r1c9 classes "parity"
same-class-5: same-class r5c1-r5c2-r5c3 classes "parity"
same-class-6: same-class r5c9-r5c8-r5c7 classes "parity"
same-class-7: same-class r1c5-r2c5-r3c5 classes "parity"
same-class-8: same-class r9c5-r8c5-r7c5 classes "parity"
```

Standard sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

On thermos, digits must increase from bulb to tip. In addition, on each thermometer all of the digits have the same parity (even or odd). Different thermos may have different parity.
