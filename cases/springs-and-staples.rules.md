---
format: open-rules
title: Springs and Staples
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/3b01vb2b1r
case: https://sudoku-sleuth.com/cases/springs-and-staples
library: https://rules.sudoku-sleuth.com/
status: read
exported: 69d3a72c18967a72302b8e2ac41e384a
---

```rules
sudoku 9x9
cage-1: cage r4c4-r5c4 total 8 connected true
cage-2: cage r5c6-r6c6 total 10 connected true
cage-3: cage r6c4-r6c5-r7c4-r7c5 total 20 connected true
cage-4: cage r3c5-r3c6-r4c5-r4c6 total 19 connected true
cage-5: cage r4c7-r5c7-r6c7 total 18 connected true
cage-6: cage r4c3-r5c3-r6c3 total 15 connected true
cage-7: cage r2c7-r2c8-r3c7-r3c8 total 15 connected true
cage-8: cage r7c2-r7c3-r8c2-r8c3 total 12 connected true
cage-9: cage r2c2-r2c3-r3c2-r3c3 total 25 connected true
cage-10: cage r7c7-r7c8-r8c7-r8c8 total 20 connected true
cage-11: cage r5c1-r5c2-r6c1-r6c2 total 26 connected true
cage-12: cage r5c8-r5c9-r6c8-r6c9 total 17 connected true
cage-13: cage r1c3-r1c4 total 13 connected true
cage-14: cage r9c6-r9c7 total 9 connected true
cage-15: cage r1c6-r1c7 total 13 connected true
cage-16: cage r9c3-r9c4 total 7 connected true
cage-17: cage r7c6-r8c6 total 13 connected true
cage-18: cage r2c4-r3c4 total 17 connected true
modular-1: modular r4c4-r4c3-r5c3-r5c4
modular-2: modular r3c5-r4c5-r4c6-r3c6
modular-3: modular r5c6-r5c7-r6c7-r6c6
modular-4: modular r7c4-r6c4-r6c5-r7c5
modular-5: modular r7c2-r8c2-r8c3-r7c3
modular-6: modular r3c7-r2c7-r2c8-r3c8
modular-7: modular r7c8-r7c7-r8c7-r8c8
modular-8: modular r2c2-r2c3-r3c3-r3c2
modular-9: modular r4c2-r4c1-r5c2-r5c1-r6c2-r6c1
modular-10: modular r4c9-r4c8-r5c9-r5c8-r6c9-r6c8
modular-11: modular r1c4-r2c5-r1c6
modular-12: modular r9c4-r8c5-r9c6
```

- Normal sudoku rules apply.
- Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Every set of three adjacent cells along a teal modular line contains digits with three different remainders when divided by 3.
