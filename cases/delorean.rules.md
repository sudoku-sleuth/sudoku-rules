---
format: open-rules
title: DeLorean
setter: Blobz
source: https://sudokupad.app/blobz/delorean
case: https://sudoku-sleuth.com/cases/delorean
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c3=1 r1c4=9 r1c6=8 r1c7=5
exported: 5545bb0ded2932387679cc4fee934e91
---

```rules
sudoku 9x9
kropki-1: kropki r6c6-r6c7 white
kropki-2: kropki r6c3-r6c4 white
kropki-3: kropki r6c3-r7c3 white
kropki-4: kropki r6c7-r7c7 white
kropki-5: kropki r6c2-r7c2 white
kropki-6: kropki r6c5-r7c5 white
kropki-7: kropki r6c8-r7c8 white
kropki-8: kropki r6c9-r7c9 white
kropki-9: kropki r6c8-r6c9 white
kropki-10: kropki r6c4-r6c5 white
kropki-11: kropki r7c7-r8c7 white
kropki-12: kropki r8c7-r8c8 white
kropki-13: kropki r1c9-r2c9 white
kropki-14: kropki r4c9-r5c9 white
kropki-15: kropki r4c1-r5c1 white
whispers-1: whispers r5c4-r4c4-r4c5-r5c5 gap 5
whispers-2: whispers r4c5-r4c6-r5c6 gap 5
whispers-3: whispers r4c2-r4c3-r5c3-r5c2 gap 5
whispers-4: whispers r4c8-r4c7-r5c7-r5c8 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#cccf","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,5.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[2.5,3.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,0.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,1.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,2.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,7.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,8.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,6.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,0.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,1.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,8.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[2.5,6.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[1.5,7.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,4.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,3.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,5.5]],"color":"#cccf","thickness":19.2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[22],"label":"DL","color":"#07ff","labelColor":"#07ff"}}
```

Normal sudoku rules apply.

On the "Radiation Hazard" symbols (thermometers) the digit in the centre is smaller than the other three digits on the symbol.

Along green lines, adjacent digits differ by at least 5.

White dots separate consecutive digits; not all such dots are given.
