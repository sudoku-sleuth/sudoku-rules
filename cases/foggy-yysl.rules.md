---
fog:
  initiallyLit:
    - r2c9
    - r8c1
    - r8c2
    - r8c3
format: open-rules
title: Foggy YYSL
setter: Blobz
source: https://sudokupad.app/blobz/foggy-yysl
case: https://sudoku-sleuth.com/cases/foggy-yysl
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 28283937842d979bfe62328f80078e76
---

```rules
sudoku 9x9
kropki-1: kropki r2c7-r2c8 white
kropki-2: kropki r1c2-r2c2 white
kropki-3: kropki r2c3-r3c3 white
kropki-4: kropki r1c5-r2c5 white
kropki-5: kropki r3c4-r3c5 white
kropki-6: kropki r1c8-r2c8 white
kropki-7: kropki r2c7-r3c7 white
kropki-8: kropki r3c7-r4c7 white
kropki-9: kropki r3c8-r4c8 white
kropki-10: kropki r6c7-r6c8 white
kropki-11: kropki r8c6-r8c7 white
kropki-12: kropki r4c5-r4c6 white
kropki-13: kropki r7c3-r8c3 white
kropki-14: kropki r8c1-r8c2 white
kropki-15: kropki r5c2-r5c3 white
kropki-16: kropki r8c3-r8c4 white
kropki-17: kropki r8c3-r9c3 white
kropki-18: kropki r9c4-r9c5 white
kropki-19: kropki r2c6-r2c7 black
kropki-20: kropki r7c4-r7c5 black
quadruple-1: quadruple r4c7-r4c8-r5c7-r5c8 digits [1,7,9]
quadruple-2: quadruple r8c2-r8c3-r9c2-r9c3 digits [6]
quadruple-3: quadruple r2c4-r2c5-r3c4-r3c5 digits [2]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[17]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[72]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[73]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[16]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[9]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[37]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[39]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[40]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[49]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[48]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[57]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[58]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[43]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[79]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[63]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[65]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[20]}}
```

Normal sudoku rules apply.

Digits in large circles must appear in the surrounding 2x2 area.

Digits separated by white dots are consecutive. Digits separated by black dots have a 2:1 ratio (ie. one is double the other). Not all such dots are shown. 

Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area is fully shaded or unshaded. 

Digits in caged cells indicate how many cells of the same color (shaded or unshaded) are seen orthogonally from that position, including itself. The "other" color blocks vision. 

All dots lie on the boundary of the Yin-Yang pattern (ie. each dot touches one shaded and one unshaded cell).

Finally, the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
