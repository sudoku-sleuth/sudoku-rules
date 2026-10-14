---
format: open-rules
title: It's a Modular World After All
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/wgc1tyzz91
case: https://sudoku-sleuth.com/cases/it-s-a-modular-world-after-all
library: https://rules.sudoku-sleuth.com/
status: read
exported: 33e420d95a4005373ce40196b8b55a5e
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c1-r2c2 total 7 connected true
cage-2: cage r3c3-r3c4-r4c3 total 8 connected true
cage-3: cage r1c8-r2c8-r2c9 total 21 connected true
cage-4: cage r8c1-r8c2-r9c2 total 22 connected true
cage-5: cage r8c8-r8c9-r9c8 total 8 connected true
kropki-1: kropki r2c2-r3c2 black
kropki-2: kropki r2c7-r3c7 black
kropki-3: kropki r8c3-r9c3 black
kropki-4: kropki r7c9-r8c9 black
kropki-5: kropki r8c4-r8c5 black
window-classes classes "mod3"
```

- Normal sudoku rules apply.
- Global modularity: Every 2x2 region must contain digits with three different remainders when divided by 3.
- Cages: Digits within a cage cannot repeat and must sum to the value shown in the upper left corner of the cage.
