---
format: open-rules
title: Counting Arrows
setter: Timotab
source: https://sudokupad.app/5jbm0h8axn
case: https://sudoku-sleuth.com/cases/counting-arrows-2
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
exported: 45f25bc553260c42e9434644a0412722
---

```rules
sudoku 9x9
arrow-1: arrow r1c2-r1c3-r1c4 bulb ["r1c1"]
arrow-2: arrow r2c9-r3c9-r4c9 bulb ["r1c9"]
arrow-3: arrow r9c8-r9c7-r9c6 bulb ["r9c9"]
arrow-4: arrow r8c1-r7c1-r6c1 bulb ["r9c1"]
arrow-5: arrow r1c7-r1c8 bulb ["r2c6"]
arrow-6: arrow r6c4 bulb ["r7c5"]
arrow-7: arrow r5c3-r6c4 bulb ["r4c3"]
arrow-8: arrow r5c2-r6c3 bulb ["r4c2"]
arrow-9: arrow r2c3-r2c2-r3c2 bulb ["r3c3"]
arrow-10: arrow r6c2-r5c1 bulb ["r7c2"]
arrow-11: arrow r8c4-r7c4-r6c3 bulb ["r8c5"]
arrow-12: arrow r3c5-r2c5-r1c5 bulb ["r3c4"]
arrow-13: arrow r4c4-r5c4 bulb ["r3c4"]
arrow-14: arrow r6c5-r5c6 bulb ["r6c6"]
arrow-15: arrow r3c7-r4c6-r3c5 bulb ["r2c7"]
arrow-16: arrow r6c9-r7c8 bulb ["r5c8"]
arrow-17: arrow r8c7-r8c6-r7c6 bulb ["r8c8"]
arrow-18: arrow r4c8-r3c7 bulb ["r5c7"]
```

• Normal Sudoku rules apply.
• Digits along arrows must sum to the digit in the attached circles.
• Circles also count the number of times that digit appears in circles.
