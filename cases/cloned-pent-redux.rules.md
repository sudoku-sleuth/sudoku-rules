---
format: open-rules
title: Cloned Pent Redux
setter: Blobz
source: https://sudokupad.app/blobz/cloned-pent-redux
case: https://sudoku-sleuth.com/cases/cloned-pent-redux
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c6=4 r2c1=3 r2c2=4 r4c6=3 r5c2=3 r5c5=4 r6c9=2 r8c8=8 r9c5=3 r9c7=2
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r2c1 colour "white"
kropki-2: kropki r3c1-r3c2 colour "white"
kropki-3: kropki r2c3-r2c4 colour "white"
kropki-4: kropki r1c4-r2c4 colour "white"
kropki-5: kropki r4c1-r5c1 colour "white"
kropki-6: kropki r5c3-r5c4 colour "white"
kropki-7: kropki r5c6-r6c6 colour "white"
kropki-8: kropki r5c6-r5c7 colour "white"
kropki-9: kropki r5c8-r5c9 colour "white"
kropki-10: kropki r6c9-r7c9 colour "white"
kropki-11: kropki r7c6-r7c7 colour "white"
kropki-12: kropki r9c6-r9c7 colour "white"
kropki-13: kropki r8c4-r9c4 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#CFCFCF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,7.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,1.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ced5feff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[0,1,2,3,4,5,9,11,12,13,14,18,19,20,21,22,23,27,28,29,30,31,32,33,34,35,36,37,38,39,41,42,43,44,45,46,47,48,49,50,51,52,53,57,58,59,60,61,62,66,67,68,69,71,75,76,77,78,79,80]}}
```

Normal sudoku rules apply.

The caged region contains one each of the twelve standard pentominoes (no repeats by reflection or rotation).

The given digits (inside the cage) indicate the number of pentominoes that contribute to the corresponding box.

White dots lie on the boundary between two pentominoes, and indicate digits that differ by 1 (not all such dots are shown). No two pentominoes share more than one such dot. Each pentomino has at least two dots on its boundary.

The indicated pentominoes in the top right and bottom left boxes contain odd digits only. These two pentominoes are also exact clones of their counterparts in the main cage.

Pentominoes may contain repeated digits if allowed by other rules.

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
