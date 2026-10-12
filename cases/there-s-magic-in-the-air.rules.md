---
format: open-rules
title: There's magic in the air
setter: Dr Logic
source: https://sudokupad.app/p800j5yc0h
case: https://sudoku-sleuth.com/cases/there-s-magic-in-the-air
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r6c1 colour "white"
kropki-2: kropki r7c6-r8c6 colour "white"
kropki-3: kropki r6c1-r6c2 colour "black"
kropki-4: kropki r9c1-r9c2 colour "black"
pair r3c3-r4c3 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,1.5],[2.5,2.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,4.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[6.5,4.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,6.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,8.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[8.5,7.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[8.5,1.5],[7.5,1.5],[6.5,1.5],[6.5,2.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,0.5],[6.5,0.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5],[0.5,8.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[3.5,7.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5],[2.5,0.5],[1.5,0.5],[0.5,0.5],[0.5,1.5],[0.5,2.5],[1.5,3.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,6.5],[1.5,7.5],[1.5,8.5],[2.5,8.5]],"color":"#FF82CF","thickness":8,"rounded":true}}
```

Normal sudoku rules apply.
Pink lines are magic lines, each line is to be divided into 1 or more segment(s) that each sum to N. N is the same for all lines. 
Digits joined by a white dot are consecutive
Digits joined by a black dot are in a 1:2 ratio
Digits separated by an X sum to 10.
Not all dots are given
Digits cannot repeat on a pink line.
