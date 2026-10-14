---
format: open-rules
title: On a Dark Desert Highway...
setter: Will Power
source: https://sudokupad.app/3l6dzk8uvi
case: https://sudoku-sleuth.com/cases/on-a-dark-desert-highway
library: https://rules.sudoku-sleuth.com/
status: read
exported: c5fd747c4ed4d4809d142271eb78c888
---

```rules
sudoku 9x9
kropki-1: kropki r3c9-r4c9 white
kropki-2: kropki r4c7-r5c7 white
kropki-3: kropki r4c6-r5c6 white
kropki-4: kropki r4c5-r5c5 white
kropki-5: kropki r4c4-r5c4 white
kropki-6: kropki r4c2-r5c2 white
kropki-7: kropki r4c4-r4c5 white
kropki-8: kropki r2c5-r3c5 white
kropki-9: kropki r2c6-r3c6 white
kropki-10: kropki r2c5-r2c6 white
kropki-11: kropki r1c1-r1c2 white
kropki-12: kropki r1c2-r1c3 white
kropki-13: kropki r2c9-r3c9 white
kropki-14: kropki r6c1-r7c1 black
kropki-15: kropki r6c2-r7c2 black
kropki-16: kropki r6c3-r7c3 black
kropki-17: kropki r6c4-r7c4 black
kropki-18: kropki r6c7-r7c7 black
kropki-19: kropki r6c9-r7c9 black
kropki-20: kropki r8c9-r9c9 black
kropki-21: kropki r8c6-r9c6 black
kropki-22: kropki r8c4-r9c4 black
kropki-23: kropki r8c1-r9c1 black
whispers-1: whispers r6c1-r6c2-r6c3 gap 4
whispers-2: whispers r6c5-r6c6-r6c7-r6c8-r6c9 gap 4
whispers-3: whispers r7c9-r7c8 gap 4
whispers-4: whispers r7c7-r7c6 gap 4
whispers-5: whispers r7c5-r7c4-r7c3-r7c2 gap 4
whispers-6: whispers r8c1-r8c2-r8c3-r8c4 gap 4
whispers-7: whispers r8c5-r8c6-r8c7 gap 4
whispers-8: whispers r8c8-r8c9-r9c9-r9c8-r9c7-r9c6-r9c5 gap 4
whispers-9: whispers r9c4-r9c3-r9c2-r9c1 gap 4
extremum r4c1 type "max" exhaustive false
```

Up ahead in the distance, I saw a shimmering light. Welcome to the Hotel California. Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers do not repeat on red lines. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. MAXIMUM- The gray cell is greater than all orthogonally adjacent cells.
