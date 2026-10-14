---
format: open-rules
title: You'll Know It When You See It
setter: EPH
source: https://sudokupad.app/6xlnyn5fy2
case: https://sudoku-sleuth.com/cases/you-ll-know-it-when-you-see-it
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: aa9621e037e0caa1f1256e1a5053faaa
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r1c2-r1c3-r1c4-r1c5-r1c6 gap 5
whispers-2: whispers r3c4-r3c5-r3c6-r3c7-r3c8-r3c9 gap 5
whispers-3: whispers r6c1-r6c2-r6c3-r6c4-r6c5-r6c6 gap 5
whispers-4: whispers r8c6-r8c7-r8c8-r8c9 gap 5
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.708,0.5],[0.958,0.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.708,2.5],[0.958,2.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.708,7.5],[0.958,7.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,3.292],[0.5,3.042]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,5.292],[0.5,5.042]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.5,8.292],[1.5,8.042]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,1.708],[7.5,1.958]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.292,0.5],[5.042,0.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.292,1.5],[6.042,1.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.292,1.5],[7.042,1.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[8.292,0.5],[8.042,0.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[8.292,4.5],[8.042,4.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.292,5.5],[7.042,5.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.292,6.5],[7.042,6.5]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[4.5,6.708],[4.5,6.958]],"color":"#000000","thickness":1.28,"headLength":0.125,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Whisper-5: adjacent digits on a green line must differ by at least 5.

N-Mates: a digit in a cell with an arrow gives the distance (in the direction of the arrow) to another cell.  The sum of the digits in the two cells (N) is the same for all N-Mates clues in the grid.  The value of N is to be determined by the solver.
