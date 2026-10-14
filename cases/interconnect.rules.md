---
format: open-rules
title: Interconnect
setter: Blobz
source: https://sudokupad.app/blobz/interconnect
case: https://sudoku-sleuth.com/cases/interconnect
library: https://rules.sudoku-sleuth.com/
status: read
exported: 788845408d7676de93cc247658e64ced
---

```rules
sudoku 9x9
cage-1: cage r7c5-r7c6 total 5 connected true
cage-2: cage r7c3-r7c4 total 15 connected true
cage-3: cage r6c7-r7c7 total 15 connected true
cage-4: cage r4c7-r5c7 total 5 connected true
cage-5: cage r3c6-r3c7 total 15 connected true
cage-6: cage r3c4-r3c5 total 5 connected true
cage-7: cage r3c3-r4c3 total 15 connected true
cage-8: cage r5c3-r6c3 total 5 connected true
cage-9: cage r1c4-r1c5-r1c6 total 15 connected true
cage-10: cage r4c1-r5c1-r6c1 total 15 connected true
cage-11: cage r9c4-r9c5-r9c6 total 13 connected true
cage-12: cage r4c9-r5c9-r6c9 total 17 connected true
cage-13: cage r8c1-r9c1-r9c2 total 12 connected true
cage-14: cage r8c9-r9c8-r9c9 total 18 connected true
cage-15: cage r1c8-r1c9-r2c9 total 12 connected true
cage-16: cage r1c1-r1c2-r2c1 total 18 connected true
between-1: between r2c3-r2c4 ends ["r3c3","r3c4"]
between-2: between r2c6-r2c5 ends ["r3c6","r3c5"]
between-3: between r3c8-r4c8 ends ["r3c7","r4c7"]
between-4: between r5c8-r6c8 ends ["r5c7","r6c7"]
between-5: between r8c7-r8c6 ends ["r7c7","r7c6"]
between-6: between r8c5-r8c4 ends ["r7c5","r7c4"]
between-7: between r7c2-r6c2 ends ["r7c3","r6c3"]
between-8: between r5c2-r4c2 ends ["r5c3","r4c3"]
between-9: between r9c8-r9c9-r8c9 ends ["r9c7","r7c9"]
between-10: between r2c1-r1c1-r1c2 ends ["r3c1","r1c3"]
between-11: between r8c1-r9c1-r9c2 ends ["r7c1","r9c3"]
between-12: between r1c8-r2c9 ends ["r1c7","r3c9"]
between-13: between r9c5 ends ["r9c4","r9c6"]
between-14: between r5c1 ends ["r4c1","r6c1"]
between-15: between r6c4-r6c5 ends ["r5c4","r6c6"]
between-16: between r4c5-r4c6 ends ["r4c4","r5c6"]
```

Normal sudoku rules apply.

Digits along a grey line must have values strictly between the digits in the attached circles.

Digits in cages must sum to the given value.
