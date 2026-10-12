---
format: open-rules
title: Spider
setter: EPH
source: https://tinyurl.com/yurhbbpo
case: https://sudoku-sleuth.com/cases/spider
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 colour "black"
kropki-2: kropki r2c7-r2c8 colour "black"
kropki-3: kropki r8c2-r8c3 colour "black"
kropki-4: kropki r9c7-r9c8 colour "black"
whispers r5c6-r6c6-r6c5-r6c4-r5c4-r4c4-r4c5-r4c6 gap 4
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.332,4.5],[1.5,4.5]],"color":"#eea00f","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.668,4.5],[7.5,4.5]],"color":"#eea00f","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,5.668],[4.5,7.5]],"color":"#eea00f","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,3.332],[4.5,1.5]],"color":"#eea00f","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.381,3.381],[1.5,1.5]],"color":"#eea00f","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,5.668],[3.5,6.5],[2.5,7.5]],"color":"#eea00f","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.668,5.5],[6.5,5.5],[7.5,6.5]],"color":"#eea00f","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,3.332],[5.5,2.5],[6.5,1.5]],"color":"#eea00f","thickness":3,"headLength":0.3,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#dd4100","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#dd4100","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#dd4100","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#dd4100","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#dd4100","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#dd4100","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,5.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#dd4100","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.36,"height":0.36,"rounded":true,"fill":"#dd4100","thickness":0,"opacity":0.5}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.
The spider's body (thick line) is a Dutch whisper line: adjacent digits on the line must differ by at least 4.
The spider's legs are arrows: digits on a thin line must sum to the value in the circular joint.
Flies (black dots) separate cells whose digits are in a 1:2 ratio.
