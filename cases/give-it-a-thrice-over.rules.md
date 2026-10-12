---
format: open-rules
title: Give It A Thrice-Over
setter: Will Power
source: https://sudokupad.app/jrzta7gsdu
case: https://sudoku-sleuth.com/cases/give-it-a-thrice-over
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c5-r4c6-r5c5-r5c6 total 30 connected true
cage-2: cage r4c1-r4c2-r5c1-r5c2-r6c1-r6c2 total 27 connected true
cage-3: cage r6c8-r6c9 total 14 connected true
kropki-1: kropki r5c1-r6c1 colour "white"
kropki-2: kropki r4c1-r5c1 colour "white"
kropki-3: kropki r4c1-r4c2 colour "white"
kropki-4: kropki r7c7-r8c7 colour "white"
kropki-5: kropki r8c7-r8c8 colour "white"
kropki-6: kropki r8c8-r8c9 colour "white"
kropki-7: kropki r8c2-r9c2 colour "white"
kropki-8: kropki r7c2-r8c2 colour "white"
kropki-9: kropki r8c3-r9c3 colour "white"
kropki-10: kropki r9c3-r9c4 colour "white"
arrow-1: arrow r3c5-r3c6 bulb ["r3c4"]
arrow-2: arrow r3c6-r4c7 bulb ["r2c5"]
arrow-3: arrow r4c7-r5c7 bulb ["r3c7"]
arrow-4: arrow r5c7-r6c6 bulb ["r4c8"]
arrow-5: arrow r6c6-r6c5 bulb ["r6c7"]
arrow-6: arrow r6c5-r5c4 bulb ["r7c6"]
arrow-7: arrow r5c4-r4c4 bulb ["r6c4"]
arrow-8: arrow r4c4-r3c5 bulb ["r5c3"]
arrow-9: arrow r5c3-r4c3 bulb ["r6c3"]
arrow-10: arrow r2c5-r2c6 bulb ["r2c4"]
arrow-11: arrow r4c8-r5c8 bulb ["r3c8"]
arrow-12: arrow r7c6-r7c5 bulb ["r7c7"]
```

Normal Sudoku rules apply.

ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. All arrows are straight, and length 2.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
