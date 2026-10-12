---
format: open-rules
title: Progressive Arrows
setter: Will Power
source: https://sudokupad.app/gmdqoqwbe9
case: https://sudoku-sleuth.com/cases/progressive-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c6-r8c7 total 5 connected true
cage-2: cage r7c3-r7c4 total 5 connected true
cage-3: cage r4c3-r4c4 total 5 connected true
cage-4: cage r5c3-r5c4 total 5 connected true
cage-5: cage r6c7-r6c8 total 5 connected true
cage-6: cage r8c8-r8c9 total 5 connected true
cage-7: cage r4c8-r5c8 total 5 connected true
cage-8: cage r1c1-r2c1 total 5 connected true
cage-9: cage r2c2-r3c2 total 5 connected true
kropki r2c6-r3c6 colour "white"
arrow-1: arrow r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 bulb ["r9c1","r9c2"]
arrow-2: arrow r8c7-r8c6-r8c5-r8c4-r8c3-r8c2 bulb ["r8c8","r8c9"]
arrow-3: arrow r7c3-r7c4-r7c5-r7c6-r7c7-r7c8 bulb ["r7c1","r7c2"]
arrow-4: arrow r5c5-r5c6-r5c7-r5c8-r5c9 bulb ["r5c3","r5c4"]
arrow-5: arrow r4c7-r4c6-r4c5 bulb ["r4c8","r4c9"]
arrow-6: arrow r6c7-r6c6-r6c5-r6c4-r6c3 bulb ["r6c8","r6c9"]
arrow-7: arrow r3c6-r3c7-r3c8 bulb ["r3c4","r3c5"]
arrow-8: arrow r2c3-r2c4 bulb ["r2c1","r2c2"]
arrow-9: arrow r1c7-r1c8-r1c9 bulb ["r1c6"]
```

Normal Sudoku rules apply. ARROWS(+)- Numbers on arrows sum to the number in the arrow's circle or pill. Pills are read from left to right. Also, the arrow totals strictly increase from the top to the bottom of the puzzle. KILLER CAGES- Numbers in cages sum to 5. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are given.
