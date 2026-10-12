---
format: open-rules
title: Batten-Burger
setter: sujoyku
source: https://sudokupad.app/m0gzcj26j2
case: https://sudoku-sleuth.com/cases/batten-burger
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
  - A source line layer still needs to be included in our reading.
---

```rules
sudoku 9x9
sandwich-1: sandwich r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2 sum 15
sandwich-2: sandwich r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 30
sandwich-3: sandwich r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 sum 10
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.85,0.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.15,1.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.85,5.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.15,6.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[4.97,5.67],[5.12,5.5],[4.97,5.33]],"color":"#000000","thickness":3.4,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.03,5.33],[5.88,5.5],[6.03,5.67]],"color":"#000000","thickness":3.4,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[5.33,4.97],[5.5,5.12],[5.67,4.97]],"color":"#000000","thickness":3.4,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[5.67,6.03],[5.5,5.88],[5.33,6.03]],"color":"#000000","thickness":3.4,"rounded":true,"layer":"over"}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,8],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,8],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.85,0.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.15,1.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-56","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-57","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-58","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-59","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-60","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-61","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-62","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-63","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-64","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-65","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-66","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-67","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-68","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,6],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-69","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.85,5.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-70","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,6.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.76,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"0","fontSize":44.8}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.76,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"27","fontSize":44.8}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.76,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"12","fontSize":44.8}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.76,-0.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"14","fontSize":44.8}}
```

Normal sudoku rules apply. A digit in a minimum cell is strictly smaller than any digit in an orthogonally adjacent cell. Clues outside the grid are Sandwich clues and indicate the sum of all digits between 1 and 9 in the respective row or column. Battenburg: Whenever 2 odd and 2 even digits form a 2x2 checkerboard pattern, a Battenburg marking is given. If there is no such marking, the above pattern is not allowed.
