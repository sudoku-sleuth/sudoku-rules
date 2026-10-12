---
format: open-rules
title: Price Tags
setter: sujoyku
source: https://sudokupad.app/ormd25j47e
case: https://sudoku-sleuth.com/cases/price-tags
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
cage-1: cage r2c3-r1c4 total 11 connected false
cage-2: cage r3c2-r4c1 total 11 connected false
cage-3: cage r5c4-r6c4-r6c5-r7c4-r7c6 total 32 connected false
cage-4: cage r4c5-r4c6-r4c7-r5c6-r6c7 total 32 connected false
cage-5: cage r7c7-r6c8-r8c6 total 24 connected false
cage-6: cage r7c3-r8c4-r9c5 total 20 connected false
cage-7: cage r3c7-r4c8-r5c9 total 20 connected false
cage-8: cage r2c6-r1c7 total 15 connected false
cage-9: cage r7c1-r7c2-r6c3 total 18 connected false
cage-10: cage r8c2-r9c1 total 12 connected false
cage-11: cage r1c8-r2c9 total 9 connected false
cage-12: cage r2c4-r3c4-r4c3 total 6 connected false
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,1.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M32 224L96 160","bounds":[2.5,0.5,3.5,1.5]}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M224 32L160 96","bounds":[0.5,2.5,1.5,3.5]}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5],[3.5,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M224 96L224 160L160 224","bounds":[1.5,2.5,3.5,3.5]}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,5.5],[3.5,6.5],[4.5,5.5],[5.5,6.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M288 224L416 224L352 288L416 352","bounds":[3.5,4.5,5.5,6.5]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,6.5],[5.5,7.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M352 480L480 352","bounds":[5.5,5.5,7.5,7.5]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[3.5,7.5],[4.5,8.5]],"color":"#Ffffff","thickness":12.8,"rounded":true,"path":"M413 157L544 288","bounds":[2.453125,6.453125,4.5,8.5]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[0.5,6.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M352 96L416 32","bounds":[0.5,5.5,1.5,6.5]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,8.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M480 32L544 96","bounds":[0.5,7.5,1.5,8.5]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[5.5,2.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M32 416L96 416L160 352","bounds":[5.5,0.5,6.5,2.5]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,3.5],[8.5,4.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M160 416L288 544","bounds":[6.5,2.5,8.5,4.5]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,3.5],[6.5,3.5],[5.5,4.5],[6.5,5.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M224 288L224 416L288 352L352 416","bounds":[4.5,3.5,6.5,5.5]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5]],"color":"#FFFFFF","thickness":12.8,"rounded":true,"path":"M32 544L96 480","bounds":[7.5,0.5,8.5,1.5]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[5.5,4.5],[6.5,3.5],[5.5,3.5],[4.5,3.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M352 416L288 352L224 416L224 288","bounds":[4.5,3.5,6.5,5.5]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,5.5],[3.5,6.5],[3.5,5.5],[3.5,4.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M416 352L352 288L416 224L288 224","bounds":[3.5,4.5,5.5,6.5]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,6.5],[5.5,7.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M352 480L480 352","bounds":[5.5,5.5,7.5,7.5]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[2.5,3.5],[1.5,3.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M160 224L224 160L224 96","bounds":[1.5,2.5,3.5,3.5]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5],[6.5,2.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M288 544L160 416L163 419","bounds":[6.5,2.5,8.5,4.5]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[3.5,7.5],[2.5,6.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M544 288L416 160L419 163","bounds":[2.5,6.5,4.5,8.5]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"path","layer":"lines","d":"M416 160L413 157","bounds":[2.453125,6.453125,2.5,6.5],"color":"#fbcbd2ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[0.5,6.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M352 96L416 32","bounds":[0.5,5.5,1.5,6.5]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[6.5,1.5],[5.5,2.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M32 416L96 416L160 352","bounds":[5.5,0.5,6.5,2.5]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M32 544L96 480","bounds":[7.5,0.5,8.5,1.5]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,1.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M32 224L96 160","bounds":[2.5,0.5,3.5,1.5]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,3.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M160 96L224 32","bounds":[0.5,2.5,1.5,3.5]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[0.5,7.5]],"color":"#fbcbd2ff","thickness":9.6,"rounded":true,"path":"M544 96L480 32L486 38","bounds":[0.5,7.5,1.5,8.5]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"path","layer":"lines","d":"M224 32L208 16","bounds":[0.25,3.25,0.5,3.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"path","layer":"lines","d":"M96 160L80 144","bounds":[2.25,1.25,2.5,1.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"path","layer":"lines","d":"M285 221L272 208","bounds":[3.25,4.25,3.453125,4.453125],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"path","layer":"lines","d":"M221 285L208 272","bounds":[4.25,3.25,4.453125,3.453125],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"path","layer":"lines","d":"M160 352L147 339L140 332","bounds":[5.1875,2.1875,5.5,2.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"path","layer":"lines","d":"M93 477L80 464","bounds":[7.25,1.25,7.453125,1.453125],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"path","layer":"lines","d":"M477 349L467 339","bounds":[5.296875,7.296875,5.453125,7.453125],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"path","layer":"lines","d":"M413 157L400 144","bounds":[2.25,6.25,2.453125,6.453125],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"path","layer":"lines","d":"M416 32L400 16","bounds":[0.25,6.25,0.5,6.5],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"path","layer":"lines","d":"M477 29L464 16","bounds":[0.25,7.25,0.453125,7.453125],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"path","layer":"lines","d":"M224 96L240 80","bounds":[1.25,3.5,1.5,3.75],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"path","layer":"lines","d":"M169 423L160 416L173 403","bounds":[6.296875,2.5,6.609375,2.703125],"color":"#fbcbd2ff","thickness":1.92,"dash":"1 4","rounded":true}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,1.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,3.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.15,4.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,3.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,2.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,1.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,7.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,6.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,6.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,7.2],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,3.8],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.15,2.8],"width":0.43,"height":0.33,"rounded":false,"fill":"#FFFFFF","stroke":"#fbcbd2ff","thickness":1.92,"angle":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,1.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,3.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"11","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.15,4.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"32","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,3.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"32","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,2.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"18","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,1.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"12","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,6.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"15","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.15,7.25],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"9","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,6.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-71","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,7.2],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"24","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,3.85],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"6","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.15,2.8],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":0,"text":"20","textColor":"#f58294ff","fontSize":19,"textStroke":"#ffffff","textStrokeWidth":1}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 box has to contain the digits from 1 to 9 once each.

- Killer Lines: Digits on a line may not repeat and must sum to the clue attached to it.
