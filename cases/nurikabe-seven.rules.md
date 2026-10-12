---
format: open-rules
title: Nurikabe Seven
setter: Blobz
source: https://sudokupad.app/blobz/nurikabe-seven
case: https://sudoku-sleuth.com/cases/nurikabe-seven
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 7
  cols: 7
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7
unique-8: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
unique-9: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2
unique-10: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3
unique-11: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
unique-12: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
unique-13: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6
unique-14: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
kropki-1: kropki r4c1-r5c1 colour "black"
kropki-2: kropki r2c7-r3c7 colour "black"
kropki-3: kropki r2c3-r2c4 colour "black"
kropki-4: kropki r6c2-r7c2 colour "black"
kropki-5: kropki r1c5-r2c5 colour "black"
kropki-6: kropki r4c6-r5c6 colour "black"
kropki-7: kropki r3c1-r3c2 colour "black"
kropki-8: kropki r5c3-r6c3 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[34]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[20]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[9]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[45]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[15]}}
```

Normal latin square rules apply: place the digits 1-7 in every row and column.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island.

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; the digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

Black dots separate an island cell and a waterway cell where the digit in one is double the digit in the other.

Every island contains a set of consecutive digits in any order, without repeats.
