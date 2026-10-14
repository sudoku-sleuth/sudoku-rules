---
format: open-rules
title: Dragonfly
setter: Jobo
source: https://sudokupad.app/qr6ntxdl74
case: https://sudoku-sleuth.com/cases/dragonfly
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: eae1ce243e55d7b4aabb82f582e0342a
---

```rules
sudoku 9x9
thermo r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
negative relations [{"op":"sum","value":10}] except []
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.7,3.9],[1.3,3.5],[0.7,3.5],[0.5,3.3]],"color":"#f067f0ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.7,5.1],[1.3,5.5],[0.7,5.5],[0.5,5.7]],"color":"#f067f0ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.9,2.7],[3.7,3.7],[3.4,3.8],[3.3,3.9]],"color":"#f067f0ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[3.9,6.3],[3.7,5.3],[3.4,5.2],[3.3,5.1]],"color":"#f067f0ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.3,2.5],[2.1,3.1],[2.6,3.6],[2.3,3.9]],"color":"#f067f0ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.3,6.5],[2.1,5.9],[2.6,5.4],[2.3,5.1]],"color":"#f067f0ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.7,7.7],[7.7,8.3],[8.3,8.3],[8.3,7.7],[7.7,7.7]],"color":"#f067f0ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[1.7,3.7],[2.5,4.5],[1.7,5.3]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.3,3.7],[3.5,4.5],[4.2,5.2]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.714,1.429],[1.643,0.786],[1.643,3.643],[1.714,3.714]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.286,1.429],[4.357,0.786],[4.357,3.643],[4.214,3.786]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4,1],[3.167,1.5],[3.167,3.833]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.714,5.286],[1.643,5.357],[1.643,8.214],[2.714,7.571]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.286,7.571],[4.357,8.214],[4.357,5.357],[4.214,5.214]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.556,1.333],[2.833,1.5],[2.833,3.833]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.556,7.667],[2.833,7.5],[2.833,5.167]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.444,7.667],[3.167,7.5],[3.167,5.167]],"color":"#f8b8b8ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3,1.6],[3,7.4]],"color":"#caf496ff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[3,7.375],[3,7.5]],"color":"#caf496ff","thickness":6.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[3,1.5],[3,1.625]],"color":"#caf496ff","thickness":6.4,"rounded":true,"layer":"over"}}
```

Normal sudoku rules apply.

Any two orthogonally adjacent cells cannot sum to 10.

Along the thermometer, digits must increase from the bulb end.

Adjacent digits along a red line must alternate in parity (odd/even).

Purple lines contain a non-repeating set of consecutive digits in any order.

Orthogonally adjacent digits separated by the lime line must differ by exactly 2.
