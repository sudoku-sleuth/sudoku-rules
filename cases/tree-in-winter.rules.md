---
format: open-rules
title: Tree in Winter 冬天
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/tree-in-winter
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=9
exported: 23d13f9d0b1ea507e31f1cb3e7e1545c
---

```rules
sudoku 9x9
cage-1: cage r1c7-r2c7 total 15 connected true
cage-2: cage r1c1-r1c2 total 7 connected true
cage-3: cage r4c6-r5c6 total 10 connected true
cage-4: cage r4c4-r5c4 total 10 connected true
cage-5: cage r6c2-r6c3 total 5 connected true
cage-6: cage r8c5-r8c6 total 5 connected true
cage-7: cage r9c1-r9c2 total 5 connected true
whispers-1: whispers r6c5-r5c4 gap 4
whispers-2: whispers r6c5-r5c6-r5c7 gap 4
whispers-3: whispers r5c4-r6c3 gap 4
whispers-4: whispers r5c4-r5c3-r4c2 gap 4
whispers-5: whispers r4c5-r3c4 gap 4
whispers-6: whispers r3c4-r2c3 gap 4
whispers-7: whispers r4c5-r3c5-r2c5-r1c5 gap 4
whispers-8: whispers r5c7-r5c8 gap 4
whispers-9: whispers r5c7-r4c8 gap 4
whispers-10: whispers r4c8-r3c8-r2c9 gap 4
whispers-11: whispers r3c8-r2c8-r1c7 gap 4
whispers-12: whispers r5c6-r4c6-r3c7 gap 4
entropic r7c1-r7c2-r7c3-r8c4-r8c5-r8c6-r9c7-r9c8-r9c9
whispers-13: whispers r9c5-r8c5-r7c5-r6c5-r5c5-r4c5 gap 4
whispers-14: whispers r2c3-r3c2 gap 4
whispers-15: whispers r2c3-r2c2 gap 4
whispers-16: whispers r3c5-r2c4 gap 4
whispers-17: whispers r3c5-r3c6 gap 4
whispers-18: whispers r3c6-r2c7 gap 4
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on the brown line (Tree) are at least 4 apart from their neighbors on the line. ENTROPY LINE- Any set of three consecutive numbers on the white line (Snow) contain exactly one high number (7,8,9), one medium number (4,5,6) and one low number (1,2,3). Numbers in cages sum to the number in the top left corner of the cage.
