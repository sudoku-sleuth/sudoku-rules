---
format: open-rules
title: Ukraine Area Map
setter: Will Power
source: https://f-puzzles.com/?id=y9mpyeb4
case: https://sudoku-sleuth.com/cases/ukraine-area-map
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a2470eb28504f504fbe588f17a0ab10a
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r3c1-r4c1 total 30 connected true
cage-2: cage r5c1-r6c1 total 6 connected true
cage-3: cage r6c9-r7c9 total 12 connected true
cage-4: cage r1c2-r1c3-r1c4-r2c2-r2c3-r2c4 total 21 connected true
cage-5: cage r7c4-r8c4 total 11 connected true
cage-6: cage r8c6-r9c5-r9c6-r9c7-r9c8-r9c9 total 29 connected true
cage-7: cage r8c1-r8c2-r8c3-r9c1-r9c2-r9c3-r9c4 total 34 connected true
cage-8: cage r1c5-r1c6-r1c7-r1c8-r1c9-r2c5-r2c7-r2c8-r2c9 total 44 connected true
kropki-1: kropki r2c2-r3c2 white
kropki-2: kropki r2c6-r2c7 white
kropki-3: kropki r1c9-r2c9 white
whispers-1: whispers r5c8-r4c9-r3c9-r3c8-r3c7-r2c6-r3c5-r3c4-r3c3-r3c2-r4c2-r5c2 gap 5
whispers-2: whispers r6c2-r7c2-r7c3-r6c4-r7c5-r8c5-r7c6-r6c7-r6c8-r7c8-r8c8-r8c7 gap 5
whispers-3: whispers r5c4-r5c5-r5c6-r5c7 gap 5
pair-1: pair r2c3-r3c3 sum 5
pair-2: pair r1c2-r1c3 sum 5
pair-3: pair r2c9-r3c9 sum 5
pair-4: pair r8c5-r8c6 sum 5
pair-5: pair r6c4-r7c4 sum 5
pair-6: pair r2c5-r3c5 sum 5
```

```drawing
- {"id":"drawing-45","rules":[],"visual":{"kind":"cage","cells":[54],"label":"3"}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"cage","cells":[44],"label":"8"}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"cage","cells":[71],"label":"6"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"cage","cells":[60],"label":"5"}}
```

Normal Sudoku rules apply. German Whispers Lines- Numbers on the three lines are at least 5 apart from their neighbors on the line. Killer Cages- Numbers inside cages sum to the number in the top left corner of the cage. Numbers can repeat on lines and in cages, if other rules allow. Cages represent the countries and water bodies that border Ukraine. Numbers on either side of a white dot are consecutive. Numbers with a V between them sum to 5. Numbers with an X between them sum to 10.
