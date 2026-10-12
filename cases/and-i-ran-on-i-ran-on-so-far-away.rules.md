---
format: open-rules
title: And I Ran On,  I Ran On So Far Away.
setter: EPH
source: https://sudokupad.app/hf6djvwn7n
case: https://sudoku-sleuth.com/cases/and-i-ran-on-i-ran-on-so-far-away
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
givens: r1c4=2 r1c8=1 r2c1=6 r2c3=7 r8c7=3 r8c9=4 r9c2=9 r9c6=8
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,0.5],[2.5,2.5],[2.5,1.5]],"color":"#ff66fbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5],[2.5,5.5]],"color":"#ff66fbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,7.5],[4.5,7.5],[5.5,8.5]],"color":"#ff66fbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[8.5,8.5],[8.5,7.5]],"color":"#ff66fbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,5.5],[4.5,5.5],[4.5,3.5],[5.5,3.5],[5.5,5.5]],"color":"#ff66fbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,1.5],[4.5,1.5],[3.5,0.5]],"color":"#ff66fbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,5.5],[6.5,3.5]],"color":"#ff66fbff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,1.5],[7.5,1.5],[7.5,4.5]],"color":"#fe9983ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,7.5],[1.5,7.5],[1.5,4.5]],"color":"#fe9983ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[3.5,5.5],[4.5,5.5],[4.5,3.5],[5.5,3.5],[5.5,5.5]],"color":"#fe9983ff","thickness":9.6,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

The pink/purple lines are normal Renban lines: they contain a non-repeating set of consecutive digits, in any order.

The red/orange lines are Run-on Renban lines: every group of five cells along the line behave as a regular Renban line.
