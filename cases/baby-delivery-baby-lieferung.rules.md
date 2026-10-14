---
format: open-rules
title: Baby Delivery (Baby-Lieferung)
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/baby-delivery-baby-lieferung
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 26f2cb914de7da17a772948f3fead137
---

```rules
sudoku 9x9
cage-1: cage r6c3-r6c4 total 7 connected true
cage-2: cage r3c2-r3c3 total 13 connected true
cage-3: cage r1c1-r1c2-r1c3 total 12 connected true
cage-4: cage r1c5-r2c5 total 6 connected true
cage-5: cage r7c5-r8c5 total 12 connected true
cage-6: cage r7c8-r7c9 total 12 connected true
cage-7: cage r5c1-r6c1 total 6 connected true
cage-8: cage r1c7-r1c8 total 11 connected true
cage-9: cage r8c6-r8c7 total 10 connected true
cage-10: cage r9c2-r9c3 total 7 connected true
cage-11: cage r4c9-r5c9 total 5 connected true
cage-12: cage r3c5-r3c6 total 5 connected true
whispers-1: whispers r1c1-r1c2-r1c3-r2c4-r3c5-r4c5 gap 4
whispers-2: whispers r7c9-r7c8-r7c7-r6c6-r5c6-r4c7-r4c8-r3c9 gap 4
whispers-3: whispers r3c6-r2c7-r2c8-r3c9-r3c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 gap 4
whispers-4: whispers r3c2-r3c3-r4c4-r5c3-r6c3-r7c3 gap 4
whispers-5: whispers r2c1-r2c2-r2c3 gap 4
```

```drawing
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"      5","textColor":"#000000","fontSize":12}}
```

Normal Sudoku rules apply. Dutch Whispers Lines- Numbers on red lines are at least 4 apart from their neighbors on the line. All three lines have at least one pair of neighbors that are 4 apart. The number 5 does not appear on any lines. Numbers in cages sum to the number in the top left corner of the cage. If the cage total is blocked by a line, it is also shown below where the number should be.
