---
format: open-rules
title: Six Islands
setter: Blobz
source: https://sudokupad.app/blobz/six-islands
case: https://sudoku-sleuth.com/cases/six-islands
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c3=2 r4c6=4 r5c2=1 r5c9=6 r7c8=3 r8c2=5
exported: 1835aed12477930643a052a8f82533e9
---

```rules
sudoku 9x9
little-killer-1: little-killer r1c3-r2c2-r3c1 sum 6
little-killer-2: little-killer r1c4-r2c3-r3c2-r4c1 sum 7
little-killer-3: little-killer r1c7-r2c8-r3c9 sum 5
little-killer-4: little-killer r1c7-r2c6-r3c5-r4c4-r5c3-r6c2-r7c1 sum 13
little-killer-5: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 9
little-killer-6: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 11
little-killer-7: little-killer r5c1-r6c2-r7c3-r8c4-r9c5 sum 20
little-killer-8: little-killer r6c1-r7c2-r8c3-r9c4 sum 1
little-killer-9: little-killer r7c9-r8c8-r9c7 sum 11
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
```

Sudoku rules (sort of) apply -- No row, column, or box contains the same digit more than once.

There are six islands (orthogonally connected regions) each containing the digits 1-6 with no repeats. Each of the given digits belong to a different island from the others.

The islands are separated by a single, orthogonally connected waterway. Note that islands do not touch diagonally, and that the waterway does not contain any 2x2 area. All water cells are EMPTY (contain no digits).

Circled digits (all land cells) indicate exactly how many adjacent cells (up to 8) contain water, and ALL such cells are indicated; that is, non-circled digits will NEVER have that number of adjacent water cells.

The clues outside the grid indicate the sum of island cells along the indicated diagonals.
