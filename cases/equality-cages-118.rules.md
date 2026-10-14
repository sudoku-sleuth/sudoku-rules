---
format: open-rules
title: "Equality Cages 118: Sum equally consecutive lines"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/equality-cages-118
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 94337ec4fdb42a6f7cd2746761518524
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c2-r3c3
equality-cage-2: equality-cage r5c1-r5c2-r6c1-r6c2
equality-cage-3: equality-cage r7c2-r8c2
equality-cage-4: equality-cage r8c3-r9c3
equality-cage-5: equality-cage r7c8-r7c9-r8c8-r8c9
equality-cage-6: equality-cage r5c7-r6c7
equality-cage-7: equality-cage r3c6-r4c6
equality-cage-8: equality-cage r1c5-r2c4-r2c5-r3c5
equality-cage-9: equality-cage r7c5-r8c5
equality-cage-10: equality-cage r4c9-r5c9
equality-cage-11: equality-cage r2c7-r3c7
kropki-1: kropki r3c2-r3c3 black
kropki-2: kropki r5c1-r5c2 black
kropki-3: kropki r8c3-r8c4 black
kropki-4: kropki r2c5-r3c5 black
kropki-5: kropki r5c2-r6c2 white
kropki-6: kropki r8c1-r8c2 white
kropki-7: kropki r7c8-r8c8 white
pair-1: pair r6c1-r6c2 sum 10
pair-2: pair r7c8-r7c9 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[5.5,1.5],[4.5,1.5],[3.5,2.5],[2.5,1.5],[2.5,2.5]],"color":"#f71124","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[6.5,1.5]],"color":"#f71124","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[8.5,2.5],[7.5,3.5],[6.5,3.5],[5.5,4.5]],"color":"#f71124","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[5.5,8.5],[6.5,7.5],[5.5,6.5],[4.5,6.5],[3.5,5.5],[2.5,5.5],[2.5,4.5],[1.5,4.5]],"color":"#f71124","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,3.5],[4.5,4.5]],"color":"#f71124","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,6.5],[8.5,7.5]],"color":"#f71124","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,1.5]],"color":"#f71124","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[1.5,6.5],[2.5,6.5]],"color":"#f71124","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Consecutive sum lines: Digits along consecutive sum lines within each box have sums that differ by 1. I.e. if a line has 1,2,3 on it in one box, and only 1 digit in another box that digit has to be either 5 or 7. If it's a 5 and it enters a third box (from the 5) with 2 digits on it, those would either have to be 2,4 or 1,5 (so it sums to 6), or 1,3 (so it sums to 4). Digits may repeat on lines.
