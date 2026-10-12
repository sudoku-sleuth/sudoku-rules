---
format: open-rules
title: Slither Up
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/d16ztnxtb6
case: https://sudoku-sleuth.com/cases/slither-up
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c3-r3c4 total 7 connected true
cage-2: cage r5c2-r5c3-r6c3 total 9 connected true
cage-3: cage r2c7-r3c6-r3c7 total 10 connected true
cage-4: cage r8c1-r8c2-r9c2 total 8 connected true
cage-5: cage r7c4-r7c5-r8c5 total 11 connected true
cage-6: cage r6c8-r6c9-r7c8 total 12 connected true
cage-7: cage r4c4-r4c5-r5c5 total 13 connected true
modular r1c1-r2c2-r3c2-r2c3-r2c4-r3c4-r4c3-r5c2-r6c2-r6c3-r5c4-r4c5-r3c6-r2c7-r2c8-r3c8-r4c7-r5c6-r6c5-r7c4-r8c4-r8c5-r7c6-r6c7-r5c8-r5c9-r6c9-r7c8-r8c7-r9c6
```

- Normal sudoku rules apply.
- Modular Lines: Every set of three adjacent digits along a teal modular line contains digits with three different remainders when divided by 3.
- Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
