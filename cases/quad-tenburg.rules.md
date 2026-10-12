---
format: open-rules
title: Quad-tenburg
setter: sujoyku
source: https://sudokupad.app/3qgy8h3m3y
case: https://sudoku-sleuth.com/cases/quad-tenburg
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c5-r1c6-r2c5-r2c6 digits [2,3,5,9]
quadruple-2: quadruple r1c8-r1c9-r2c8-r2c9 digits [1,3,7,9]
quadruple-3: quadruple r2c1-r2c2-r3c1-r3c2 digits [3,4,5,8]
quadruple-4: quadruple r4c1-r4c2-r5c1-r5c2 digits [1,5,6,7]
quadruple-5: quadruple r4c4-r4c5-r5c4-r5c5 digits [3,4,7,9]
quadruple-6: quadruple r5c8-r5c9-r6c8-r6c9 digits [3,4,6,8]
quadruple-7: quadruple r8c2-r8c3-r9c2-r9c3 digits [1,5,8,9]
quadruple-8: quadruple r8c4-r8c5-r9c4-r9c5 digits [6,7,8,9]
quadruple-9: quadruple r8c7-r8c8-r9c7-r9c8 digits [3,4,6,7]
```

```drawing
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.85,0.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,1.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444FF","thickness":0}}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. A digit in a circle must appear in one of the four surrounding cells. Battenburg: Whenever 2 odd and 2 even digits form a 2x2 checkerboard pattern, a Battenburg marking is given. If there is no such marking, the above pattern is not allowed.
