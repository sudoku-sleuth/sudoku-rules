---
format: open-rules
title: Trace Elements
setter: sujoyku
source: https://sudokupad.app/rw4sv4u6w1
case: https://sudoku-sleuth.com/cases/trace-elements
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c2-r3c1 connected false
cage-2: cage r2c4-r3c5-r2c6 connected false
cage-3: cage r3c7-r4c7-r5c6 connected false
cage-4: cage r5c3-r6c2-r7c1 connected false
cage-5: cage r6c7-r6c8-r7c9 connected false
cage-6: cage r8c5-r9c5-r8c6-r9c7-r9c8 connected false
index-line-1: index-line r4c1-r3c2-r2c3-r1c4-r1c5
index-line-2: index-line r5c7-r5c8-r5c9-r4c9-r3c9-r2c9-r1c9-r1c8-r1c7
index-line-3: index-line r8c1-r9c2-r8c3-r7c3-r7c4-r6c5-r5c4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,0.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M32 32L96 96L32 160","bounds":[0.5,0.5,2.5,1.5]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5],[1.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M224 96L288 160L352 96","bounds":[1.5,3.5,2.5,5.5]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,7.5],[5.5,6.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M544 416L480 352L416 352","bounds":[5.5,6.5,6.5,8.5]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[8.5,6.5],[7.5,5.5],[7.5,4.5],[8.5,4.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M480 544L416 544L352 480L288 480L288 544","bounds":[7.5,4.5,8.5,7.5]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5],[2.5,6.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M352 288L416 224L416 160","bounds":[2.5,5.5,4.5,6.5]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[5.5,1.5],[6.5,0.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M160 288L32 416","bounds":[4.5,0.5,6.5,2.5]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,1.5],[0.5,0.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M32 160L96 96L32 32","bounds":[0.5,0.5,2.5,1.5]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,4.5],[1.5,5.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M224 96L288 160L352 96","bounds":[1.5,3.5,2.5,5.5]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5],[2.5,6.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M352 288L416 224L416 160","bounds":[2.5,5.5,4.5,6.5]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,7.5],[6.5,8.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M416 352L480 352L544 416","bounds":[5.5,6.5,6.5,8.5]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,4.5],[7.5,5.5],[8.5,6.5],[8.5,7.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M288 544L288 480L352 480L416 544L480 544","bounds":[7.5,4.5,8.5,7.5]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[5.5,1.5],[4.5,2.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M32 416L160 288","bounds":[4.5,0.5,6.5,2.5]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"path","layer":"lines","d":"M32 32L13 13","bounds":[0.203125,0.203125,0.5,0.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"path","layer":"lines","d":"M160 288L138 266","bounds":[4.15625,2.15625,4.5,2.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"path","layer":"lines","d":"M224 96L202 74","bounds":[1.15625,3.15625,1.5,3.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"path","layer":"lines","d":"M416 160L397 141","bounds":[2.203125,6.203125,2.5,6.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"path","layer":"lines","d":"M416 352L397 333","bounds":[5.203125,6.203125,5.5,6.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"path","layer":"lines","d":"M288 544L262 518","bounds":[8.09375,4.09375,8.5,4.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,0.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,2.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,3.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,6.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,6.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,4.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,0.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,3.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,2.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,4.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"19","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,6.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,6.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"8","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Index Lines: Each turquoise line is an Index Line, i.e. the digit in the Nth cell along such a line (starting from the diamond) indicates the position along the line where the digit N appears. For example, if a diamond cell contains a 3, the third cell along that line must have a 1.

- Killer Lines: Digits on a line may not repeat and must sum to the clue attached to it.
