---
format: open-rules
title: Robot Dance Party
setter: Meggen033
source: https://sudokupad.app/n28rdx81gj
case: https://sudoku-sleuth.com/cases/robot-dance-party
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r6c4-r7c3-r8c2-r9c1
thermo-2: thermo r6c6-r7c7-r8c8-r9c9
thermo-3: thermo r4c1-r3c1-r3c2
thermo-4: thermo r4c8-r3c7
kropki r7c5-r8c5 colour "white"
whispers-1: whispers r5c4-r4c5-r5c6-r6c5 gap 5 loop true
whispers-2: whispers r8c4-r9c5-r8c6 gap 5
renban-1: renban r3c5-r4c6-r5c7-r6c6-r7c5-r6c4-r5c3-r4c4
renban-2: renban r2c4-r1c5-r2c6
region-sum r5c2-r4c3-r3c4-r2c5-r3c6-r4c7-r5c8-r6c7-r7c6-r8c5-r7c4-r6c3 segments [["r5c2","r4c3","r6c3"],["r3c4","r2c5","r3c6"],["r4c7","r5c8","r6c7"],["r7c6","r8c5","r7c4"]]
pair-1: pair r9c1-r9c2 sum 10
pair-2: pair r9c8-r9c9 sum 10
extremum r5c5 type "max" exhaustive false
```

•	Normal Sudoku rules apply. 
•	A max cell must be greater than its orthogonally adjacent neighbors as indicated by the symbols bordering the cell.
•	Adjacent digits along a green german whisper line must have a difference of at least 5.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Digits along a blue line create a sumline where box border divide the line into segments of equal sum.
•	Digits along each thermometer must increase starting from the bulb end.
•	Adjacent cells connected with a X must sum to 10.
•	A white dot between cells indicates cells with consecutive values. Not all dots are given.
