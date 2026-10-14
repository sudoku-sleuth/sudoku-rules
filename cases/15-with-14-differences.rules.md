---
format: open-rules
title: 15 with 14 Differences
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9vlbeverf9
case: https://sudoku-sleuth.com/cases/15-with-14-differences
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c2=1 r2c5=2 r2c8=3 r5c2=4 r5c5=5 r5c8=6 r8c2=7 r8c5=8 r8c8=9
exported: 84ef43d181633a57d898bdc7f5093b51
---

```rules
sudoku 9x9
cage-1: cage r3c2-r3c3-r3c4 total 15 connected true
cage-2: cage r2c7-r3c7-r4c7 total 15 connected true
cage-3: cage r7c6-r7c7-r7c8 total 15 connected true
cage-4: cage r6c3-r7c3-r8c3 total 15 connected true
cage-5: cage r4c2-r5c2-r6c2 total 15 connected true
cage-6: cage r2c4-r2c5-r2c6 total 15 connected true
cage-7: cage r4c8-r5c8-r6c8 total 15 connected true
cage-8: cage r8c4-r8c5-r8c6 total 15 connected true
cage-9: cage r1c1-r1c2-r2c1 total 15 connected true
cage-10: cage r1c8-r1c9-r2c9 total 15 connected true
cage-11: cage r8c9-r9c8-r9c9 total 15 connected true
cage-12: cage r8c1-r9c1-r9c2 total 15 connected true
cage-13: cage r6c4-r7c4-r7c5 total 15 connected true
cage-14: cage r4c3-r4c4-r5c3 total 15 connected true
cage-15: cage r3c5-r3c6-r4c6 total 15 connected true
cage-16: cage r5c7-r6c6-r6c7 total 15 connected true
kropki-1: kropki r1c5-r2c5 white
kropki-2: kropki r8c5-r9c5 white
kropki-3: kropki r8c8-r9c8 white
kropki-4: kropki r1c2-r2c2 white
kropki-5: kropki r8c2-r8c3 white
kropki-6: kropki r2c7-r2c8 white
kropki-7: kropki r6c1-r7c1 white
kropki-8: kropki r3c9-r4c9 white
kropki-9: kropki r4c3-r4c4 white
kropki-10: kropki r6c6-r6c7 white
kropki-11: kropki r8c6-r8c7 white
kropki-12: kropki r2c3-r2c4 white
kropki-13: kropki r1c7-r2c7 white
kropki-14: kropki r8c3-r9c3 white
```

- Normal sudoku rules apply.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.
- Consecutive Pairs: Digits separated by a white dot are consecutive.
