---
format: open-rules
title: Square Roots
setter: Jobo
source: ""
case: https://sudoku-sleuth.com/cases/square-roots
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c2=1
---

```rules
sudoku 9x9
cage-1: cage r4c3-r5c3 connected true
cage-2: cage r3c6-r4c6 connected true
cage-3: cage r6c5-r7c5 connected true
cage-4: cage r8c7-r9c7 connected true
cage-5: cage r5c8-r6c8 connected true
cage-6: cage r2c9-r3c9 connected true
thermo-1: thermo r2c7-r3c8-r2c8-r1c8-r1c9
thermo-2: thermo r5c6-r6c7-r5c7-r4c7-r4c8
thermo-3: thermo r8c5-r9c6-r8c6-r7c6-r7c7
thermo-4: thermo r6c3-r7c4-r6c4-r5c4-r5c5
thermo-5: thermo r3c4-r4c5-r3c5-r2c5-r2c6
thermo-6: thermo r4c1-r5c2-r4c2-r3c2-r3c3
pair-1: pair r9c8-r9c9 relation {"op":"sum","value":5}
pair-2: pair r8c8-r8c9 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#BBCCFF","stroke":"#BBCCFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#BBCCFF","stroke":"#BBCCFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#BBCCFF","stroke":"#BBCCFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#BBCCFF","stroke":"#BBCCFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#BBCCFF","stroke":"#BBCCFF","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.4,"height":0.4,"rounded":true,"fill":"#BBCCFF","stroke":"#BBCCFF","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits in thermometer bulbs must be equal to the square root of the sum of the corresponding cage.

Digits separated by a V must sum to 5. Not all V are given.
