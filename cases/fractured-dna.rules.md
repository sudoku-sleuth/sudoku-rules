---
format: open-rules
title: Fractured DNA
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/fractured-dna
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7def43a44fa31098a0464a3de58dc8a3
---

```rules
sudoku 9x9
cage-1: cage r7c6-r8c4-r8c5-r8c6-r9c4 total 29 repeats true connected true
cage-2: cage r5c7-r6c5-r6c6-r6c7-r7c5 total 17 repeats true connected true
cage-3: cage r3c8-r4c6-r4c7-r4c8-r5c6 total 33 repeats true connected true
cage-4: cage r1c9-r2c7-r2c8-r2c9-r3c7 total 21 repeats true connected true
cage-5: cage r1c4-r1c5 total 10 repeats true connected true
cage-6: cage r2c3-r2c4 total 10 repeats true connected true
cage-7: cage r3c2-r3c3 total 10 repeats true connected true
cage-8: cage r4c1-r4c2 total 10 repeats true connected true
cage-9: cage r6c2-r6c3 total 13 repeats true connected true
cage-10: cage r7c1-r7c2 total 13 repeats true connected true
whispers-1: whispers r9c5-r9c4-r8c4-r8c5-r8c6-r7c6-r7c5-r6c5-r6c6-r6c7-r5c7-r5c6-r4c6-r4c7-r4c8-r3c8-r3c7-r2c7-r2c8-r2c9-r1c9-r1c8 gap 5
whispers-2: whispers r4c1-r4c2-r3c2-r3c3-r2c3-r2c4-r1c4-r1c5 gap 5
whispers-3: whispers r6c3-r6c2-r7c2-r7c1 gap 5
whispers-4: whispers r2c1-r3c1-r4c1 gap 5
whispers-5: whispers r6c1-r7c1 gap 5
whispers-6: whispers r9c7-r9c8 gap 5
whispers-7: whispers r8c1-r9c1 gap 5
```

Normal Sudoku rules apply. German Whispers- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers in cages sum to the number in the top left corner of the cage. Numbers may repeat in cages, if other rules allow.
