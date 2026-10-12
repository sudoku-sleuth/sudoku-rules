---
format: open-rules
title: YYSL Renban
setter: Blobz
source: https://sudokupad.app/blobz/yysl-renban
case: https://sudoku-sleuth.com/cases/yysl-renban
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=7
---

```rules
sudoku 9x9
renban-1: renban r2c3-r1c2-r2c2-r3c3-r3c2-r3c1-r4c2-r4c1-r5c2
renban-2: renban r6c3-r7c2-r7c3-r8c3
renban-3: renban r9c1-r8c2-r9c3-r8c4-r9c5-r8c6-r9c7-r8c8-r9c9
renban-4: renban r6c6-r7c7
renban-5: renban r7c4-r7c5
renban-6: renban r6c8-r6c9
renban-7: renban r7c8-r6c7-r5c7-r4c8-r3c9
renban-8: renban r3c7-r3c8-r4c7-r4c6-r3c6-r2c7-r1c7-r2c8-r2c9
renban-9: renban r1c5-r2c5-r3c5
renban-10: renban r4c5-r5c5-r6c5
```

```drawing
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[1]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[11]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[22]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[16]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[17]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[7]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[33]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[31]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[49]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[50]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[39]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[29]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[46]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[66]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[27]}}
```

Normal sudoku rules apply.

Shade cells using two colours such that each colour forms an orthogonally connected region, and no 2x2 area is a single colour.

Digits in caged cells indicate how many cells of the same colour are seen orthogonally from that position, including itself. The other colour blocks vision.

Digits on pink lines form a non-repeating consecutive sequence in any order. Additionally, cells along pink lines alternate between the two colours.
