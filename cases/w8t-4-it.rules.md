---
format: open-rules
title: W8t 4 It
setter: Aaron Burr (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/cwo9ei5sxz
case: https://sudoku-sleuth.com/cases/w8t-4-it
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c4=4 r6c6=8
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 4 connected true
cage-2: cage r3c2-r3c3 total 8 connected true
cage-3: cage r2c9-r3c9 total 8 connected true
cage-4: cage r5c1-r5c2 total 8 connected true
cage-5: cage r5c5-r5c6 total 8 connected true
cage-6: cage r4c7-r5c7-r6c7 total 8 connected true
cage-7: cage r7c7-r7c8 total 8 connected true
cage-8: cage r9c8-r9c9 total 4 connected true
cage-9: cage r8c4-r8c5 total 4 connected true
cage-10: cage r8c2-r8c3 total 8 connected true
cage-11: cage r7c1-r8c1 total 8 connected true
kropki-1: kropki r6c2-r7c2 colour "black"
kropki-2: kropki r8c6-r8c7 colour "black"
kropki-3: kropki r3c8-r4c8 colour "black"
kropki-4: kropki r2c3-r2c4 colour "black"
negative relations [{"op":"ratio","value":2}] except [["r6c2","r7c2"],["r8c6","r8c7"],["r3c8","r4c8"],["r2c3","r2c4"]]
```

- Normal Sudoku rules apply.
- Cells separated by a black dot have a 1:2 ratio. ALL black dots are given.
- Digits in cages must sum to the number in the top left corner of the cage.
