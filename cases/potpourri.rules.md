---
format: open-rules
title: Potpourri ( 芳香组合)
setter: Will Power
source: https://sudokupad.app/8tsws3hexz
case: https://sudoku-sleuth.com/cases/potpourri
library: https://rules.sudoku-sleuth.com/
status: read
exported: 044781b979e8e49bb547566ea51b762e
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2 total 10 connected true
cage-2: cage r5c2-r5c3 total 5 connected true
cage-3: cage r3c6-r4c6 total 10 connected true
cage-4: cage r7c7-r8c7 total 12 connected true
kropki-1: kropki r2c4-r2c5 black
kropki-2: kropki r1c2-r2c2 black
kropki-3: kropki r7c5-r8c5 black
whispers r3c9-r4c9-r4c8-r3c7-r2c6-r1c6-r1c7-r2c8 gap 4
little-killer-1: little-killer r1c7-r2c8-r3c9 sum 12
little-killer-2: little-killer r1c5-r2c6-r3c7-r4c8-r5c9 sum 20
parity-cells r7c1-r6c1-r6c2-r7c3-r8c4-r9c4-r9c3-r8c2 parity "even"
rotational-sums sums [10]
```

Normal Sudoku rules apply. 

ROTATIONAL SYMMETRY- Numbers 180 degrees apart on the grid sum to 10.

DUTCH WHISPERS- Numbers on the red line are at least 4 apart from their neighbors on the line.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

LITTLE KILLER- Numbers outside the grid are the sum of the numbers on the indicated diagonal.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.

EVEN- Numbers in cells with a gray square are even.
