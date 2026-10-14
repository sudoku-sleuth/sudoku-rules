---
format: open-rules
title: Fifteen love
setter: sujoyku
source: https://tinyurl.com/53dds8s5
case: https://sudoku-sleuth.com/cases/fifteen-love
library: https://rules.sudoku-sleuth.com/
status: read
exported: b9e8d500d7a984927275a87644fa0469
---

```rules
sudoku 9x9
cage-1: cage r3c4-r4c3-r4c4 total 15 connected true
cage-2: cage r6c3-r6c4-r7c4 total 15 connected true
cage-3: cage r6c6-r6c7-r7c6 total 15 connected true
cage-4: cage r3c6-r4c6-r4c7 total 15 connected true
cage-5: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 15 connected true
cage-6: cage r1c1-r1c2-r2c1 total 12 connected true
cage-7: cage r1c8-r1c9-r2c8 total 21 connected true
cage-8: cage r2c9-r3c9-r4c9 total 7 connected true
cage-9: cage r2c7-r3c7-r3c8 total 13 connected true
cage-10: cage r1c6-r1c7 total 10 connected true
cage-11: cage r1c3-r1c4 total 7 connected true
cage-12: cage r2c3-r3c3 total 9 connected true
cage-13: cage r2c2-r3c2 total 11 connected true
cage-14: cage r3c1-r4c1 total 9 connected true
cage-15: cage r6c1-r7c1 total 11 connected true
cage-16: cage r7c2-r7c3 total 7 connected true
cage-17: cage r8c2-r8c3 total 8 connected true
cage-18: cage r8c1-r9c1-r9c2 total 15 connected true
cage-19: cage r9c3-r9c4 total 10 connected true
cage-20: cage r9c6-r9c7 total 3 connected true
cage-21: cage r7c7-r8c7 total 14 connected true
cage-22: cage r7c8-r8c8 total 9 connected true
cage-23: cage r8c9-r9c8-r9c9 total 13 connected true
cage-24: cage r6c9-r7c9 total 12 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
