---
format: open-rules
title: "Equality Cages 126: Multi-Renbanification"
setter: gUBBLOR and EFlatMinor
source: https://sudokupad.app/357gk528vv
case: https://sudoku-sleuth.com/cases/equality-cages-126
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
exported: fe57ddc0d478eaf24cd8f6f89db51b80
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r1c5-r2c4-r2c5-r3c4
equality-cage-2: equality-cage r3c2-r3c3-r4c3-r5c3
equality-cage-3: equality-cage r7c7-r8c5-r8c6-r8c7
equality-cage-4: equality-cage r6c2-r6c3
equality-cage-5: equality-cage r5c5-r5c6
equality-cage-6: equality-cage r3c6-r3c7
equality-cage-7: equality-cage r9c1-r9c2
equality-cage-8: equality-cage r1c1-r1c2
equality-cage-9: equality-cage r8c9-r9c9
kropki-1: kropki r3c3-r4c3 black
kropki-2: kropki r7c3-r7c4 black
kropki-3: kropki r4c5-r5c5 white
kropki-4: kropki r5c9-r6c9 white
pair r4c1-r4c2 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5],[2.5,1.5],[2.5,3.5],[1.5,3.5]],"color":"#f067f0","thickness":11,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5]],"color":"#f067f0","thickness":11,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[5.5,2.5],[6.5,2.5],[6.5,3.5],[7.5,4.5],[7.5,6.5],[5.5,6.5],[4.5,5.5],[4.5,4.5]],"color":"#f067f0","thickness":11,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,6.5],[2.5,6.5],[1.5,5.5]],"color":"#f067f0","thickness":11,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,7.5]],"color":"#f067f0","thickness":11,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,1.5],[7.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#f067f0","thickness":11,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[3.5,1.5],[2.5,1.5],[2.5,3.5],[1.5,3.5]],"color":"#fff","thickness":2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,4.5]],"color":"#fff","thickness":2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,1.5],[5.5,2.5],[6.5,2.5],[6.5,3.5],[7.5,4.5],[7.5,6.5],[5.5,6.5],[4.5,5.5],[4.5,4.5]],"color":"#fff","thickness":2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[3.5,6.5],[2.5,6.5],[1.5,5.5]],"color":"#fff","thickness":2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,7.5]],"color":"#fff","thickness":2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[6.5,1.5],[7.5,1.5],[7.5,3.5],[8.5,4.5],[8.5,5.5]],"color":"#fff","thickness":2,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

V: Adjacent cells connected with a V must sum to 5. Not all V's are shown.

Multi-Renban: Digits along each multi-renban line contains one or multiple sets of consecutive digits in any order. Digits may repeat, but all digits on the line must repeat the same number of times. For example 624513, 668778 or 445545 would all be valid options for a 6-cell line.
