---
format: open-rules
title: "Equality Cages 129: Checkmate? Stalemate!"
setter: gUBBLOR
source: https://sudokupad.app/05dwtpsr5m
case: https://sudoku-sleuth.com/cases/equality-cages-129-checkmate-stalemate
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r1c2-r2c2-r3c1-r3c2
equality-cage-2: equality-cage r1c6-r2c5-r2c6-r3c5
equality-cage-3: equality-cage r7c2-r8c2-r9c2-r9c3
equality-cage-4: equality-cage r8c7-r8c8-r9c8-r9c9
equality-cage-5: equality-cage r8c4-r9c4
equality-cage-6: equality-cage r4c8-r4c9-r5c7-r5c8
equality-cage-7: equality-cage r6c1-r6c2
kropki-1: kropki r2c2-r3c2 colour "black"
kropki-2: kropki r8c7-r8c8 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,1.5],[1.5,0.5],[2.5,0.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,7.5],[7.5,8.5],[8.5,7.5],[8.5,8.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[4.5,7.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[4.5,0.5],[4.5,2.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,4.5],[1.5,5.5],[0.5,5.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[1.5,8.5],[1.5,7.5],[2.5,7.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[8.5,0.5],[7.5,1.5],[6.5,1.5],[7.5,2.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[6.5,3.5],[6.5,5.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,4.5]],"color":"#aaaf","thickness":10,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,8.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♗","textColor":"#020202ff","fontSize":34}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,1.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♗","textColor":"#020202ff","fontSize":34}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.25,0.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♖","textColor":"#020202ff","fontSize":34}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,1.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♘","textColor":"#020202ff","fontSize":34}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,7.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♘","textColor":"#020202ff","fontSize":34}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.25,3.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♕","textColor":"#020202ff","fontSize":34}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.25,5.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♔","textColor":"#020202ff","fontSize":34}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.25,6.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♙","textColor":"#020202ff","fontSize":34}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Chess lines: Adjacent digits on a line must form a valid chess move by the indicated piece on a 3x3 numpad. Some examples of a given digit and all valid candidates for cells next to it on the line:
- Knight (box 1+9): 3➔48, 7➔26
- King (box 2): 1➔425, 8➔74569
- Bishop (box 3+7): 2➔46, 7➔53
- Rook (box 4): 5➔2468, 9➔7863
- Pawn (box 6): 6➔39, 7➔4, 2➔5
- Queen (box 8): 3➔125679, 4➔785612
