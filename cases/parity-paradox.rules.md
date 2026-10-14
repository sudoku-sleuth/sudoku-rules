---
format: open-rules
title: Parity Paradox
setter: Marty Sears
source: https://tinyurl.com/4w4bthnc
case: https://sudoku-sleuth.com/cases/parity-paradox
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0751fcb6f7b0533bd456634095a34a63
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","stroke":"#444444","thickness":0.8,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#D7B1FE","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":0.494,"height":0.494,"rounded":false,"fill":"#D7B1FE","thickness":0,"opacity":0.5,"angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,1.5],[1.5,0.5],[2.5,0.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,7.5],[2.5,8.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[2.5,2.5],[2.5,1.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,4.5],[2.5,5.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,0.5],[5.5,0.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[5.5,2.5],[5.5,1.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[3.5,6.5],[5.5,6.5],[5.5,8.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[5.5,5.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,1.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,7.5],[7.5,7.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5],[8.5,7.5],[8.5,6.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,2.5],[8.5,0.5],[7.5,0.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,5.5],[8.5,3.5],[6.5,3.5],[6.5,5.5]],"color":"#65DDFF","thickness":10.1,"rounded":true}}
```

Normal sudoku rules apply.

Each line within a 3x3 box has the same total, which is displayed in yellow in that box. (2-digit yellow totals read from left to right.)

The digit in the purple diamond  indicates how many of the yellow totals have the same parity (oddness/evenness) as itself.
