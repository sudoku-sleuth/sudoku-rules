---
format: open-rules
title: Cake and Candles
setter: Blobz
source: https://sudokupad.app/blobz/cake-and-candles
case: https://sudoku-sleuth.com/cases/cake-and-candles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers r5c8-r6c8-r7c8-r8c7-r8c6-r8c5-r8c4-r8c3-r7c2-r6c2-r5c2-r4c2-r3c3-r3c4-r3c5-r3c6-r3c7-r4c8 gap 5 loop true
renban-1: renban r5c2-r6c3-r6c4-r6c5
renban-2: renban r5c8-r6c7
renban-3: renban r8c9-r9c8
parity-cells-1: parity-cells r5c4-r5c6 parity "odd"
parity-cells-2: parity-cells r4c3-r4c5-r4c7 parity "even"
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.188,2.563],[1.188,2.438],[1.25,2.5],[1.25,2.625],[1.125,2.75],[0.875,2.75],[0.625,2.5],[0.375,2.5],[0.5,2.375],[0.625,2.375],[0.75,2.25],[1.125,2.25],[1.25,2.375],[1.25,2.5]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[2.188,3.438],[2.188,3.563]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[1.188,4.438],[1.188,4.563]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[2.188,5.438],[2.188,5.563]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[1.188,6.438],[1.188,6.563]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1,6.5],[1.125,6.5]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2,5.5],[2.125,5.5]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[1,2.5],[1.125,2.5]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1,4.5],[1.125,4.5]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[2,3.5],[2.125,3.5]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[1.875,3.25],[2.125,3.25],[2.25,3.375],[2.25,3.625],[2.125,3.75],[1.75,3.75],[1.625,3.625],[1.375,3.625],[1.5,3.5],[1.625,3.5],[1.875,3.25]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[1,6.25],[1.125,6.25],[1.25,6.375],[1.25,6.625],[1.125,6.75],[0.75,6.75],[0.625,6.625],[0.5,6.625],[0.375,6.5],[0.625,6.5],[0.875,6.25],[1,6.25]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[2.25,5.5],[2.25,5.625],[2.125,5.75],[1.875,5.75],[1.625,5.5],[1.375,5.5],[1.5,5.375],[1.625,5.375],[1.75,5.25],[2.125,5.25],[2.25,5.375],[2.25,5.5]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.25,4.5],[1.25,4.625],[1.125,4.75],[0.875,4.75],[0.625,4.5],[0.375,4.5],[0.5,4.375],[0.625,4.375],[0.75,4.25],[1.125,4.25],[1.25,4.375],[1.25,4.5]],"color":"#f4c31db1","thickness":4,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[1.333,2.5],[3.5,2.5]],"color":"#81c5fcf1","thickness":14,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[2.333,3.5],[4.5,3.5]],"color":"#81c5fcf1","thickness":14,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[1.333,4.5],[3.5,4.5]],"color":"#81c5fcf1","thickness":14,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[2.333,5.5],[4.5,5.5]],"color":"#81c5fcf1","thickness":14,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[1.333,6.5],[3.5,6.5]],"color":"#81c5fcf1","thickness":14,"rounded":true}}
```

Normal sudoku rules apply.

Digits separated by a flame are consecutive.

Box borders divide blue candles into segments with the same sum.

Digits in blue squares are even; digits in blue circles are odd.

Along the green line, adjacent digits differ by at least 5.

Along pink lines, digits form a non-repeating consecutive sequence in any order.
