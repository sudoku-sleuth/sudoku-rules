---
format: open-rules
title: Hunting high and low
setter: sujoyku
source: https://tinyurl.com/hpkwmxrw
case: https://sudoku-sleuth.com/cases/hunting-high-and-low
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 5f6cd3337fe030abea82273691f0a5b4
---

```rules
sudoku 9x9
cage-1: cage r2c1-r3c1 total 10 connected true
cage-2: cage r1c3-r2c3 total 9 connected true
cage-3: cage r2c6-r3c6 total 15 connected true
cage-4: cage r3c7-r3c8 total 10 connected true
cage-5: cage r1c8-r1c9 total 11 connected true
cage-6: cage r7c9-r8c9 total 10 connected true
cage-7: cage r9c8-r9c9 total 8 connected true
cage-8: cage r9c4-r9c5 total 12 connected true
cage-9: cage r8c3-r9c3 total 12 connected true
cage-10: cage r7c1-r8c1 total 10 connected true
cage-11: cage r5c1-r5c2-r6c2 total 15 connected true
cage-12: cage r4c5-r5c5-r5c6 total 15 connected true
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[1.5,1.5],[2.5,1.5],[2.5,2.5],[2.5,3.5],[1.5,4.5],[0.5,5.5],[0.5,6.5],[1.5,6.5],[1.5,7.5],[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,7.5],[5.5,6.5],[6.5,6.5],[6.5,7.5],[7.5,7.5],[7.5,6.5],[8.5,6.5],[8.5,5.5],[7.5,4.5],[6.5,3.5],[6.5,2.5],[6.5,1.5],[7.5,1.5],[8.5,1.5],[8.5,0.5]],"color":"#FF8D00","thickness":16,"rounded":true}}
```

Normal sudoku rules apply. Digits in a cage do not repeat and sum to the clue in the top left. Each set of three consecutive digits on the orange line has to contain a low (1, 2 or 3), a medium (4, 5 and 6) and a high digit (7, 8 or 9).
