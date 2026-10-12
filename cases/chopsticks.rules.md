---
format: open-rules
title: Chopsticks
setter: Jobo
source: https://sudokupad.app/btitmcs1u5
case: https://sudoku-sleuth.com/cases/chopsticks
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c5-r2c4-r3c3-r4c2
thermo-2: thermo r1c6-r2c5-r3c4-r4c3
thermo-3: thermo r4c1-r5c2-r6c3-r7c4
thermo-4: thermo r5c1-r6c2-r7c3-r8c4
thermo-5: thermo r9c4-r8c5-r7c6-r6c7
thermo-6: thermo r9c5-r8c6-r7c7-r6c8
thermo-7: thermo r5c9-r4c8-r3c7-r2c6
thermo-8: thermo r6c9-r5c8-r4c7-r3c6
quadruple-1: quadruple r4c2-r4c3-r5c2-r5c3 digits [1,3,8,9]
quadruple-2: quadruple r2c5-r2c6-r3c5-r3c6 digits [2,4,8,9]
quadruple-3: quadruple r5c7-r5c8-r6c7-r6c8 digits [2,6,8,9]
quadruple-4: quadruple r7c4-r7c5-r8c4-r8c5 digits [3,5,6,9]
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits in a quadruple clue must appear at least once in the four surrounding cells.
