---
format: open-rules
title: "Nuts and Bolts the Sequel: Mowing the Lawn"
setter: Kennet's Dad
source: https://sudokupad.app/zajsqihq4n
case: https://sudoku-sleuth.com/cases/nuts-and-bolts-the-sequel-mowing-the-lawn
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ae8cd28a04164b2365d6f0bf3cadd6a0
---

```rules
sudoku 9x9
cage-1: cage r7c4-r8c4-r9c4 total 13 connected true
cage-2: cage r5c8-r5c9 total 12 connected true
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[3.5,0.5],[2.625,1.375]],"color":"#c4819e","thickness":5,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.375,7.625],[3.5,7.5],[2.5,6.5],[1.5,7.5],[2.5,8.5],[3.375,7.625]],"color":"#c4819e","thickness":5,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,2.5],[7.5,3.5],[6.5,3.5],[6.5,2.5]],"color":"#c4819e","thickness":5,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.25,2],[3.25,3],[4,3.75],[5,3.75],[5.75,3],[5.75,2],[5,1.25],[4,1.25],[3.25,2]],"color":"#c4819e","thickness":5,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.875,3.125],[5.5,2.5],[4.5,1.5],[3.5,2.5],[4.5,3.5],[4.875,3.125]],"color":"#c4819e","thickness":5,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1,1.25],[2,1.25],[2.75,2],[2.75,3],[2,3.75],[1,3.75],[0.25,3],[0.25,2],[1,1.25]],"color":"#c4819e","thickness":5,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.375,3.375],[1.5,3.5],[2.5,2.5],[1.5,1.5],[0.5,2.5],[1.375,3.375]],"color":"#c4819e","thickness":5,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,8.25],[3,8.75],[2,8.75],[1.25,8],[1.25,7],[2,6.25],[3,6.25],[3.5,6.75]],"color":"#ebe777","thickness":5,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[5.5,8.25],[6,8.75],[7,8.75],[7.75,8],[7.75,7],[7,6.25],[6,6.25],[5.25,7],[5.25,8],[5.5,8.25]],"color":"#ebe777","thickness":5,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,6.5],[7.5,7.5],[6.5,8.5],[5.5,7.5]],"color":"#ebe777","thickness":5,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.375,5.625],[5.5,5.5],[4.5,4.5],[3.5,5.5],[4.5,6.5],[5.375,5.625]],"color":"#ebe777","thickness":5,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.625,4.875],[5.75,5],[5.75,6],[5,6.75],[4,6.75],[3.25,6],[3.25,5],[4,4.25],[5,4.25],[5.625,4.875]],"color":"#ebe777","thickness":5,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,8.5]],"color":"#2ea9d3","thickness":5,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[7.5,6.5],[8.375,5.625]],"color":"#2ea9d3","thickness":5,"rounded":true}}
```

May your garden grow exponentially!

Garden Path Lines, Killer Cages

Normal sudoku rules apply. Box borders divide a line into segments with different sums: for fuchsia lines, one sum will be double the other; for lemon lines, one sum will be triple the other; for cerulean lines, one sum will be quadruple the other (for clarification; if a line passes through a box on separate passes, these instances are summed together as though it were one pass). Digits in a cage sum to the number in the top left corner of that cage.
