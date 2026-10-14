---
format: open-rules
title: Boom Box
setter: Will Power
source: https://sudokupad.app/ym2oopa35u
case: https://sudoku-sleuth.com/cases/boom-box
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 85f75fd91385e5c5797451dfcd5e5cff
---

```rules
sudoku 9x9
cage-1: cage r3c6-r4c6 total 15 connected true
cage-2: cage r7c2-r8c1-r8c2 total 14 connected true
cage-3: cage r9c1-r9c2 total 6 connected true
cage-4: cage r8c7-r8c8-r8c9 total 9 connected true
cage-5: cage r1c2-r1c3 total 7 connected true
cage-6: cage r2c1-r2c2 total 7 connected true
renban-1: renban r4c4-r4c5-r4c6-r5c6-r6c6-r6c5-r6c4-r5c4
renban-2: renban r2c4-r3c3-r4c2
renban-3: renban r2c6-r3c7-r4c8
renban-4: renban r7c9-r8c8-r9c7
renban-5: renban r1c2-r2c1
renban-6: renban r1c8-r2c9
renban-7: renban r7c1-r8c2-r9c3
renban-8: renban r8c9-r9c8
renban-9: renban r2c3-r3c2
renban-10: renban r1c7-r2c8-r3c9
renban-11: renban r7c8-r8c7
renban-12: renban r8c1-r9c2
little-killer-1: little-killer r1c5-r2c4-r3c3-r4c2-r5c1 sum 28
little-killer-2: little-killer r1c3-r2c2-r3c1 sum 9
little-killer-3: little-killer r1c2-r2c1 sum 6
little-killer-4: little-killer r2c9-r1c8 sum 10
little-killer-5: little-killer r3c9-r2c8-r1c7 sum 13
little-killer-6: little-killer r5c9-r4c8-r3c7-r2c6-r1c5 sum 28
little-killer-7: little-killer r6c1-r7c2-r8c3-r9c4 sum 25
little-killer-8: little-killer r7c1-r8c2-r9c3 sum 18
little-killer-9: little-killer r8c1-r9c2 sum 7
little-killer-10: little-killer r9c7-r8c8-r7c9 sum 13
little-killer-11: little-killer r9c8-r8c9 sum 11
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[6.5,5.5]],"color":"#9CFFF7","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,2.5]],"color":"#9CFFF7","thickness":8,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,1.5],[2.5,0.5]],"color":"#9CFFF7","thickness":8,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5]],"color":"#9CFFF7","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. LITTLE KILLER- Numbers outside the grid are the sum of the indicated diagonal. BROKEN RENBAN LINES+ The numbers 1-9 all appear, once each, on EACH SET of colored lines (Gray, Light Blue, Dark Blue and Red). RENBAN- Numbers on the purple square are a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
