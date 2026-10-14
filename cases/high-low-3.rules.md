---
format: open-rules
title: High - Low 3
setter: The Bard
source: https://sudokupad.app/uanmi32ret
case: https://sudoku-sleuth.com/cases/high-low-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 622215b4547f2547793ac14200a6fb32
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r8c2 white
kropki-2: kropki r7c9-r8c9 white
kropki-3: kropki r1c2-r2c2 white
kropki-4: kropki r3c5-r3c6 white
kropki-5: kropki r3c7-r4c7 white
kropki-6: kropki r1c4-r1c5 white
kropki-7: kropki r2c9-r3c9 white
kropki-8: kropki r4c9-r5c9 white
kropki-9: kropki r3c1-r4c1 white
kropki-10: kropki r8c5-r9c5 white
kropki-11: kropki r7c5-r7c6 white
kropki-12: kropki r7c3-r7c4 black
kropki-13: kropki r1c9-r2c9 black
kropki-14: kropki r8c1-r9c1 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,7.5],[2.5,6.5],[3.5,5.5],[4.5,4.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,1.5],[2.5,2.5],[3.5,3.5],[4.5,4.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,5.5],[0.5,4.5],[0.5,3.5],[0.5,2.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,7.5],[5.5,7.5],[6.5,7.5],[7.5,7.5],[7.5,6.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[4.5,1.5],[5.5,1.5],[6.5,1.5],[7.5,1.5],[7.5,2.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5],[2.5,5.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,8.5],[2.5,8.5],[3.5,8.5],[4.5,8.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5],[8.5,8.5],[8.5,7.5],[8.5,6.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,3.5],[6.5,4.5]],"color":"#F76700","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[7.5,4.5],[6.5,5.5]],"color":"#F76700","thickness":8,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 in each row, column, and box.

High – Low Lines: Digits on each individual line either are only high digits {5-9} or low digits {1-5}. The 5 can be on either line.

Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.
