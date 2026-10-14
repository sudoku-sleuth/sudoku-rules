---
format: open-rules
title: Dutch Flat Mates - Ten or Eleven
setter: Marty Sears
source: https://sudokupad.app/l8j9xate8u
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-ten-or-eleven
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 6cdd3e4cbc1590d9232c2b468dca7f46
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[3.5,3.5],[4.5,3.5],[4.5,5.5],[5.5,5.5],[5.5,3.5]],"color":"#ff7a7aff","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[2.5,5.5],[3.5,6.5],[4.5,6.5],[4.5,7.5]],"color":"#ffce81ff","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[6.5,3.5],[5.5,2.5],[4.5,2.5],[4.5,1.5]],"color":"#ffce81ff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,5.5]],"color":"#fcf987ff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[7.5,4.5]],"color":"#fcf987ff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,6.5]],"color":"#b5f9d2ff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,3.5]],"color":"#b5f9d2ff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,3.5],[1.5,3.5],[2.5,2.5],[2.5,1.5],[1.5,1.5]],"color":"#8be5fcff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,5.5],[7.5,5.5],[6.5,6.5],[6.5,7.5],[7.5,7.5]],"color":"#8be5fcff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,0.5]],"color":"#efcffbff","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,7.5]],"color":"#efcffbff","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply.

5's live in Dutch Flats:
Every 5 in the grid must have a '1' directly above it or a '9' directly below it. It may have both, but it doesn't need both.

Ten or Eleven:
Adjacent cells along a coloured line sum to 10 or 11.
