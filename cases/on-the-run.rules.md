---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r2c1
    - r2c2
    - r3c1
    - r3c2
format: open-rules
title: On The “Run“
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala/on-the-run
case: https://sudoku-sleuth.com/cases/on-the-run
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 6dc1770926616da0762661171439d40d
---

```rules
sudoku 9x9
region-sum-1: region-sum r6c2-r5c3-r4c3-r3c3-r2c4-r3c5-r3c4 segments [["r6c2","r5c3","r4c3"],["r3c3"],["r2c4","r3c5","r3c4"]]
region-sum-2: region-sum r6c9-r5c8-r6c7-r5c6-r4c6-r3c7-r2c8 segments [["r6c9","r5c8","r6c7"],["r5c6","r4c6"],["r3c7","r2c8"]]
region-sum-3: region-sum r6c6-r5c7-r4c7-r3c6-r2c6 segments [["r6c6"],["r5c7","r4c7"],["r3c6","r2c6"]]
region-sum-4: region-sum r3c1-r4c2-r3c2-r2c3-r2c2 segments [["r3c1"],["r4c2"],["r3c2","r2c3","r2c2"]]
region-sum-5: region-sum r5c9-r6c8-r7c8-r8c7-r7c7 segments [["r5c9","r6c8"],["r7c8","r8c7","r7c7"]]
region-sum-6: region-sum r9c3-r9c4-r8c5-r7c5-r6c4 segments [["r9c3"],["r9c4","r8c5","r7c5"],["r6c4"]]
region-sum-7: region-sum r4c4-r5c4-r6c3-r7c3-r8c2 segments [["r4c4","r5c4"],["r6c3"],["r7c3","r8c2"]]
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [1,3,5,7]
quadruple-2: quadruple r4c1-r4c2-r5c1-r5c2 digits [3,7]
quadruple-3: quadruple r7c1-r7c2-r8c1-r8c2 digits [5]
quadruple-4: quadruple r4c8-r4c9-r5c8-r5c9 digits [6]
quadruple-5: quadruple r7c4-r7c5-r8c4-r8c5 digits [6]
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8],"width":0,"height":1.19,"rounded":true,"thickness":0,"angle":0,"text":"🐢","textColor":"#000000","fontSize":45.4,"textStroke":"#ffffff","textStrokeWidth":1}}
```

Julius, one of our other pets, escaped! This has happened before and Nala is usually the one to find him somewhere in our backyard. Today it’s foggy and she might appreciate some help with the search.

Normal Sudoku rules apply: Place the digits 1-9 in every row, column and box exactly once each. 

All Lines are region sum lines. Digits along a region sum line sum to the same digit N for each Box the line passes through. If a line enters the same box twice, each segment is summed independently. Each line has its own color. Elements of the same color are connected. 

Every digit that appears in a circle (Quad Clue) must also appear in at least one of its 4 surrounding cells. 

Additionally the grid is partially covered in fog. Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
