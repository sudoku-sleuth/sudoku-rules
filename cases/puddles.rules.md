---
fog:
  initiallyLit:
    - r1c1
    - r1c3
    - r3c1
    - r3c3
format: open-rules
title: Puddles!
setter: Sandra & Nala
source: https://sudokupad.app/sandra-and-nala/puddles
case: https://sudoku-sleuth.com/cases/puddles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c3=3 r3c1=5
exported: 79c618ebb8a0bda74545996b91b37cd3
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r4c3 white
kropki-2: kropki r4c2-r5c2 white
kropki-3: kropki r6c5-r6c6 white
kropki-4: kropki r5c5-r6c5 white
kropki-5: kropki r9c5-r9c6 white
kropki-6: kropki r2c7-r2c8 white
kropki-7: kropki r3c7-r4c7 white
kropki-8: kropki r1c2-r2c2 black
kropki-9: kropki r2c2-r3c2 black
kropki-10: kropki r4c4-r5c4 black
kropki-11: kropki r7c3-r7c4 black
kropki-12: kropki r3c6-r4c6 black
kropki-13: kropki r2c6-r2c7 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,2.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"angle":0}}
```

One thing Nala loves when we take a walk after it rained is to walk through or even jump around in puddles. She also likes to take a quick sip from each one. Do they taste different?

Today - after a heavy rain - Nala is greeted by loads of puddles that make the path a bit difficult to find. 

Normal sudoku rules apply. Place the digits 1-9 in every row, column and 3x3 box exactly once each.

The grid is partially covered in fog. Entering correct digits will clear the fog from surrounding cells, possibly revealing more clues.

Digits in cells that are connected by a white dot are consecutive. Digits in cells that are connected by a black dot are in a 1:2 ratio. Not all possible dots are given. (There is no negative constraint.)

Help Sandra to avoid stepping into puddles: Shade some cells (the path) such that all shaded cells are orthogonally connected and no 2x2 is entirely shaded. 

Every contiguous set of unshaded cells is a puddle. Each puddle has to contain exactly one circled cell. The circled digit indicates the size of that puddle. Puddles cannot touch each other orthogonally, but may do so diagonally. Additionally, every puddle contains each number from 1 to its size exactly once.
