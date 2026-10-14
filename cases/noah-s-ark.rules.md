---
format: open-rules
title: Noah's Ark
setter: Meggen033
source: https://sudokupad.app/bqbpsd3jht
case: https://sudoku-sleuth.com/cases/noah-s-ark
library: https://rules.sudoku-sleuth.com/
status: read
exported: 829dd0d703685543e24e05546cef126d
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r4c3 total 9 connected true
cage-2: cage r4c7-r4c8-r4c9 total 21 connected true
cage-3: cage r1c2-r1c3-r1c4 total 19 connected true
cage-4: cage r2c1-r3c1 total 8 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo-1: thermo r6c3-r6c2-r6c1
thermo-2: thermo r3c6-r2c6-r1c6
kropki-1: kropki r6c5-r6c6 white
kropki-2: kropki r5c6-r6c6 white
kropki-3: kropki r4c4-r5c4 black
kropki-4: kropki r4c4-r4c5 black
arrow-1: arrow r9c2-r9c3-r8c3 bulb ["r9c1"]
arrow-2: arrow r3c9-r3c8 bulb ["r2c9"]
whispers-1: whispers r9c6-r8c6-r7c6 gap 5
whispers-2: whispers r6c7-r6c8-r6c9 gap 5
renban-1: renban r1c4-r2c4-r3c4
renban-2: renban r9c4-r8c4-r7c4
quadruple-1: quadruple r8c8-r8c9-r9c8-r9c9 digits [7,8,9]
quadruple-2: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2,3]
parity-cells-1: parity-cells r2c3-r3c2 parity "odd"
parity-cells-2: parity-cells r2c5-r5c2 parity "even"
```

•	Normal Sudoku rules apply. 
•	Digits along a diagonal cannot repeat
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	Digits along each thermometer must increase starting from the bulb end.
•	Digits in a white circle must appear at least once in the four surrounding cells.
•	Cells with a filled square must be even.  Cells with a filled circle must be odd.
•	The digits along each arrow must sum to the digit in the circled cell.
