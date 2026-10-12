---
format: open-rules
title: Waves
setter: Sir Moose
source: https://sudokupad.app/0czzmdzavu
case: https://sudoku-sleuth.com/cases/waves
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r8c3-r9c3 colour "black"
kropki-2: kropki r1c3-r2c3 colour "black"
kropki-3: kropki r1c7-r1c8 colour "black"
kropki-4: kropki r1c4-r1c5 colour "black"
kropki-5: kropki r8c4-r8c5 colour "black"
kropki-6: kropki r5c2-r6c2 colour "black"
kropki-7: kropki r5c1-r5c2 colour "black"
renban-1: renban r3c4-r3c5-r3c6-r2c7-r2c8-r2c9
renban-2: renban r5c4-r5c5-r5c6-r6c7-r6c8-r6c9
renban-3: renban r1c2-r2c2-r3c2-r4c1-r5c1-r6c1
renban-4: renban r4c6-r4c5-r4c4
renban-5: renban r5c3-r5c2
renban-6: renban r9c4-r8c4-r7c4
renban-7: renban r8c6-r8c7
renban-8: renban r1c5-r2c5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[6.5,0.5],[7.5,0.5],[8.5,0.5]],"color":"#0700FF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5],[5.5,8.5]],"color":"#0700FF","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[1.5,7.5]],"color":"#0700FF","thickness":8,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,6.5],[8.5,6.5]],"color":"#0700FF","thickness":8,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,8.5]],"color":"#0700FF","thickness":8,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[8.5,8.5]],"color":"#0700FF","thickness":8,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5]],"color":"#0700FF","thickness":8,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[2.5,6.5]],"color":"#0700FF","thickness":8,"rounded":true}}
```

Place the digits 1-9 in each row, column and 3x3 box.

Purple lines contain a non-repeating set of consecutive digits in any order.

Blue lines contain a non-repeating set of consecutive digits of the same parity in any order. (246, 375, 9573, etc.

Digits separated by a black dot are in a 1:2 ratio.
