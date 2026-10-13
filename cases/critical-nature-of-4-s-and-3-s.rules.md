---
format: open-rules
title: Critical Nature of 4's and 3's
setter: Will Power
source: https://f-puzzles.com/?id=ya7yqyur
case: https://sudoku-sleuth.com/cases/critical-nature-of-4-s-and-3-s
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=4 r2c7=9 r3c2=9 r3c8=2 r7c2=5 r7c8=9 r8c3=9 r8c7=8
---

```rules
sudoku 9x9
thermo-1: thermo r5c4-r4c3-r3c3-r2c4-r1c4
thermo-2: thermo r4c5-r3c6-r3c7-r4c8-r4c9
thermo-3: thermo r5c6-r6c7-r7c7-r8c6-r9c6
thermo-4: thermo r6c5-r7c4-r7c3-r6c2-r6c1
thermo-5: thermo r9c5-r9c4-r9c3
thermo-6: thermo r5c1-r4c1-r3c1
thermo-7: thermo r1c5-r1c6
thermo-8: thermo r5c9-r6c9-r7c9-r8c9-r9c8
pair-1: pair r5c5-r6c5 sum 10
pair-2: pair r5c9-r6c9 sum 5
```

Normal Sudoku rules apply.  Numbers on thermometers increase from the bulb end.  An "X" is between two numbers that sum to 10.  A "V" is between two numbers that sum to 5.  Not all possible X's and V's are given.
