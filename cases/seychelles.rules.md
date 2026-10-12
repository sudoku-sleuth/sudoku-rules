---
format: open-rules
title: Seychelles
setter: Blobz
source: https://sudokupad.app/blobz/seychelles
case: https://sudoku-sleuth.com/cases/seychelles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c4=6 r1c7=7 r4c3=5 r5c7=5 r7c1=1 r7c5=4 r8c3=3 r8c7=9 r9c1=2 r9c6=6
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":0.82,"height":0.82,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[5]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[19]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[26]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[32]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[31]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[30]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[13]}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[52]}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[61]}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[70]}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[67]}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[75]}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[50]}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[46]}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[45]}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[36]}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[64]}}
```

Normal sudoku rules apply.

Divide the grid into a number of islands -- orthogonally connected groups of cells. Every island contains a single circled cell; the digit in the circle indicates the number of cells making up the island. 

The islands are surrounded by a waterway -- a single orthogonally connected group of cells. All caged cells are waterway cells; the digit in a caged cell indicates how many waterway cells are seen orthogonally from that position, including itself (island cells block vision). The waterway cannot form any 2x2 areas.

Digits do not repeat on islands.
