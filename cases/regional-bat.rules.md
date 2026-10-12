---
format: open-rules
title: Regional Bat
setter: sujoyku
source: https://sudokupad.app/xlt9sbnooc
case: https://sudoku-sleuth.com/cases/regional-bat
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
parity r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
region-sum-1: region-sum r2c7-r1c7-r1c6-r2c6-r3c6-r4c6-r4c7-r4c8-r4c9-r3c9-r3c8 segments [["r2c7","r1c7"],["r1c6","r2c6","r3c6"],["r4c6"],["r4c7","r4c8","r4c9"],["r3c9","r3c8"]]
region-sum-2: region-sum r2c4-r3c4-r4c4-r5c4-r6c4-r6c5-r6c6-r6c7-r6c8 segments [["r2c4","r3c4"],["r4c4","r5c4","r6c4","r6c5","r6c6"],["r6c7","r6c8"]]
region-sum-3: region-sum r1c1-r2c2-r3c3-r4c3-r5c3-r6c3-r7c2-r7c3-r8c3-r7c4-r7c5-r7c6-r8c6-r9c7-r9c8-r8c8-r8c9-r7c8 segments [["r1c1","r2c2","r3c3"],["r4c3","r5c3","r6c3"],["r7c2","r7c3","r8c3"],["r7c4","r7c5","r7c6","r8c6"],["r9c7","r9c8","r8c8","r8c9","r7c8"]]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,2.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,3.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,4],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,3.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,4.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.85,4.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.15,5.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,7],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.85,6.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.15,7.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-50","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-51","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.85,1.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.15,2.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-53","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8],"width":0.6,"height":0.6,"rounded":false,"fill":"#CFCFCF","thickness":0}}
- {"id":"drawing-54","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.85,7.85],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
- {"id":"drawing-55","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.15,8.15],"width":0.3,"height":0.3,"rounded":false,"fill":"#444444","thickness":0,"opacity":0.5}}
```

Normal rules apply. Blue lines are Region sum lines, i.e. the digits on a blue line sum to the same value in each 3x3 region the line passes through. If a blue line enters a 3x3 region more than once, each segment has to be considered separately. Adjacent digits on a red line must alternate between odd and even. Battenburg: Whenever 2 odd and 2 even digits form a 2x2 checkerboard pattern, a Battenburg marking is given. If there is no such marking, the above pattern is not allowed.
