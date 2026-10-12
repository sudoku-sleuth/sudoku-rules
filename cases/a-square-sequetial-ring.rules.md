---
format: open-rules
title: A Square Sequetial Ring
setter: Meggen033
source: https://sudokupad.app/889cd4kxtk
case: https://sudoku-sleuth.com/cases/a-square-sequetial-ring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c8-r5c8 total 6 connected true
cage-2: cage r5c1-r6c1 total 6 connected true
cage-3: cage r7c2-r7c3 total 10 connected true
cage-4: cage r3c7-r3c8 total 10 connected true
cage-5: cage r4c5-r5c5-r6c5 total 14 connected true
cage-6: cage r1c5-r2c5 total 9 connected true
cage-7: cage r8c4-r8c5-r8c6 total 11 connected true
kropki-1: kropki r8c1-r8c2 colour "white"
kropki-2: kropki r8c8-r9c8 colour "white"
kropki-3: kropki r2c8-r2c9 colour "white"
kropki-4: kropki r1c2-r2c2 colour "white"
kropki-5: kropki r3c2-r4c2 colour "white"
kropki-6: kropki r5c3-r5c4 colour "white"
kropki-7: kropki r5c6-r5c7 colour "white"
kropki-8: kropki r6c6-r7c6 colour "white"
kropki-9: kropki r1c8-r1c9 colour "black"
kropki-10: kropki r1c1-r2c1 colour "black"
kropki-11: kropki r9c1-r9c2 colour "black"
kropki-12: kropki r8c9-r9c9 colour "black"
kropki-13: kropki r3c5-r4c5 colour "black"
kropki-14: kropki r2c4-r3c4 colour "black"
renban-1: renban r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7
renban-2: renban r4c3-r5c3-r6c3-r7c3-r7c4-r7c5-r7c6-r7c7
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
