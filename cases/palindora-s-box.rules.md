---
format: open-rules
title: Palindora's Box
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/palindora-s-box
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
palindrome-1: palindrome r1c3-r1c2-r2c1-r3c1-r4c2-r4c3-r3c4
palindrome-2: palindrome r7c4-r6c3-r6c2-r7c1-r8c1-r9c2-r9c3
palindrome-3: palindrome r3c6-r4c7-r4c8-r3c9-r2c9-r1c8-r1c7
palindrome-4: palindrome r7c6-r6c7-r6c8-r7c9-r8c9-r9c8-r9c7
palindrome-5: palindrome r5c2-r5c3-r5c4-r6c5-r7c5-r8c5-r9c5
palindrome-6: palindrome r4c4-r4c5-r5c6-r5c7-r5c8
palindrome-7: palindrome r2c5-r2c4-r3c3
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[1,2],"label":"x","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[9,18],"label":"x+4","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[54,63],"label":"x+7","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[73,74],"label":"x+12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[46,47],"label":"x+14","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[28,29],"label":"x+2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[51,52],"label":"x+10","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[62,71],"label":"x+12","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[78,79],"label":"x+8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[33,34],"label":"x+6","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[17,26],"label":"x+8","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[6,7],"label":"x+4","color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. Numbers on lines are palindromes (read the same forward and backward on the line). Numbers in cages sum to the number in the top left corner of the cage. X is the same for all cages. X is to be determined by the solver.
