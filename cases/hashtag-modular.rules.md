---
format: open-rules
title: Hashtag Modular
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/5ivi91oy0i
case: https://sudoku-sleuth.com/cases/hashtag-modular
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r3c3-r3c4-r4c3 total 15 connected true
cage-2: cage r3c6-r3c7-r4c7 total 15 connected true
cage-3: cage r6c7-r7c6-r7c7 total 15 connected true
cage-4: cage r6c3-r7c3-r7c4 total 15 connected true
cage-5: cage r8c1-r9c1-r9c2 total 9 connected true
cage-6: cage r1c1-r1c2-r2c1 total 15 connected true
cage-7: cage r8c9-r9c8-r9c9 total 15 connected true
cage-8: cage r1c8-r1c9-r2c9 total 9 connected true
cage-9: cage r2c2-r2c3-r3c2 total 6 connected true
cage-10: cage r7c8-r8c7-r8c8 total 6 connected true
cage-11: cage r2c7-r2c8-r3c8 total 15 connected true
cage-12: cage r7c2-r8c2-r8c3 total 15 connected true
cage-13: cage r5c3-r5c4 total 6 connected true
cage-14: cage r5c6-r5c7 total 5 connected true
cage-15: cage r3c5-r4c5 total 5 connected true
cage-16: cage r6c5-r7c5 total 9 connected true
cage-17: cage r6c8-r6c9 total 14 connected true
cage-18: cage r4c1-r4c2 total 12 connected true
cage-19: cage r1c6-r2c6 total 6 connected true
cage-20: cage r8c4-r9c4 total 12 connected true
cage-21: cage r8c6-r9c6 total 8 connected true
cage-22: cage r6c1-r6c2 total 7 connected true
cage-23: cage r4c8-r4c9 total 11 connected true
cage-24: cage r1c4-r2c4 total 15 connected true
modular-1: modular r3c1-r3c2-r3c3-r2c3-r1c3
modular-2: modular r1c7-r2c7-r3c7-r3c8-r3c9
modular-3: modular r7c1-r7c2-r7c3-r8c3-r9c3
modular-4: modular r7c9-r7c8-r7c7-r8c7-r9c7
modular-5: modular r4c3-r5c3-r6c3
modular-6: modular r3c4-r3c5-r3c6
modular-7: modular r4c7-r5c7-r6c7
modular-8: modular r7c4-r7c5-r7c6
```

- Normal sudoku rules apply.
- Modular Lines: Every set of three adjacent cells along a teal modular line contains digits with three different remainders when divided by 3.
- Cages: Within cages, digits cannot repeat and must sum to the value shown in the upper left corner of the cage.
