---
format: open-rules
title: Consecutive Arrow Sums
setter: Will Power
source: https://sudokupad.app/wjdy0gmtm4
case: https://sudoku-sleuth.com/cases/consecutive-arrow-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c9-r2c9 total 10 connected true
cage-2: cage r7c7-r7c8 total 8 connected true
cage-3: cage r7c5-r8c5 total 10 connected true
cage-4: cage r2c2-r2c3 total 11 connected true
kropki-1: kropki r6c3-r6c4 colour "white"
kropki-2: kropki r8c1-r8c2 colour "black"
kropki-3: kropki r8c2-r8c3 colour "black"
kropki-4: kropki r7c3-r8c3 colour "black"
kropki-5: kropki r5c7-r5c8 colour "black"
arrow-1: arrow r5c2-r6c2 bulb ["r3c2","r4c2"]
arrow-2: arrow r6c3-r7c3 bulb ["r4c3","r5c3"]
arrow-3: arrow r7c4-r8c4 bulb ["r5c4","r6c4"]
arrow-4: arrow r4c6-r5c6-r6c6-r7c6 bulb ["r2c6","r3c6"]
arrow-5: arrow r5c7-r6c7-r7c7-r8c7 bulb ["r3c7","r4c7"]
arrow-6: arrow r6c8-r7c8-r8c8-r9c8 bulb ["r4c8","r5c8"]
```

Normal Sudoku rules apply.

ARROWS(+)- Numbers on arrows sum to the number in the arrow's pill. Pills are read from top to bottom. Also, pills that are next to one another are unique consecutive numbers.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
