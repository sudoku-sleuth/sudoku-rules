---
format: open-rules
title: Round and round it goes
setter: sujoyku
source: https://tinyurl.com/mr3mrsvc
case: https://sudoku-sleuth.com/cases/round-and-round-it-goes
library: https://rules.sudoku-sleuth.com/
status: read
exported: 852f204c4f17c610294bb7f759aa71e4
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r1c3-r2c1 total 9 connected true
cage-2: cage r2c2-r2c3-r3c2 total 13 connected true
cage-3: cage r1c4-r2c4-r2c5 total 14 connected true
cage-4: cage r1c5-r1c6-r2c6 total 9 connected true
cage-5: cage r3c4-r3c5-r3c6 total 6 connected true
cage-6: cage r2c7-r2c8-r3c8 total 9 connected true
cage-7: cage r1c7-r1c8-r1c9-r2c9 total 12 connected true
cage-8: cage r3c9-r4c8-r4c9 total 12 connected true
cage-9: cage r4c7-r5c7-r6c7 total 16 connected true
cage-10: cage r5c8-r6c8-r6c9 total 5 connected true
cage-11: cage r7c8-r8c7-r8c8 total 7 connected true
cage-12: cage r7c9-r8c9-r9c8-r9c9 total 14 connected true
cage-13: cage r8c6-r9c6-r9c7 total 10 connected true
cage-14: cage r7c4-r7c5-r7c6 total 11 connected true
cage-15: cage r8c4-r8c5-r9c4 total 7 connected true
cage-16: cage r7c2-r8c2-r8c3 total 5 connected true
cage-17: cage r6c1-r6c2-r7c1 total 10 connected true
cage-18: cage r4c2-r5c1-r5c2 total 12 connected true
cage-19: cage r4c3-r5c3-r6c3 total 13 connected true
cage-20: cage r8c1-r9c1-r9c2-r9c3 total 10 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
```

Normal sudoku rules apply. All cages are minmax killer cages. Digits in a minmax killer cage do not repeat. The clue in the top left indicates the sum of the smallest and the largest digit that are contained in the cage. For example, a cage containing the digits 1, 3, 6 and 8 would have the minmax killer clue 9=1+8. On the main diagonals digits do not repeat.
