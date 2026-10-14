---
format: open-rules
title: "Equality Cages 121: Ranked cells"
setter: gUBBLOR
source: https://sudokupad.app/15upl9e4ex
case: https://sudoku-sleuth.com/cases/equality-cages-121
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 13aeb5408821379a47a174700bcdbe0d
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r2c2-r2c3
equality-cage-2: equality-cage r2c1-r3c1
equality-cage-3: equality-cage r4c2-r4c3
equality-cage-4: equality-cage r6c1-r6c2-r6c3-r7c3
equality-cage-5: equality-cage r7c7-r8c7-r9c7-r9c8
equality-cage-6: equality-cage r2c7-r2c8
equality-cage-7: equality-cage r4c5-r5c5
equality-cage-8: equality-cage r3c8-r3c9
equality-cage-9: equality-cage r3c4-r4c4
equality-cage-10: equality-cage r1c8-r1c9
equality-cage-11: equality-cage r8c5-r9c5
kropki-1: kropki r2c2-r3c2 black
kropki-2: kropki r7c2-r8c2 black
kropki-3: kropki r1c2-r2c2 white
kropki-4: kropki r8c8-r8c9 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[1.5,1.5],[2.5,1.5],[2.5,2.5],[1.5,1.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[0.5,1.5],[1.5,1.5],[1.5,2.5],[2.5,2.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[0.5,2.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[8.5,8.5],[8.5,7.5],[6.5,7.5],[7.5,6.5],[7.5,7.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[8.5,7.5],[8.5,6.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[6.5,8.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[7.5,6.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[1.5,6.5],[1.5,7.5],[2.5,7.5],[1.5,6.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[0.5,8.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,5.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,3.5],[4.5,4.5],[3.5,4.5],[3.5,5.5],[4.5,4.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[3.5,0.5],[3.5,1.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[3.5,8.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,3.5],[7.5,4.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[1.5,5.5],[0.5,5.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,1.5],[7.5,2.5],[6.5,1.5],[7.5,0.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[7.5,1.5],[6.5,1.5],[6.5,2.5],[7.5,2.5]],"color":"#ffdc33","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Cell rankings: A cells rank is equal to the number of times a line goes from the center of the cell to the cell border. For example, R2C6 has a rank of 2, and R5C5 has a rank of 5. Cells with a higher rank must contain a higher digit than those of a lower rank. Rankings only exists within each box, so there would be nothing wrong with a rank 1 cell in box 4 to be higher than a rank 3 cell in box 3. Cells with no rank can be any number, and may be between cells of the same rank. I.e. there'd be nothing wrong with having two rank 2 cells be 4 and 6 and a non-ranked cell in the same box to be a 5.
