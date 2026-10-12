---
format: open-rules
title: 8 Maids 'a Milking
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/8-maids-a-milking
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r6c4-r6c5-r6c6 total 21 connected true
cage-2: cage r7c4-r7c5-r7c6 total 13 connected true
cage-3: cage r9c4-r9c5-r9c6 total 8 connected true
cage-4: cage r4c4-r4c5-r4c6 total 10 connected true
cage-5: cage r4c3-r5c3-r6c3-r7c3-r8c3 total 23 connected true
cage-6: cage r4c7-r5c7-r6c7-r7c7-r8c7 total 28 connected true
cage-7: cage r3c1-r3c2-r3c3-r3c4 total 12 connected true
cage-8: cage r2c6-r2c7-r2c8-r2c9 total 18 connected true
cage-9: cage r2c5-r3c5 total 5 connected true
cage-10: cage r1c1-r2c1 total 6 connected true
cage-11: cage r7c9-r8c9-r9c9 total 22 connected true
thermo-1: thermo r8c3-r7c3-r6c3-r5c3-r4c3
thermo-2: thermo r8c7-r7c7-r6c7-r5c7-r4c7
kropki r7c4-r8c4 colour "white"
whispers-1: whispers r5c6-r5c5-r5c4-r5c3-r6c2-r7c2-r8c3-r8c4 gap 4
whispers-2: whispers r8c6-r8c7-r7c8-r6c8-r5c7 gap 4
renban-1: renban r2c2-r2c3-r2c4
renban-2: renban r3c2-r3c3-r3c4
renban-3: renban r1c4-r1c3-r1c2-r1c1-r2c1-r3c1-r4c1-r4c2-r4c3
renban-4: renban r3c6-r3c7-r3c8
renban-5: renban r2c6-r2c7-r2c8
renban-6: renban r1c6-r1c7-r1c8-r1c9-r2c9-r3c9-r4c9-r4c8-r4c7
renban-7: renban r8c4-r8c5-r8c6
```

Normal Sudoku rules apply. DUTCH WHISPERS (bucket top)- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines if other rules allow. The number 5 does not appear on red lines. RENBAN (maid's hands and bucket top)- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order. THERMOMETER (Milk)- Numbers on thermometers increase from the bulb end. KILLER- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown. The blue line (#8) has no effect on the puzzle.
