---
format: open-rules
title: Tents
setter: Kennet's Dad
source: https://sudokupad.app/w9ps3gelv3
case: https://sudoku-sleuth.com/cases/tents
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
whispers-1: whispers r4c8-r5c7-r6c7-r6c8-r6c9-r5c9 gap 5 loop true
whispers-2: whispers r3c2-r3c3-r2c3-r1c2-r2c1-r3c1 gap 5 loop true
renban-1: renban r7c2-r8c1-r9c1-r9c2-r9c3-r8c3
renban-2: renban r1c4-r2c4-r3c5-r2c6-r1c6-r1c5
pair-1: pair r2c7-r3c7 sum 10
pair-2: pair r6c1-r7c1 sum 10
pair-3: pair r6c3-r7c3 sum 5
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,3.5],[5.5,4.5],[4.5,5.5],[3.5,4.5],[3.5,3.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[2.5,6.5],[2.5,7.5],[1.5,8.5],[0.5,7.5],[0.5,6.5]],"color":"#fcaf","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[8.5,3.5],[8.5,4.5],[7.5,5.5],[6.5,4.5],[6.5,3.5]],"color":"#787878ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[8.5,8.5],[8.5,7.5],[7.5,6.5],[6.5,7.5],[6.5,8.5]],"color":"#787878ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[5.5,0.5],[5.5,1.5],[4.5,2.5],[3.5,1.5],[3.5,0.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"GW","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"GW","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"TEN","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"ENT","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"RB","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"ENT","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"PAR","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"RB","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":315,"text":"TEN","textColor":"#000000","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1.28}}
```

-Normal sudoku rules apply. 
-GW: adjacent digits on a green line must differ by at least 5. 
-PAR: adjacent digits on a red line must be of different parity (odd/even). 
-RB: the digits on a pink line must form a set of consecutive digits in any order. 
-ENT: any string of three digits along a peach line must have at least one digit from each of the following low, medium, and high sets: 123, 456, 789. 
-TEN: each grey line must be completely divided into one or more non-overlapping strings of adjacent digits that sum to 10. 
-X/V: digits joined by an X sum to ten. Digits joined by a V sum to 5. There is not a negative constraint.
