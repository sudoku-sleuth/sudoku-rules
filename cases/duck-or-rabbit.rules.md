---
format: open-rules
title: Duck Or Rabbit?
setter: Jobo
source: https://sudokupad.app/cxrif29cwu
case: https://sudoku-sleuth.com/cases/duck-or-rabbit
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
arrow-1: arrow r8c1-r7c1-r6c1 bulb ["r9c1"]
arrow-2: arrow r9c2-r9c3-r9c4 bulb ["r9c1"]
whispers-1: whispers r3c8-r4c9-r4c8-r4c7-r4c8-r4c9-r5c8 gap 5
whispers-2: whispers r5c3-r5c4-r5c5-r4c5-r4c4-r4c3-r3c2 gap 5
whispers-3: whispers r5c2-r6c2-r7c2-r7c3-r7c4-r7c5-r7c6-r6c7-r5c7-r5c8 gap 5
whispers-4: whispers r3c8-r3c7-r2c6-r2c5-r3c4-r3c3-r2c2 gap 5
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,2.214],[7.5,2.214],[7.5,2.786],[6.5,2.786]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.071,2.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.214,1.214],[2.214,1.214],[2.5,1.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.214,1.214],[1.214,1.214],[1.5,1.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.42,"height":0.42,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.18,"height":0.18,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[9.5,2],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"DUCK","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,-0.5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":90,"text":"RABBIT","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Adjacent digits along a green line must differ by at least 5.

Digits separated by the eye must sum to 10.
