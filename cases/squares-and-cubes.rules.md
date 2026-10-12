---
format: open-rules
title: Squares and Cubes
setter: Blobz
source: https://sudokupad.app/xr6g4gjejf
case: https://sudoku-sleuth.com/cases/squares-and-cubes
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
---

```rules
sudoku 9x9
cage-1: cage r5c4-r6c4 total 3 connected true
cage-2: cage r4c6-r5c6 total 3 connected true
cage-3: cage r4c4-r4c5 total 2 connected true
cage-4: cage r6c5-r6c6 total 2 connected true
cage-5: cage r6c3-r7c3-r7c4 total 3 connected true
cage-6: cage r6c7-r7c6-r7c7 total 3 connected true
whispers-1: whispers r3c4-r3c5-r3c6 gap 5
whispers-2: whispers r2c8-r2c9 gap 5
whispers-3: whispers r8c4-r9c5-r8c6 gap 5
whispers-4: whispers r6c5-r7c5-r8c5 gap 5
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[40],"label":"2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[66],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[76],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[68],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[58,67],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[20,21,29],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[23,24,33],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[69,78],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[54],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[62],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[2],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[6],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[71,79,80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[28,37,38,46],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[34,42,43,52],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[74],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[64,73],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[70],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Digits in cages sum to either a perfect square (1, 4, 9, 16, 25, 36) if a "2" clue is given, or a perfect cube (1, 8, 27) if a "3" clue is given. Unmarked cages have totals that can be either a square or a cube. Digits do not repeat in cages.

Adjacent digits along a green line differ by at least 5.
