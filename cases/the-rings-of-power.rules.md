---
format: open-rules
title: The Rings of Power
setter: Blobz
source: https://sudokupad.app/blobz/the-rings-of-power
case: https://sudoku-sleuth.com/cases/the-rings-of-power
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c4=4 r3c6=5 r4c3=6 r6c7=5 r7c4=2 r9c6=6
exported: 85303d6f0f6df35db4e9c7337e32b334
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 9 connected true
cage-2: cage r7c7-r7c8-r8c7 total 14 connected true
cage-3: cage r7c2-r7c3-r8c3 total 17 connected true
cage-4: cage r2c7-r3c7-r3c8 total 23 connected true
cage-5: cage r4c2-r5c2-r6c2 total 7 connected true
cage-6: cage r4c8-r5c8-r6c8 total 11 connected true
cage-7: cage r2c4-r2c5-r2c6 total 12 connected true
cage-8: cage r8c4-r8c5-r8c6 total 11 connected true
cage-9: cage r5c6-r6c6 total 15 connected true
cage-10: cage r4c4-r5c4 total 14 connected true
cage-11: cage r6c4-r6c5 total 7 connected true
cage-12: cage r4c5-r4c6 total 6 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":0.82,"height":0.82,"rounded":true,"stroke":"#f5bf00","thickness":8,"angle":0}}
```

Three Rings for the Elven-kings under the sky,
  Seven for the Dwarf-lords in their halls of stone,
Nine for Mortal Men doomed to die,
  One for the Dark Lord on his dark throne 
In the Land of Mordor where the Shadows lie...

Normal sudoku rules apply.

A digit in a ring indicates how many rings contain that digit.

Digits in a cage must sum to the total shown.
