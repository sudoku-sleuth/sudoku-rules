---
format: open-rules
title: Gain Balance(Balance gewinnen)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/gain-balance-balance-gewinnen
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5dc61f63593cb4dbdff85dd389dfcec6
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 9 connected true
cage-2: cage r7c1-r8c1 total 9 connected true
cage-3: cage r1c7-r1c8 total 11 connected true
cage-4: cage r6c2-r7c2 total 11 connected true
whispers-1: whispers r5c6-r6c5-r7c5-r8c6-r9c7-r9c8-r8c9-r7c9-r6c8-r5c7-r4c8-r3c9-r2c9-r1c8-r1c7-r2c6-r3c5-r4c5-r5c4-r5c3-r4c2-r3c1-r2c1-r1c2-r1c3-r2c4 gap 5
whispers-2: whispers r2c4-r3c5 gap 5
whispers-3: whispers r4c5-r5c6-r5c7 gap 5
whispers-4: whispers r6c5-r5c4 gap 5
whispers-5: whispers r5c3-r6c2-r7c1-r8c1-r9c2-r9c3-r8c4-r7c5 gap 5
renban-1: renban r4c9-r5c8-r6c9
renban-2: renban r4c1-r5c2-r5c1
renban-3: renban r1c1-r2c2-r2c3
renban-4: renban r1c4-r1c5-r2c5
renban-5: renban r3c7-r3c8-r3c9
renban-6: renban r7c2-r8c3-r9c3
renban-7: renban r8c7-r7c7-r8c8
parity-cells r5c5-r4c4-r6c6-r6c5-r7c6-r9c5-r9c4-r8c6-r3c6-r3c4-r1c4-r1c5 parity "even"
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers may repeat on the green line. Numbers on purple lines are a set of non-repeating, consecutive numbers, in any order AND all purple lines contain the same three numbers as one another. Numbers in cages sum to the number in the top left corner of the cage. Numbers with a gray square are even.
