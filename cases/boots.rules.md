---
format: open-rules
title: Boots
setter: sujoyku
source: ""
case: https://sudoku-sleuth.com/cases/boots
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6a36229878252bb42c54c4ff9f4bf5bd
---

```rules
sudoku 9x9
cage-1: cage r3c1-r4c1 total 7 connected true
cage-2: cage r7c3-r8c3-r9c2-r9c3 total 27 connected true
cage-3: cage r3c4-r4c4 total 6 connected true
cage-4: cage r7c6-r8c6-r9c5-r9c6 total 26 connected true
cage-5: cage r6c1-r6c2-r7c1 total 7 connected true
cage-6: cage r6c4-r6c5-r7c4 total 6 connected true
cage-7: cage r6c9-r7c9 total 12 connected true
cage-8: cage r3c9-r4c8-r4c9 total 8 connected true
cage-9: cage r1c7-r1c8-r2c7-r3c7 total 28 connected true
cage-10: cage r1c3-r1c4 total 12 connected true
cage-11: cage r3c6-r4c6 total 9 connected true
cage-12: cage r1c1-r1c2 total 10 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left.
