---
format: open-rules
title: Almost Gurth
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4juivk4rwb
case: https://sudoku-sleuth.com/cases/almost-gurth
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=5
exported: 77ac79bf367794a7be97dd9aeafddc2c
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 5 connected true
cage-2: cage r9c8-r9c9 total 15 connected true
cage-3: cage r5c9-r6c9 total 17 connected true
cage-4: cage r8c5-r9c5 total 13 connected true
cage-5: cage r1c5-r2c5 total 7 connected true
cage-6: cage r4c1-r5c1 total 3 connected true
cage-7: cage r3c2-r3c3 total 11 connected true
cage-8: cage r7c7-r7c8 total 9 connected true
kropki-1: kropki r1c1-r1c2 white
kropki-2: kropki r9c8-r9c9 white
kropki-3: kropki r1c5-r2c5 white
kropki-4: kropki r8c5-r9c5 white
kropki-5: kropki r5c1-r5c2 white
kropki-6: kropki r5c8-r5c9 white
kropki-7: kropki r3c5-r4c5 white
kropki-8: kropki r6c5-r7c5 white
kropki-9: kropki r5c4-r5c5 white
kropki-10: kropki r5c5-r5c6 white
kropki-11: kropki r7c4-r7c5 white
kropki-12: kropki r7c5-r7c6 white
kropki-13: kropki r3c5-r3c6 white
kropki-14: kropki r3c4-r3c5 white
kropki-15: kropki r3c2-r3c3 white
kropki-16: kropki r7c7-r7c8 white
kropki-17: kropki r7c8-r8c8 white
kropki-18: kropki r2c2-r3c2 white
kropki-19: kropki r6c8-r7c8 white
kropki-20: kropki r3c2-r4c2 white
kropki-21: kropki r3c4-r4c4 white
kropki-22: kropki r6c6-r7c6 white
kropki-23: kropki r6c3-r6c4 white
```

Normal sudoku rules apply: every row, column and box must contain a complete set of the digits 1-9.

Difference dots: cells joined by a white dot are consecutive: not all dots are given.

Killer cages: cells in a cage marked by dashed lines must sum to the total in the top left corner of the cage.
