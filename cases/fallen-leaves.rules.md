---
format: open-rules
title: Fallen Leaves
setter: sujoyku
source: https://sudokupad.app/tm15xf7ano
case: https://sudoku-sleuth.com/cases/fallen-leaves
library: https://rules.sudoku-sleuth.com/
status: read
exported: f8204b7593610bf82a28fcddfb819251
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 9 connected true
cage-2: cage r5c1-r6c1-r7c1 total 9 connected true
cage-3: cage r1c5-r1c6-r1c7 total 9 connected true
cage-4: cage r1c9-r2c9-r3c9 total 10 connected true
cage-5: cage r8c9-r9c8-r9c9 total 10 connected true
cage-6: cage r9c1-r9c2-r9c3 total 10 connected true
cage-7: cage r5c9-r6c9 total 15 connected true
whispers-1: whispers r7c2-r7c3-r6c3-r5c3-r4c2 gap 5
whispers-2: whispers r3c8-r3c7-r4c7-r5c7-r6c8 gap 5
whispers-3: whispers r7c6-r8c5-r9c6-r9c7-r8c8-r7c7 gap 5 loop true
whispers-4: whispers r1c3-r1c4-r2c5-r3c4-r3c3-r2c2 gap 5 loop true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer Cages: Digits in a cage must sum to the clue in the top left.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.
