---
format: open-rules
title: Indexed YYSL
setter: Blobz
source: https://sudokupad.app/blobz/indexed-yysl
case: https://sudoku-sleuth.com/cases/indexed-yysl
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":0.37,"height":0.37,"rounded":false,"fill":"#78e6ddff","thickness":0,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.37,"height":0.37,"rounded":false,"fill":"#78e6ddff","thickness":0,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":0.37,"height":0.37,"rounded":false,"fill":"#78e6ddff","thickness":0,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.37,"height":0.37,"rounded":false,"fill":"#78e6ddff","thickness":0,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.37,"height":0.37,"rounded":false,"fill":"#78e6ddff","thickness":0,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,4.5],[6.5,3.5],[6.5,5.5]],"color":"#78e6ddff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,2.5],[2.5,1.5],[1.5,0.5]],"color":"#78e6ddff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,7.5],[7.5,8.5],[6.5,7.5],[5.5,7.5]],"color":"#78e6ddff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[2.5,8.5]],"color":"#78e6ddff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,3.5],[4.5,4.5]],"color":"#78e6ddff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[10]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[19]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[28]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[39]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[48]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[57]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[47]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[50]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[59]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[69]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[52]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[42]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[41]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[33]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[25]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[65]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[67]}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[6]}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[44]}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[77]}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[18]}}
```

Normal sudoku rules apply.

Shade cells using two colours such that each colour forms an orthogonally connected region, and no 2x2 area is a single colour.

Digits in caged cells indicate how many cells of the same colour are seen orthogonally from that position, including itself. The other colour blocks vision.

Along an "index line", the digit in the Nth cell (starting from the diamond) indicates the position along the line where digit N appears. All self-indexing cells are one colour, all non-self-indexing cells are the other colour.
