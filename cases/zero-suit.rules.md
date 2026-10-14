---
format: open-rules
title: Zero Suit
setter: B.PEN
source: ""
case: https://sudoku-sleuth.com/cases/zero-suit
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c5=5
exported: 8978099f3c65e81dfc6f7d3ffdcdf0f4
---

```rules
sudoku 9x9
diagonal direction "main"
thermo-1: thermo r3c5-r2c5-r1c6
thermo-2: thermo r4c3-r4c2-r5c2-r5c3
thermo-3: thermo r5c4-r6c3
thermo-4: thermo r3c7-r4c7-r5c8-r5c9
thermo-5: thermo r4c5-r5c6-r6c6-r7c6
thermo-6: thermo r4c6-r5c7
thermo-7: thermo r3c6-r2c6-r1c7-r1c8-r1c9
thermo-8: thermo r2c7-r3c8-r3c9
thermo-9: thermo r8c6-r9c7
thermo-10: thermo r7c5-r6c5-r5c5-r4c4
thermo-11: thermo r7c7-r8c8
thermo-12: thermo r7c4-r8c5
thermo-13: thermo r8c3-r8c4-r9c5
pair-1: pair r2c5-r3c5 sum 10
pair-2: pair r6c5-r7c5 sum 10
pair-3: pair r5c4-r5c5 sum 10
pair-4: pair r5c1-r5c2 sum 5
pair-5: pair r4c2-r4c3 sum 5
pair-6: pair r3c5-r4c5 sum 5
```

Normal sudoku rules apply. Digits cannot repeat along the marked diagonal.

Thermo sudoku rules apply.

Digits separated by V sum to 5, and digits separated by X sum to 10.
