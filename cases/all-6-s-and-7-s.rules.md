---
format: open-rules
title: All 6's and 7's
setter: Blobz
source: ""
case: https://sudoku-sleuth.com/cases/all-6-s-and-7-s
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r8c2-r9c2 colour "black"
kropki-2: kropki r1c5-r1c6 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[39,48],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[40,49],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[41,50],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[45,54],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[27,36],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[9,18],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[12,21,22],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[52,61],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[25,34],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[66,67],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[77,78],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[59],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[6,15],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[38],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,4.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[4.5,0.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[4.5,8.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[5.5,7.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,7.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,8.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,6.5]],"color":"#CCCCCC","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply.

A black dot between cells indicates that one of the digits is double the other.

Digits in cages and digits on lines sum to either 6 or 7.

Digits may repeat along lines if allowed by other rules.
