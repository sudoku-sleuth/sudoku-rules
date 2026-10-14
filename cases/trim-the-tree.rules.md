---
fog:
  initiallyLit:
    - r5c4
format: open-rules
title: Trim the Tree
setter: Santa (FullDeck and Missing a Few Cards)
source: https://sudokupad.app/gmrdrzxvjb
case: https://sudoku-sleuth.com/cases/trim-the-tree
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: d95f0875ef28b5e6a417692eae6fcc35
---

```rules
sudoku 9x9
anti-knight stated true
modular-1: modular r8c4-r8c3-r8c2-r7c3-r6c4
modular-2: modular r8c6-r8c7-r8c8-r7c7-r6c6
modular-3: modular r5c6-r5c7-r5c8-r4c7-r3c6-r2c5-r3c4-r4c3-r5c2-r5c3-r5c4
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4.5],"width":0.25,"height":1.05,"rounded":false,"fill":"#B37653","stroke":"#B37653","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":0.25,"height":1.05,"rounded":false,"fill":"#B37653","stroke":"#B37653","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,4.5],"width":0.6,"height":0.6,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,4],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,3.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FFE736","stroke":"#FAA736","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,2.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#F21827","stroke":"#D21827","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#F21827","stroke":"#D21827","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.25,"height":0.25,"rounded":true,"fill":"#F21827","stroke":"#D21827","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7],"width":0.25,"height":0.25,"rounded":true,"fill":"#F21827","stroke":"#D21827","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,7.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#F21827","stroke":"#D21827","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#F21827","stroke":"#D21827","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku and fog rules apply.

Cells a chess knight's move apart must contain different digits.

All lines in the puzzle, regardless of color, are modular. (Any set of three contiguous digits along the line contains one each of {147}, {258}, {369}.)

Digits on either side of a red baubles are in a 1:3 ratio. Digits on either side of gold baubles are in a 1:2 ratio. Not all possible baubles are shown.
