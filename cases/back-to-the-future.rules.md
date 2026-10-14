---
format: open-rules
title: Back to the Future
setter: Blobz
source: https://sudokupad.app/blobz/back-to-the-future
case: https://sudoku-sleuth.com/cases/back-to-the-future
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: d68cbbf573a63da72a8ebe8b0f3ed9d5
---

```rules
sudoku 9x9
cage-1: cage r1c2-r2c2 total 4 connected true
cage-2: cage r1c5-r2c5 total 6 connected true
cage-3: cage r1c7-r2c7 total 9 connected true
cage-4: cage r2c6-r3c6-r3c7 total 9 connected true
cage-5: cage r2c3-r3c3-r3c4 total 21 connected true
cage-6: cage r2c8-r3c8-r3c9 total 14 connected true
cage-7: cage r3c1-r3c2 total 9 connected true
renban-1: renban r5c3-r6c2-r7c1-r8c2-r9c3
renban-2: renban r5c6-r6c5-r7c4-r8c5-r9c6
renban-3: renban r5c8-r6c7-r7c6-r8c7-r9c8
renban-4: renban r6c3-r7c2-r8c3
renban-5: renban r6c6-r7c5-r8c6
renban-6: renban r6c8-r7c7-r8c8
region-sum-1: region-sum r1c7-r2c8-r3c9-r4c8-r5c7 segments [["r1c7","r2c8","r3c9"],["r4c8","r5c7"]]
region-sum-2: region-sum r1c5-r2c6-r3c7-r4c6-r5c5 segments [["r1c5","r2c6"],["r3c7"],["r4c6","r5c5"]]
region-sum-3: region-sum r1c2-r2c3-r3c4-r4c3-r5c2 segments [["r1c2","r2c3"],["r3c4"],["r4c3","r5c2"]]
region-sum-4: region-sum r2c2-r3c3-r4c2 segments [["r2c2","r3c3"],["r4c2"]]
region-sum-5: region-sum r2c5-r3c6-r4c5 segments [["r2c5","r3c6"],["r4c5"]]
region-sum-6: region-sum r2c7-r3c8-r4c7 segments [["r2c7","r3c8"],["r4c7"]]
```

```drawing
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[39,40,41],"label":"Lightning","color":"#d38904ff","labelColor":"#d38904ff"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[48,49,50],"label":"Strike","color":"#d38904ff","labelColor":"#d38904ff"}}
```

Normal sudoku rules apply.

Box borders divide blue lines into segments with the same sum.

Pink lines contain a non-repeating consecutive sequence, in any order.

Digits in cages do not repeat, and sum to the given total.
