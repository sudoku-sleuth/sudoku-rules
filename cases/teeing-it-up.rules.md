---
format: open-rules
title: Teeing It Up
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/6z1kgskqrn
case: https://sudoku-sleuth.com/cases/teeing-it-up
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r2c2-r3c1 total 30 connected true
cage-2: cage r2c3-r3c2-r3c3-r4c3 total 11 connected true
cage-3: cage r3c4-r4c4-r4c5-r5c4 total 27 connected true
cage-4: cage r5c5-r6c4-r6c5-r7c5 total 11 connected true
cage-5: cage r6c6-r7c6-r7c7-r8c6 total 24 connected true
cage-6: cage r7c8-r8c7-r8c8-r9c8 total 13 connected true
cage-7: cage r5c9-r6c8-r6c9-r7c9 total 14 connected true
cage-8: cage r3c8-r4c8-r4c9-r5c8 total 25 connected true
cage-9: cage r1c9-r2c8-r2c9-r3c9 total 18 connected true
cage-10: cage r4c2-r5c2-r5c3-r6c2 total 21 connected true
kropki-1: kropki r4c3-r4c4 colour "black"
kropki-2: kropki r6c5-r6c6 colour "black"
kropki-3: kropki r7c7-r8c7 colour "black"
kropki-4: kropki r2c2-r3c2 colour "black"
kropki-5: kropki r5c4-r5c5 colour "black"
kropki-6: kropki r7c8-r7c9 colour "black"
kropki-7: kropki r5c8-r5c9 colour "black"
kropki-8: kropki r4c2-r4c3 colour "black"
kropki-9: kropki r8c7-r9c7 colour "black"
kropki-10: kropki r8c3-r9c3 colour "black"
```

- Normal sudoku rules apply: Every row, column, and box must contain a complete set of the digits 1-9.
- Cages: Within cages, digits may not repeat and must sum to the value shown in the upper left corner of the cage.
- Ratio Dots: Digits separated by a black dot are in a 1:2 ratio.
