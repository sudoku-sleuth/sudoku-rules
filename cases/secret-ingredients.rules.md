---
format: open-rules
title: Secret ingredients
setter: sujoyku
source: https://tinyurl.com/bp8yh8n7
case: https://sudoku-sleuth.com/cases/secret-ingredients
library: https://rules.sudoku-sleuth.com/
status: read
exported: b0b658dd60fb216bb1262ac35c5d1048
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1-r4c1 total 11 connected true
cage-2: cage r7c2-r8c2-r8c3 total 11 connected true
cage-3: cage r6c9-r7c9-r8c9 total 12 connected true
cage-4: cage r2c7-r2c8-r3c8 total 12 connected true
cage-5: cage r1c8-r1c9 total 13 connected true
cage-6: cage r9c1-r9c2 total 12 connected true
cage-7: cage r8c4-r9c4-r9c5 total 16 connected true
cage-8: cage r1c5-r1c6-r2c6 total 16 connected true
cage-9: cage r3c3-r3c4-r4c3 total 13 connected true
cage-10: cage r6c7-r7c6-r7c7 total 13 connected true
cage-11: cage r9c7-r9c8-r9c9 total 17 connected true
cage-12: cage r1c1-r1c2-r1c3 total 17 connected true
cage-13: cage r6c3-r6c4 total 9 connected true
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. If two killer cages have the same total, they may not have any common digit.
