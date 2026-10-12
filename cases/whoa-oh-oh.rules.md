---
format: open-rules
title: Whoa, oh, oh ...
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fbfchhoqe2
case: https://sudoku-sleuth.com/cases/whoa-oh-oh
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c9-r4c9 total 11 connected true
cage-2: cage r6c1-r7c1 total 11 connected true
cage-3: cage r6c9-r7c9 total 8 connected true
cage-4: cage r3c1-r4c1 total 9 connected true
cage-5: cage r2c6-r2c7 total 11 connected true
cage-6: cage r8c3-r8c4 total 9 connected true
cage-7: cage r8c6-r8c7 total 11 connected true
cage-8: cage r2c3-r2c4 total 5 connected true
slow-thermo-1: slow-thermo r3c3-r2c4-r3c5-r4c6-r3c7-r4c8-r5c9-r6c9-r7c8-r6c7-r5c6
slow-thermo-2: slow-thermo r7c7-r8c6-r7c5-r6c4-r7c3-r6c2-r5c1-r4c1-r3c2-r4c3-r5c4
slow-thermo-3: slow-thermo r3c1-r2c1-r1c1-r1c2-r1c3
slow-thermo-4: slow-thermo r7c9-r8c9-r9c9-r9c8-r9c7
slow-thermo-5: slow-thermo r9c3-r9c2-r9c1-r8c1-r7c1
slow-thermo-6: slow-thermo r1c7-r1c8-r1c9-r2c9-r3c9
```

- Normal sudoku rules apply. 
- Slow thermos: Digits along thermometers can repeat but cannot decrease as you move from bulb to tip.
