---
format: open-rules
title: Perfect In Our Imperfection
setter: Will Power
source: https://sudokupad.app/4grkg77971
case: https://sudoku-sleuth.com/cases/perfect-in-our-imperfection
library: https://rules.sudoku-sleuth.com/
status: read
exported: f1c77ed020a92dbd7827fff0bf3e5303
---

```rules
sudoku 9x9
cage-1: cage r2c5-r3c5-r4c5 total 13 connected true
cage-2: cage r6c5-r7c5-r8c5 total 16 connected true
cage-3: cage r5c6-r5c7-r5c8 total 20 connected true
cage-4: cage r5c2-r5c3-r5c4 total 12 connected true
cage-5: cage r4c9-r5c9-r6c9 total 13 connected true
cage-6: cage r1c4-r1c5-r1c6 total 9 connected true
cage-7: cage r4c1-r5c1-r6c1 total 14 connected true
cage-8: cage r9c4-r9c5-r9c6 total 11 connected true
whispers-1: whispers r3c6-r3c7-r4c7-r4c6 gap 4
whispers-2: whispers r3c6-r4c6 gap 4
whispers-3: whispers r1c5-r1c6-r1c7-r2c8-r3c9-r4c9-r5c9-r6c9-r7c9-r8c8-r9c7-r9c6 gap 5
whispers-4: whispers r9c6-r9c5-r9c4-r9c3-r8c2-r7c1-r6c1-r5c1-r4c1-r3c1-r2c2-r1c3-r1c4-r1c5 gap 4
renban-1: renban r5c5-r6c6-r7c6-r8c6-r9c5
renban-2: renban r6c3-r6c4-r7c4-r7c3
renban-3: renban r4c4-r3c4-r2c4-r1c5
extremum r2c7 type "min" exhaustive false
```

Normal Sudoku rules apply.

GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line.

DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line.

RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

MINIMUM- The number in the gray square is less than all of its orthogonal neighbors.
