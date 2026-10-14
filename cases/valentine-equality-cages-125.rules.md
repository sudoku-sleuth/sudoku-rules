---
format: open-rules
title: "Equality Cages 125 x Shifter Lines 111: Valentine"
setter: gUBBLOR
source: https://sudokupad.app/ur776uhogl
case: https://sudoku-sleuth.com/cases/valentine-equality-cages-125
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 78cd553f84a8ccf7568231d758bdc005
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r7c4-r7c5-r8c4-r8c5
equality-cage-2: equality-cage r4c7-r4c8-r5c7-r5c8
equality-cage-3: equality-cage r4c2-r5c2
equality-cage-4: equality-cage r2c2-r2c3-r3c2-r3c3
equality-cage-5: equality-cage r9c1-r9c2
equality-cage-6: equality-cage r1c6-r1c7
equality-cage-7: equality-cage r5c1-r6c1
equality-cage-8: equality-cage r6c5-r6c6
kropki-1: kropki r8c4-r8c5 black
kropki-2: kropki r4c8-r5c8 black
kropki-3: kropki r6c7-r7c7 black
kropki-4: kropki r3c2-r4c2 black
pair-1: pair r4c5-r5c5 sum 10
pair-2: pair r1c7-r2c7 sum 10
pair-3: pair r9c7-r9c8 sum 10
pair-4: pair r8c2-r9c2 sum 10
pair-5: pair r6c9-r7c9 sum 10
pair-6: pair r2c8-r2c9 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.167,4.833],[7.5,4.5],[4.5,1.5],[4.167,1.5]],"color":"#d8ee25","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.833,5.167],[5.167,6.833]],"color":"#d8ee25","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.833,7.167],[4.5,7.5],[3.5,7.5],[2.5,6.5],[2.5,5.5],[3.5,4.5],[2.5,3.5],[2.5,2.5],[3.5,1.5],[3.833,1.5]],"color":"#d8ee25","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[3.833,3.833],[1.167,1.167]],"color":"#d8ee25","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.833,1.167],[1.833,1.833],[1.167,1.833]],"color":"#d8ee25","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,1.167],[1.5,1.5],[1.167,1.5]],"color":"#d8ee25","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.167,6.167],[7.833,7.833],[7.833,7.167]],"color":"#d8ee25","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[7.833,7.833],[7.167,7.833]],"color":"#d8ee25","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.
