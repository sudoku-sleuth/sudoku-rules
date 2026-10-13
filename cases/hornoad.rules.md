---
format: open-rules
title: Hornoad
setter: B.PEN
source: https://sudokupad.app/ie0fxf7o7k
case: https://sudoku-sleuth.com/cases/hornoad
library: https://rules.sudoku-sleuth.com/
status: read
givens: r7c2=4 r9c9=1
---

```rules
sudoku 9x9
thermo-1: thermo r4c8-r3c7-r3c6-r3c5-r3c4-r3c3
thermo-2: thermo r4c5-r5c6-r5c7-r6c8-r5c8-r5c9-r4c9
thermo-3: thermo r5c2-r6c3-r7c3-r8c2-r9c3-r9c4
thermo-4: thermo r6c4-r5c4-r5c3-r4c2-r3c1
thermo-5: thermo r6c9-r7c8-r8c7-r8c6-r7c5
pair-1: pair r1c1-r2c1 sum 10
pair-2: pair r2c5-r3c5 sum 10
pair-3: pair r1c2-r2c2 sum 10
pair-4: pair r4c6-r5c6 sum 10
pair-5: pair r7c4-r8c4 sum 10
pair-6: pair r8c1-r9c1 sum 10
pair-7: pair r1c4-r1c5 sum 10
pair-8: pair r2c7-r2c8 sum 10
pair-9: pair r6c8-r6c9 sum 10
pair-10: pair r8c6-r9c6 sum 10
pair-11: pair r3c2-r3c3 sum 10
pair-12: pair r7c5-r7c6 sum 10
```

Normal sudoku rules apply. Normal thermo sudoku rules apply. Digits separated by a X sum to 10, not all X's are given.

"Observe this unimportant creature that jump up and down."
