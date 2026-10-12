---
format: open-rules
title: Flüstern Kylo Renban
setter: Meggen033
source: https://sudokupad.app/ec8uruw856
case: https://sudoku-sleuth.com/cases/flustern-kylo-renban
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c7-r1c8-r2c7 total 14 connected true
cage-2: cage r8c3-r9c2-r9c3 total 14 connected true
cage-3: cage r4c9-r5c9-r6c9 total 8 connected true
cage-4: cage r4c3-r5c3 total 7 connected true
cage-5: cage r7c8-r7c9 total 7 connected true
cage-6: cage r2c4-r2c5 total 15 connected true
cage-7: cage r9c7-r9c8 total 12 connected true
cage-8: cage r7c4-r7c5-r8c4 total 21 connected true
cage-9: cage r3c1-r3c2 total 11 connected true
cage-10: cage r7c6-r8c6 total 9 connected true
cage-11: cage r4c2-r5c2 total 12 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
whispers-1: whispers r3c3-r2c2-r1c1 gap 5
whispers-2: whispers r7c7-r8c8-r9c9 gap 5
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,3.5]],"color":"#D900FF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[4.5,4.5]],"color":"#D900FF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[4.5,4.5]],"color":"#D900FF","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[4.5,4.5]],"color":"#D900FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,7.5],[0.5,8.5]],"color":"#D900FF","thickness":8,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[7.5,1.5],[8.5,0.5]],"color":"#D900FF","thickness":8,"rounded":true}}
```

Normal Sudoku Rules Apply

Digits along a diagonal cannot repeat

Digits along a magenta line contain a set of non-repeating digits in any order

Adjacent digits along a green line must differ by at least 5

Digits in a cage must sum to the digit in top left corner and digits within a cage may not repeat
