---
format: open-rules
title: The Arkenstone
setter: Blobz
source: https://sudokupad.app/blobz/the-arkenstone
case: https://sudoku-sleuth.com/cases/the-arkenstone
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e29717416ccceb4a60e11e8023922f57
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#FFFFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#B0FFB0","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#FFD0D0","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[27],"label":"+1","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[12],"label":"+2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[5],"label":"-2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[16],"label":"+2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[68],"label":"-1","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[70],"label":"+2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[52],"label":"+2","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[9],"label":"0","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[45],"label":"0","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[46],"label":"0","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[72],"label":"0","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[75],"label":"0","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[23],"label":"0","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[24],"label":"0","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[56],"label":"+1","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[44],"label":"-1","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[57],"label":"-3","color":"#000000","labelColor":"#000000"}}
```

Bilbo Bobbins is on a quest to, uh, "procure" the Arkenstone (R5C5) that sits in Dragon Snyder's Lair (a 2x2 region in box 5) under Logic Mountain.

R9C1 marks the entrance to the Whispering Tunnels: an orthogonally connected region leading to the lair. Adjacent digits along the tunnels (and deadends) differ by at least 5. The path from start to lair (ignoring deadends) is 26 cells.

With Arkenstone acquired, Bilbo must escape through the Modular Passage, that begins on the opposite side of the lair and leads to a secret door exiting the mountain (R5C9). Every set of three digits along this passage (which does not branch) must contain one each from the sets {1,4,7}, {2,5,8}, and {3,6,9}. The total sum of digits along this "Secret" passage is 45.

Normal sudoku rules apply. 

Shade some cells ("walls") and leave others unshaded ("tunnels", "lair", "passage") such that no 2x2 region (except the lair) is fully shaded or unshaded. Also, there are no "checkerboard" patterns of shaded/unshaded cells, i.e. the unshaded region does not touch itself diagonally. All wall cells must be in orthogonally connected groups with at least one cell at the grid's edge.

All caged cells are either tunnel or passage. The digit in the cage, plus its modifier, indicates how many unshaded cells (including itself) can be seen orthogonally from that position (walls block sight). E.g., if a cage contains a 7 and has a "-2" modifier, then that cell can "see" 5 unshaded cells total (including itself).
