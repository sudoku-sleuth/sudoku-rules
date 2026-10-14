---
format: open-rules
title: YYSL Ratios
setter: Blobz
source: https://sudokupad.app/blobz/yysl-ratios
case: https://sudoku-sleuth.com/cases/yysl-ratios
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e1ebf0266e4bd637485822c033cf5a1c
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r4c6 black
kropki-2: kropki r4c6-r5c6 black
kropki-3: kropki r3c3-r4c3 black
kropki-4: kropki r2c5-r2c6 black
kropki-5: kropki r1c4-r2c4 black
kropki-6: kropki r7c3-r8c3 black
kropki-7: kropki r8c2-r9c2 black
kropki-8: kropki r8c4-r9c4 black
kropki-9: kropki r3c1-r3c2 black
kropki-10: kropki r6c3-r7c3 black
kropki-11: kropki r7c8-r8c8 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[54]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[55]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[56]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[57]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[58]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[59]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[77]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[53]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[52]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[43]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[33]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[42]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[24]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[23]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[3]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[31]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[28]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[7]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[8]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[17]}}
```

Normal sudoku rules apply.

Shade cells using two colours such that each colour forms an orthogonally connected region, and no 2x2 area is a single colour.

Digits in caged cells indicate how many cells of the same colour are seen orthogonally from that position, including itself. The other colour blocks vision.

Black dots separate digits where one is double the other. Additionally, black dots lie on the border between the two regions.
