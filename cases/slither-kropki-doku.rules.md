---
format: open-rules
title: Slither-kropki-doku
setter: The Bard
source: https://sudokupad.app/m7b7x39uqd
case: https://sudoku-sleuth.com/cases/slither-kropki-doku
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
givens: r1c1=9 r8c8=2
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r2c2 colour "black"
kropki-2: kropki r1c3-r2c3 colour "black"
kropki-3: kropki r3c2-r3c3 colour "black"
kropki-4: kropki r1c5-r1c6 colour "black"
kropki-5: kropki r1c8-r1c9 colour "black"
kropki-6: kropki r3c7-r4c7 colour "black"
kropki-7: kropki r4c8-r4c9 colour "black"
kropki-8: kropki r5c5-r6c5 colour "black"
kropki-9: kropki r4c4-r5c4 colour "black"
kropki-10: kropki r6c3-r6c4 colour "black"
kropki-11: kropki r3c2-r4c2 colour "black"
kropki-12: kropki r3c5-r3c6 colour "black"
kropki-13: kropki r1c6-r2c6 colour "black"
kropki-14: kropki r5c3-r6c3 colour "black"
kropki-15: kropki r3c9-r4c9 colour "black"
kropki-16: kropki r7c5-r7c6 colour "black"
```

```drawing
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000"}}
```

Normal sudoku rules apply, place the digits 1-9 in each row, column, and box.

Draw a single loop that travels between cells in the grid, this loop does not branch or touch itself. Digits that share an edge on this line are consecutive. Digits located within circles indicate how many edges it has along the line, all circles have been provided. Digits located within boxes indicate how many of its corners touch the line, all boxes have been provided. This line touches all nine boxes, but does not necessarily go through every box, also this line can travel along the outer most edge of the grid. The line does not represent all consecutive adjacent digits. 

Kropki, digits with a black dot between them have a ratio of 1:2, all black dots have been provided unless they would appear on the line.
