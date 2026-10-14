---
format: open-rules
title: Cloned Pentominoes
setter: Blobz
source: https://sudokupad.app/blobz/cloned-pentominoes
case: https://sudoku-sleuth.com/cases/cloned-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c4=3 r2c8=7 r3c9=4 r5c1=4 r5c5=6 r6c6=5 r6c8=4 r7c5=2 r8c2=2 r8c3=3
exported: e7daba1578f82aa9ad39570980895aa0
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r2c4 white
kropki-2: kropki r2c5-r3c5 white
kropki-3: kropki r4c5-r4c6 white
kropki-4: kropki r4c6-r4c7 white
kropki-5: kropki r3c8-r3c9 white
kropki-6: kropki r4c9-r5c9 white
kropki-7: kropki r5c7-r5c8 white
kropki-8: kropki r6c6-r7c6 white
kropki-9: kropki r9c4-r9c5 white
kropki-10: kropki r9c3-r9c4 white
kropki-11: kropki r7c1-r7c2 white
kropki-12: kropki r5c1-r5c2 white
kropki-13: kropki r4c2-r4c3 white
kropki-14: kropki r6c3-r7c3 white
kropki-15: kropki r5c4-r6c4 white
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[3,4,5,6,7,8,12,13,14,15,17,21,22,23,24,25,26,27,28,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,54,55,56,57,58,59,63,65,66,67,68,72,73,74,75,76,77]}}
```

Normal sudoku rules apply.

The caged region contains one each of the twelve standard pentominoes (no repeats by reflection or rotation).

The given digits (inside the cage) indicate the number of pentominoes that contribute to the corresponding box.

White dots lie on the boundary between two pentominoes, and indicate digits that differ by 1 (not all such dots are shown). No two pentominoes share more than one such dot. Each pentomino has at least two dots on its boundary.

The indicated pentominoes in the top left and bottom right boxes contain odd digits only. These two pentominoes are also exact clones of their counterparts in the main cage.

Pentominoes may contain repeated digits if allowed by other rules.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
