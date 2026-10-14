---
format: open-rules
title: 8 Behind the Ball?
setter: Will Power
source: https://sudokupad.app/j1koonuhkx
case: https://sudoku-sleuth.com/cases/8-behind-the-ball
library: https://rules.sudoku-sleuth.com/
status: read
exported: 1fd118ac746938ec71f2023e7355071a
---

```rules
sudoku 9x9
cage-1: cage r5c8-r6c8 total 13 connected true
cage-2: cage r2c8-r3c8 total 9 connected true
cage-3: cage r2c6-r3c6 total 13 connected true
cage-4: cage r5c2-r6c2 total 12 connected true
cage-5: cage r8c1-r9c1 total 11 connected true
cage-6: cage r7c5-r8c5 total 13 connected true
cage-7: cage r3c2-r3c3 total 10 connected true
cage-8: cage r1c3-r1c4 total 9 connected true
kropki-1: kropki r1c4-r1c5 black
kropki-2: kropki r4c8-r4c9 black
kropki-3: kropki r9c4-r9c5 black
kropki-4: kropki r2c8-r2c9 black
kropki-5: kropki r3c1-r3c2 black
kropki-6: kropki r5c3-r6c3 black
kropki-7: kropki r7c7-r8c7 black
kropki-8: kropki r5c4-r6c4 black
kropki-9: kropki r9c7-r9c8 black
arrow-1: arrow r1c8-r1c9-r2c9 bulb ["r1c7"]
arrow-2: arrow r2c1-r1c1-r1c2 bulb ["r2c2"]
arrow-3: arrow r5c5-r5c4-r5c3 bulb ["r4c6"]
arrow-4: arrow r9c4-r9c5-r8c6 bulb ["r9c3"]
arrow-5: arrow r7c1-r7c2-r6c3 bulb ["r6c1"]
arrow-6: arrow r9c8-r9c9-r8c9 bulb ["r8c8"]
arrow-7: arrow r6c4-r6c5-r7c6 bulb ["r7c4"]
arrow-8: arrow r2c5-r1c5-r1c4 bulb ["r3c5"]
arrow-9: arrow r4c9-r4c8-r5c7 bulb ["r5c9"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers do not repeat on arrows. KILLER- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Although not necessary for the solve, notice where all 8's appear on the grid after completion.
