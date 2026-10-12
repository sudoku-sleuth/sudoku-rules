---
format: open-rules
title: Sequential Sums
setter: sujoyku
source: https://tinyurl.com/yay44jd
case: https://sudoku-sleuth.com/cases/sequential-sums
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 6 connected true
cage-2: cage r1c4-r1c5 total 7 connected true
cage-3: cage r1c7-r1c8 total 8 connected true
cage-4: cage r4c1-r4c2 total 9 connected true
cage-5: cage r4c7-r4c8 total 11 connected true
cage-6: cage r4c4-r4c5 total 10 connected true
cage-7: cage r7c1-r7c2 total 12 connected true
cage-8: cage r7c4-r7c5 total 13 connected true
cage-9: cage r7c7-r7c8 total 14 connected true
cage-10: cage r2c1-r3c1 total 11 connected true
cage-11: cage r2c4-r3c4 total 12 connected true
cage-12: cage r2c7-r3c7 total 13 connected true
cage-13: cage r5c1-r6c1 total 14 connected true
cage-14: cage r5c4-r6c4 total 6 connected true
cage-15: cage r5c7-r6c7 total 7 connected true
cage-16: cage r8c1-r9c1 total 8 connected true
cage-17: cage r8c4-r9c4 total 9 connected true
cage-18: cage r8c7-r9c7 total 10 connected true
cage-19: cage r2c3-r3c2-r3c3 total 20 connected true
cage-20: cage r5c6-r6c5-r6c6 total 19 connected true
cage-21: cage r8c9-r9c8-r9c9 total 14 connected true
diagonal direction "main"
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

Normal sudoku rules apply. Digits in the same relative position must contain distinct digits in each 3x3 box. If, for example, R1C1 contains a 5 neither R4C4, R4C7, R7C4 or R7C7 may contain a 5. Digits in a cage do not repeat and sum to the clue in the top left. On the negative main diagonal digits do not repeat.
