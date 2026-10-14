---
format: open-rules
title: Barrel of Monkeys
setter: Will Power
source: https://f-puzzles.com/?id=yb2ohkeu
case: https://sudoku-sleuth.com/cases/barrel-of-monkeys
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6b6cf83cfbb069016124e38c9f9f8b55
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 white
kropki-2: kropki r3c5-r3c6 white
kropki-3: kropki r1c8-r1c9 white
kropki-4: kropki r3c8-r3c9 white
kropki-5: kropki r2c7-r3c7 white
kropki-6: kropki r9c7-r9c8 white
kropki-7: kropki r8c1-r8c2 white
kropki-8: kropki r6c3-r7c3 white
kropki-9: kropki r8c6-r9c6 white
kropki-10: kropki r4c6-r5c6 white
kropki-11: kropki r4c9-r5c9 white
kropki-12: kropki r2c8-r2c9 white
kropki-13: kropki r3c1-r4c1 white
whispers-1: whispers r2c1-r1c2-r2c3-r3c3-r4c2 gap 5
whispers-2: whispers r3c9-r2c8-r3c7-r4c7-r5c8 gap 5
whispers-3: whispers r5c9-r5c8-r5c7-r5c6-r6c6-r6c7-r6c8-r6c9 gap 5
whispers-4: whispers r8c7-r9c8-r8c9-r7c9-r6c8 gap 5
whispers-5: whispers r7c3-r8c2-r7c1-r6c1-r5c2 gap 5
whispers-6: whispers r4c1-r4c2-r4c3-r4c4-r5c4-r5c3-r5c2 gap 5
pair-1: pair r7c2-r8c2 sum 5
pair-2: pair r3c7-r3c8 sum 5
pair-3: pair r2c2-r2c3 sum 5
```

Normal Sudoku rules apply. German Whispers Lines- Numbers on red lines are at least 5 apart from their neighbors on the line. Numbers with a white dot between them are consecutive. Numbers with a V between them sum to 5.
