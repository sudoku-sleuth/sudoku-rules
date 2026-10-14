---
format: open-rules
title: Round Up the Usual Suspects
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/round-up-the-usual-suspects
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4460b29f853f9cf4b9ed7aec71e5b032
---

```rules
sudoku 9x9
cage-1: cage r1c3-r2c3 total 5 connected true
cage-2: cage r3c1-r3c2 total 6 connected true
cage-3: cage r3c8-r3c9 total 5 connected true
cage-4: cage r3c7-r4c7 total 14 connected true
cage-5: cage r3c4-r3c5 total 15 connected true
cage-6: cage r1c6-r2c6 total 14 connected true
cage-7: cage r5c8-r6c8 total 7 connected true
cage-8: cage r8c8-r9c8 total 7 connected true
cage-9: cage r8c9-r9c9 total 6 connected true
cage-10: cage r5c7-r6c7 total 9 connected true
cage-11: cage r5c9-r6c9 total 6 connected true
cage-12: cage r4c2-r4c3 total 6 connected true
cage-13: cage r5c2-r5c3 total 7 connected true
cage-14: cage r6c2-r6c3 total 8 connected true
cage-15: cage r1c8-r1c9 total 13 connected true
cage-16: cage r1c4-r1c5 total 8 connected true
cage-17: cage r9c1-r9c2 total 11 connected true
cage-18: cage r8c1-r8c2 total 9 connected true
cage-19: cage r7c1-r7c2 total 9 connected true
cage-20: cage r9c4-r9c5 total 6 connected true
cage-21: cage r4c5-r5c5 total 9 connected true
cage-22: cage r4c4-r5c4 total 11 connected true
cage-23: cage r6c6-r7c6 total 8 connected true
```

Normal Sudoku rules apply. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
