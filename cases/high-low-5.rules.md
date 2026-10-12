---
format: open-rules
title: High Low 5
setter: The Bard
source: https://sudokupad.app/hko07cfhkl
case: https://sudoku-sleuth.com/cases/high-low-5
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r5c2 colour "black"
kropki-2: kropki r5c8-r5c9 colour "black"
kropki-3: kropki r4c6-r5c6 colour "black"
kropki-4: kropki r7c6-r7c7 colour "black"
kropki-5: kropki r1c2-r2c2 colour "black"
kropki-6: kropki r1c9-r2c9 colour "white"
kropki-7: kropki r8c2-r8c3 colour "white"
kropki-8: kropki r4c2-r5c2 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[8.5,8.5]],"color":"#f49242ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[0.5,2.5]],"color":"#f49242ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[8.5,6.5]],"color":"#f49242ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[8.5,0.5],[8.5,4.5]],"color":"#f49242ff","thickness":5.12,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,8.5],[3.5,8.5]],"color":"#f49242ff","thickness":5.12,"rounded":true}}
```

Normal sudoku rules apply. Place the digits 1-9 in each row, column, and box.

High – Low Lines: Digits on each individual line either are only high digits {5-9} or low digits {1-5}. The 5 can be on either line.

Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.
