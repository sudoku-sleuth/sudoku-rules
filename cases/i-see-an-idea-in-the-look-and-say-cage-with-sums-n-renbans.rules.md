---
format: open-rules
title: I see an idea in the look and say cage with sums 'n' renbans
setter: Chip Sounder
source: https://sudokupad.app/7o884syst3
case: https://sudoku-sleuth.com/cases/i-see-an-idea-in-the-look-and-say-cage-with-sums-n-renbans
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c1=1
exported: a8177f81017ffc9c6665c4b991766c6d
---

```rules
sudoku 9x9
kropki r3c5-r3c6 black
renban-1: renban r2c7-r3c7-r4c7-r5c7-r6c7
renban-2: renban r6c9-r7c9-r8c9-r9c9
renban-3: renban r6c4-r6c5-r6c6-r5c6
renban-4: renban r7c2-r8c2-r9c2-r9c3
region-sum-1: region-sum r3c6-r2c6-r1c6-r1c5-r2c5-r3c5-r1c4-r1c3-r2c3-r3c3-r4c3-r5c3-r5c2-r5c1-r2c2-r2c1 segments [["r3c6","r2c6","r1c6","r1c5","r2c5","r3c5","r1c4"],["r1c3","r2c3","r3c3","r2c2","r2c1"],["r4c3","r5c3","r5c2","r5c1"]]
region-sum-2: region-sum r9c5-r8c5-r8c6-r9c7-r9c8-r8c8-r7c9 segments [["r9c5","r8c5","r8c6"],["r9c7","r9c8","r8c8","r7c9"]]
region-sum-3: region-sum r3c8-r4c9-r5c8 segments [["r3c8"],["r4c9","r5c8"]]
little-killer-1: little-killer r4c1-r5c2-r6c3-r7c4-r8c5-r9c6 sum 20
little-killer-2: little-killer r5c9-r6c8-r7c7-r8c6-r9c5 sum 24
little-killer-3: little-killer r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 sum 39
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[0,1,2,3,4,5,6,7,8,9,13,15,18,19,24,27,31,33,36,37,38,39,40,42,47,51,52,55,56,57,58,59,60,65,69,78],"label":"9451"}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Digits in a cage may repeat. Read the clue out loud, which describes the nature of the cage. E.g. 1522 says there is “one five and two two(s)” in the cage.
Digits on a purple renban must form a set of non-repeating consecutive digits that may appear in any order.
Box borders separate the blue line into equal sums.
Clues outside the grid give the sum of the digits along the indicated diagonal, digits may repeat.
Cells separated by a black dot has one digit double the other (1:2 ratio).
