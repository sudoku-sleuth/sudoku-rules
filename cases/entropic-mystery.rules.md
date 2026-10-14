---
format: open-rules
title: Entropic Mystery
setter: sujoyku
source: https://tinyurl.com/2mmskvts
case: https://sudoku-sleuth.com/cases/entropic-mystery
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 91e3fbb51710b610b9e4da876e632cc8
---

```rules
sudoku 9x9
cage-1: cage r4c5-r5c5-r5c6 total 22 connected true
cage-2: cage r4c2-r5c1-r5c2 total 23 connected true
cage-3: cage r2c1-r3c1-r4c1 total 20 connected true
cage-4: cage r8c7-r8c8-r9c7 total 10 connected true
cage-5: cage r7c1-r8c1-r9c1 total 10 connected true
cage-6: cage r8c2-r8c3-r9c3 total 15 connected true
cage-7: cage r6c2-r6c3-r7c3 total 17 connected true
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[1.5,1.5],[2.5,1.5],[2.5,2.5],[3.5,2.5],[4.5,3.5],[5.5,4.5],[6.5,4.5],[7.5,4.5],[7.5,3.5],[8.5,3.5]],"color":"#FFCC00","thickness":12.8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[7.5,5.5],[6.5,5.5],[5.5,5.5],[4.5,6.5],[4.5,7.5],[4.5,8.5],[3.5,7.5],[2.5,7.5],[2.5,8.5],[1.5,8.5],[0.5,8.5],[1.5,7.5],[2.5,6.5],[2.5,5.5],[1.5,5.5],[0.5,5.5],[1.5,4.5],[2.5,3.5],[2.5,4.5],[3.5,3.5]],"color":"#FFCC00","thickness":12.8,"rounded":true}}
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. Colour the grid with three different colours (for example red, green and yellow) such that the following conditions are met.

1) Each digit always appears in cells of the same colour. (For example, if a 1 is in a red cell, all 1s in the grid have to be in red cells.)

2) Orthogonally adjacent digits always have different colours.

3) Each killer cage contains one digit of each colour.

4) Ambiguous entropy lines: Three consecutive digits on an orange line always have one of each colour.
