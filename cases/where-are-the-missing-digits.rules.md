---
format: open-rules
title: Where Are The Missing Digits?
setter: EPH
source: https://sudokupad.app/x3m3jopnbh
case: https://sudoku-sleuth.com/cases/where-are-the-missing-digits
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 42055fb5e86fca43eee553470356685a
---

```rules
sudoku 9x9
cage-1: cage r5c6-r6c6-r6c7-r6c8-r6c9-r7c6-r8c6-r9c6 connected true
cage-2: cage r6c1-r6c2-r6c3-r6c4-r6c5-r7c4-r8c4-r9c4 connected true
cage-3: cage r1c4-r2c4-r3c4-r4c1-r4c2-r4c3-r4c4-r5c4 total 38 connected true
cage-4: cage r1c6-r2c6-r3c6-r4c5-r4c6-r4c7-r4c8-r4c9 total 37 connected true
cage-5: cage r1c1-r1c2-r2c1 total 10 connected true
whispers-1: whispers r1c4-r2c4-r2c3-r2c2-r3c2-r4c2-r4c1 gap 5
whispers-2: whispers r6c9-r6c8-r7c8-r8c8-r8c7-r8c6-r9c6 gap 5
whispers-3: whispers r2c6-r2c7-r2c8-r3c8-r4c8 gap 5
whispers-4: whispers r6c2-r7c2-r8c2-r8c3-r8c4 gap 5
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5],[3.5,3.5],[3.5,2.5],[3.5,1.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5],[2.5,5.5],[3.5,5.5],[3.5,6.5],[3.5,7.5],[3.5,8.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,6.5],[5.5,5.5],[6.5,5.5],[7.5,5.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,3.5],[6.5,3.5],[5.5,3.5],[5.5,2.5],[5.5,1.5],[5.5,0.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#F067F0","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5],[8.5,1.5]],"color":"#F067F0","thickness":8,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

In a cage, digits must not repeat and must sum to the value in the corner, if given.

Adjacent digits on a green line must have a difference of at least 5.

Digits on a pink line must not repeat and must be a set of consecutive digits, but may appear in any order.
