---
format: open-rules
title: "Shifter Lines 117: Shifty Candy"
setter: gUBBLOR
source: https://sudokupad.app/580ax6cpoo
case: https://sudoku-sleuth.com/cases/shifter-lines-117-shifty-candy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e7de8c3eb04a97d76321c3759df13ddd
---

```rules
sudoku 9x9
shifter-line-1: shifter-line r8c9-r7c9-r6c8
shifter-line-2: shifter-line r9c8-r9c7-r9c6
shifter-line-3: shifter-line r2c8-r3c9-r4c9-r4c8
shifter-line-4: shifter-line r5c3-r4c3-r4c4-r5c4
shifter-line-5: shifter-line r6c2-r6c3-r6c4
shifter-line-6: shifter-line r9c3-r8c3-r7c4
shifter-line-7: shifter-line r4c6-r5c7
shifter-line-8: shifter-line r4c1-r3c1-r4c2
shifter-line-9: shifter-line r1c6-r1c7
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,8.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#50de56ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#50de56ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#50de56ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,8],"width":0.32,"height":0.32,"rounded":true,"fill":"#ddf338ff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ddf338ff","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Ambigous dots: There are dots of four different colors in the puzzle, and four different constraints. It's up to the solver to deduce which color is paired with which constraint. Each color has only one constraint it identifies as, but dots are allowed to act as more than one constraint. There are no negative constraints, and the dots could be any of these four;
1. X - Adjacent cells connected with an X must sum to 10.
2. V - Adjacent cells connected with an V must sum to 5.
3. Black Kropki dots - A black dot between cells indicates cell values with a 2:1 ratio.
4. White Kropki dots - A white dot between cells indicates cells with consecutive values.
