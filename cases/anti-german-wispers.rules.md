---
format: open-rules
title: Anti-German Wispers
setter: The Bard
source: https://sudokupad.app/tt8yp8tsxo
case: https://sudoku-sleuth.com/cases/anti-german-wispers
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r2c5 colour "black"
kropki-2: kropki r5c8-r6c8 colour "black"
kropki-3: kropki r7c8-r8c8 colour "black"
kropki-4: kropki r8c8-r9c8 colour "black"
kropki-5: kropki r2c5-r2c6 colour "black"
kropki-6: kropki r2c6-r3c6 colour "black"
kropki-7: kropki r9c7-r9c8 colour "black"
kropki-8: kropki r8c2-r9c2 colour "black"
kropki-9: kropki r3c5-r3c6 colour "white"
kropki-10: kropki r4c8-r5c8 colour "white"
kropki-11: kropki r9c6-r9c7 colour "white"
kropki-12: kropki r3c3-r4c3 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[0.5,4.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,3.5],[0.5,2.5],[0.5,1.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,2.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[7.5,5.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[5.5,7.5],[4.5,6.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,6.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[0.5,7.5],[0.5,6.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[1.5,8.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[6.5,7.5],[7.5,8.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,1.5],[7.5,2.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,1.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,5.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[5.5,4.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,1.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,4.5]],"color":"#f66f","thickness":9.6,"rounded":true}}
```

Anti-German Whispers: Adjacent digits on a RED line must have a difference of less than 5.
Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
