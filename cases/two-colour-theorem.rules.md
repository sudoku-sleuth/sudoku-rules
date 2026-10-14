---
format: open-rules
title: Two Colour Theorem
setter: Blobz, FullDeck and Missing a Few Cards, Ms Blobz
source: https://sudokupad.app/v0ioty12e1
case: https://sudoku-sleuth.com/cases/two-colour-theorem
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 1374f9fee660992f5d3d0388c6928f9d
---

```rules
sudoku 9x9
region-sum-1: region-sum r3c8-r4c9-r5c9 segments [["r3c8"],["r4c9","r5c9"]]
region-sum-2: region-sum r1c3-r2c4-r2c5 segments [["r1c3"],["r2c4","r2c5"]]
region-sum-3: region-sum r7c3-r8c4-r8c5 segments [["r7c3"],["r8c4","r8c5"]]
region-sum-4: region-sum r7c5-r6c5-r6c6 segments [["r7c5"],["r6c5","r6c6"]]
region-sum-5: region-sum r3c1-r3c2-r4c3-r5c3 segments [["r3c1","r3c2"],["r4c3","r5c3"]]
region-sum-6: region-sum r2c6-r3c6-r4c7-r4c8-r3c9-r2c9 segments [["r2c6","r3c6"],["r4c7","r4c8"],["r3c9","r2c9"]]
region-sum-7: region-sum r1c4-r1c5-r1c6-r2c7-r2c8 segments [["r1c4","r1c5","r1c6"],["r2c7","r2c8"]]
region-sum-8: region-sum r7c7-r8c6 segments [["r7c7"],["r8c6"]]
region-sum-9: region-sum r3c4-r4c5 segments [["r3c4"],["r4c5"]]
region-sum-10: region-sum r4c2-r5c2-r6c2-r7c1-r8c1-r9c1 segments [["r4c2","r5c2","r6c2"],["r7c1","r8c1","r9c1"]]
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[22]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[23]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[25]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[32]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[43]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[50]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[69]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[77]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[67]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[74]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[47]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[38]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[39]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[19]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[9]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[10]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[1]}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[26]}}
```

Normal sudoku rules apply.

Shade cells using two colours such that each colour forms an orthogonally connected region, and no 2x2 area is a single colour.

Digits in caged cells indicate how many cells of the same colour are seen orthogonally from that position, including itself. The other colour blocks vision.

Box borders divide blue lines into segments with the same sum. Along lines, colours must change at box boundaries and may not change within the box. The intersecting lines at R34C89 each continue straight and do not branch.
