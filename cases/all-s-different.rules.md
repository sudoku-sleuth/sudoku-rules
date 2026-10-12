---
format: open-rules
title: All's Different
setter: The Bard
source: https://sudokupad.app/sh6hxgwi22
case: https://sudoku-sleuth.com/cases/all-s-different
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[23,24,32,33],"label":"34"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,2.5],[3.5,3.5],[4.5,4.5],[5.5,5.5],[6.5,6.5],[7.5,7.5],[8.5,8.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.85,"height":0.85,"rounded":true,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,0.5],[3.5,1.5]],"color":"#CFCFCF","thickness":21,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,6.5],[3.5,5.5],[4.5,4.5],[5.5,3.5],[6.5,2.5],[7.5,1.5],[8.5,0.5]],"color":"#67F067","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,2.9],[2.5,3.5],[2.5,4.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[2.9,2.5],[3.5,2.5],[4.5,2.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,5.9],[5.5,6.5],[5.5,7.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":0.83,"height":0.83,"rounded":true,"stroke":"#a1a1a1","fill":"#ffffff","thickness":5,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[5.9,5.5],[6.5,5.5],[7.5,5.5]],"color":"#a1a1a1","thickness":5,"headLength":0.3,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"X","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,8],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"X","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"X","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"V","textColor":"#000000","thickness":0,"fontSize":25}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,9.5],"width":0.8,"height":0.8,"rounded":false,"text":"40","textColor":"#000000","thickness":0,"fontSize":32}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[5.8,9.2],[5.958,9.042]],"color":"#000000","thickness":2,"headLength":0.156}}
```

Normal Sudoku Rules Apply.
Thermos: Digits must decrease from the bulb.
German Whispers: Adjacent digits along the green line must add to a total of at least 8.
Killer Cage: Digits is a killer cage must repeat and cannot total the value in the corner.
X: Digits with an X between them must add to 13.
V: Digits with a V between them must add to 7. 
Arrows: The digits along an arrow subtract in some order to the digit in the circle. 
Little Killer: Digits along the indicated diagonal multiply to the value given.
