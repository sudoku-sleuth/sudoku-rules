---
format: open-rules
title: I Have An Extra Lug Nut?
setter: Will Power
source: https://sudokupad.app/zo1ssj4dkg
case: https://sudoku-sleuth.com/cases/i-have-an-extra-lug-nut
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c1-r4c1-r3c2-r2c3-r1c4
thermo-2: thermo r2c7-r3c8-r4c9-r5c9
thermo-3: thermo r1c5-r1c6
thermo-4: thermo r6c9-r7c8-r8c7
thermo-5: thermo r9c5-r9c4
thermo-6: thermo r7c2-r6c1
thermo-7: thermo r3c1-r2c2-r1c3
thermo-8: thermo r2c8-r3c9
thermo-9: thermo r8c8-r9c7
thermo-10: thermo r8c2-r7c1
kropki-1: kropki r3c4-r4c4 colour "black"
kropki-2: kropki r4c6-r4c7 colour "black"
kropki-3: kropki r6c3-r6c4 colour "black"
kropki-4: kropki r4c3-r4c4 colour "black"
kropki-5: kropki r3c6-r4c6 colour "black"
kropki-6: kropki r6c6-r7c6 colour "black"
kropki-7: kropki r6c4-r7c4 colour "black"
kropki-8: kropki r6c6-r6c7 colour "black"
kropki-9: kropki r7c9-r8c9 colour "black"
kropki-10: kropki r5c7-r6c7 colour "black"
kropki-11: kropki r4c7-r5c7 colour "black"
kropki-12: kropki r3c5-r3c6 colour "black"
kropki-13: kropki r4c3-r5c3 colour "black"
kropki-14: kropki r7c4-r7c5 colour "black"
arrow-1: arrow r3c6-r4c7 bulb ["r3c5"]
arrow-2: arrow r6c7-r7c6 bulb ["r5c7"]
arrow-3: arrow r7c4-r6c3 bulb ["r7c5"]
arrow-4: arrow r4c3-r3c4 bulb ["r5c3"]
arrow-5: arrow r4c8-r5c8 bulb ["r3c7"]
arrow-6: arrow r3c3-r2c4 bulb ["r4c2"]
arrow-7: arrow r8c5-r8c4 bulb ["r8c6"]
arrow-8: arrow r6c2 bulb ["r7c3"]
```

Don't you hate it when you put something back together, and you have an extra piece that you don't know where it is supposed to go?  8-)

Normal Sudoku rules apply. 

ARROWS (Hub)- Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow.

THERMOMETERS (Tire/Tyre)- Numbers on thermometers increase from the bulb end.

KROPKI PAIRS (Lug Nuts)- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
