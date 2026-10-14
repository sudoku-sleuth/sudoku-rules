---
format: open-rules
title: Striving for equality
setter: sujoyku
source: https://sudokupad.app/dd8i7qhnzz
case: https://sudoku-sleuth.com/cases/striving-for-equality
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 9a7e8a6780d20f60dc9c4d913b2f4de5
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 14 connected true
cage-2: cage r1c4-r1c5 total 11 connected true
cage-3: cage r1c9-r2c9 total 12 connected true
cage-4: cage r2c7-r3c7 total 9 connected true
cage-5: cage r7c2-r7c3 total 13 connected true
cage-6: cage r8c7-r8c8 total 12 connected true
cage-7: cage r5c7-r6c7 total 13 connected true
kropki r5c7-r5c8 black
pair r2c5-r2c6 ratio 3
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,3.5],[3.5,4.5],[2.5,4.5],[2.5,5.5],[1.5,5.5],[0.5,5.5],[0.5,6.5],[0.5,7.5],[1.5,7.5],[2.5,7.5],[3.5,7.5],[3.5,8.5],[4.5,8.5],[5.5,8.5],[6.5,8.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5],[8.5,5.5],[8.5,4.5]],"color":"#E80B07","thickness":16,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,4.5],[5.5,4.5],[6.5,4.5],[7.5,4.5],[7.5,3.5],[8.5,3.5],[8.5,2.5],[8.5,1.5],[8.5,0.5],[7.5,0.5],[6.5,0.5],[5.5,0.5],[4.5,1.5],[3.5,2.5],[2.5,2.5],[1.5,2.5],[1.5,3.5],[1.5,4.5]],"color":"#000FE8","thickness":16,"rounded":true}}
```

Normal Sudoku rules apply. Digits in a killer box do not repeat and sum to the hint in the top left. Digits joined by a black dot have a 1:2 ratio. Digits joined by a 3-dot have a 1:3 ratio. (Not all dots are given.) The red and blue lines are Equal Sum Lines, that is, in each 3x3 block the digits on such a line sum to the same value. (The sum value of the red line may differ from the value of the blue line.)
