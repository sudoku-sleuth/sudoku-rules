---
format: open-rules
title: Pythagorean Triples
setter: Sir Moose
source: https://sudokupad.app/qo52az6fbd
case: https://sudoku-sleuth.com/cases/pythagorean-triples
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 colour "black"
kropki-2: kropki r5c5-r5c6 colour "black"
kropki-3: kropki r9c6-r9c7 colour "black"
kropki-4: kropki r8c3-r9c3 colour "black"
kropki-5: kropki r4c5-r4c6 colour "black"
kropki-6: kropki r6c4-r7c4 colour "black"
kropki-7: kropki r1c8-r1c9 colour "black"
kropki-8: kropki r2c1-r3c1 colour "black"
kropki-9: kropki r2c7-r3c7 colour "black"
kropki-10: kropki r7c8-r8c8 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.833,7.167],[8.833,8.833]],"color":"#e6261fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.167,4.833],[3.833,3.167]],"color":"#e6261fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[0.5,8.5]],"color":"#e6261fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[1.5,5.5],[0.5,4.5]],"color":"#e6261fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.167,0.167],[0.167,1.833]],"color":"#e6a11fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.167,5.833],[7.833,5.833]],"color":"#e6a11fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.167,0.167],[6.833,0.167]],"color":"#e6a11fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,5.5],[4.5,6.5],[3.5,5.5]],"color":"#e6a11fff","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[4.5,1.5],[3.5,1.5],[4.5,0.5]],"color":"#1f1f","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8,3],[8.5,2.5],[8.5,5.5],[7,4],[8,3]],"color":"#1f1f","thickness":9.6,"rounded":true}}
```

Normal Sudoku Rules Apply

Digits in cells separated by a black dot are in a 1:2 ratio.

Triangles in this puzzle are right triangles with sides a, b and c.  The hypotenuse is the longest side, but the triangles aren't drawn to scale.  The sum of the digits along each side of the triangle form an actual triangle (a²+b²=c²). Digits may not repeat along a side of a triangle.

The lines are broken triangles which if assembled forms a right triangle of a single color that follows the earlier rule.

Triangles may be similar, but have unique sizes.
