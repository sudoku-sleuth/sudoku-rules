---
format: open-rules
title: Rube Goldburg Sudoku
setter: The Bard
source: https://sudokupad.app/an5rvkj66j
case: https://sudoku-sleuth.com/cases/rube-goldburg-sudoku
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2f0d5a7c309a7f10d914fbff8fbbb4ce
---

```rules
sudoku 9x9
cage-1: cage r5c8-r5c9 total 3 connected true
cage-2: cage r5c1-r5c2 total 9 connected true
cage-3: cage r4c4-r5c4 total 11 connected true
cage-4: cage r2c4-r3c4 total 9 connected true
cage-5: cage r5c6-r6c6 total 13 connected true
cage-6: cage r7c6-r8c6 total 13 connected true
cage-7: cage r5c5-r6c5 total 10 connected true
cage-8: cage r1c7-r2c7 total 14 connected true
cage-9: cage r3c7-r4c7 total 5 connected true
cage-10: cage r6c3-r7c3 total 11 connected true
cage-11: cage r8c3-r9c3 total 4 connected true
cage-12: cage r9c7-r9c8-r9c9 total 15 connected true
cage-13: cage r7c4-r7c5 total 12 connected true
cage-14: cage r6c1-r7c1 total 10 connected true
kropki-1: kropki r7c3-r8c3 white
kropki-2: kropki r3c8-r3c9 white
kropki-3: kropki r2c8-r3c8 white
kropki-4: kropki r1c9-r2c9 white
kropki-5: kropki r4c1-r4c2 white
kropki-6: kropki r2c4-r3c4 black
kropki-7: kropki r5c1-r5c2 black
kropki-8: kropki r6c6-r7c6 black
kropki-9: kropki r7c8-r8c8 black
kropki-10: kropki r8c1-r8c2 black
unique-1: unique r2c3-r2c4-r2c5-r3c3-r3c4-r3c5-r4c3-r4c4-r4c5
unique-2: unique r6c5-r6c6-r6c7-r7c5-r7c6-r7c7-r8c5-r8c6-r8c7
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.

Extra Region: Digits in each shaded area do not repeat.   

Killer: Digits in cages must sum to the number in the top left corner of the cage.

Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
