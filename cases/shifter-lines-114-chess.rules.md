---
format: open-rules
title: "Shifter Lines 114: Chess"
setter: gUBBLOR
source: https://sudokupad.app/wr2y2fghxz
case: https://sudoku-sleuth.com/cases/shifter-lines-114-chess
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r6c5 colour "black"
kropki-2: kropki r3c8-r4c8 colour "black"
shifter-line-1: shifter-line r6c5-r6c6-r6c7-r6c8
shifter-line-2: shifter-line r6c4-r7c5-r8c5
shifter-line-3: shifter-line r3c7-r4c8
shifter-line-4: shifter-line r4c5-r3c4-r2c3
shifter-line-5: shifter-line r1c7-r2c6
shifter-line-6: shifter-line r3c6-r4c6
shifter-line-7: shifter-line r5c2-r5c3-r5c4-r5c5
shifter-line-8: shifter-line r7c3-r7c2-r6c2
shifter-line-9: shifter-line r3c2-r4c3
shifter-line-10: shifter-line r1c3-r1c4
shifter-line-11: shifter-line r3c9-r4c9
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.25,4.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♗","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.25,3.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♔","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.25,6.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♘","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,5.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♖","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.25,2.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♗","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.25,2.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♔","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,6.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♙","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.25,5.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♙","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.25,1.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♕","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.25,1.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♖","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.25,1.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♘","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.25,2.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♗","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.25,8.25],"width":0,"height":0.894,"rounded":true,"thickness":0,"angle":0,"text":"♘","textColor":"#020202ff","fontSize":34,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[7.5,2.5],[8.5,2.5],[8.5,3.5],[7.5,2.5]],"color":"#d8ee25ff","thickness":10,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[7.5,6.5],[8.5,6.5],[8.5,5.5],[7.5,5.5]],"color":"#d8ee25ff","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Chess lines: All shifter lines are also chess lines. Adjacent digits on a line must form a valid chess move by the indicated piece on a 3x3 numpad. Some examples of a given digit and all valid candidates for cells next to it on the line:
- Knight (R3C2+R3C7+R3C9): 3➔48, 7➔26
- King (R6C4+R8C3): 1➔425, 8➔74569
- Bishop (R1C3+R2C3+R6C5): 2➔46, 7➔53
- Rook (R6C2+R8C6): 5➔2468, 9➔7863
- Pawn (R1C7+R3C6): 6➔39, 7➔4, 2➔5
- Queen (R5C2): 3➔125679, 4➔785612
