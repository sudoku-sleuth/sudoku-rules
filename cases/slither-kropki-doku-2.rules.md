---
format: open-rules
title: Slither-kropki-doku 2
setter: The Bard
source: https://sudokupad.app/2l1xpu8nmn
case: https://sudoku-sleuth.com/cases/slither-kropki-doku-2
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 95a61a8d1a202c2825fc5448e85a4c0c
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r2c9 white
kropki-2: kropki r2c4-r2c5 black
kropki-3: kropki r4c7-r4c8 black
kropki-4: kropki r7c2-r7c3 black
kropki-5: kropki r8c5-r8c6 black
kropki-6: kropki r9c7-r9c8 black
kropki-7: kropki r1c3-r2c3 black
kropki-8: kropki r1c8-r2c8 black
kropki-9: kropki r3c5-r3c6 black
kropki-10: kropki r3c6-r4c6 black
kropki-11: kropki r6c7-r7c7 black
kropki-12: kropki r7c4-r8c4 black
kropki-13: kropki r8c1-r9c1 black
kropki-14: kropki r3c7-r4c7 black
kropki-15: kropki r2c1-r3c1 black
kropki-16: kropki r4c4-r4c5 black
kropki-17: kropki r7c9-r8c9 black
kropki-18: kropki r8c2-r9c2 black
```

```drawing
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,3.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,6.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,5.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.7,"height":0.7,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,2.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,7.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,4.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,7.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,2.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal sudoku rules apply, place the digits 1-9 in each row, column, and box.
Draw a single loop that travels between cells in the grid, this loop does not branch or touch itself nor can it pass through a kropki dot. This line can travel along the outer most edge of the grid.
Adjacent digits that share an edge on this line are consecutive. The line does not represent all consecutive adjacent digits.
Digits located within circles indicate how many edges it has along the line, all circles have been provided. 
Digits located within square indicate how many of its corners touch the line, all such squares have been provided. 
Kropki, digits with a black dot between them have a ratio of 1:2, all black dots have been provided unless they would appear on the line. Digits with a white dot between them are consecutive.
