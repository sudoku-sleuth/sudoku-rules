---
format: open-rules
title: Frosted Tips
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xc9awzlslz
case: https://sudoku-sleuth.com/cases/frosted-tips
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c9=5 r9c1=1
---

```rules
sudoku 9x9
cage-1: cage r7c4-r7c5-r7c6 total 14 connected true
cage-2: cage r1c2-r2c2 total 8 connected true
cage-3: cage r1c8-r2c8 total 7 connected true
cage-4: cage r8c8-r9c8 total 12 connected true
cage-5: cage r5c4-r5c5-r5c6 total 16 connected true
cage-6: cage r6c1-r6c2-r6c3 total 12 connected true
cage-7: cage r6c7-r6c8-r6c9 total 14 connected true
cage-8: cage r8c2-r9c2 total 9 connected true
cage-9: cage r3c1-r3c2 total 7 connected true
cage-10: cage r3c8-r3c9 total 8 connected true
arrow-1: arrow r7c8-r6c8 bulb ["r8c7"]
arrow-2: arrow r7c2-r6c2 bulb ["r8c3"]
arrow-3: arrow r2c4-r1c3-r1c2 bulb ["r2c5"]
arrow-4: arrow r2c6-r1c7-r1c8 bulb ["r2c5"]
arrow-5: arrow r6c5-r5c6 bulb ["r6c4"]
arrow-6: arrow r4c3-r5c3-r6c3-r7c4 bulb ["r3c3"]
arrow-7: arrow r4c7-r5c7-r6c7-r7c6 bulb ["r3c7"]
arrow-8: arrow r4c5-r5c4 bulb ["r4c6"]
```

- Normal sudoku rules apply.
- Digits in cages cannot repeat and must sum to the number shown in the upper left corner of the cage.
- Digits along the shaft of an arrow sum to the value show in the attached circle. Digits may repeat along arrows if allowed by other rules.
