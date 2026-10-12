---
format: open-rules
title: Coastal Kropki
setter: Blobz
source: https://sudokupad.app/blobz/coastal-kropki
case: https://sudoku-sleuth.com/cases/coastal-kropki
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c6-r1c7 colour "black"
kropki-2: kropki r5c5-r5c6 colour "black"
kropki-3: kropki r7c3-r7c4 colour "black"
kropki-4: kropki r7c7-r7c8 colour "black"
kropki-5: kropki r6c2-r6c3 colour "black"
kropki-6: kropki r3c2-r3c3 colour "black"
kropki-7: kropki r2c1-r2c2 colour "black"
kropki-8: kropki r5c7-r5c8 colour "black"
kropki-9: kropki r8c8-r9c8 colour "black"
kropki-10: kropki r3c5-r4c5 colour "black"
kropki-11: kropki r7c1-r7c2 colour "white"
kropki-12: kropki r6c9-r7c9 colour "white"
kropki-13: kropki r3c8-r3c9 colour "white"
kropki-14: kropki r9c4-r9c5 colour "white"
kropki-15: kropki r8c1-r9c1 colour "white"
kropki-16: kropki r1c3-r1c4 colour "white"
kropki-17: kropki r1c8-r2c8 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[5]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[57]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[40]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[19]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[60]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[66]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[46]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[16]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[25]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[18]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[15]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[48]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[74]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[54]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[67]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island.

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; The digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

All dots separate an island cell and a waterway cell. Additionally, white dots separate consecutive digits; black dots separate digits where one is double the other.
