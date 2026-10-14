---
format: open-rules
title: Star-Spangled
setter: Blobz
source: https://sudokupad.app/blobz/star-spangled
case: https://sudoku-sleuth.com/cases/star-spangled
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 6fe01934be348651cf7413d3f9908993
---

```rules
sudoku 9x9
cage-1: cage r1c7-r1c8 total 13 connected true
cage-2: cage r3c6-r3c7 total 9 connected true
cage-3: cage r5c6-r5c7 total 15 connected true
cage-4: cage r5c8-r5c9 total 9 connected true
cage-5: cage r6c8-r6c9-r7c8-r7c9 total 22 connected true
cage-6: cage r6c2-r6c3-r6c4 total 17 connected true
cage-7: cage r7c4-r7c5 total 12 connected true
cage-8: cage r9c1-r9c2-r9c3 total 18 connected true
cage-9: cage r9c4-r9c5-r9c6 total 14 connected true
cage-10: cage r9c7-r9c8-r9c9 total 13 connected true
cage-11: cage r1c1-r1c2-r2c1 total 13 connected true
cage-12: cage r2c2-r2c3-r3c2 total 11 connected true
cage-13: cage r3c3-r3c4-r4c3-r4c4 total 20 connected true
renban-1: renban r3c7-r3c8-r3c9
renban-2: renban r7c4-r7c3-r7c2-r7c1
renban-3: renban r7c5-r7c6-r7c7-r7c8-r7c9
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,0.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,1.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":0.72,"height":0.72,"rounded":false,"stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,3.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,0.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,1.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":0.66,"height":0.66,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,3.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,5.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#fa82826e","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Circles contain odd digits; Squares contain even digits.

Digits in cages do not repeat, and sum to the value shown.

Pink shaded cells in rows 1, 5 and 9 index which row the digit 1, 5, and 9 (respectively) is placed in that column. For example, if r9c6 contains a 2, then r2c6 contains a 9.

Pink (Renban) lines (rows 3 and 7) contain digits that form a consecutive sequence, in any order.

Blue shading is cosmetic only.
