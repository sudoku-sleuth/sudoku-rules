---
format: open-rules
title: Engaged!
setter: Timotab
source: https://sudokupad.app/ry3832pnu7
case: https://sudoku-sleuth.com/cases/engaged
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r8c6=8 r9c7=7
---

```rules
sudoku 9x9
cage-1: cage r8c1-r8c2-r9c2 total 8 connected true
cage-2: cage r7c9-r8c9 total 7 connected true
cage-3: cage r2c3-r3c3-r4c3 total 8 connected true
cage-4: cage r4c4-r5c4 total 7 connected true
arrow r2c6-r3c7 bulb ["r1c5"]
whispers-1: whispers r8c2-r7c2-r6c2-r6c3 gap 5
whispers-2: whispers r6c2-r6c1 gap 5
whispers-3: whispers r7c4-r7c3-r8c3-r8c4-r9c4-r9c3 gap 5
whispers-4: whispers r7c8-r8c8-r9c8 gap 5
whispers-5: whispers r9c9-r8c8-r7c9 gap 5
whispers-6: whispers r7c7-r6c7-r5c7-r5c8 gap 5
whispers-7: whispers r5c7-r5c6 gap 5
renban-1: renban r2c2-r1c3-r1c4-r2c5-r1c6-r1c7-r2c8
renban-2: renban r3c2-r4c2-r5c2-r6c3
renban-3: renban r3c8-r4c8-r5c8-r6c7
renban-4: renban r7c4-r8c5-r7c6
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":0.52,"height":0.52,"rounded":false,"fill":"#e5c913ff","thickness":0,"angle":45}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,3.5],[3.5,2.5],[4.5,2.5],[5.5,3.5],[5.5,4.5],[4.5,5.5],[3.5,5.5]],"color":"#e5c913ff","thickness":9.6,"rounded":true}}
```

• Standard sudoku rules apply. Place the digits 1-9 in every row, column, and box, without repetition. 
• Digits on a pink line form a set of non-repeating, consecutive digits in any order.
• Adjacent digits along a green line must have a difference of at least five.
• The value of the Nth cell along the gold line (starting from the diamond) indicates the position along the line of the cell which has the value N. Eg: if the first cell along the line has a value of 3, then the 3rd cell along that line has a value of 1.
• Digits along an arrow sum to the digit in the attached circle. Digits may repeat on an arrow if allowed by other rules.
• Digits in cages do not repeat and sum to the total in the corner.
