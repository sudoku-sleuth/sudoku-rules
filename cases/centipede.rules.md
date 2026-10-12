---
format: open-rules
title: Centipede
setter: Blobz
source: https://sudokupad.app/blobz/centipede
case: https://sudoku-sleuth.com/cases/centipede
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c3=5
---

```rules
sudoku 9x9
kropki-1: kropki r7c7-r8c7 colour "white"
kropki-2: kropki r6c8-r7c8 colour "white"
kropki-3: kropki r5c8-r6c8 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":0.74,"height":0.74,"rounded":true,"fill":"#36f53a7b","stroke":"#0d9e1e5b","thickness":1,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,5.5],[1.5,2.5],[2.5,2.5],[2.5,3.5],[3.5,3.5],[3.5,1.5],[4.5,1.5],[4.5,6.5],[5.5,6.5],[5.5,2.5],[6.5,2.5],[6.5,4.5]],"color":"#36f53a90","thickness":22,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.625,4.625],[6.75,4.625],[6.75,4.75],[6.625,4.75],[6.625,4.625]],"color":"#1dab1b6d","thickness":5,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6.25,4.625],[6.375,4.625],[6.375,4.75],[6.25,4.75],[6.25,4.625]],"color":"#1dab1b6d","thickness":5,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[0.1,8.5],[0.1,8.7],[0.2,8.7],[0.2,8.8],[0.3,8.8],[0.3,8.9],[0.5,8.9],[0.5,8.6],[0.9,8.6],[0.9,8.4],[0.5,8.4],[0.5,8.1],[0.3,8.1],[0.3,8.2],[0.2,8.2],[0.2,8.3],[0.1,8.3],[0.1,8.5]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[1.1,7.5],[1.1,7.7],[1.2,7.7],[1.2,7.8],[1.3,7.8],[1.3,7.9],[1.5,7.9],[1.5,7.6],[1.9,7.6],[1.9,7.4],[1.5,7.4],[1.5,7.1],[1.3,7.1],[1.3,7.2],[1.2,7.2],[1.2,7.3],[1.1,7.3],[1.1,7.5]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[2.3,5.9],[2.5,5.9],[2.5,5.6],[2.9,5.6],[2.9,5.4],[2.5,5.4],[2.5,5.1],[2.3,5.1],[2.3,5.2],[2.2,5.2],[2.2,5.3],[2.1,5.3],[2.1,5.7],[2.2,5.7],[2.2,5.8],[2.3,5.8],[2.3,5.9]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[2.1,4.6],[2.1,4.7],[2.2,4.7],[2.2,4.8],[2.3,4.8],[2.3,4.9],[2.5,4.9],[2.5,4.6],[2.9,4.6],[2.9,4.4],[2.5,4.4],[2.5,4.1],[2.3,4.1],[2.3,4.2],[2.2,4.2],[2.2,4.3],[2.1,4.3],[2.1,4.6]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[0.5,2.8],[0.5,2.9],[0.3,2.9],[0.3,2.8],[0.2,2.8],[0.2,2.7],[0.1,2.7],[0.1,2.3],[0.2,2.3],[0.2,2.2],[0.3,2.2],[0.3,2.1],[0.5,2.1],[0.5,2.4],[0.9,2.4],[0.9,2.6],[0.5,2.6],[0.5,2.8]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[1.3,1.9],[1.5,1.9],[1.5,1.6],[1.9,1.6],[1.9,1.4],[1.5,1.4],[1.5,1.1],[1.3,1.1],[1.3,1.2],[1.2,1.2],[1.2,1.3],[1.1,1.3],[1.1,1.7],[1.2,1.7],[1.2,1.8],[1.3,1.8],[1.3,1.9]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.6,7.5],[4.6,7.6],[4.5,7.6],[4.5,7.9],[4.3,7.9],[4.3,7.8],[4.2,7.8],[4.2,7.7],[4.1,7.7],[4.1,7.3],[4.2,7.3],[4.2,7.2],[4.3,7.2],[4.3,7.1],[4.5,7.1],[4.5,7.4],[4.7,7.4],[4.7,7.5],[4.6,7.5]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[5.1,1.4],[5.1,1.7],[5.2,1.7],[5.2,1.8],[5.3,1.8],[5.3,1.9],[5.5,1.9],[5.5,1.6],[5.9,1.6],[5.9,1.4],[5.5,1.4],[5.5,1.1],[5.3,1.1],[5.3,1.2],[5.2,1.2],[5.2,1.3],[5.1,1.3],[5.1,1.4]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[5.5,0.8],[5.5,0.9],[5.3,0.9],[5.3,0.8],[5.2,0.8],[5.2,0.7],[5.1,0.7],[5.1,0.3],[5.2,0.3],[5.2,0.2],[5.3,0.2],[5.3,0.1],[5.5,0.1],[5.5,0.4],[5.9,0.4],[5.9,0.6],[5.5,0.6],[5.5,0.8]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[3.9,0.5],[3.9,0.6],[3.5,0.6],[3.5,0.9],[3.3,0.9],[3.3,0.8],[3.2,0.8],[3.2,0.7],[3.1,0.7],[3.1,0.3],[3.2,0.3],[3.2,0.2],[3.3,0.2],[3.3,0.1],[3.5,0.1],[3.5,0.4],[3.9,0.4],[3.9,0.5]],"color":"#e69d1fd4","thickness":6,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[7.833,6.167],[7.833,6.333],[7.5,6.333],[7.5,6.667],[7.833,6.667],[7.833,6.833],[8.333,7.333],[8.5,7.333],[8.5,5.667],[8.333,5.667],[7.833,6.167]],"color":"#df0dd2a3","thickness":10,"rounded":true}}
```

Normal sudoku rules apply.

Adjacent digits along the centipede differ by at least 5.

A digit on a mushroom indicates how many mushrooms contain that digit.

White dots separate consecutive digits.

Digits on the pink cannon form a non-repeating consecutive sequence.
