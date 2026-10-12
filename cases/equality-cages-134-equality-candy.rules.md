---
format: open-rules
title: "Equality Cages 134: Equality candy"
setter: gUBBLOR
source: https://sudokupad.app/uu5dnksiyn
case: https://sudoku-sleuth.com/cases/equality-cages-134-equality-candy
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r6c1-r6c2-r7c1-r8c1
equality-cage-2: equality-cage r4c9-r5c9-r6c8-r6c9
equality-cage-3: equality-cage r1c3-r2c3-r2c4-r3c4
equality-cage-4: equality-cage r5c4-r6c4-r7c4-r7c5
equality-cage-5: equality-cage r6c5-r6c6
equality-cage-6: equality-cage r3c1-r3c2
equality-cage-7: equality-cage r7c6-r8c6
equality-cage-8: equality-cage r3c7-r4c7-r4c8-r5c8
equality-cage-9: equality-cage r2c6-r3c6
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#f4554eff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,0.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,2.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,8.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#586feaff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1],"width":0.32,"height":0.32,"rounded":true,"fill":"#50de56ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#50de56ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0.32,"height":0.32,"rounded":true,"fill":"#50de56ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,7.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#50de56ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,8],"width":0.32,"height":0.32,"rounded":true,"fill":"#ddf338ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ddf338ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6],"width":0.32,"height":0.32,"rounded":true,"fill":"#ddf338ff","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,7.5],"width":0.32,"height":0.32,"rounded":true,"fill":"#ddf338ff","stroke":"#000000","thickness":1,"angle":0}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Ambigous dots: There are dots of four different colors in the puzzle, and four different constraints. It's up to the solver to deduce which color is paired with which constraint. Each color has only one constraint it identifies as, but dots are allowed to act as more than one constraint. There are no negative constraints, and the dots could be any of these four;
1. X - Adjacent cells connected with an X must sum to 10.
2. V - Adjacent cells connected with an V must sum to 5.
3. Black Kropki dots - A black dot between cells indicates cell values with a 2:1 ratio.
4. White Kropki dots - A white dot between cells indicates cells with consecutive values.
