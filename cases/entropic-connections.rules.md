---
format: open-rules
title: Entropic connections
setter: sujoyku
source: https://sudokupad.app/ov06jl2z3j
case: https://sudoku-sleuth.com/cases/entropic-connections
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 0fca6bbb05157f840cb904aae102dda1
---

```rules
sudoku 9x9
cage-1: cage r2c3-r3c2-r3c3 total 20 connected true
cage-2: cage r7c2-r7c3-r8c3 total 20 connected true
cage-3: cage r7c7-r7c8-r8c7 total 18 connected true
cage-4: cage r2c7-r3c7-r3c8 total 15 connected true
cage-5: cage r1c1-r2c1 total 9 connected true
cage-6: cage r9c1-r9c2 total 10 connected true
cage-7: cage r8c9-r9c9 total 9 connected true
cage-8: cage r1c8-r1c9 total 12 connected true
pair r2c6-r3c6 ratio 3
whispers-1: whispers r6c2-r5c3-r4c2 gap 5
whispers-2: whispers r9c1-r8c2-r7c3 gap 5
whispers-3: whispers r1c1-r2c2-r3c3 gap 5
whispers-4: whispers r9c9-r8c8-r7c7 gap 5
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[3.5,0.5],[4.5,0.5],[5.5,0.5],[6.5,0.5],[7.5,0.5]],"color":"#DE8D00","thickness":16,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,1.5],[8.5,2.5],[8.5,3.5],[8.5,4.5],[8.5,5.5],[8.5,6.5],[8.5,7.5]],"color":"#DE8D00","thickness":16,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5]],"color":"#DE8D00","thickness":16,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,5.5],[0.5,4.5],[0.5,3.5],[0.5,2.5],[0.5,1.5]],"color":"#DE8D00","thickness":16,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,7.5],[4.5,6.5],[3.5,5.5],[2.5,4.5],[1.5,3.5],[2.5,3.5],[3.5,3.5],[4.5,4.5],[5.5,3.5],[6.5,3.5],[7.5,3.5]],"color":"#DE8D00","thickness":16,"rounded":true}}
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. Each set of three consecutive digits on the orange line has to contain a low (1, 2 or 3), a medium (4, 5 and 6) and a high digit (7, 8 or 9). Adjacent digits on a green line must have a difference of at least 5. Digits joined by a 3-dot have a 1:3 ratio. (Not all dots are given.)
