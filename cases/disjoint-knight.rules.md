---
format: open-rules
title: Disjoint Knight
setter: Meggen033
source: https://sudokupad.app/v09c3rl7bf
case: https://sudoku-sleuth.com/cases/disjoint-knight
library: https://rules.sudoku-sleuth.com/
status: read
exported: 98dd9790c8cd52e9da3a0faad3cc962d
---

```rules
sudoku 9x9
cage-1: cage r2c2-r3c2 total 10 connected true
cage-2: cage r8c2-r8c3 total 10 connected true
cage-3: cage r7c8-r8c8 total 10 connected true
cage-4: cage r2c7-r2c8 total 10 connected true
cage-5: cage r2c4-r2c5 total 5 connected true
cage-6: cage r5c2-r6c2 total 5 connected true
cage-7: cage r8c5-r8c6 total 5 connected true
cage-8: cage r4c8-r5c8 total 5 connected true
cage-9: cage r3c5-r4c5 total 10 connected true
cage-10: cage r5c3-r5c4 total 10 connected true
cage-11: cage r6c5-r7c5 total 10 connected true
cage-12: cage r5c6-r5c7 total 10 connected true
anti-knight
kropki r3c1-r3c2 black
arrow-1: arrow r6c9 bulb ["r7c8"]
arrow-2: arrow r1c6 bulb ["r2c7"]
arrow-3: arrow r4c1 bulb ["r3c2"]
arrow-4: arrow r9c4 bulb ["r8c3"]
parity-cells r7c3-r1c9 parity "even"
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
•	Cells separated by a knight's move in chess cannot contain the same digit. 
•	Disjoint Set: Digits must not repeat at corresponding box positions.
•	Digits in a cage do not repeat and sum to the clue in the top left.
•	The digits along each arrow must sum to the digit in the circled cell.
•	Cells with a filled square must be even.
•	A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.
