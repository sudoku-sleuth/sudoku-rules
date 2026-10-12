---
format: open-rules
title: Safe At The Plate
setter: Will Power
source: https://sudokupad.app/f1y37w90o4
case: https://sudoku-sleuth.com/cases/safe-at-the-plate
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r6c5-r5c4-r6c4-r7c5
thermo-2: thermo r6c5-r5c4-r4c3-r4c4-r3c4
thermo-3: thermo r6c5-r5c4-r4c3-r5c3-r5c2
thermo-4: thermo r9c6-r8c5-r7c4-r6c3-r5c2
thermo-5: thermo r9c6-r8c5-r7c4-r7c3-r7c2
thermo-6: thermo r9c6-r8c5-r8c6-r8c7
kropki-1: kropki r9c4-r9c5 colour "white"
kropki-2: kropki r1c6-r2c6 colour "black"
kropki-3: kropki r2c6-r2c7 colour "black"
kropki-4: kropki r2c7-r3c7 colour "black"
kropki-5: kropki r3c7-r3c8 colour "black"
kropki-6: kropki r4c3-r5c3 colour "black"
arrow-1: arrow r3c6-r2c7-r2c6-r1c6 bulb ["r4c5"]
arrow-2: arrow r3c6-r2c7-r3c7-r3c8 bulb ["r4c5"]
arrow-3: arrow r3c6-r2c5 bulb ["r4c5"]
arrow-4: arrow r3c6-r4c7 bulb ["r4c5"]
renban-1: renban r7c1-r6c1-r5c2-r6c3-r7c3-r7c2-r7c4-r8c5-r9c6
renban-2: renban r2c8-r1c8-r1c9-r2c9
renban-3: renban r2c1-r2c2-r3c2-r3c1
renban-4: renban r6c8-r6c9-r7c9-r7c8
```

Normal Sudoku rules apply.
ARROWS (Umpire)- Numbers on arrows sum to the number in the arrows' circle.
THERMOMETERS (Players)- Numbers on thermometers increase from the bulb end. Two thermometers end in Row 5 Column 2.
RENBAN- Numbers on purple lines are each a set of non-repeating consecutive numbers, in any order.
KROPKI PAIRS- Numbers with a white dot between them are consecutive (baseball). Numbers with a black dot between them are in a ratio of 2:1 (catcher and umpire pads). Not all possible dots are shown.
