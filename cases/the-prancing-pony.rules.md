---
format: open-rules
title: The Prancing Pony
setter: Blobz
source: https://sudokupad.app/blobz/the-prancing-pony
case: https://sudoku-sleuth.com/cases/the-prancing-pony
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c2=3 r2c8=5 r3c1=5 r7c9=2 r8c2=5 r8c8=7
---

```rules
sudoku 9x9
cage-1: cage r1c1-r1c2-r2c1 total 19 connected true
cage-2: cage r1c8-r1c9-r2c9 total 10 connected true
cage-3: cage r8c9-r9c8-r9c9 total 12 connected true
cage-4: cage r8c1-r9c1-r9c2 total 7 connected true
cage-5: cage r5c3-r5c4 total 12 connected true
cage-6: cage r5c8-r5c9 total 7 connected true
cage-7: cage r3c5-r3c6 total 8 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":45}}
```

The Hobbits are heading for the town of Bree which lies at the crossroads of the Greenway (north to south) and the East Road (west to east). There they plan to stay the night at The Prancing Pony before continuing their journey onward. But the Black Riders are abroad and closing in...

Normal sudoku rules apply.

Digits in cages sum to the given total.

The positions of the Black Riders (the digits 1 to 9, once each) are marked with diamonds. No cell a chess knight's move away from a Black Rider can contain the same digit.

The placement of the Greenway, the East Road, and the town of Bree (at the intersection) must be determined by the solver.

The Greenway is formed with the digits 1 to 9, in order, in their corresponding rows: 1 in row 1, 2 in row 2, etc. The cells along the road are connected orthogonally or diagonally.

Similarly, the East Road is formed with a 1 in column 1, then a 2 in column 2, ending with a 9 in column 9. Again, cells along the road are connected orthogonally or diagonally.

The roads share exactly one cell (in box 5) where they cross. This is the location of Bree. Neither road enters any cage, nor Black Rider location.
