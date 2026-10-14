---
format: open-rules
title: Game, Set, and Match
setter: Will Power
source: https://sudokupad.app/f0issvvm7w
case: https://sudoku-sleuth.com/cases/game-set-and-match
library: https://rules.sudoku-sleuth.com/
status: read
exported: 33acaa99526ea877b0cf843f7b2c5912
---

```rules
sudoku 9x9
cage-1: cage r2c5-r2c6 total 8 connected true
cage-2: cage r5c3-r5c4 total 7 connected true
cage-3: cage r7c8-r8c8-r9c8 total 11 connected true
cage-4: cage r6c5-r6c6 total 10 connected true
cage-5: cage r2c2-r2c3-r2c4 total 9 connected true
cage-6: cage r8c2-r8c3 total 12 connected true
cage-7: cage r4c5-r5c5 total 13 connected true
cage-8: cage r1c1-r2c1-r3c1 total 15 connected true
cage-9: cage r6c2-r7c1-r7c2 total 12 connected true
kropki r5c8-r6c8 white
whispers-1: whispers r2c5-r2c6-r3c6-r3c5 gap 5
whispers-2: whispers r2c5-r3c5 gap 5
whispers-3: whispers r3c8-r4c7-r4c6-r5c6-r6c6-r6c5-r5c5 gap 5
whispers-4: whispers r4c5-r5c4-r5c3-r4c3-r3c3-r2c4-r1c3-r2c2 gap 5
whispers-5: whispers r2c2-r3c3 gap 5
whispers-6: whispers r7c6-r7c7-r7c8-r8c8-r9c8-r9c9 gap 5
whispers-7: whispers r7c6-r8c5-r8c4-r8c3-r9c3 gap 5
```

Normal Sudoku rules apply. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. Numbers may repeat on green lines, if other rules allow. KROPKI PAIR (Tennis Ball)- Numbers with a white dot between them are consecutive. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. Numbers do not repeat in cages.
