---
format: open-rules
title: "Equality Cages 120: Parity?! It's called polarity!"
setter: gUBBLOR
source: https://sudokupad.app/47p4up0obf
case: https://sudoku-sleuth.com/cases/equality-cages-120
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r2c8-r2c9-r3c8-r3c9
equality-cage-2: equality-cage r8c7-r8c8
equality-cage-3: equality-cage r7c7-r7c8
equality-cage-4: equality-cage r1c8-r1c9
equality-cage-5: equality-cage r3c7-r4c7
equality-cage-6: equality-cage r7c1-r8c1
equality-cage-7: equality-cage r6c3-r7c3
equality-cage-8: equality-cage r1c2-r2c2
equality-cage-9: equality-cage r5c1-r5c2
equality-cage-10: equality-cage r5c7-r5c8
equality-cage-11: equality-cage r5c9-r6c9
equality-cage-12: equality-cage r5c4-r5c5-r5c6-r6c5
kropki-1: kropki r8c1-r8c2 colour "black"
kropki-2: kropki r8c2-r8c3 colour "black"
kropki-3: kropki r2c8-r2c9 colour "black"
kropki-4: kropki r2c7-r2c8 colour "black"
parity-1: parity r8c3-r8c2-r7c2
parity-2: parity r1c7-r1c8
parity-3: parity r2c2-r2c1-r3c2-r2c3
parity-4: parity r4c8-r5c9-r5c8-r5c7
parity-5: parity r5c5-r5c6-r4c6
parity-6: parity r9c8-r9c9
parity-7: parity r4c3-r4c4-r3c5
pair-1: pair r4c1-r4c2 sum 10
pair-2: pair r8c7-r9c7 sum 10
pair-3: pair r2c3-r2c4 sum 10
pair-4: pair r4c5-r5c5 sum 10
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[1.5,7.5],[1.5,6.5],[2.5,6.5]],"color":"#39bd23","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5],[8.5,1.5]],"color":"#39bd23","thickness":10,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[4.5,1.5],[4.5,0.5],[3.5,1.5],[2.5,0.5]],"color":"#39bd23","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[4.5,3.5],[4.5,4.5]],"color":"#39bd23","thickness":10,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[7.5,7.5],[6.5,7.5],[6.5,6.5],[7.5,6.5]],"color":"#39bd23","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

X: Adjacent cells connected with an X must sum to 10. Not all X's are shown.

Polarity lines (green): Adjacent digits along each polarity line must alternate between low (6,7,8,9) and high (1,2,3,4). 5 can never be on a polarity line. Digits may repeat on the line.

Parity lines (red): Adjacent digits along each parity line must alternate between odd (1,3,5,7,9) and even (2,4,6,8). Digits may repeat on the line.
