---
format: open-rules
title: A Square Odd & Even Ring
setter: Meggen033
source: https://sudokupad.app/m5cxtn0406
case: https://sudoku-sleuth.com/cases/a-square-odd-even-ring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c8-r9c8 total 12 connected true
cage-2: cage r1c2-r2c2 total 12 connected true
cage-3: cage r4c8-r5c8 total 13 connected true
cage-4: cage r5c2-r6c2 total 13 connected true
cage-5: cage r2c4-r2c5 total 12 connected true
cage-6: cage r8c5-r8c6 total 12 connected true
cage-7: cage r6c6-r6c7-r7c6 connected true
cage-8: cage r3c4-r4c3-r4c4-r5c4 connected true
kropki-1: kropki r8c9-r9c9 colour "white"
kropki-2: kropki r1c1-r2c1 colour "white"
kropki-3: kropki r8c4-r8c5 colour "white"
kropki-4: kropki r2c5-r2c6 colour "white"
kropki-5: kropki r4c1-r5c1 colour "white"
kropki-6: kropki r5c9-r6c9 colour "white"
kropki-7: kropki r4c5-r5c5 colour "white"
kropki-8: kropki r5c6-r6c6 colour "white"
kropki-9: kropki r7c3-r7c4 colour "black"
kropki-10: kropki r3c6-r3c7 colour "black"
kropki-11: kropki r5c5-r6c5 colour "black"
pair-1: pair r8c1-r8c2 sum 10
pair-2: pair r9c1-r9c2 sum 10
pair-3: pair r2c8-r2c9 sum 10
pair-4: pair r1c8-r1c9 sum 10
pair-5: pair r9c4-r9c5 sum 10
parity-cells-1: parity-cells r4c3-r3c3-r3c4-r7c6-r7c7-r6c7 parity "odd"
parity-cells-2: parity-cells r5c3-r6c3-r7c3-r7c4-r7c5-r5c7-r4c7-r3c7-r3c6-r3c5 parity "even"
```

•    Normal Sudoku rules apply. 
•    Cells with a filled grey square must be even.
•    Cells with a filled grey circle must be odd.
•    Digits in a cage do not repeat and sum to the clue in the top left if given.
•    Adjacent cells connected with an X must sum to 10.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
