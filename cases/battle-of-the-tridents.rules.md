---
format: open-rules
title: Battle of the Tridents
setter: Will Power
source: https://sudokupad.app/3yzv3hrgy6
case: https://sudoku-sleuth.com/cases/battle-of-the-tridents
library: https://rules.sudoku-sleuth.com/
status: read
exported: 60ec71ffaa0a5446cfaa0d61338cf18e
---

```rules
sudoku 9x9
cage-1: cage r7c9-r8c9 total 6 connected true
cage-2: cage r2c3-r3c3 total 15 connected true
cage-3: cage r1c1-r2c1-r3c1 total 20 connected true
cage-4: cage r4c1-r5c1-r6c1 total 15 connected true
cage-5: cage r9c4-r9c5-r9c6 total 13 connected true
cage-6: cage r9c7-r9c8-r9c9 total 20 connected true
cage-7: cage r5c7-r6c7 total 9 connected true
whispers-1: whispers r6c4-r7c3-r8c2-r9c1-r8c1-r7c1 gap 5
whispers-2: whispers r9c3-r9c2-r9c1 gap 5
whispers-3: whispers r8c4-r9c3 gap 5
whispers-4: whispers r6c2-r7c1 gap 5
whispers-5: whispers r5c2-r6c2 gap 5
whispers-6: whispers r8c5-r8c4 gap 5
whispers-7: whispers r1c9-r1c8-r1c7-r2c6-r2c5 gap 5
whispers-8: whispers r1c9-r2c9-r3c9-r4c8-r5c8 gap 5
whispers-9: whispers r1c9-r2c8-r3c7-r4c6 gap 5
whispers-10: whispers r5c4-r4c4-r4c5-r4c6-r5c5-r6c4-r6c5-r6c6-r5c6 gap 4
rotational-sums sums [10]
```

Normal Sudoku rules apply. ROTATIONAL SYMMETRY- Numbers 180 degrees apart sum to 10. GERMAN WHISPERS- Numbers on green lines (tridents) are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages. 
Blessed are those who have not seen, and yet still believe. To start, focus on what you CANNOT see.
