---
format: open-rules
title: REM Ban
setter: Marty Sears
source: https://tinyurl.com/2p9ddaff
case: https://sudoku-sleuth.com/cases/rem-ban
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c2=6 r6c9=1 r8c9=7
exported: e9bb42b893934a52a4b0671ef8feaf4d
---

```rules
sudoku 9x9
renban-1: renban r1c1-r2c1-r2c2-r3c2-r4c2-r4c1-r5c1-r6c1
renban-2: renban r1c3-r2c3
renban-3: renban r1c4-r2c4
renban-4: renban r1c5-r2c6-r1c7
renban-5: renban r4c7-r3c7-r2c7-r2c8-r3c8-r4c8
renban-6: renban r2c5-r3c5-r4c5-r4c6-r5c6-r5c7-r5c8
renban-7: renban r5c9-r6c8
renban-8: renban r7c8-r8c8-r8c7-r7c7-r6c7
renban-9: renban r5c2-r5c3-r5c4-r6c4-r6c5-r7c5-r8c5
renban-10: renban r6c3-r6c2
renban-11: renban r7c4-r7c3-r7c2
renban-12: renban r7c1-r8c2-r8c3-r8c4-r9c4-r9c5-r9c6-r9c7
```

```drawing
- {"id":"drawing-73","rules":[],"visual":{"kind":"line","points":[[3.2,2.7],[2.7,3.2]],"color":"#000000","thickness":4,"rounded":true}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"line","points":[[3.3,2.8],[2.8,3.3]],"color":"#000000","thickness":4,"rounded":true}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"line","points":[[3.2,4.7],[2.7,5.2]],"color":"#000000","thickness":4,"rounded":true}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"line","points":[[2.8,5.3],[3.3,4.8]],"color":"#000000","thickness":4,"rounded":true}}
```

1-9 must be placed in each row and column. No 3s are allowed in the corner cells, or in the spotlight (the white central area). A purple line contains a set of non-repeating consecutive digits, in any order. Diagonally adjacent identical digits are connected by an equals sign. All such possible signs are given.
