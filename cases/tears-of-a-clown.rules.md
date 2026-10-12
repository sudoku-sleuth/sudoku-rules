---
format: open-rules
title: Tears of a Clown
setter: EPH
source: https://sudokupad.app/sldisoe32f
case: https://sudoku-sleuth.com/cases/tears-of-a-clown
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
  - The source describes Renban lines that are not yet included in our reading.
givens: r4c1=8
---

```rules
sudoku 9x9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[0.5,0.5],[0.5,2.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[0.5,5.5],[0.5,6.5],[2.5,6.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[4.5,0.5],[4.5,2.5],[3.5,2.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,3.5],[5.5,4.5],[4.5,4.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[4.5,6.5],[4.5,8.5],[3.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,1.5],[6.5,2.5],[8.5,4.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,0.5],[0.5,2.5],[1.5,2.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,6.5],[2.5,6.5],[2.5,7.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,3.5],[5.5,4.5],[3.5,4.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[6.5,2.5],[8.5,4.5],[7.5,5.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[0.5,2.5],[0.5,0.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[2.5,6.5],[2.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,4.5],[3.5,4.5],[3.5,5.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[8.5,4.5],[6.5,6.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,2.5],[2.5,2.5],[2.5,3.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[2.5,8.5],[1.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[3.5,4.5],[3.5,5.5],[4.5,5.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,4.5],[6.5,6.5],[7.5,7.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[2.5,2.5],[2.5,3.5],[1.5,3.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,8.5],[0.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,4.5],[3.5,5.5],[5.5,5.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Lines of five cells or fewer are normal Renban lines: they contain a non-repeating set of consecutive digits, in any order.

Lines of more than five cells are Run-on Renban lines: every contiguous group of five cells along the line behave as a regular Renban line.
