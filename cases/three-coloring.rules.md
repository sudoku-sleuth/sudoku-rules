---
format: open-rules
title: Three Coloring
setter: Blobz
source: https://sudokupad.app/5sumdn2k7y
case: https://sudoku-sleuth.com/cases/three-coloring
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=1 r2c9=4 r4c5=4 r6c7=1
exported: 94ecfc2b2a0599c4ea7a9862aa5eaf51
---

```rules
sudoku 9x9
parity-cells-1: parity-cells r1c4-r7c2-r6c6-r5c2-r2c3-r2c5-r7c5-r4c6-r3c7-r9c6-r7c8-r6c1 parity "odd"
parity-cells-2: parity-cells r1c6-r5c1-r8c4-r8c7-r4c2-r7c6-r4c3-r3c4-r6c8-r5c8-r3c5-r2c7 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[74],"label":"25","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[6],"label":"26","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[76],"label":"23","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[23],"label":"26","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[67],"label":"30","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[19],"label":"26","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[62],"label":"23","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[14],"label":"27","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[48],"label":"17","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"cage","cells":[60],"label":"23","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"cage","cells":[46],"label":"31","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"cage","cells":[35],"label":"25","color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply.

Cells marked with grey circles contain odd digits. Cells marked with grey squares contain even digits. 

The indicated 60-cell white region contains one each of the twelve standard pentominoes (no repeats by rotation or reflection).

Each pentomino encloses exactly one grey square, one grey circle, and one caged cell.

The arrangement of pentominoes must be deduced.

Once placed, the pentominoes can be shaded with just 3 colors, such that no two pentominoes of the same color touch each other orthogonally or diagonally. All pentominoes of the same color contain a digit in common that lives in the caged cell. For one group the digit is 7, the next group 8, and the last group 9. 

Additionally, each pentomino behaves like a 5-cell killer cage: digits do not repeat and must sum to the value shown in the corner of the caged cell.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
