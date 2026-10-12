---
format: open-rules
title: I've Had The Time Of My Life
setter: Will Power
source: https://sudokupad.app/56xugzq301
case: https://sudoku-sleuth.com/cases/i-ve-had-the-time-of-my-life
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3-r3c3 connected true
cage-2: cage r4c2-r5c2-r6c2 connected true
cage-3: cage r6c5-r7c5-r8c5 connected true
cage-4: cage r4c8-r5c8-r6c8 connected true
cage-5: cage r4c9-r5c9-r6c9 connected true
thermo-1: thermo r2c7-r3c6-r3c5-r3c4-r3c3-r3c2
thermo-2: thermo r2c7-r3c6-r3c5-r3c4-r3c3-r2c2
thermo-3: thermo r2c7-r3c6
thermo-4: thermo r2c7-r3c6-r2c6-r1c6
kropki-1: kropki r9c1-r9c2 colour "white"
kropki-2: kropki r9c2-r9c3 colour "white"
kropki-3: kropki r9c5-r9c6 colour "white"
kropki-4: kropki r9c6-r9c7 colour "white"
kropki-5: kropki r2c4-r2c5 colour "white"
kropki-6: kropki r8c3-r9c3 colour "white"
arrow-1: arrow r5c6-r6c5-r7c6-r8c7-r9c8 bulb ["r4c7"]
arrow-2: arrow r5c6-r4c6-r3c5 bulb ["r4c7"]
arrow-3: arrow r5c6-r4c5-r3c4 bulb ["r4c7"]
arrow-4: arrow r5c6-r6c5-r7c4-r8c3-r9c4 bulb ["r4c7"]
```

Normal Sudoku rules apply. 

THERMOMETERS- Numbers on thermometers increase from the bulb end.

ARROWS- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow.

KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.

EQUAL SUM KILLER CAGES(+)- The sum of the numbers in each cage are the same. Also, numbers in cages increase from top to bottom. 

HINT: For an easier solve, the sum of all cages is the two digit number formed by the two cells in the bottom right corner of the puzzle, read from left to right.
