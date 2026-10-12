---
format: open-rules
title: Dutch Flat Mates - Hot and Cold Lines
setter: Marty Sears
source: https://sudokupad.app/z8h186i5ey
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-hot-and-cold-lines
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
flat-mates digit 5 above 1 below 9
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,2.5],[0.5,1.5]],"color":"#e6261fff","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,6.5]],"color":"#e6261fff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[0.5,6.5],[1.5,7.5]],"color":"#e6261fff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.4,3.4],[0.5,2.5]],"color":"#e6261fff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,8.5],[2.5,7.5]],"color":"#e6261fff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.6,8.8],[0.4,8.8]],"color":"#e6261fff","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.3,5.3],[0.3,4.3],[2.3,4.3]],"color":"#e6261fff","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[2.5,0.5],[2.5,1.5]],"color":"#e6261fff","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[6.7,0.7],[7.3,1.3],[7.3,2.7],[6.7,3.3]],"color":"#5acaffff","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.3,2.5],[6.3,4.5]],"color":"#5acaffff","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5]],"color":"#5acaffff","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,2.5]],"color":"#5acaffff","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.929,2.929],[7.643,2.643]],"color":"#5acaffff","thickness":10,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[6.5,6.3],[8.7,6.3],[7.5,7.5],[8.5,8.5]],"color":"#5acaffff","thickness":10,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.3,6.7],[6.5,7.5],[6.5,8.5]],"color":"#5acaffff","thickness":10,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6.7,4.5],[7.3,4.5],[7.3,5.7],[8.5,5.7]],"color":"#5acaffff","thickness":10,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[8.5,5.3],[7.7,5.3],[7.7,3.5],[8.5,3.5],[7.7,2.7]],"color":"#5acaffff","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply.

5's live in Dutch Flats:
Every 5 in the grid must have a 1 directly above it or a 9 directly below it. It may have both, but it doesn't need both.

Hot and Cold lines:
Any red line has a higher total than any blue line.
