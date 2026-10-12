---
format: open-rules
title: Kropki vs Anti-Kropki
setter: The Bard
source: https://sudokupad.app/0h70wi7xty
case: https://sudoku-sleuth.com/cases/kropki-vs-anti-kropki
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r5c7-r6c7 colour "white"
kropki-2: kropki r5c8-r6c8 colour "white"
kropki-3: kropki r5c9-r6c9 colour "white"
kropki-4: kropki r6c5-r7c5 colour "white"
kropki-5: kropki r7c1-r8c1 colour "black"
kropki-6: kropki r7c2-r8c2 colour "black"
kropki-7: kropki r7c3-r8c3 colour "black"
kropki-8: kropki r6c7-r7c7 colour "black"
kropki-9: kropki r6c8-r7c8 colour "black"
kropki-10: kropki r6c9-r7c9 colour "black"
kropki-11: kropki r8c4-r8c5 colour "black"
```

```drawing
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#F2FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#F2FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#F2FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#F2FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,7],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,0.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,5.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Kropki vs Anti-Kropki
Normal Sudoku rules apply. Place the digits 1-9 in each row, column, and box.
Knights Move: digits within a chess knights move away from each other cannot be the same. 
Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.
Anti-Kropki: Digits between a red dot CANNOT be consecutive, digits separated by a yellow dot CANNOT be in a ratio of 2 to 1.
