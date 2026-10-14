---
format: open-rules
title: Quiet Room
setter: Marty Sears
source: https://sudokupad.app/mea9u6amrt
case: https://sudoku-sleuth.com/cases/quiet-room
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 60b11b929d74f83564f523d5ebfc4fb1
---

```rules
sudoku 9x9
kropki-1: kropki r1c8-r1c9 black
kropki-2: kropki r2c6-r2c7 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[1.5,8.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[3.5,8.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[2.5,8.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[8.5,5.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[0.5,3.5],[0.5,6.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[1.5,6.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[6.5,4.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[3.5,2.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[5.5,1.5]],"color":"#FFFFFF","thickness":17.28,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[1.5,8.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[3.5,8.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[2.5,8.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[8.5,5.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[0.5,3.5],[0.5,6.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[1.5,6.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[6.5,4.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[3.5,2.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[5.5,1.5]],"color":"#b8d1dcff","thickness":12.8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[9.167,8.5],[9.167,9.167],[-0.167,9.167],[-0.167,-0.167],[9.167,-0.167],[9.167,8.5]],"color":"#9ddc16ff","thickness":17.28,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[9.25,8.25],[9.25,9.25],[-0.25,9.25],[-0.25,-0.25],[9.25,-0.25],[9.25,8.25]],"color":"#c9f36bff","thickness":18.56,"rounded":true}}
```

Normal sudoku rules apply.

Along a line that occupies N cells, every pair of adjacent digits must have a difference of at least N.

If a black dot sits between two digits, one is double the other.
