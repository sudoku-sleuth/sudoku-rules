---
format: open-rules
title: Eddie
setter: Blobz
source: https://sudokupad.app/blobz/eddie
case: https://sudoku-sleuth.com/cases/eddie
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 5a9d576ccc299502a4f4dc293946bfc1
---

```rules
sudoku 9x9
pair-1: pair r1c2-r1c3 sum 10
pair-2: pair r5c7-r5c8 sum 10
pair-3: pair r8c6-r9c6 sum 10
pair-4: pair r7c2-r7c3 sum 10
pair-5: pair r5c4-r6c4 sum 10
pair-6: pair r6c8-r6c9 sum 10
pair-7: pair r7c5-r8c5 sum 10
pair-8: pair r1c4-r2c4 sum 10
pair-9: pair r2c1-r2c2 sum 10
pair-10: pair r5c5-r6c5 sum 10
pair-11: pair r7c7-r8c7 sum 5
pair-12: pair r7c6-r7c7 sum 5
pair-13: pair r3c4-r4c4 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[1]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[2]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[11]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[20]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[31]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[40]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[41]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[50]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[51]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[71]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[25]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[57]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[65]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[59]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[69]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[80]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[63]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[33]}}
```

Normal sudoku rules apply.

Shade cells using two colours such that each colour forms an orthogonally connected region, and no 2x2 area is a single colour.

Digits in caged cells indicate how many cells of the same colour are seen orthogonally from that position, including itself. The other colour blocks vision.

X's and V's lie on the border between the two regions. Additionally, X's separate digits that sum to 10, and V's separate digits that sum to 5. Not all such X's and V's are necessarily shown.
