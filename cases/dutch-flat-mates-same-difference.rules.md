---
format: open-rules
title: "Dutch Flat Mates: Same Difference"
setter: Marty Sears
source: https://sudokupad.app/dfp9r0gc6c
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-same-difference
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 1188c5cc198a3f21452fc3a20172846b
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,5.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,5.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,2.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[5.5,6.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[5.5,7.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[5.5,8.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[1.5,2.5],[2.5,2.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5],[2.5,7.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,8.5],[7.5,8.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[8.5,4.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[5.5,5.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5],[8.5,7.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[4.5,3.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[5.5,2.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,3.5],[6.5,2.5]],"color":"#8afffbff","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply.

5's live in Dutch Flats:
Every 5 in the grid must have a '1' directly above it or a '9' directly below it. It may have both, but it doesn't need both.

Same Difference:
Adjacent digits on a turquoise line always have the same difference. This difference must be determined for each line.
