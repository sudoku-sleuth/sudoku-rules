---
format: open-rules
title: Formal Dining
setter: Will Power
source: https://sudokupad.app/9c0bfomhj0
case: https://sudoku-sleuth.com/cases/formal-dining
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 682d4ccc505150e06c9f29bec6fa085a
---

```rules
sudoku 9x9
cage-1: cage r4c4-r5c4 total 10 connected true
cage-2: cage r7c7-r8c7 total 10 connected true
cage-3: cage r1c2-r1c3 total 10 connected true
cage-4: cage r2c8-r3c8 total 10 connected true
cage-5: cage r1c6-r1c7-r2c6-r2c7 total 10 connected true
cage-6: cage r7c1-r8c1 total 10 connected true
cage-7: cage r7c9-r8c9 total 10 connected true
cage-8: cage r4c8-r5c8-r6c8-r6c9 total 10 connected true
cage-9: cage r3c2-r4c2-r4c3 total 10 connected true
cage-10: cage r7c4-r7c5-r8c5 total 10 connected true
cage-11: cage r5c2-r5c3 total 10 connected true
kropki-1: kropki r1c7-r2c7 white
kropki-2: kropki r1c6-r2c6 white
kropki-3: kropki r2c8-r2c9 white
kropki-4: kropki r3c8-r3c9 white
kropki-5: kropki r7c6-r7c7 white
whispers-1: whispers r4c5-r4c6-r4c7 gap 4
whispers-2: whispers r6c2-r7c2-r8c2 gap 4
whispers-3: whispers r6c1-r7c1-r8c1 gap 4
whispers-4: whispers r6c9-r7c9-r8c9 gap 4
whispers-5: whispers r6c8-r7c8-r8c8 gap 4
whispers-6: whispers r2c2-r3c3 gap 4
renban-1: renban r1c6-r1c7-r2c7-r2c6
renban-2: renban r2c8-r2c9-r3c9-r3c8
renban-3: renban r3c5-r3c6-r3c7
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[5.5,4.5],[5.5,5.5],[6.5,5.5],[7.5,5.5],[7.5,4.5],[7.5,3.5],[6.5,3.5]],"color":"#8C98FF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,3.5]],"color":"#8C98FF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5],[4.5,5.5],[5.5,6.5],[6.5,6.5],[7.5,6.5],[8.5,5.5],[8.5,4.5],[8.5,3.5],[7.5,2.5],[6.5,2.5],[5.5,2.5]],"color":"#7AFFFD","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[5.5,2.5]],"color":"#7AFFFD","thickness":8,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[0.5,1.5],[0.5,2.5],[1.5,3.5],[2.5,3.5],[3.5,2.5],[3.5,1.5]],"color":"#78C2FA","thickness":8,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,1.5]],"color":"#78C2FA","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. ODD/EVEN- Numbers on each of the three blue lines (plates and bowl) are either all odd or all even. DUTCH WHISPERS- Numbers on red lines (6 utensils) are at least 4 apart from their neighbors on the line. RENBAN- Numbers on purple lines (glasses and 1 utensil) are each a set of non-repeating, consecutive numbers, in any order. KILLER CAGES- Numbers in cages sum to 10. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
