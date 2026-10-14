---
format: open-rules
title: Wet Ratio
setter: Blobz
source: https://sudokupad.app/blobz/wet-ratio
case: https://sudoku-sleuth.com/cases/wet-ratio
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=7 r5c5=1 r9c7=8
exported: 10d8c0bb2762cc93694b7e0b5a85ab43
---

```rules
sudoku 9x9
cage-1: cage r2c7-r2c8-r3c7-r4c7 connected true
cage-2: cage r1c2-r1c3 connected true
cage-3: cage r7c6-r7c7-r8c7-r8c8-r9c8 connected true
cage-4: cage r7c3-r7c4-r8c2-r8c3-r9c2 connected true
cage-5: cage r5c2-r5c3-r6c1-r6c2-r7c1 connected true
cage-6: cage r5c7-r5c8-r6c8-r6c9-r7c9 connected true
layered-cage-1: layered-cage r2c7-r2c8-r3c7-r4c7 upper [2,4,6,8]
layered-cage-2: layered-cage r1c2-r1c3 upper [2,4,6,8]
layered-cage-3: layered-cage r7c6-r7c7-r8c7-r8c8-r9c8 upper [2,4,6,8]
layered-cage-4: layered-cage r7c3-r7c4-r8c2-r8c3-r9c2 upper [2,4,6,8]
layered-cage-5: layered-cage r5c2-r5c3-r6c1-r6c2-r7c1 upper [2,4,6,8]
layered-cage-6: layered-cage r5c7-r5c8-r6c8-r6c9-r7c9 upper [2,4,6,8]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[66,67,76,77],"label":"5/6"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[63,72],"label":"infinity"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[21,30,39,40,41],"label":"1/2"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[48,49,58],"label":"4/3"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[34,35,44],"label":"4/3"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[15,16,24,33],"label":"0"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[19,27,28],"label":"1/2"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[9,18],"label":"4/9"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[10,11,20,29],"label":"5/3"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[1,2],"label":"0"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[4,12,13,14,22],"label":"1/8"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[6,7],"label":"infinity"}}
```

Normal sudoku rules apply.

Each cage is either full of "oil" (even digits), full of "water" (odd digits), or a mix of both. In all cases, each "row" within a cage is of just one type (oil or water). Oil floats on water, so even digits will always be in rows above odd digits in mixed cages.

Digits in cages do not repeat.

Some cages contain clues that indicate the "Wet Ratio" (oil/water). That is, the sum of oil digits divided by the sum of water digits. For example, a 4-cell cage with a clue of 2/3 could be satisfied with (2+6) / (3+9). For the purposes of this puzzle, a number N divided by zero is defined to be infinity.
