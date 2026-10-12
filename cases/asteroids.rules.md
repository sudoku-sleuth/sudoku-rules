---
format: open-rules
title: Asteroids
setter: Blobz
source: https://sudokupad.app/blobz/asteroids
case: https://sudoku-sleuth.com/cases/asteroids
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r8c3=5
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2 total 15 connected true
cage-2: cage r1c8-r1c9 total 13 connected true
region-sum r7c4-r7c3-r8c3-r8c4 segments [["r7c4","r8c4"],["r7c3","r8c3"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,3.25],[2.625,3.25],[2.625,3.375],[2.5,3.375],[2.5,3.25]],"color":"#14d91ba9","thickness":4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,2.25],[2.625,2.25],[2.625,2.375],[2.5,2.375],[2.5,2.25]],"color":"#14d91ba9","thickness":4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,2.75],[2.625,2.75],[2.625,2.875],[2.5,2.875],[2.5,2.75]],"color":"#14d91ba9","thickness":4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,1.75],[2.625,1.75],[2.625,1.875],[2.5,1.875],[2.5,1.75]],"color":"#14d91ba9","thickness":4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.25,2.875],[2.25,3.125],[2.375,3.25],[2.375,3.375],[2.5,3.5],[2.625,3.5],[2.75,3.375],[2.75,1.625],[2.625,1.5],[2.5,1.5],[2.375,1.625],[2.375,1.75],[2.25,1.875],[2.25,2.875]],"color":"#14d91ba9","thickness":4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.4,2.8],[3.4,3],[3.45,3.05],[3.45,3.15],[3.6,3.3],[3.6,3.4],[3.65,3.45],[3.85,3.45],[3.95,3.55],[4.05,3.45],[4.15,3.45],[4.3,3.6],[4.35,3.55],[4.4,3.4],[4.45,3.35],[4.45,3.25],[4.5,3.3],[4.6,3.2],[4.6,3.1],[4.55,2.95],[4.4,2.8],[4.5,2.7],[4.5,2.6],[4.55,2.55],[4.45,2.45],[4.25,2.45],[4.2,2.4],[4.1,2.4],[3.95,2.45],[3.75,2.45],[3.45,2.75]],"color":"#1c96eba8","thickness":4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.75,5.15],[7.8,5.1],[7.9,5.1],[8.15,4.85],[8.15,4.75],[8.45,4.45],[8.55,4.45],[8.7,4.6],[8.7,4.8],[8.75,4.85],[8.75,5.25],[8.8,5.3],[8.8,5.4],[8.85,5.45],[8.85,5.65],[8.9,5.7],[8.9,5.8],[8.85,5.85],[8.85,6.05],[8.8,6.1],[8.8,6.2],[8.75,6.25],[8.75,6.45],[8.7,6.5],[8.65,6.65],[8.5,6.7],[8.3,6.7],[8.15,6.75],[8.05,6.65],[7.95,6.65],[7.9,6.6],[7.8,6.6],[7.45,6.25],[7.45,6.15],[7.4,6.1],[7.4,6],[7.5,5.9],[7.5,5.4],[7.45,5.35],[7.7,5.1]],"color":"#1c96eba8","thickness":4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.85,5.15],[2,5],[2.15,4.75],[2.25,4.85],[2.45,4.65],[2.45,4.55],[2.55,4.45],[2.5,4.4],[2.8,4.4],[2.85,4.35],[2.95,4.35],[3.05,4.45],[3.15,4.45],[3.2,4.4],[3.3,4.4],[3.5,4.6],[3.5,4.7],[3.45,4.75],[3.5,4.8],[3.5,4.9],[3.45,4.95],[3.4,5.1],[3.35,5.15],[3.35,5.25],[3.75,5.65],[3.75,5.75],[3.65,5.85],[3.6,6],[3.6,6.1],[3.5,6.2],[3.5,6.3],[3.55,6.35],[3.55,6.45],[3.5,6.5],[3.45,6.65],[3.35,6.65],[3.3,6.7],[3,6.7],[2.85,6.55],[2.7,6.6],[2.6,6.7],[2.45,6.75],[2.4,6.8],[2.3,6.8],[2.25,6.85],[2.05,6.85],[1.75,6.55],[1.75,6.35],[1.45,6.05],[1.45,5.85],[1.5,5.8],[1.5,5.7],[1.6,5.6],[1.65,5.45],[1.75,5.35],[1.75,5.25],[1.8,5.2]],"color":"#1c96eba8","thickness":4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[0.65,2.35],[1.05,1.95],[1.15,1.95],[1.2,1.9],[1.25,1.75],[1.45,1.55],[1.6,1.7],[1.6,1.8],[1.65,1.95],[1.65,2.15],[1.7,2.2],[1.7,2.4],[1.65,2.55],[1.65,2.75],[1.7,2.8],[1.7,3],[1.75,3.05],[1.7,3.2],[1.65,3.25],[1.65,3.35],[1.45,3.55],[1.3,3.6],[1.25,3.55],[1.15,3.55],[1,3.5],[0.65,3.15],[0.55,3.15],[0.5,3.1],[0.5,2.7],[0.55,2.65],[0.55,2.45],[0.6,2.4]],"color":"#1c96eba8","thickness":4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.05,0.85],[5.05,0.95],[4.85,1.15],[4.85,1.25],[4.8,1.3],[4.8,1.6],[5.05,1.85],[5.1,1.8],[5.5,1.8],[5.6,1.7],[5.7,1.7],[5.75,1.75],[5.85,1.75],[5.9,1.7],[6.1,1.7],[6.15,1.65],[6.25,1.65],[6.3,1.6],[6.4,1.6],[6.45,1.55],[6.6,1.5],[6.95,1.15],[6.95,1.05],[7.05,0.95],[7.1,0.8],[7.3,0.6],[7.25,0.55],[7.25,0.45],[6.95,0.15],[6.8,0.1],[6.7,0.2],[6.6,0.2],[6.55,0.15],[6.35,0.15],[6.3,0.2],[6.2,0.2],[6.1,0.3],[6,0.3],[5.95,0.25],[5.9,0.3],[5.8,0.3],[5.7,0.4],[5.55,0.45],[5.2,0.8],[5.1,0.8],[5.05,0.85]],"color":"#1c96eba8","thickness":4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,7.625],[5.625,7.625],[5.625,7.75],[5.75,7.75],[5.75,7.875],[6.25,7.875],[6.25,7.625],[6.125,7.625],[6.125,7.375],[6,7.375],[6,7.125],[5.875,7.125],[5.875,6.875],[5.75,6.875],[5.75,6.625],[5.625,6.625],[5.625,6.375],[5.375,6.375],[5.375,6.625],[5.25,6.625],[5.25,6.875],[5.125,6.875],[5.125,7.125],[5,7.125],[5,7.375],[4.875,7.375],[4.875,7.625],[4.75,7.625],[4.75,7.875],[5.25,7.875],[5.25,7.75],[5.375,7.75],[5.375,7.625],[5.5,7.625]],"color":"#f51be97c","thickness":4,"rounded":true,"layer":"over"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3.5],"width":0.32,"height":0.22,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.32,"height":0.22,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.5],"width":0.32,"height":0.22,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5],"width":0.32,"height":0.22,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.32,"height":0.22,"rounded":true,"fill":"#000000","thickness":0,"angle":45}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0.32,"height":0.22,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5],"width":0.32,"height":0.22,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0.32,"height":0.22,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
```

Normal sudoku rules apply.

Adjacent digits along the green flying saucer differ by at least 5.

Digits on the pink space ship form a non-repeating consecutive sequence in any order.

White missiles separate consecutive digits. Black missiles separate digits where one is double the other.

Box borders divide the blue asteroids into line segments with the same sum.

Digits in cages sum to the given total.
