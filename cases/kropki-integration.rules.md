---
format: open-rules
title: Kropki Integration
setter: Blobz
source: https://sudokupad.app/s1jzqi0qsy
case: https://sudoku-sleuth.com/cases/kropki-integration
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r3c2=6 r9c2=4
exported: 8626a734b69bf3a089a50f2733836df5
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r1c4 black
kropki-2: kropki r1c4-r1c5 black
kropki-3: kropki r2c9-r3c9 black
kropki-4: kropki r3c8-r3c9 black
kropki-5: kropki r4c2-r4c3 black
kropki-6: kropki r3c3-r4c3 black
kropki-7: kropki r7c4-r7c5 black
kropki-8: kropki r7c5-r8c5 black
kropki-9: kropki r8c4-r8c5 black
kropki-10: kropki r6c7-r6c8 black
kropki-11: kropki r6c8-r6c9 black
kropki-12: kropki r5c9-r6c9 black
kropki-13: kropki r1c6-r1c7 black
kropki-14: kropki r7c9-r8c9 black
kropki-15: kropki r4c1-r5c1 white
kropki-16: kropki r5c8-r6c8 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,1.5],[7.5,1.5],[8.5,0.5]],"color":"#67f067ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[6.5,8.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,7.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[6.5,6.5],[6.5,5.5],[5.5,5.5],[5.5,6.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[6.5,2.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[6.5,3.5]],"color":"#f067f0ff","thickness":9.6,"rounded":true}}
```

Normal sudoku rules apply. 

Adjacent digits along the green 'integral' (∫) sign must differ by at least 5. 

Digits on the pink 'd' and 'x's are consecutive, but in any order. 

Black dots separate digits where one is double the other. White dots separate consecutive digits. Not all such dots are shown.
