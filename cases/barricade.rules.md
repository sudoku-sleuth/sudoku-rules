---
format: open-rules
title: Barricade
setter: Blobz
source: https://sudokupad.app/blobz/barricade
case: https://sudoku-sleuth.com/cases/barricade
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
quadruple-1: quadruple r8c8-r8c9-r9c8-r9c9 digits [3]
quadruple-2: quadruple r7c4-r7c5-r8c4-r8c5 digits [9]
quadruple-3: quadruple r5c5-r5c6-r6c5-r6c6 digits [1]
quadruple-4: quadruple r4c8-r4c9-r5c8-r5c9 digits [9]
quadruple-5: quadruple r4c1-r4c2-r5c1-r5c2 digits [8]
quadruple-6: quadruple r6c2-r6c3-r7c2-r7c3 digits [5]
quadruple-7: quadruple r5c1-r5c2-r6c1-r6c2 digits [3]
quadruple-8: quadruple r5c8-r5c9-r6c8-r6c9 digits [2]
quadruple-9: quadruple r6c7-r6c8-r7c7-r7c8 digits [8]
quadruple-10: quadruple r8c3-r8c4-r9c3-r9c4 digits [6]
quadruple-11: quadruple r7c5-r7c6-r8c5-r8c6 digits [4]
quadruple-12: quadruple r5c3-r5c4-r6c3-r6c4 digits [6]
quadruple-13: quadruple r8c6-r8c7-r9c6-r9c7 digits [8]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#0003","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.89,0.38],[2.94,0.5],[2.89,0.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2.11,1.62],[2.06,1.5],[2.11,1.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.89,1.38],[2.94,1.5],[2.89,1.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[2.62,2.89],[2.5,2.94],[2.38,2.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.11,2.62],[2.06,2.5],[2.11,2.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[3.38,2.11],[3.5,2.06],[3.62,2.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[3.89,2.38],[3.94,2.5],[3.89,2.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[3.11,3.62],[3.06,3.5],[3.11,3.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[3.89,3.38],[3.94,3.5],[3.89,3.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[3.11,4.62],[3.06,4.5],[3.11,4.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[3.89,4.38],[3.94,4.5],[3.89,4.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.11,5.62],[3.06,5.5],[3.11,5.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[3.89,5.38],[3.94,5.5],[3.89,5.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[3.62,6.89],[3.5,6.94],[3.38,6.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3.89,6.38],[3.94,6.5],[3.89,6.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[2.38,6.11],[2.5,6.06],[2.62,6.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[2.11,6.62],[2.06,6.5],[2.11,6.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[2.11,7.62],[2.06,7.5],[2.11,7.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[2.89,7.38],[2.94,7.5],[2.89,7.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[2.89,8.38],[2.94,8.5],[2.89,8.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[0.38,2.11],[0.5,2.06],[0.62,2.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[0.62,2.89],[0.5,2.94],[0.38,2.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[0.89,2.38],[0.94,2.5],[0.89,2.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[0.38,6.11],[0.5,6.06],[0.62,6.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[0.62,6.89],[0.5,6.94],[0.38,6.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[0.89,6.38],[0.94,6.5],[0.89,6.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[0.38,8.11],[0.5,8.06],[0.62,8.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[1.38,8.11],[1.5,8.06],[1.62,8.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[0.62,0.89],[0.5,0.94],[0.38,0.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[1.62,0.89],[1.5,0.94],[1.38,0.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[8.9,5.3],[8.85,5.35],[8.75,5.35],[8.5,5.6],[8.4,5.6],[7.95,6.05],[7.95,6.15],[7.5,6.6],[7.4,6.6],[7.35,6.65],[6.85,6.65],[6.8,6.6],[6.6,6.6],[6.55,6.55],[6.45,6.55],[6.4,6.5],[5.8,6.5],[5.75,6.45],[5.45,6.45],[5.2,6.2],[5.05,6.15],[4.95,6.05],[4.9,5.9],[4.75,5.85],[4.45,5.55],[4.05,5.55],[4,5.5],[3.8,5.5],[3.75,5.55],[3.65,5.45],[3.35,5.45],[3.3,5.5],[2.8,5.5],[2.75,5.55],[2.7,5.5],[2.5,5.5],[2.3,5.3],[2.2,5.3],[2.15,5.25],[2.1,5.1],[1.45,4.45],[1.3,4.4],[1.2,4.4],[1.15,4.45],[1.05,4.45],[1,4.5],[0.9,4.5],[0.85,4.55],[0.75,4.55],[0.7,4.6],[0.5,4.6],[0.45,4.55],[0.35,4.55],[0.3,4.5],[0.2,4.5],[0.15,4.55]],"color":"#2993f1a5","thickness":10,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"cage","cells":[63,64,72,73],"label":"Dragon","color":"#ff010183","labelColor":"#ff0202bf"}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"cage","cells":[3,4,5],"label":"Front Gate","color":"#788effff","labelColor":"#788effff"}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.5],"width":0,"height":0.504,"rounded":true,"thickness":0,"angle":45,"text":"Running River","textColor":"#788effff","fontSize":19,"textStroke":"#ffffff00","textStrokeWidth":1}}
```

The dwarves explored the caverns once more, and found, as they expected, that only the Front Gate remained open; all the other gates (except, of course, the small secret door) had long ago been broken and blocked by Smaug, and no sign of them remained. So now they began to labour hard in fortifying the main entrance, and in making a new path that led from it. Tools were to be found in plenty that the miners and quarriers and builders of old had used; and at such work the dwarves were still very skilled.

Normal sudoku rules apply.

Begin by transcribing the "Dragon" digits, from the previous puzzle.

Digits in "wall" (grey) cells are LARGER than digits in all orthogonally adjacent white cells.

Box borders divide the Running River (blue line) into segments that sum to the same value.

Digits in circles must appear in (at least) one of the four cells touching that circle.
