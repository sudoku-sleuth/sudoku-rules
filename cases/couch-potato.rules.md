---
format: open-rules
title: Couch Potato
setter: Blobz
source: https://sudokupad.app/5567fzvvvv
case: https://sudoku-sleuth.com/cases/couch-potato
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9030e381f01bb096ec136f9c6341eab0
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r3c7-r3c8 total 13 connected true
cage-2: cage r4c5-r4c6-r5c5-r5c6 total 13 connected true
cage-3: cage r2c5-r2c6-r3c5-r3c6 total 14 connected true
cage-4: cage r4c7-r4c8-r5c7-r5c8 total 14 connected true
cage-5: cage r6c2-r7c2-r7c3-r8c3-r8c4 total 17 connected true
cage-6: cage r8c1-r8c2-r9c2 total 12 connected true
cage-7: cage r1c1-r2c1 total 10 connected true
cage-8: cage r5c2-r5c3 total 13 connected true
cage-9: cage r7c5-r8c5 total 11 connected true
cage-10: cage r6c9-r7c8-r7c9 total 13 connected true
diagonal direction "main"
arrow-1: arrow r3c6-r2c6-r1c6 bulb ["r3c5"]
arrow-2: arrow r3c7-r3c8-r3c9 bulb ["r2c7"]
arrow-3: arrow r4c7-r5c7-r6c7 bulb ["r4c8"]
arrow-4: arrow r4c6-r4c5-r4c4 bulb ["r5c6"]
```

Normal sudoku rules apply.

Digits along arrows sum to the value in the attached circle. 

Digits in cages do not repeat, and sum to the value in the top left corner.

Digits may not repeat along the given diagonal.
