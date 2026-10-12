---
format: open-rules
title: One Knight's Fusion
setter: Meggen033
source: https://sudokupad.app/liulsi0jje
case: https://sudoku-sleuth.com/cases/one-knight-s-fusion
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c4-r4c5-r4c6-r5c5 total 12 connected true
cage-2: cage r2c5-r3c4-r3c5-r3c6 total 28 connected true
cage-3: cage r3c3-r4c3 total 10 connected true
cage-4: cage r2c1-r2c2 total 9 connected true
anti-knight
thermo-1: thermo r4c7-r4c8-r3c8-r3c7
thermo-2: thermo r1c7-r1c6
thermo-3: thermo r8c4-r8c3-r9c3-r9c4
kropki-1: kropki r3c3-r3c4 colour "white"
kropki-2: kropki r5c6-r6c6 colour "white"
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	Digits along each thermometer must increase starting from the bulb end.
•	A white dot between cells indicates cells with consecutive values. Not all dots are given.
