---
format: open-rules
title: Magic Killer Pentominoes
setter: Blobz
source: https://sudokupad.app/i6807gcx6n
case: https://sudoku-sleuth.com/cases/magic-killer-pentominoes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c2=4 r3c5=4 r3c8=2 r5c3=4 r6c8=4 r7c1=2 r8c4=4 r9c7=2
---

```rules
sudoku 9x9
kropki-1: kropki r9c4-r9c5 colour "white"
kropki-2: kropki r7c8-r8c8 colour "white"
kropki-3: kropki r4c8-r4c9 colour "white"
kropki-4: kropki r4c7-r4c8 colour "white"
kropki-5: kropki r5c3-r6c3 colour "white"
kropki-6: kropki r7c6-r7c7 colour "white"
kropki-7: kropki r1c2-r2c2 colour "white"
kropki-8: kropki r1c6-r2c6 colour "white"
kropki-9: kropki r2c6-r2c7 colour "white"
kropki-10: kropki r2c6-r3c6 colour "white"
kropki-11: kropki r5c1-r6c1 colour "white"
kropki-12: kropki r2c3-r3c3 colour "white"
kropki-13: kropki r8c2-r8c3 colour "white"
kropki-14: kropki r7c4-r7c5 colour "white"
kropki-15: kropki r5c7-r6c7 colour "white"
kropki-16: kropki r5c1-r5c2 colour "white"
magic-square places [["r4c4","r4c5","r4c6","r5c4","r5c5","r5c6","r6c4","r6c5","r6c6"]]
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,7.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,0.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,1.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1,"height":1,"rounded":false,"fill":"#A8A8A8","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[1,2,3,4,5,10,11,12,13,14,15,16,17,19,20,21,22,23,24,25,26,27,28,29,33,34,35,36,37,38,42,43,44,45,46,47,51,52,53,54,55,56,57,58,59,60,61,63,64,65,66,67,68,69,70,75,76,77,78,79],"color":"#6010C9","labelColor":"#000000"}}
```

Normal sudoku rules apply.

The central 3x3 shaded box is a magic square, i.e. each row, column, and diagonal (of 3 digits each) sum to the same total.

The 60-cell caged region contains one each of the twelve standard pentominoes (no repeats by reflection or rotation). The given digits indicate the number of pentominoes that contribute to the corresponding box.

White dots lie on the boundary between two pentominoes, AND indicate digits that differ by 1 (not all such dots are shown). No two pentominoes share more than one such dot. Each pentomino has at least two dots on its boundary.

Once placed, each pentomino forms a 5-cell cage containing digits that do not repeat and that sum to the following totals:

Cage Totals:
F=26, I=22, L=22, N=22, P=16, T=24, U=30, V=27, W=24, X=25, Y=25, Z=26

Illustrated Pentominoes at:
https://tinyurl.com/pent-labels
