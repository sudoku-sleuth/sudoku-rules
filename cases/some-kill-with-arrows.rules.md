---
format: open-rules
title: Some kill with Arrows
setter: The Bard
source: https://sudokupad.app/gxqx3xr00g
case: https://sudoku-sleuth.com/cases/some-kill-with-arrows
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1e90e8c42e98326c03dd59a602fced81
---

```rules
sudoku 9x9
cage-1: cage r6c1-r7c1-r7c2 total 24 connected true
cage-2: cage r6c9-r7c8-r7c9 total 13 connected true
cage-3: cage r3c1-r3c2-r4c1 total 14 connected true
cage-4: cage r3c8-r3c9-r4c9 total 23 connected true
cage-5: cage r9c4-r9c5-r9c6 total 6 connected true
cage-6: cage r1c4-r1c5-r1c6 total 12 connected true
cage-7: cage r4c4-r4c5 total 7 connected true
cage-8: cage r4c6-r5c6 total 7 connected true
cage-9: cage r6c5-r6c6 total 9 connected true
cage-10: cage r5c4-r6c4 total 13 connected true
anti-king
arrow-1: arrow r3c7-r4c8-r5c9-r6c8-r7c7 bulb ["r2c6"]
arrow-2: arrow r7c3-r6c2-r5c1-r4c2-r3c3 bulb ["r8c4"]
arrow-3: arrow r5c7-r6c7 bulb ["r4c7"]
arrow-4: arrow r5c3-r4c3 bulb ["r6c3"]
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column, and box.
Kings Move: Digits within a chess kings move from each other cannot be the same digit. 
Arrows: digits along an arrow add up to the digit in the attached circle.
Killer Cage: digits within a cage add up to the total in the corner and cannot repeat.
