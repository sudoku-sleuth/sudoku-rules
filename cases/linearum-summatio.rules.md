---
format: open-rules
title: Linearum Summatio
setter: Dr Logic
source: https://sudokupad.app/ce5vee2yck
case: https://sudoku-sleuth.com/cases/linearum-summatio
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 2c68d73972d14fb2133395d169df3e71
---

```rules
sudoku 9x9
cage r4c5-r5c5-r5c6 connected true
kropki-1: kropki r6c5-r6c6 white
kropki-2: kropki r1c8-r1c9 white
kropki-3: kropki r1c5-r1c6 white
kropki-4: kropki r7c5-r7c6 white
kropki-5: kropki r5c1-r6c1 white
whispers-1: whispers r1c9-r2c9-r3c9-r4c9-r5c9 gap 5
whispers-2: whispers r2c9-r3c8 gap 5
region-sum-1: region-sum r5c3-r4c3-r4c2-r4c1-r3c2-r2c2-r2c3 segments [["r5c3","r4c3","r4c2","r4c1"],["r3c2","r2c2","r2c3"]]
region-sum-2: region-sum r8c1-r8c2-r8c3-r9c4-r9c5 segments [["r8c1","r8c2","r8c3"],["r9c4","r9c5"]]
region-sum-3: region-sum r6c8-r6c7-r7c6-r8c6 segments [["r6c8","r6c7"],["r7c6","r8c6"]]
region-sum-4: region-sum r2c6-r3c7-r4c8 segments [["r2c6"],["r3c7"],["r4c8"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f00f","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f00f","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,0.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,2.5],"width":0.22,"height":0.22,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal sudoku rules apply.

Red lines are both 'zipper' and 'region sum lines', they obey both of the following:

Zipper: Digits equidistant from the marked centre of a zipper line must sum to the digit placed at the centre (if there is no marked centre, the sum is to be determined).

Region Sum Line: Box borders divide red and blue lines into regions that all sum to the same number. This sum is not necessarily the same for different lines.

German Whispers lines: Alternating digits along green German Whispers lines differ by at least 5.

Digits in a killer cage sum to the value in the top left (if given).

Cells separated by a white dot are consecutive.

No negative constraint on dots.

The digits on each instance of each constraint (except from the white dot!) must sum to the same number, this number is to be deduced by the solver.
