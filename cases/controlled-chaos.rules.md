---
format: open-rules
title: Controlled Chaos
setter: Will Power
source: https://sudokupad.app/3vgtordv6v
case: https://sudoku-sleuth.com/cases/controlled-chaos
library: https://rules.sudoku-sleuth.com/
status: read
exported: 99fcc6cf542e607d493de39e5bec5219
---

```rules
sudoku 9x9
cage-1: cage r1c7-r1c8-r1c9 total 10 connected true
cage-2: cage r8c4-r9c4 total 5 connected true
cage-3: cage r4c4-r5c4 total 10 connected true
kropki-1: kropki r3c2-r3c3 white
kropki-2: kropki r7c7-r7c8 white
kropki-3: kropki r2c3-r3c3 black
kropki-4: kropki r3c3-r4c3 black
kropki-5: kropki r6c7-r7c7 black
kropki-6: kropki r7c7-r8c7 black
arrow-1: arrow r7c6-r8c7 bulb ["r6c5"]
arrow-2: arrow r8c7-r7c8 bulb ["r9c6"]
arrow-3: arrow r7c8-r6c7 bulb ["r8c9"]
arrow-4: arrow r6c7-r7c6 bulb ["r5c8"]
arrow-5: arrow r4c3-r3c4 bulb ["r5c2"]
arrow-6: arrow r3c4-r2c3 bulb ["r4c5"]
arrow-7: arrow r2c3-r3c2 bulb ["r1c4"]
arrow-8: arrow r3c2-r4c3 bulb ["r2c1"]
between-1: between r7c3-r6c4-r5c5-r4c6-r3c7 ends ["r8c2","r2c8"]
between-2: between r2c4-r3c5-r4c6-r5c7-r6c8 ends ["r1c3","r7c9"]
between-3: between r4c2-r5c3-r6c4-r7c5-r8c6 ends ["r3c1","r9c7"]
```

Normal Sudoku rules apply. ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. All arrows are straight, with length 2. BETWEEN LINES- Numbers on lines are between the numbers in the gray circles at the ends of the line. There are 3 straight Between Lines. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
