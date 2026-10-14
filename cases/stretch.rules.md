---
format: open-rules
title: Stretch
setter: Jobo
source: https://sudokupad.app/6ujw9fkwvb
case: https://sudoku-sleuth.com/cases/stretch
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
exported: 82003bfb7b459e6c9cc0430a67588a90
---

```rules
sudoku 9x9
double-arrow-1: double-arrow r2c1-r1c1-r1c2-r1c3 ends ["r3c1","r2c3"]
double-arrow-2: double-arrow r9c8-r9c9-r8c9-r7c9 ends ["r9c7","r6c9"]
double-arrow-3: double-arrow r8c1-r7c1-r7c2-r7c3 ends ["r8c2","r7c4"]
double-arrow-4: double-arrow r4c6-r4c7 ends ["r4c5","r4c8"]
double-arrow-5: double-arrow r4c1-r4c2-r4c3-r3c3 ends ["r3c1","r2c3"]
double-arrow-6: double-arrow r3c5-r3c6-r3c7-r3c8 ends ["r4c5","r4c8"]
double-arrow-7: double-arrow r6c8-r6c7-r6c6-r7c6-r8c6-r9c6 ends ["r6c9","r9c7"]
double-arrow-8: double-arrow r8c4-r8c3 ends ["r7c4","r8c2"]
```

Normal sudoku rules apply.

The sum of the digits along a double arrow line connecting two circles is equal to the sum of the digits in the circles.

Adjacent digits along a green line must differ by at least 5.
