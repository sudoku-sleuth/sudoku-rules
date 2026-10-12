---
format: open-rules
title: Y1n-Y9ng SL Star Battle
setter: Blobz
source: https://sudokupad.app/blobz/y1n-y9ng-sl-starbattle
case: https://sudoku-sleuth.com/cases/y1n-y9ng-sl-star-battle
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c9=9 r9c2=9
---

```rules
sudoku 9x9
kropki-1: kropki r7c2-r7c3 colour "white"
kropki-2: kropki r7c3-r7c4 colour "white"
kropki-3: kropki r4c8-r4c9 colour "white"
kropki-4: kropki r6c6-r7c6 colour "white"
kropki-5: kropki r8c7-r8c8 colour "white"
kropki-6: kropki r7c8-r7c9 colour "white"
kropki-7: kropki r5c2-r6c2 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[26],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[73],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[61],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[24],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[15],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[14],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[16],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[5],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[7],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[25],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[20],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[22],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[38],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[32],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[41],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[55],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[64],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[65],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[39],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[13],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply. 

Yin-Yang: Shade some cells such that all shaded cells are orthogonally connected, all unshaded cells are orthogonally connected, and no 2x2 area is either fully shaded or unshaded.

White dots lie on the border between the shaded and unshaded regions. Additionally, white dots separate consecutive digits. Not all possible dots are shown.

Sight Lines: Digits in caged cells show the number of cells of the same color (shaded or unshaded) seen orthogonally from that position, including itself. The "other" color blocks vision.

Star Battle: Put exactly two stars in every row, column and box such that no stars touch each other, not even diagonally. You can put stars on 1's and 9's only.

All 1's are in the shaded region. The two given 9's are in the shaded region; the other seven 9's are in the unshaded region.
