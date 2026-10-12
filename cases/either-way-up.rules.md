---
format: open-rules
title: Either Way Up
setter: Marty Sears
source: https://sudokupad.app/mpd1cofens
case: https://sudoku-sleuth.com/cases/either-way-up
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=6 r9c9=9
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[0.5,4.5],[1.5,3.5],[2.5,3.5],[3.5,4.5],[5.5,4.5],[6.5,5.5],[7.5,5.5],[8.5,4.5],[7.5,3.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,1.5],[7.5,0.5],[5.5,0.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,7.5],[7.5,8.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,1.5],[0.5,3.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,7.5],[1.5,8.5],[3.5,8.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,4.5],[6.5,3.5],[5.786,4.214]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,4.5],[2.5,5.5],[3.214,4.786]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.214,4.214],[3.5,3.5],[3.5,1.5],[4.5,1.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.786,4.786],[5.5,5.5],[5.5,7.5],[4.5,7.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[5.5,8.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,1.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,7.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.786,4.786],[4.5,5.5],[3.5,5.5],[4.5,6.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.214,4.214],[5.071,4.071],[5.143,4.143]],"color":"#e5a29dff","thickness":10,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[5.071,4.071],[4.5,3.5],[5.5,3.5],[4.5,2.5]],"color":"#e5a29dff","thickness":10,"rounded":true}}
```

Normal sudoku rules apply.

Each line is an ANTI-KROPKI line. No two digits anywhere on an anti-kropki line may be consecutive, nor may they have a 1:2 ratio (one being double the other)... but digits may repeat on a line if allowed by sudoku!
