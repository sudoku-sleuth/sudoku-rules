---
format: open-rules
title: Whispers Sum to 72
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/whispers-sum-to-72
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c4=3
exported: d453119d9c2770833f16d73a7e3eedda
---

```rules
sudoku 9x9
cage-1: cage r1c5-r1c6 total 15 connected true
cage-2: cage r9c4-r9c5 total 15 connected true
cage-3: cage r4c1-r5c1-r6c1 total 15 connected true
cage-4: cage r4c9-r5c9-r6c9 total 15 connected true
cage-5: cage r2c7-r2c8-r3c8 total 15 connected true
cage-6: cage r7c2-r8c2-r8c3 total 15 connected true
cage-7: cage r1c3-r1c4-r2c4 total 15 connected true
cage-8: cage r4c4-r4c5-r5c4 total 15 connected true
cage-9: cage r8c7-r8c8-r9c8 total 15 connected true
cage-10: cage r3c1-r3c2-r4c2 total 15 connected true
arrow-1: arrow r7c6-r6c7 bulb ["r8c5"]
arrow-2: arrow r4c3-r3c4 bulb ["r5c2"]
whispers-1: whispers r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4-r7c3-r6c3-r5c3-r4c3 gap 5
whispers-2: whispers r3c3-r4c3 gap 5
```

Normal Sudoku rules apply. Numbers on the green line are at least 5 apart from their neighbors on the line. Numbers may repeat on the line, if other rules allow. The sum of all numbers on the green line is 72. Numbers in cages sum to the number in the top left corner of the cage. Numbers cannot repeat in cages. Numbers on arrows sum to the number in that arrow's circle. Numbers may repeat on arrows, if other rules allow.
