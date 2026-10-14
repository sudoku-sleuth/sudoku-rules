---
format: open-rules
title: TIC TAC TOE TIE
setter: Will Power
source: https://sudokupad.app/gzp7vqi6ly
case: https://sudoku-sleuth.com/cases/tic-tac-toe-tie
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6ce56b454f0da502050177bc5a126a75
---

```rules
sudoku 9x9
cage-1: cage r7c9-r8c9 total 5 connected true
cage-2: cage r9c8-r9c9 total 5 connected true
cage-3: cage r4c7-r4c8 total 5 connected true
cage-4: cage r5c7-r6c7 total 5 connected true
cage-5: cage r7c7-r7c8 total 14 connected true
cage-6: cage r8c7-r9c7 total 14 connected true
cage-7: cage r6c8-r6c9 total 15 connected true
cage-8: cage r4c9-r5c9 total 14 connected true
cage-9: cage r3c4-r3c5 total 8 connected true
cage-10: cage r1c5-r1c6 total 9 connected true
cage-11: cage r1c4-r2c4 total 10 connected true
cage-12: cage r2c6-r3c6 total 11 connected true
cage-13: cage r7c1-r8c1 total 13 connected true
cage-14: cage r9c1-r9c2 total 9 connected true
cage-15: cage r7c2-r7c3 total 7 connected true
cage-16: cage r8c3-r9c3 total 14 connected true
whispers-1: whispers r4c3-r5c2-r6c1 gap 5
whispers-2: whispers r4c1-r5c2-r6c3 gap 5
whispers-3: whispers r1c1-r2c2-r3c3 gap 5
whispers-4: whispers r1c3-r2c2-r3c1 gap 5
whispers-5: whispers r4c4-r5c5-r6c6 gap 5
whispers-6: whispers r4c6-r5c5-r6c4 gap 5
whispers-7: whispers r7c4-r8c5-r9c6 gap 5
whispers-8: whispers r7c6-r8c5-r9c4 gap 5
whispers-9: whispers r1c7-r2c8-r3c9 gap 5
whispers-10: whispers r1c9-r2c8-r3c7 gap 5
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines (X) are at least 5 apart from their neighbors on the line. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Blue lines (O) have no effect on the puzzle.
