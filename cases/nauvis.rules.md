---
format: open-rules
title: Nauvis
setter: Blobz
source: https://sudokupad.app/blobz/nauvis
case: https://sudoku-sleuth.com/cases/nauvis
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.357,2.786],[6.5,2.929],[6.643,2.786]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.214,1.643],[7.071,1.5],[7.214,1.357]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.214,7.357],[6.071,7.5],[6.214,7.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.786,1.357],[3.929,1.5],[3.786,1.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.214,6.357],[2.071,6.5],[2.214,6.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.357,3.214],[7.5,3.071],[7.643,3.214]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.214,7.357],[5.071,7.5],[5.214,7.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.357,7.214],[5.5,7.071],[5.643,7.214]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.357,8.214],[7.5,8.071],[7.643,8.214]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.786,2.357],[5.929,2.5],[5.786,2.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.786,5.357],[5.929,5.5],[5.786,5.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.357,5.214],[4.5,5.071],[4.643,5.214]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.214,2.357],[1.071,2.5],[1.214,2.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.357,0.786],[2.5,0.929],[2.643,0.786]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.357,2.786],[2.5,2.929],[2.643,2.786]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.786,2.357],[2.929,2.5],[2.786,2.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.214,3.357],[2.071,3.5],[2.214,3.643]],"color":"#cd66ffaa","thickness":4.48,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[56]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[64]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[29]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[54]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[39]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[48]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[23]}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[28]}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[36]}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[66]}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[75]}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"cage","cells":[3]}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"cage","cells":[40]}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"cage","cells":[25]}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"cage","cells":[68]}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"cage","cells":[77]}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"cage","cells":[10]}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"cage","cells":[9]}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"cage","cells":[62]}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"cage","cells":[79]}}
```

Normal sudoku rules apply.

Shade cells using two colours such that each colour forms an orthogonally connected region, and no 2x2 area is a single colour.

Digits in caged cells indicate how many cells of the same colour are seen orthogonally from that position, including itself. The other colour blocks vision.

A digit in a cell with arrows must match the total count of cells of the opposite colour in all given directions. For example, a 7 in a cell with arrows pointing east and south might be counting 4 cells to the south and 3 to the east.
