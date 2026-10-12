---
format: open-rules
title: Seventeen Pentominoes
setter: Blobz
source: https://sudokupad.app/1dkn9obdih
case: https://sudoku-sleuth.com/cases/seventeen-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c1=4 r3c5=8 r4c4=9 r4c6=5 r6c4=7 r6c6=4 r7c5=3 r9c9=5
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,8.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[1.5,3.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,5.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,0.5]],"color":"#CFCFCF","thickness":16,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,3.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,7.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
```

Normal sudoku rules apply.

Grey lines contain repeated digits. Pink lines contain consecutive digits.

Place 8 different pentominoes (no repeats by reflection or rotation) in the grid such that each is completely enclosed within a box, each touches its neighbours diagonally along a grey or pink line only, and each contains digits that sum to 17. No pentominoes touch orthogonally. 

For example, r3c8 is part of the pentomino in box 3, touching r4c9 diagonally, which is part of the pentomino in box 6. Neither r3c9 nor r4c8 can be part of a pentomino.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
