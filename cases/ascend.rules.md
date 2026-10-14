---
format: open-rules
title: Ascend
setter: Blobz
source: https://sudokupad.app/blobz/ascend
case: https://sudoku-sleuth.com/cases/ascend
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=1 r2c1=3 r3c1=5 r4c1=7 r5c1=9 r8c7=8 r8c9=6 r9c7=2 r9c9=4
exported: 0997c5fb4d9c985e74fa4a882f5f47fb
---

```rules
sudoku 9x9
region-sum-1: region-sum r2c7-r2c6-r3c6-r3c5-r4c5-r4c4-r5c4-r5c3-r6c3-r6c2-r7c2 segments [["r2c7"],["r2c6","r3c6","r3c5"],["r4c5","r4c4","r5c4"],["r5c3","r6c3","r6c2"],["r7c2"]]
region-sum-2: region-sum r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9 segments [["r9c3"],["r8c4","r7c5"],["r6c6"],["r5c7","r4c8"],["r3c9"]]
extremum r8c2-r8c3-r7c3-r7c4-r6c4-r6c5-r5c5-r5c6-r4c6-r4c7-r3c7-r3c8-r2c8 type "max" exhaustive false
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.38,1.11],[7.5,1.06],[7.62,1.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.11,1.62],[7.06,1.5],[7.11,1.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.89,1.38],[7.94,1.5],[7.89,1.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.62,2.89],[7.5,2.94],[7.38,2.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[7.89,2.38],[7.94,2.5],[7.89,2.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6.38,2.11],[6.5,2.06],[6.62,2.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[6.11,2.62],[6.06,2.5],[6.11,2.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[6.62,3.89],[6.5,3.94],[6.38,3.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.89,3.38],[6.94,3.5],[6.89,3.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[5.38,3.11],[5.5,3.06],[5.62,3.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[5.11,3.62],[5.06,3.5],[5.11,3.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[5.62,4.89],[5.5,4.94],[5.38,4.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[5.89,4.38],[5.94,4.5],[5.89,4.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[4.38,4.11],[4.5,4.06],[4.62,4.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[4.11,4.62],[4.06,4.5],[4.11,4.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4.62,5.89],[4.5,5.94],[4.38,5.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4.89,5.38],[4.94,5.5],[4.89,5.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[3.38,5.11],[3.5,5.06],[3.62,5.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[3.11,5.62],[3.06,5.5],[3.11,5.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[3.62,6.89],[3.5,6.94],[3.38,6.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[3.89,6.38],[3.94,6.5],[3.89,6.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[2.38,6.11],[2.5,6.06],[2.62,6.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[2.11,6.62],[2.06,6.5],[2.11,6.38]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[2.62,7.89],[2.5,7.94],[2.38,7.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[2.89,7.38],[2.94,7.5],[2.89,7.62]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1.38,7.11],[1.5,7.06],[1.62,7.11]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[1.62,7.89],[1.5,7.94],[1.38,7.89]],"color":"#000000","thickness":1.92,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1.11,7.62],[1.06,7.5],[1.11,7.38]],"color":"#000000","thickness":1.92,"rounded":true}}
```

Normal sudoku rules apply.

Box borders divide blue lines into segments with the same sum.

Grey fortress cells contain digits that are greater than all adjacent non-fortress cells.
