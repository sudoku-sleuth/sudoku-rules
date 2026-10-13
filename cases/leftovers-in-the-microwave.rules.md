---
format: open-rules
title: Leftovers in the Microwave
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/leftovers-in-the-microwave
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage r8c5-r8c6 total 8 connected true
anti-king
kropki-1: kropki r1c1-r2c1 colour "white"
kropki-2: kropki r1c2-r2c2 colour "white"
kropki-3: kropki r1c3-r2c3 colour "white"
kropki-4: kropki r8c9-r9c9 colour "white"
kropki-5: kropki r8c8-r9c8 colour "white"
kropki-6: kropki r8c7-r9c7 colour "white"
kropki-7: kropki r6c3-r6c4 colour "white"
kropki-8: kropki r4c3-r4c4 colour "white"
kropki-9: kropki r6c6-r6c7 colour "white"
kropki-10: kropki r5c3-r6c3 colour "white"
kropki-11: kropki r7c2-r7c3 colour "black"
pair-1: pair r1c9-r2c9 sum 10
pair-2: pair r1c8-r2c8 sum 10
pair-3: pair r1c7-r2c7 sum 10
pair-4: pair r2c6-r3c6 sum 10
pair-5: pair r2c5-r3c5 sum 10
pair-6: pair r2c4-r3c4 sum 10
pair-7: pair r3c1-r4c1 sum 10
pair-8: pair r3c2-r4c2 sum 10
pair-9: pair r3c3-r4c3 sum 10
pair-10: pair r4c7-r5c7 sum 10
pair-11: pair r4c8-r5c8 sum 10
pair-12: pair r4c9-r5c9 sum 10
pair-13: pair r5c6-r6c6 sum 10
pair-14: pair r5c5-r6c5 sum 10
pair-15: pair r5c4-r6c4 sum 10
pair-16: pair r6c3-r7c3 sum 10
pair-17: pair r6c2-r7c2 sum 10
pair-18: pair r6c1-r7c1 sum 10
pair-19: pair r9c7-r9c8 sum 10
pair-20: pair r7c9-r8c9 sum 10
pair-21: pair r7c8-r8c8 sum 10
pair-22: pair r7c7-r8c7 sum 10
pair-23: pair r8c6-r9c6 sum 10
pair-24: pair r8c5-r9c5 sum 10
pair-25: pair r8c4-r9c4 sum 10
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,7.5],[0.5,6.5],[1.5,5.5],[1.5,4.5],[1.5,3.5],[2.5,2.5],[2.5,1.5],[2.5,0.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[3.5,7.5],[3.5,6.5],[4.5,5.5],[4.5,4.5],[4.5,3.5],[5.5,2.5],[5.5,1.5],[5.5,0.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[6.5,7.5],[6.5,6.5],[7.5,5.5],[7.5,4.5],[7.5,3.5],[8.5,2.5],[8.5,1.5],[8.5,0.5]],"color":"#CCCCCC","thickness":8,"rounded":true}}
```

Normal Sudoku rules apply. Cells that are a chess KING's move apart CANNOT HAVE THE SAME VALUE. Numbers on gray lines have the same remainder (leftover) as all others on the line when divided by 3. Numbers in a cage sum to the number in the top left corner of the cage. Numbers with an X between them sum to 10. Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all X and dots are given.
