---
format: open-rules
title: Extenban YYSL
setter: Blobz
source: https://sudokupad.app/3i7to4afz3
case: https://sudoku-sleuth.com/cases/extenban-yysl
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
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[0.5,2.5],[1.5,2.5],[0.5,3.5],[1.5,3.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[0.5,6.5],[1.5,7.5],[2.5,7.5],[3.5,8.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,6.5],[3.5,6.5],[3.5,7.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,2.5],[2.5,3.5],[4.5,5.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,2.5],[4.5,0.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,0.5],[6.5,3.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,4.5],[6.5,5.5],[7.5,6.5],[6.5,7.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,7.5],[7.5,7.5],[6.5,8.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,6.5],[5.5,7.5],[4.5,7.5],[4.5,8.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,4.5],[5.5,2.5]],"color":"#f067f0aa","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[1]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[10]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[20]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[14]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[16]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[17]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[36]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[29]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[31]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[40]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[41]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[32]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[35]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[53]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[52]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[79]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[78]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[80]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[71]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[59]}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[58]}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[67]}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[74]}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[73]}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"cage","cells":[55]}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"cage","cells":[69]}}
```

Normal sudoku rules apply.

Yin Yang: Shade some cells such that all shaded cells are orthogonally connected and all unshaded cells are orthogonally connected and no 2x2 area is fully shaded or unshaded.

Sight Lines: Digits in caged cells show the number of cells of the same color (shaded or unshaded) that are seen orthogonally from that position, including itself. The "other" color blocks vision.

Extended Renbans: Digits along a pink line form a consecutive group in any order. Digits do not repeat on the line EXCEPT for the ends, which are the SAME digit.

For example, possible fills for a line of length 5 might be 64756, 25342, 34123, etc.
