---
format: open-rules
title: Prime and Ratio Pairs
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/prime-and-ratio-pairs
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r5c8-r6c8 colour "black"
kropki-2: kropki r5c7-r6c7 colour "black"
kropki-3: kropki r3c7-r3c8 colour "black"
kropki-4: kropki r3c6-r3c7 colour "black"
kropki-5: kropki r5c1-r5c2 colour "black"
kropki-6: kropki r4c6-r5c6 colour "black"
kropki-7: kropki r1c2-r1c3 colour "black"
kropki-8: kropki r7c3-r8c3 colour "black"
kropki-9: kropki r8c9-r9c9 colour "black"
kropki-10: kropki r8c4-r9c4 colour "black"
kropki-11: kropki r1c2-r2c2 colour "black"
kropki-12: kropki r2c2-r2c3 colour "black"
kropki-13: kropki r8c2-r9c2 colour "black"
kropki-14: kropki r5c5-r6c5 colour "black"
kropki-15: kropki r6c1-r7c1 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[4.5,2.5],[4.5,3.5],[4.5,4.5]],"color":"#5CF7FF","thickness":8,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,2.5],[2.5,3.5],[1.5,4.5],[0.5,5.5],[0.5,6.5],[1.5,7.5]],"color":"#4DA3FF","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[5.5,5.5],[6.5,6.5]],"color":"#82F7FF","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[5.5,6.5]],"color":"#82F7FF","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[7.5,7.5]],"color":"#82F7FF","thickness":8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,8.5],[2.5,8.5],[3.5,8.5]],"color":"#5493FF","thickness":8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[5.5,2.5],[6.5,3.5],[7.5,4.5],[8.5,5.5],[8.5,6.5],[7.5,7.5]],"color":"#D9A1FF","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. EVERY consecutive pair of numbers on all lines, moving away from the origin (where the three lines meet), is a prime number. Prime numbers overlap (ie: digit #2 for one prime becomes digit #1 for the next prime). Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. Thanks to Flycatcher, for the prime pairs line idea.
