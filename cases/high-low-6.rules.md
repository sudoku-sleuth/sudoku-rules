---
format: open-rules
title: High Low 6
setter: The Bard
source: https://sudokupad.app/1bz5stdt9u
case: https://sudoku-sleuth.com/cases/high-low-6
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 7249b0ea937e0cd5221fd1c5f9d12491
---

```rules
sudoku 9x9
kropki-1: kropki r8c7-r8c8 white
kropki-2: kropki r1c5-r1c6 white
kropki-3: kropki r1c6-r1c7 white
kropki-4: kropki r8c1-r9c1 white
kropki-5: kropki r5c1-r6c1 white
kropki-6: kropki r4c1-r5c1 white
kropki-7: kropki r5c8-r5c9 white
kropki-8: kropki r4c9-r5c9 white
kropki-9: kropki r7c6-r8c6 white
kropki-10: kropki r2c1-r3c1 white
kropki-11: kropki r2c4-r3c4 white
kropki-12: kropki r4c6-r5c6 white
kropki-13: kropki r7c9-r8c9 white
kropki-14: kropki r9c4-r9c5 black
kropki-15: kropki r2c1-r2c2 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[0.5,0.5],[0.5,2.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[5.5,8.5],[3.5,8.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[0.5,6.5],[0.5,4.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[3.5,0.5],[8.5,5.5],[6.5,5.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[8.5,2.5],[8.5,4.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[1.5,2.5],[3.5,4.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[5.5,4.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,2.5],[6.5,2.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5]],"color":"#fec835ff","thickness":6.4,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 in each row, column, and box.

High – Low Lines: Digits on each individual line either are only high digits {5-9} or low digits {1-5}. The 5 can be on either line.

Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.
