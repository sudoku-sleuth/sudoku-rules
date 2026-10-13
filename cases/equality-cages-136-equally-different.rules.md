---
format: open-rules
title: "Equality Cages 136: Equally different"
setter: gUBBLOR
source: https://sudokupad.app/9ndqfc3t8n
case: https://sudoku-sleuth.com/cases/equality-cages-136-equally-different
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r3c2-r3c3
equality-cage-2: equality-cage r4c4-r4c5-r5c4-r5c5
equality-cage-3: equality-cage r3c5-r3c6
equality-cage-4: equality-cage r1c4-r2c4
equality-cage-5: equality-cage r1c2-r1c3
equality-cage-6: equality-cage r6c6-r7c5-r7c6-r8c6
equality-cage-7: equality-cage r3c8-r4c8-r4c9-r5c8
equality-cage-8: equality-cage r5c1-r6c1
equality-cage-9: equality-cage r7c9-r8c9
kropki-1: kropki r4c4-r5c4 colour "black"
kropki-2: kropki r7c6-r8c6 colour "black"
kropki-3: kropki r4c4-r4c5 colour "white"
pair r5c4-r5c5 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[3.5,3.5],[2.5,2.5],[2.5,1.5],[1.5,0.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,4.5],[2.5,5.5],[1.5,5.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[1.5,3.5],[0.5,2.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,5.5],[6.5,6.5],[7.5,5.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,4.5],[7.5,2.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,5.5],[2.5,7.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,8.5],[3.5,8.5],[4.5,7.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,5.5],[7.5,6.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,1.5],[4.5,1.5]],"color":"#1fe6dc64","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Same difference lines: Each pair of adjacent digits on one the lines has the same difference. All lines MUST have unique "difference values".

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

V: Adjacent cells connected with a V must sum to 5. Not all V's are shown.
