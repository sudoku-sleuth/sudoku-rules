---
format: open-rules
title: Second Nexus
setter: Will Power
source: https://sudokupad.app/3v1ohez6dq
case: https://sudoku-sleuth.com/cases/second-nexus
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=5
exported: 0a2556711a46660e51b2e0ee6650c886
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5 connected true
cage-2: cage r4c6-r4c7 connected true
cage-3: cage r2c2-r2c3 connected true
cage-4: cage r2c4-r2c5 connected true
cage-5: cage r2c6-r2c7 connected true
cage-6: cage r2c8-r2c9 connected true
cage-7: cage r7c7-r7c8-r7c9 connected true
cage-8: cage r7c6-r8c6-r9c6 connected true
cage-9: cage r6c4-r6c5 connected true
diagonal direction "anti"
kropki-1: kropki r5c1-r5c2 white
kropki-2: kropki r5c3-r5c4 white
kropki-3: kropki r5c6-r5c7 white
kropki-4: kropki r5c8-r5c9 white
kropki-5: kropki r5c2-r5c3 black
kropki-6: kropki r7c1-r8c1 black
kropki-7: kropki r1c2-r1c3 black
arrow-1: arrow r5c9-r5c8-r5c7-r5c6-r5c5 bulb ["r6c8","r6c9"]
arrow-2: arrow r5c1-r5c2-r5c3-r5c4-r5c5 bulb ["r4c1","r4c2"]
arrow-3: arrow r1c1-r2c2-r3c3-r4c4-r5c5 bulb ["r1c2","r1c3"]
arrow-4: arrow r1c9-r2c8-r3c7-r4c6-r5c5 bulb ["r2c9","r3c9"]
arrow-5: arrow r9c9-r8c8-r7c7-r6c6-r5c5 bulb ["r9c7","r9c8"]
arrow-6: arrow r9c1-r8c2-r7c3-r6c4-r5c5 bulb ["r7c1","r8c1"]
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's pill. Pills are read from left to right or top to bottom. All arrows end at the center of the grid.

KILLER CAGES- Numbers in each cage sum to 10.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.

POSITIVE DIAGONAL- The cells on the diagonal from R9C1 to R1C9 are all unique digits.
