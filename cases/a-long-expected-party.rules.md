---
format: open-rules
title: A Long-Expected Party
setter: Blobz
source: https://sudokupad.app/blobz/a-long-expected-party
case: https://sudoku-sleuth.com/cases/a-long-expected-party
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c4=1 r3c3=1 r3c6=3 r4c2=1 r4c7=3
exported: 775f99a7dec47e74e8952db0c0347730
---

```rules
sudoku 9x9
cage-1: cage r9c7-r9c8-r9c9 total 10 connected true
cage-2: cage r9c1-r9c2-r9c3 total 18 connected true
slow-thermo-1: slow-thermo r9c5-r8c5-r7c4-r6c3-r5c2-r4c1-r3c1
slow-thermo-2: slow-thermo r9c5-r8c5-r7c4-r7c3-r7c2-r6c1
slow-thermo-3: slow-thermo r9c5-r8c5-r7c5-r6c5-r5c5-r4c6-r3c7
slow-thermo-4: slow-thermo r9c5-r8c5-r7c5-r6c5-r5c5-r4c4-r3c4-r2c3-r1c3
slow-thermo-5: slow-thermo r9c5-r8c5-r7c5-r6c5-r5c5-r4c4-r3c4-r2c5
slow-thermo-6: slow-thermo r9c5-r8c5-r7c6-r6c7-r5c8
slow-thermo-7: slow-thermo r9c5-r8c5-r7c6-r7c7-r7c8-r6c9-r5c9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f132323d","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f132323d","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#f132323d","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#3434f33d","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#3434f33d","stroke":"#000000","thickness":1,"angle":0}}
```

Bilbo Baggins (Eleventy-One) and his nephew Frodo (Thirty-Three) are celebrating their joint birthday, throwing a party for the whole of Hobbiton, under the party tree.

Normal sudoku rules apply.

Digits in cages sum to the given total.

The Party Tree is a SLOW thermometer where digits either stay the same or increase, as they move away from the bulb.
