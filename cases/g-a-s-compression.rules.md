---
format: open-rules
title: G.A.S. COMPRESSION
setter: Will Power
source: https://f-puzzles.com/?id=yjeb9xvm
case: https://sudoku-sleuth.com/cases/g-a-s-compression
library: https://rules.sudoku-sleuth.com/
status: read
givens: ..6.......2...9..1..........9....5.....4............8.............9.7.1.4........
---

```rules
sudoku 9x9
cage-1: cage r3c1-r3c2 total 17 connected true
cage-2: cage r3c8-r3c9 total 13 connected true
cage-3: cage r5c1-r5c2 total 15 connected true
cage-4: cage r5c8-r5c9 total 15 connected true
cage-5: cage r7c1-r7c2 total 13 connected true
cage-6: cage r7c8-r7c9 total 17 connected true
cage-7: cage r3c3-r4c3-r5c3-r6c3-r7c3 total 15 connected true
cage-8: cage r3c7-r4c7-r5c7-r6c7-r7c7 total 15 connected true
cage-9: cage r3c4-r3c5-r3c6 total 11 connected true
cage-10: cage r7c4-r7c5-r7c6 total 10 connected true
cage-11: cage r4c5-r4c6-r5c4-r5c5-r5c6 total 15 connected true
```

Normal Sudoku  rules apply.  The sum of the digits in a cage is noted in the top left corner of the cage.  Digits may not repeat in a cage.
