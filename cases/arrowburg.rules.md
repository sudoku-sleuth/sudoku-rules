---
format: open-rules
title: Arrowburg
setter: sujoyku
source: https://sudokupad.app/ao315h2hb0
case: https://sudoku-sleuth.com/cases/arrowburg
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
arrow-1: arrow r3c2-r2c3 bulb ["r4c1"]
arrow-2: arrow r5c4-r4c5 bulb ["r5c3"]
arrow-3: arrow r3c7-r2c8 bulb ["r4c6"]
arrow-4: arrow r4c9-r5c9-r6c9 bulb ["r3c9"]
arrow-5: arrow r8c8-r8c7 bulb ["r8c9"]
arrow-6: arrow r8c2-r8c3-r8c4 bulb ["r8c1"]
arrow-7: arrow r6c4-r6c3-r6c2 bulb ["r6c5"]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,5.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,6.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.85,5.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.15,6.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,5.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,6.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.85,5.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,6.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
```

Normal sudoku rules apply. Digits on an arrow sum to the digit in the circle from which the arrow emerges. Battenburg: Whenever 2 odd and 2 even digits form a 2x2 checkerboard pattern, a Battenburg marking is given. If there is no such marking, the above pattern is not allowed.
