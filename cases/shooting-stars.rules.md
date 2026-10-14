---
format: open-rules
title: Shooting Stars
setter: sujoyku
source: https://sudokupad.app/pnagxiu869
case: https://sudoku-sleuth.com/cases/shooting-stars
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
exported: 92169a4e166db1487af40c88a7a9e52d
---

```rules
sudoku 9x9
cage-1: cage r1c4-r2c3-r3c2-r4c1 connected false
cage-2: cage r2c5-r3c4-r4c3-r5c2 connected false
cage-3: cage r3c6-r4c5-r5c4-r6c3 connected false
cage-4: cage r2c9-r3c8-r4c7-r5c6 connected false
cage-5: cage r6c6-r7c5-r8c4-r9c3 connected false
cage-6: cage r6c9-r7c8-r8c7-r9c6 connected false
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,3.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,5.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"10","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[-0.5,8.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,-0.5],"width":0,"height":1.05,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#000000","fontSize":40,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,2.5],[2.5,1.5],[3.5,0.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M224 32L32 224","bounds":[0.5,0.5,3.5,3.5]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,2.5],[2.5,3.5],[1.5,4.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M96 288L288 96","bounds":[1.5,1.5,4.5,4.5]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[3.5,4.5],[4.5,3.5],[5.5,2.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M352 160L160 352","bounds":[2.5,2.5,5.5,5.5]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5],[2.5,7.5],[1.5,8.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M352 288L544 96","bounds":[1.5,5.5,4.5,8.5]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,3.5],[6.5,4.5],[5.5,5.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M160 544L352 352","bounds":[5.5,2.5,8.5,5.5]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,6.5],[6.5,7.5],[5.5,8.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M352 544L544 352","bounds":[5.5,5.5,8.5,8.5]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"path","layer":"lines","d":"M224 32L243 13","bounds":[0.203125,3.5,0.5,3.796875],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"path","layer":"lines","d":"M288 96L307 77","bounds":[1.203125,4.5,1.5,4.796875],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"path","layer":"lines","d":"M352 160L371 141","bounds":[2.203125,5.5,2.5,5.796875],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"path","layer":"lines","d":"M352 352L371 333","bounds":[5.203125,5.5,5.5,5.796875],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"path","layer":"lines","d":"M544 352L563 333","bounds":[5.203125,8.5,5.5,8.796875],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"path","layer":"lines","d":"M544 96L563 77","bounds":[1.203125,8.5,1.5,8.796875],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,3.8],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,4.8],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,5.8],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,5.8],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,8.8],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,8.8],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,8.8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,8.8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"16","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,5.8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,5.8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"16","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,4.8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"14","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,3.8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 box has to contain the digits from 1 to 9 once each.

- Killer Lines: Digits on a line may not repeat and must sum to the clue attached to it.

- Up to N-sums: A clue outside the Row or Column N indicates the sum of all digits up to the cell that contains the digit N. (The digit N itself is not included in the sum.)
