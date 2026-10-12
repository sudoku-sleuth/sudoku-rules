---
format: open-rules
title: High - Low
setter: The Bard
source: https://sudokupad.app/ppdnh2qd8p
case: https://sudoku-sleuth.com/cases/high-low
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c9=5
---

```rules
sudoku 9x9
kropki-1: kropki r6c8-r7c8 colour "white"
kropki-2: kropki r7c7-r7c8 colour "white"
kropki-3: kropki r7c3-r8c3 colour "white"
kropki-4: kropki r5c2-r5c3 colour "white"
kropki-5: kropki r2c3-r3c3 colour "white"
kropki-6: kropki r3c2-r3c3 colour "white"
kropki-7: kropki r2c8-r3c8 colour "white"
kropki-8: kropki r6c8-r6c9 colour "white"
kropki-9: kropki r1c1-r1c2 colour "white"
kropki-10: kropki r8c4-r9c4 colour "white"
kropki-11: kropki r1c4-r1c5 colour "white"
kropki-12: kropki r2c6-r2c7 colour "white"
kropki-13: kropki r4c2-r4c3 colour "white"
kropki-14: kropki r5c9-r6c9 colour "white"
kropki-15: kropki r3c5-r4c5 colour "white"
kropki-16: kropki r8c5-r8c6 colour "black"
kropki-17: kropki r8c1-r8c2 colour "black"
kropki-18: kropki r2c8-r2c9 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,8.5],[4.5,8.5],[5.5,8.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,5.5],[0.5,4.5],[0.5,3.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,5.5],[3.5,4.5],[3.5,3.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,6.5],[5.5,5.5],[5.5,4.5],[5.5,3.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[4.5,0.5],[5.5,0.5],[6.5,0.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,3.5],[4.5,2.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[6.5,3.5],[6.5,4.5],[6.5,5.5]],"color":"#FFC654","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[7.5,3.5],[7.5,4.5]],"color":"#FFC654","thickness":8,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 in each row, column, and box.
Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.
High – Low Lines: Digits on each individual line either are only high digits {5-9} or low digits {1-5}. The 5 can be on either line.
