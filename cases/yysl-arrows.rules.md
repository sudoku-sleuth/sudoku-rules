---
format: open-rules
title: YYSL Arrows
setter: Blobz
source: https://sudokupad.app/blobz/yysl-arrows
case: https://sudoku-sleuth.com/cases/yysl-arrows
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r1c9-r2c9-r2c8 bulb ["r1c8"]
arrow-2: arrow r2c6-r3c6-r3c5 bulb ["r1c6"]
arrow-3: arrow r9c8-r9c9-r8c9 bulb ["r9c7"]
arrow-4: arrow r5c1-r6c2 bulb ["r5c2"]
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[24]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[26]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[35]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[44]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[43]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[78]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[79]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[80]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[71]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[76]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[66]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[56]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[65]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[74]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[55]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[38]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[28]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[27]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[39]}}
```

Normal sudoku rules apply.

Shade cells using two colours such that each colour forms an orthogonally connected region, and no 2x2 area is a single colour.

Digits in caged cells indicate how many cells of the same colour are seen orthogonally from that position, including itself. The other colour blocks vision.

Digits along an arrow must sum to the value in the attached circle.
