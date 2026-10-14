---
format: open-rules
title: Take Aim
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4mvwvguztb
case: https://sudoku-sleuth.com/cases/take-aim
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3b6496fbd95677ffb643701a031096e2
---

```rules
sudoku 9x9
cage-1: cage r8c8-r9c8 total 14 connected true
cage-2: cage r7c1-r7c2 total 11 connected true
cage-3: cage r1c2-r2c2 total 9 connected true
cage-4: cage r5c2-r5c3 total 9 connected true
cage-5: cage r2c7-r2c8 total 9 connected true
arrow-1: arrow r4c6-r3c6-r2c6-r2c7-r3c7 bulb ["r5c6"]
arrow-2: arrow r7c4-r6c4-r5c4-r5c3-r6c3 bulb ["r8c4"]
arrow-3: arrow r9c1-r8c1-r7c1 bulb ["r9c2"]
arrow-4: arrow r9c9-r8c9-r7c9 bulb ["r9c8"]
arrow-5: arrow r2c1-r1c1-r1c2 bulb ["r3c1"]
arrow-6: arrow r3c4-r2c4 bulb ["r3c3"]
arrow-7: arrow r7c6-r8c6 bulb ["r7c7"]
arrow-8: arrow r4c9-r5c9-r5c8 bulb ["r4c8"]
```

- Normal sudoku rules apply.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
- Arrows: Digits along the shaft of an arrow sum to the value in the attached circle.
