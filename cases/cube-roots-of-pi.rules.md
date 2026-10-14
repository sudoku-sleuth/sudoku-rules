---
format: open-rules
title: Cube Roots of Pi
setter: Blobz
source: https://sudokupad.app/blobz/cube-roots-of-pi
case: https://sudoku-sleuth.com/cases/cube-roots-of-pi
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c1=3 r4c2=3 r7c3=3
exported: 32bac59929da5c19d1e156b7b33d722b
---

```rules
sudoku 9x9
cage-1: cage r7c1-r8c1 connected true
cage-2: cage r4c7-r4c8 connected true
region-sum-1: region-sum r2c1-r3c2-r2c3-r1c4-r1c5-r1c6-r1c7 segments [["r2c1","r3c2","r2c3"],["r1c4","r1c5","r1c6"],["r1c7"]]
region-sum-2: region-sum r5c2-r6c3-r5c4-r4c5-r4c6-r4c7-r4c8 segments [["r5c2","r6c3"],["r5c4","r4c5","r4c6"],["r4c7","r4c8"]]
region-sum-3: region-sum r8c3-r9c4-r8c5-r7c6-r7c7-r7c8-r7c9 segments [["r8c3"],["r9c4","r8c5","r7c6"],["r7c7","r7c8","r7c9"]]
renban-1: renban r3c4-r2c4-r2c5-r2c6-r3c6
renban-2: renban r6c5-r5c5-r5c6-r5c7-r6c7
renban-3: renban r9c6-r8c6-r8c7-r8c8-r9c8
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[78]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[50]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[73]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[1]}}
```

Normal sudoku rules apply.

Box borders divide blue lines (√) into segments with the same sum.

Along pink lines (π), digits form a non-repeating consecutive sequence in any order.

Each cage's sum is a perfect cube.
