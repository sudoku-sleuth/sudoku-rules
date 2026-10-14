---
format: open-rules
title: "1776: Stars And Stripes"
setter: Tingo
source: https://tinyurl.com/1776starsandstripessudoku
case: https://sudoku-sleuth.com/cases/1776-stars-and-stripes
library: https://rules.sudoku-sleuth.com/
status: read
exported: e5a99c7285d254c15b6cbad6e12289a0
---

```rules
sudoku 9x9
cage-1: cage r1c8-r1c9-r2c9 total 7 connected true
cage-2: cage r1c1-r1c2-r1c3 total 17 connected true
cage-3: cage r2c5-r3c5 total 6 connected true
cage-4: cage r7c1-r7c2 total 17 connected true
cage-5: cage r4c5-r4c6-r5c5 total 7 connected true
cage-6: cage r7c8-r8c8 total 6 connected true
whispers-1: whispers r3c3-r2c4-r1c5-r2c6-r3c7 gap 2
whispers-2: whispers r3c4-r3c3-r3c2-r3c1-r4c2-r5c3-r5c4-r5c5-r5c6-r5c7-r4c8-r3c9-r3c8-r3c7-r3c6 gap 2
whispers-3: whispers r5c4-r6c3-r7c2-r8c1-r9c1-r9c2-r9c3-r8c4-r7c5-r8c6-r9c7-r9c8-r9c9-r8c9-r7c8-r6c7-r5c6 gap 2
whispers-4: whispers r2c3-r2c2-r2c1 gap 6
whispers-5: whispers r2c9-r2c8-r2c7 gap 6
whispers-6: whispers r5c2-r5c1 gap 6
whispers-7: whispers r6c2-r6c1 gap 6
whispers-8: whispers r5c9-r5c8 gap 6
whispers-9: whispers r6c9-r6c8 gap 6
whispers-10: whispers r9c6-r9c5 gap 6
whispers-11: whispers r9c4-r9c5-r9c6 gap 6
```

Normal Sudoku Rules Apply
Blue Lines are anti-consecutive lines. Adjacent digits along the line must have a difference in value of at least 2.
Adjacent digits along red lines must differ in value by at least 6.
Digits in killer cages must sum to the value in the top left corner of the cage. The killer cage in box 9 has a value of 6.
