---
format: open-rules
title: Stuck in the Middle with You
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/stuck-in-the-middle-with-you
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 colour "white"
kropki-2: kropki r1c3-r1c4 colour "white"
kropki-3: kropki r4c1-r5c1 colour "white"
kropki-4: kropki r2c1-r3c1 colour "white"
kropki-5: kropki r3c3-r3c4 colour "white"
kropki-6: kropki r3c4-r3c5 colour "white"
kropki-7: kropki r3c6-r3c7 colour "white"
kropki-8: kropki r1c3-r2c3 colour "white"
kropki-9: kropki r7c3-r7c4 colour "white"
kropki-10: kropki r9c4-r9c5 colour "white"
kropki-11: kropki r7c9-r8c9 colour "white"
kropki-12: kropki r5c6-r5c7 colour "white"
kropki-13: kropki r6c5-r7c5 colour "white"
kropki-14: kropki r4c5-r5c5 colour "white"
kropki-15: kropki r3c5-r4c5 colour "white"
kropki-16: kropki r5c7-r6c7 colour "white"
kropki-17: kropki r6c7-r7c7 colour "white"
kropki-18: kropki r8c7-r9c7 colour "white"
between-1: between r1c2-r1c3-r1c4 ends ["r1c1","r1c5"]
between-2: between r2c3-r3c3-r4c3 ends ["r1c3","r5c3"]
between-3: between r3c4-r3c5-r3c6 ends ["r3c3","r3c7"]
between-4: between r4c5-r5c5-r6c5 ends ["r3c5","r7c5"]
between-5: between r5c6-r5c7-r5c8 ends ["r5c5","r5c9"]
between-6: between r6c7-r7c7-r8c7 ends ["r5c7","r9c7"]
between-7: between r7c4-r7c3-r7c2 ends ["r7c5","r7c1"]
between-8: between r9c6-r9c5-r9c4 ends ["r9c7","r9c3"]
between-9: between r6c9-r7c9-r8c9 ends ["r5c9","r9c9"]
between-10: between r5c1-r4c1-r3c1 ends ["r6c1","r2c1"]
pair-1: pair r5c5-r5c6 sum 10
pair-2: pair r1c2-r1c3 sum 10
pair-3: pair r6c9-r7c9 sum 10
pair-4: pair r3c5-r3c6 sum 10
pair-5: pair r4c8-r5c8 sum 10
pair-6: pair r8c4-r9c4 sum 10
pair-7: pair r5c8-r5c9 sum 5
pair-8: pair r7c7-r8c7 sum 5
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,2.5],[2.5,2.5],[1.5,2.5],[0.5,2.5]],"color":"#6FDEBF","thickness":8,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[5.5,4.5],[4.5,4.5],[3.5,4.5],[2.5,4.5]],"color":"#7E80F7","thickness":8,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[0.5,2.5],[0.5,3.5],[0.5,4.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[2.5,3.5],[2.5,4.5],[2.5,5.5],[2.5,6.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[4.5,5.5],[4.5,6.5],[4.5,7.5],[4.5,8.5]],"color":"#e0e0e0","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Between Lines- Numbers on lines between circles are between the two numbers in the circles. ALL BETWEEN LINES ARE 5 CELLS IN LENGTH. Circles in the center of a 5 cell line are not the end of that line. Colors are to clarify complete lines. Numbers with an X between them sum to 10. Numbers with a V between them sum to 5. Not all X and V are given. Numbers with a white dot between them are consecutive. All possible white dots ON THE CIRCLES AND LINES are given EXCEPT when a given V takes priority.
