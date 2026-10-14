---
format: open-rules
title: We Stand With Ukraine
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/we-stand-with-ukraine
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r7c1=8 r7c4=2 r7c5=4
exported: 3fd3eeb7e43982b50a1c53419e5fbd11
---

```rules
sudoku 9x9
whispers-1: whispers r3c2-r4c2-r5c1 gap 5
whispers-2: whispers r3c1-r4c1-r5c1-r6c1-r7c1 gap 5
whispers-3: whispers r5c1-r6c2-r7c2 gap 5
whispers-4: whispers r3c3-r4c3-r5c4-r6c4-r7c4 gap 5
whispers-5: whispers r5c4-r4c5-r3c5 gap 5
whispers-6: whispers r3c6-r4c6-r5c6-r6c6-r7c6 gap 5
whispers-7: whispers r6c9-r5c9-r4c9-r3c9 gap 5
whispers-8: whispers r3c7-r4c7-r5c7-r6c7-r7c8 gap 5
```

```drawing
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,3.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,1.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,1.5],[8.5,2.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,4.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[8.5,5.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,6.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,7.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,8.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[5.5,8.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,3.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5]],"color":"#F5CE01","thickness":11.2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,5],"width":0.3,"height":0.3,"rounded":true,"fill":"#000000","thickness":2}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6],"width":0.3,"height":0.3,"rounded":true,"fill":"#000000","thickness":2}}
```

Standard sudoku constraints apply.

Blue lines are Ukraine whispers lines (formerly known as German whispers lines: adjacent digits on the line must differ by at least 5).

Yellow lines are Ukraine pairs (digits on the line form a consecutive pair).
