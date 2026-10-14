---
format: open-rules
title: Bogenschütze
setter: EPH
source: https://tinyurl.com/mw4duuht
case: https://sudoku-sleuth.com/cases/bogenschutze
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c3=2 r7c2=2
exported: 87b9d5f16bbbc86842b3f796578ca951
---

```rules
sudoku 9x9
arrow-1: arrow r2c1-r3c1 bulb ["r1c1"]
arrow-2: arrow r5c2-r4c2-r4c3 bulb ["r6c1"]
arrow-3: arrow r8c2-r8c3-r7c3 bulb ["r9c1"]
arrow-4: arrow r2c6-r3c6 bulb ["r1c6"]
arrow-5: arrow r6c7-r6c8-r6c9 bulb ["r6c6"]
arrow-6: arrow r9c7-r9c8-r9c9 bulb ["r9c6"]
whispers-1: whispers r7c4-r8c4-r8c5-r7c5 gap 5
whispers-2: whispers r5c4-r4c4-r4c5-r5c5 gap 5
whispers-3: whispers r2c9-r2c8-r3c8-r3c9 gap 5
whispers-4: whispers r4c9-r5c9-r5c8 gap 5
whispers-5: whispers r8c7-r8c8 gap 5
whispers-6: whispers r2c3-r2c4-r1c4-r1c5-r2c5 gap 5
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits on an arrow must sum to the number in the arrow's circle.

Digits in cells connected by a green line must have a difference of at least 5.
