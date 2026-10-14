---
format: open-rules
title: "Equality Cages 128: Nabnerification"
setter: gUBBLOR
source: https://sudokupad.app/vmtiezcw8i
case: https://sudoku-sleuth.com/cases/equality-cages-128
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 9d871ba386fe3a6005ef21e92564bc17
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r8c1-r8c2-r9c1-r9c2
equality-cage-2: equality-cage r7c6-r7c7-r7c8-r7c9
equality-cage-3: equality-cage r1c6-r2c6-r3c6-r4c6
equality-cage-4: equality-cage r4c4-r5c4
equality-cage-5: equality-cage r6c3-r6c4
equality-cage-6: equality-cage r4c2-r5c1-r5c2-r6c2
equality-cage-7: equality-cage r1c2-r2c2
equality-cage-8: equality-cage r4c9-r5c9
kropki-1: kropki r7c7-r7c8 black
kropki-2: kropki r2c6-r3c6 black
kropki-3: kropki r1c9-r2c9 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[8.5,2.5],[6.5,2.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[6.5,5.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[3.5,5.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[5.5,3.5],[5.5,4.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,1.5],[4.5,0.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[1.5,0.5],[1.5,1.5],[0.5,1.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[1.5,7.5],[1.5,8.5],[0.5,8.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,4.5],[0.5,3.5],[1.5,2.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,7.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[8.5,6.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[3.5,2.5]],"color":"#c9c882","thickness":10,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,8.5],[4.5,8.5],[4.5,7.5],[3.5,7.5],[3.5,8.5]],"color":"#c9c882","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Nabner: Digits along each nabner line must be a set of non-consecutive digits in any order, and must not repeat. I.e. if a 4 is on a nabner line none of the other cells on the line can be 3, 4, or 5.
