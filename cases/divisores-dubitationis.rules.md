---
format: open-rules
title: Divisores Dubitationis
setter: Dr Logic
source: https://sudokupad.app/sd87j0afzd
case: https://sudoku-sleuth.com/cases/divisores-dubitationis
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r6c7=4
---

```rules
sudoku 9x9
kropki-1: kropki r1c8-r1c9 colour "black"
kropki-2: kropki r3c1-r3c2 colour "black"
kropki-3: kropki r4c3-r5c3 colour "black"
kropki-4: kropki r9c7-r9c8 colour "black"
kropki-5: kropki r5c3-r5c4 colour "white"
parity r3c7-r4c7-r3c8-r4c8-r3c9-r4c9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[2.5,2.5],[1.5,3.5],[1.5,5.5],[0.5,6.5],[0.5,8.5]],"color":"#00ff00c5","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[6.5,1.5],[8.5,1.5]],"color":"#00ff00c5","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[7.5,4.5],[8.5,5.5]],"color":"#00ff00c5","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,8.5]],"color":"#00ff00c5","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[3.5,1.5],[5.5,3.5]],"color":"#dd00ff8e","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,2.5],[8.5,3.5]],"color":"#dd00ff8e","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,3.5]],"color":"#dd00ff8e","thickness":9.6,"rounded":true,"layer":"over"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[5.5,5.5]],"color":"#dd00ff8e","thickness":9.6,"rounded":true,"layer":"over"}}
```

Normal Sudoku rules apply.

Digits along a green or purple 'divisor' line must satisfy the following: 'The line is read from one end. Each digit placed must wholly divide the sum of all the previous digits on the line.' (For example, 3-1-4 is valid as 1 divides 3 and 4 divides 3+1, but 3-1-8 is invalid, as 8 does not divide 3+1)

Digits cannot repeat on green lines, but may repeat on purple lines, if allowed by other rules.

Adjacent digits on a red 'parity' line must alternate in parity (odd/even).

Cells separated by a black dot have a 1:2 ratio, cells separated by a white dot are consecutive. Not all such dots are given.
