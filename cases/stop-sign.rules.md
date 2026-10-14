---
format: open-rules
title: Stop Sign
setter: Blobz
source: https://sudokupad.app/blobz/stop-sign
case: https://sudoku-sleuth.com/cases/stop-sign
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c6=1 r7c4=1
exported: 4f117a5e78361320dae8450b01446f37
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 15 connected true
cage-2: cage r8c1-r8c2-r9c1-r9c2 total 13 connected true
cage-3: cage r8c8-r8c9-r9c8-r9c9 total 12 connected true
cage-4: cage r1c8-r1c9-r2c8-r2c9 total 17 connected true
cage-5: cage r3c5-r4c5-r5c4-r5c5-r5c6-r6c5-r7c5 total 36 connected true
cage-6: cage r4c2-r5c2-r6c2 total 20 connected true
cage-7: cage r4c8-r5c8-r6c8 total 16 connected true
cage-8: cage r1c4-r1c5-r1c6 total 15 connected true
cage-9: cage r9c4-r9c5-r9c6 total 19 connected true
slow-thermo-1: slow-thermo r5c2-r4c2-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8
slow-thermo-2: slow-thermo r5c8-r6c8-r7c7-r8c6-r8c5-r8c4-r7c3-r6c2
slow-thermo-3: slow-thermo r9c8-r9c9-r8c9
slow-thermo-4: slow-thermo r5c3-r6c4-r7c5
slow-thermo-5: slow-thermo r3c5-r4c6-r5c7
slow-thermo-6: slow-thermo r6c1-r7c2
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,2]
quadruple-2: quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [1,2]
quadruple-4: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,2]
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#9ed8ea9c","stroke":"#000000","thickness":1,"angle":0}}
```

Normal sudoku rules apply.

Digits in cages do not repeat, and must sum to the given total.

Along SLOW thermometers, digits either stay the same or increase as they move away from the bulb.

A digit in a blue circle indicates how many circles contain that digit.

Digits in white circles must appear in cells touching that circle.
