---
format: open-rules
title: The Flying Dutchman
setter: Meggen033
source: ""
case: https://sudoku-sleuth.com/cases/the-flying-dutchman
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 19 connected true
cage-2: cage r3c3-r3c4-r4c3 total 19 connected true
cage-3: cage r4c7-r4c8-r4c9 total 23 connected true
cage-4: cage r7c4-r8c4-r9c4 total 7 connected true
cage-5: cage r5c6-r6c5-r6c6 total 17 connected true
cage-6: cage r6c7-r7c6-r7c7 total 11 connected true
cage-7: cage r6c8-r7c8-r8c6-r8c7-r8c8 total 18 connected true
cage-8: cage r1c8-r1c9-r2c9 total 11 connected true
cage-9: cage r8c1-r9c1-r9c2 total 19 connected true
thermo-1: thermo r3c7-r3c8
thermo-2: thermo r1c5-r1c6-r2c6-r3c6-r3c5-r2c5
thermo-3: thermo r5c2-r5c3-r6c3-r6c2-r6c1-r5c1
thermo-4: thermo r3c2-r2c2
thermo-5: thermo r7c3-r8c3
arrow-1: arrow r3c5 bulb ["r4c4"]
arrow-2: arrow r5c3 bulb ["r4c4"]
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.

Digits along each thermometer must increase starting from the bulb end.

The digits along each arrow must sum to the digit in the circled cell. Digits may repeat along an arrow if permitted by other rules.

Exported from sudokulab.net
