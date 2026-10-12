---
format: open-rules
title: Do Not Adjust Your Set
setter: Blobz
source: https://sudokupad.app/blobz/do-not-adjust-your-set
case: https://sudoku-sleuth.com/cases/do-not-adjust-your-set
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c4-r3c5-r3c6 total 22 connected true
cage-2: cage r4c3-r5c3-r6c3 total 15 connected true
cage-3: cage r4c7-r5c7-r6c7 total 15 connected true
cage-4: cage r7c4-r7c5-r7c6 total 9 connected true
cage-5: cage r2c3-r3c2-r3c3 total 17 connected true
cage-6: cage r2c7-r3c7-r3c8 total 18 connected true
cage-7: cage r7c7-r7c8-r8c7 total 13 connected true
cage-8: cage r7c2-r7c3-r8c3 total 12 connected true
cage-9: cage r8c2-r9c2 total 10 connected true
cage-10: cage r8c8-r9c8 total 10 connected true
cage-11: cage r1c8-r2c8 total 6 connected true
cage-12: cage r1c2-r2c2 total 14 connected true
cage-13: cage r2c4-r2c5-r2c6 total 15 connected true
cage-14: cage r8c4-r8c5-r8c6 total 15 connected true
kropki-1: kropki r3c3-r3c4 colour "white"
kropki-2: kropki r3c5-r3c6 colour "white"
kropki-3: kropki r3c6-r3c7 colour "white"
kropki-4: kropki r4c4-r4c5 colour "white"
kropki-5: kropki r6c3-r6c4 colour "white"
kropki-6: kropki r6c6-r6c7 colour "white"
kropki-7: kropki r7c3-r7c4 colour "white"
kropki-8: kropki r3c3-r4c3 colour "white"
kropki-9: kropki r5c5-r6c5 colour "white"
kropki-10: kropki r3c6-r4c6 colour "white"
kropki-11: kropki r5c6-r6c6 colour "white"
kropki-12: kropki r5c7-r6c7 colour "white"
kropki-13: kropki r4c7-r5c7 colour "white"
kropki-14: kropki r3c7-r4c7 colour "white"
kropki-15: kropki r6c4-r6c5 colour "white"
renban-1: renban r3c3-r3c4-r3c5-r3c6-r3c7
renban-2: renban r4c3-r4c4-r4c5-r4c6-r4c7
renban-3: renban r5c3-r5c4-r5c5-r5c6-r5c7
renban-4: renban r6c3-r6c4-r6c5-r6c6-r6c7
renban-5: renban r7c3-r7c4-r7c5-r7c6-r7c7
negative relations [{"op":"difference","value":1}] except [["r3c3","r3c4"],["r3c5","r3c6"],["r3c6","r3c7"],["r4c4","r4c5"],["r6c3","r6c4"],["r6c6","r6c7"],["r7c3","r7c4"],["r3c3","r4c3"],["r5c5","r6c5"],["r3c6","r4c6"],["r5c6","r6c6"],["r5c7","r6c7"],["r4c7","r5c7"],["r3c7","r4c7"],["r6c4","r6c5"]] within [["r3c3","r3c4","r3c5","r3c6","r3c7","r4c3","r4c4","r4c5","r4c6","r4c7","r5c3","r5c4","r5c5","r5c6","r5c7","r6c3","r6c4","r6c5","r6c6","r6c7","r7c3","r7c4","r7c5","r7c6","r7c7"]]
```

Normal sudoku rules apply.

Digits in cages must sum to the given value.

Pink lines contain a set of consecutive digits in any order.

In the shaded 5x5 central area, ALL consecutive pairs of digits are marked with a white dot.
