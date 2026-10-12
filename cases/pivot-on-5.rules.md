---
format: open-rules
title: Pivot on 5
setter: Blobz
source: https://sudokupad.app/blobz/pivot-on-5
case: https://sudoku-sleuth.com/cases/pivot-on-5
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 15 connected true
cage-2: cage r1c5-r1c6 total 11 connected true
cage-3: cage r1c9-r2c9 total 15 connected true
cage-4: cage r5c9-r6c9 total 10 connected true
cage-5: cage r9c8-r9c9 total 15 connected true
cage-6: cage r9c4-r9c5 total 10 connected true
cage-7: cage r8c5-r8c6 total 13 connected true
cage-8: cage r8c1-r9c1 total 15 connected true
cage-9: cage r4c1-r5c1 total 13 connected true
cage-10: cage r5c2-r6c2 total 12 connected true
cage-11: cage r2c4-r2c5 total 11 connected true
cage-12: cage r4c8-r5c8 total 13 connected true
cage-13: cage r4c4-r4c5-r5c4 total 20 connected true
cage-14: cage r5c6-r6c5-r6c6 total 9 connected true
kropki-1: kropki r1c3-r1c4 colour "white"
kropki-2: kropki r3c9-r4c9 colour "white"
kropki-3: kropki r9c6-r9c7 colour "white"
kropki-4: kropki r6c4-r7c4 colour "white"
kropki-5: kropki r6c1-r7c1 colour "white"
pair-1: pair r7c1-r7c2 relation {"op":"sum","value":5}
pair-2: pair r7c5-r7c6 relation {"op":"sum","value":5}
pair-3: pair r8c7-r9c7 relation {"op":"sum","value":5}
pair-4: pair r4c7-r5c7 relation {"op":"sum","value":5}
pair-5: pair r5c3-r6c3 relation {"op":"sum","value":5}
pair-6: pair r3c4-r3c5 relation {"op":"sum","value":5}
pair-7: pair r1c3-r2c3 relation {"op":"sum","value":5}
pair-8: pair r3c8-r3c9 relation {"op":"sum","value":5}
```

Normal sudoku rules apply.

Digits in cages must sum to the small clue in the top left corner.

Digits separated by a V sum to 5.

Digits separated by a white dot are consecutive.
