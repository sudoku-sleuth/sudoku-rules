---
format: open-rules
title: "Zodiac Project: Phase Shift"
setter: Meggen033
source: https://sudokupad.app/p7y65x2mi0
case: https://sudoku-sleuth.com/cases/zodiac-project-phase-shift
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r9c4-r8c4-r7c4
thermo-2: thermo r2c6-r3c6-r4c6
thermo-3: thermo r7c9-r6c9-r5c9
kropki-1: kropki r7c1-r7c2 colour "white"
kropki-2: kropki r6c7-r6c8 colour "white"
kropki-3: kropki r5c5-r6c5 colour "white"
kropki-4: kropki r1c5-r1c6 colour "white"
kropki-5: kropki r8c6-r9c6 colour "black"
kropki-6: kropki r5c4-r5c5 colour "black"
kropki-7: kropki r9c2-r9c3 colour "black"
kropki-8: kropki r5c1-r5c2 colour "black"
kropki-9: kropki r6c2-r7c2 colour "black"
arrow-1: arrow r2c4-r3c4 bulb ["r1c4"]
arrow-2: arrow r7c6-r6c6 bulb ["r8c6"]
arrow-3: arrow r4c9-r5c9 bulb ["r3c9"]
arrow-4: arrow r6c4-r5c4 bulb ["r6c3"]
whispers-1: whispers r7c9-r7c8-r8c7-r8c6-r9c5-r9c4 gap 5
whispers-2: whispers r3c9-r3c8-r2c7-r2c6-r1c5-r1c4 gap 5
unique r1c1-r2c4-r3c1-r3c6-r4c9-r6c9-r7c6-r8c1-r8c4
```

•	Normal Sudoku rules apply.  
•	Disjoint: Diamonds mark a set of the digits 1-9.
•	The digits along each arrow must sum to the digit in the circled cell.
•	Digits along each thermometer must increase starting from the bulb end.
•	Adjacent digits along a green german whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
