---
format: open-rules
title: Bread and Butter
setter: sujoyku
source: https://sudokupad.app/sujoyku/bread-and-butter
case: https://sudoku-sleuth.com/cases/bread-and-butter
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 11 connected true
cage-2: cage r3c1-r3c2 total 11 connected true
cage-3: cage r1c4-r2c4 total 14 connected true
cage-4: cage r2c6-r3c6 total 12 connected true
cage-5: cage r1c8-r1c9 total 10 connected true
cage-6: cage r3c7-r3c8 total 8 connected true
cage-7: cage r4c6-r4c7 total 9 connected true
cage-8: cage r6c3-r6c4 total 9 connected true
cage-9: cage r7c1-r8c1 total 10 connected true
cage-10: cage r8c3-r9c3 total 5 connected true
cage-11: cage r9c4-r9c5 total 15 connected true
cage-12: cage r7c5-r7c6 total 6 connected true
cage-13: cage r7c7-r8c7 total 15 connected true
cage-14: cage r8c9-r9c9 total 8 connected true
entropic-1: entropic r1c1-r2c1-r2c2-r2c3-r3c3-r3c4-r3c5-r2c5-r1c5-r1c6-r1c7-r2c7-r2c8-r2c9-r3c9
entropic-2: entropic r4c3-r4c4-r5c4
entropic-3: entropic r6c7-r6c6-r5c6
entropic-4: entropic r9c1-r9c2-r8c2-r7c2-r7c3-r7c4-r8c4-r8c5-r8c6-r9c6-r9c7-r9c8-r8c8-r7c8-r7c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#e7e7ffff","thickness":0}}
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Entropic Lines: Any three adjacent digits along a peach line must contain one low digit (1, 2, or 3), one medium digit (4, 5, or 6) and one high digit (7, 8, or 9).

- Killer cages: Digits in a cage must sum to the clue in the top left.
