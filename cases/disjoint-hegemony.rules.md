---
format: open-rules
title: Disjoint Hegemony
setter: Meggen033
source: https://sudokupad.app/4v50a8wnsh
case: https://sudoku-sleuth.com/cases/disjoint-hegemony
library: https://rules.sudoku-sleuth.com/
status: read
exported: 02dd73a44676359d332466625e3eeb47
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2 total 5 connected true
cage-2: cage r8c5-r9c5 total 5 connected true
cage-3: cage r5c4-r6c4-r6c5 total 21 connected true
cage-4: cage r2c6-r2c7 total 15 connected true
thermo r4c6-r4c5-r5c5
kropki-1: kropki r2c2-r2c3 black
kropki-2: kropki r8c8-r9c8 black
kropki-3: kropki r7c8-r8c8 black
kropki-4: kropki r2c1-r2c2 black
arrow-1: arrow r8c2-r7c3 bulb ["r9c1"]
arrow-2: arrow r2c8-r1c9 bulb ["r3c7"]
arrow-3: arrow r6c2 bulb ["r7c1"]
whispers-1: whispers r1c6-r2c5-r2c4 gap 5
whispers-2: whispers r4c9-r5c8-r6c8 gap 5
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

•	Normal Sudoku rules apply. 
•	Disjoint Set: Cells in the same relative position in different boxes cannot contain the same digits.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	The digits along each arrow must sum to the digit in the circled cell.
•	A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are given.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits along each thermometer must increase starting from the bulb end.
