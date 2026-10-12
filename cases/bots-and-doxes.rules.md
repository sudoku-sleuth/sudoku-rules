---
format: open-rules
title: Bots and Doxes
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/c0t4xalqqa
case: https://sudoku-sleuth.com/cases/bots-and-doxes
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=8
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 8 connected true
cage-2: cage r6c7-r7c6-r7c7 total 9 connected true
cage-3: cage r3c6-r4c6-r4c7 total 16 connected true
cage-4: cage r6c3-r6c4-r7c4 total 17 connected true
cage-5: cage r8c1-r8c2-r9c2 total 8 connected true
cage-6: cage r1c8-r2c8-r2c9 total 9 connected true
cage-7: cage r4c1-r5c1-r5c2 total 9 connected true
cage-8: cage r5c8-r5c9-r6c9 total 8 connected true
cage-9: cage r8c5-r9c5-r9c6 total 23 connected true
cage-10: cage r1c4-r1c5-r2c5 total 17 connected true
cage-11: cage r6c1-r6c2-r7c1 total 16 connected true
cage-12: cage r3c8-r3c9-r4c8 total 16 connected true
cage-13: cage r1c6-r2c6-r2c7 total 19 connected true
cage-14: cage r8c3-r8c4-r9c4 total 14 connected true
cage-15: cage r5c6-r6c5-r6c6 total 10 connected true
cage-16: cage r4c4-r4c5-r5c4 total 18 connected true
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except []
```

Normal sudoku rules apply.

In cages, digits cannot repeat and must sum to the number shown in the upper left corner.

Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. All possible dots are given.
