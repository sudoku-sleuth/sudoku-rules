---
format: open-rules
title: Framed cross
setter: sujoyku
source: https://tinyurl.com/2rkyja8y
case: https://sudoku-sleuth.com/cases/framed-cross
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r2c2 total 10 connected true
cage-2: cage r3c1-r3c2-r4c1 total 11 connected true
cage-3: cage r5c1-r6c1-r6c2 total 12 connected true
cage-4: cage r7c1-r7c2-r8c1 total 13 connected true
cage-5: cage r8c2-r9c1-r9c2 total 20 connected true
cage-6: cage r8c3-r9c3-r9c4 total 19 connected true
cage-7: cage r8c6-r9c5-r9c6 total 18 connected true
cage-8: cage r8c7-r9c7-r9c8 total 17 connected true
cage-9: cage r8c8-r8c9-r9c9 total 9 connected true
cage-10: cage r6c9-r7c8-r7c9 total 18 connected true
cage-11: cage r4c8-r4c9-r5c9 total 21 connected true
cage-12: cage r2c9-r3c8-r3c9 total 24 connected true
cage-13: cage r1c8-r1c9-r2c8 total 9 connected true
cage-14: cage r1c6-r1c7-r2c7 total 8 connected true
cage-15: cage r1c4-r1c5-r2c4 total 19 connected true
cage-16: cage r1c2-r1c3-r2c3 total 24 connected true
cage-17: cage r3c5-r4c5 total 9 connected true
cage-18: cage r6c5-r7c5 total 13 connected true
cage-19: cage r5c3-r5c4 total 12 connected true
cage-20: cage r5c6-r5c7 total 12 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
