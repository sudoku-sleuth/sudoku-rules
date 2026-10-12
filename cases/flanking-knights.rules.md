---
format: open-rules
title: Flanking Knights
setter: Meggen033
source: https://sudokupad.app/q3dtxz220c
case: https://sudoku-sleuth.com/cases/flanking-knights
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c5-r9c5 total 12 connected true
cage-2: cage r2c5-r3c5 total 11 connected true
cage-3: cage r1c7-r2c7 total 8 connected true
cage-4: cage r1c3-r2c3 total 12 connected true
cage-5: cage r9c2-r9c3 total 9 connected true
cage-6: cage r9c7-r9c8 total 9 connected true
kropki-1: kropki r5c3-r5c4 colour "black"
kropki-2: kropki r5c6-r5c7 colour "black"
arrow-1: arrow r3c7-r3c8 bulb ["r4c6"]
arrow-2: arrow r5c7-r5c8 bulb ["r6c6"]
arrow-3: arrow r5c3-r5c2 bulb ["r6c4"]
arrow-4: arrow r3c3-r3c2 bulb ["r4c4"]
renban r5c4-r4c5-r5c6-r6c5
pair-1: pair r4c2-r5c2 relation {"op":"sum","value":10}
pair-2: pair r4c8-r5c8 relation {"op":"sum","value":10}
parity-cells r5c5 parity "odd"
anti-knight
```

•	Normal Sudoku rules apply. 
•	Cells separated by a knight's move in chess cannot contain the same digit. 
•	Digits along a megenta Renban line form a set of consecutive non-repeating digits in any order.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are given.
•	The digits along each arrow must sum to the digit in the circled cell.
•	Adjacent cells connected with an X must sum to 10.
•	Cells with a filled circle must be odd.
