---
format: open-rules
title: Cage Fright
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/cage-fright
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 610b7d05dd7ad25bd866cc23efa23d67
---

```rules
sudoku 9x9
cage-1: cage r4c1-r5c1-r6c1-r6c2-r7c2-r8c2-r9c2 connected true
cage-2: cage r1c4-r1c5-r1c6-r2c6-r2c7-r2c8-r2c9 connected true
anti-knight
anti-king
kropki-1: kropki r7c7-r8c7 white
kropki-2: kropki r8c5-r8c6 white
nabner-1: nabner r3c6-r4c7-r5c7-r6c7-r7c6 distinct true
nabner-2: nabner r4c6-r5c5-r6c6-r5c6 distinct true
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[78,79],"label":"x+7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[62,71],"label":"x","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[35,43,44],"label":"x+3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[50,58,59],"label":"2x+3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[0,1],"label":"x-3","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[12,21],"label":"x+2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[23,24],"label":"x","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[29,38,47],"label":"x+7","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply,
Anti-knight - Cells seen by a knights move (in chess) cannot be the same.
Anti-king - Cells seen by a kings move (in chess) cannot be the same.
Nabner Line - Set of non-repeating digits where no digits along a nabner line can be consecutive. (e.g, 135 is allowed but 192 is not, because 1 and 2 are consecutive)
Difference (white dot) - Cells separated by a white dot must be consecutive. (Not all are given)
Killer cages - Digits within a killer cage (marked or unmarked) contain no repeats, digits in a marked cage must sum to the total given by the small clue in the top left of that cage, where x is a number between 1 and 9 that the solver must determine.
