---
format: open-rules
title: Sticks and Stones
setter: The Bard
source: https://sudokupad.app/d8a7a4gq8n
case: https://sudoku-sleuth.com/cases/sticks-and-stones
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r4c4=3
exported: 2f1687eb986a05f80e69188c9c68063c
---

```rules
sudoku 9x9
arrow-1: arrow r3c6-r4c7-r5c7 bulb ["r3c5"]
arrow-2: arrow r7c4-r6c3-r5c3 bulb ["r7c5"]
arrow-3: arrow r5c9-r5c8-r6c9 bulb ["r4c8"]
arrow-4: arrow r5c1-r5c2-r4c1 bulb ["r6c2"]
arrow-5: arrow r8c2-r9c3 bulb ["r7c1"]
arrow-6: arrow r2c8-r1c7 bulb ["r3c9"]
arrow-7: arrow r7c7-r8c8 bulb ["r6c6"]
arrow-8: arrow r2c6-r1c7 bulb ["r2c5"]
parity-cells r8c9-r8c8-r9c8-r9c9-r1c1-r1c2-r2c2-r2c1 parity "even"
```

```drawing
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,4.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,4.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.65,"height":0.65,"rounded":true,"fill":"#CFCFCF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000"}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Odd, Even: Digits in a grey square are even, and digits in a grey circle are odd.  
Arrows: digits along the arrow add up to the value in the circle.
