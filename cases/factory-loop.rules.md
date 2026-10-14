---
format: open-rules
title: Factory Loop
setter: Marty Sears
source: https://sudokupad.app/m6l0dzbg2f
case: https://sudoku-sleuth.com/cases/factory-loop
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 1869e38f699df76d0a9e098e07139a2f
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.75,9.25],[3.5,9.25],[9.25,9.25],[9.25,-0.25],[-0.25,-0.25],[-0.25,9.25],[3.5,9.25]],"color":"#ade9edff","thickness":13.44,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,9.25],[3.25,9.25]],"color":"#ade9edff","thickness":13.44,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[9.25,8.75],[9.25,8.5]],"color":"#ade9edff","thickness":13.44,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[-0.25,2],[-0.25,2.75]],"color":"#ade9edff","thickness":13.44,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[9.1,8.7],[9.1,9.1],[-0.1,9.1],[-0.1,-0.1],[9.1,-0.1],[9.1,8.7]],"color":"#2b9eaaff","thickness":11.52,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.833,9.167],[9.167,9.167],[9.167,-0.167],[-0.167,-0.167],[-0.167,9.167],[8.833,9.167]],"color":"#83d5e1ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.833,9.167],[4.167,9.167]],"color":"#83d5e1ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4,-0.5],[5,-0.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[9.5,4],[9.5,5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4,9.5],[5,9.5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[-0.5,4],[-0.5,5]],"color":"#FFFFFF","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.78,"height":0.78,"rounded":true,"fill":"#FFFFFF","stroke":"#a3f277ff","thickness":5.12,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.78,"height":0.78,"rounded":true,"fill":"#FFFFFF","stroke":"#a3f277ff","thickness":5.12,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6.5],"width":0.78,"height":0.78,"rounded":true,"fill":"#FFFFFF","stroke":"#a3f277ff","thickness":5.12,"angle":0}}
```

Normal sudoku rules apply.

Draw a loop, one-cell wide, that moves orthogonally between cells. 

Two loop cells may only touch orthogonally if they are directly connected along the loop. Two loop cells may only touch diagonally where they are either side of a corner cell along the loop (ie; the loop doesn't 'touch itself'.)

A green circle is on the loop, and its digit indicates the number of cells in its box that are on the loop.

A red square is NOT on the loop, and its digit indicates the number of cells in its box that are NOT on the loop.

For any two neighbouring cells along the loop, dividing one by the other gives an exact integer (one is a multiple of the other.)
