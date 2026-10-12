---
format: open-rules
title: Shuriken Shikaku
setter: Blobz
source: https://sudokupad.app/blobz/shuriken-shikaku
case: https://sudoku-sleuth.com/cases/shuriken-shikaku
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1-r2c2 total 23 connected true
cage-2: cage r8c8-r8c9-r9c8-r9c9 total 23 connected true
thermo-1: thermo r2c2-r1c3-r1c2-r2c1
thermo-2: thermo r3c1-r4c1-r5c1-r4c2
thermo-3: thermo r6c1-r5c2-r6c2-r7c3
thermo-4: thermo r7c2-r8c1-r9c2-r9c1
thermo-5: thermo r8c2-r9c3-r8c3
thermo-6: thermo r8c6-r8c5-r9c4-r8c4
thermo-7: thermo r9c8-r9c7-r9c6-r9c5
thermo-8: thermo r8c7-r8c8-r9c9
thermo-9: thermo r7c8-r8c9-r7c9
thermo-10: thermo r7c4-r7c5-r6c6-r6c7
thermo-11: thermo r5c4-r6c5-r6c4-r5c3
thermo-12: thermo r4c3-r3c3-r2c3-r1c4-r2c4
thermo-13: thermo r1c5-r2c5-r2c6-r3c5
thermo-14: thermo r1c8-r1c7-r2c7-r1c6
thermo-15: thermo r2c9-r1c9-r2c8-r3c9
thermo-16: thermo r5c9-r4c9-r4c8-r3c8
thermo-17: thermo r5c7-r5c8-r6c9-r6c8
thermo-18: thermo r3c6-r4c5-r5c6-r4c6
```

```drawing
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#ffffff5b","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal sudoku rules apply.

Digits in cages sum to the value shown.

Digits on thermometers must increase from the bulb end.

The grid is completely covered by non-overlapping rectangles such that each rectangle contains exactly one circle, and the digit in the circle denotes the number of cells in that rectangle. A 1x1 single cell with a circle is valid. Digits may repeat in rectangles if allowed by other rules.
