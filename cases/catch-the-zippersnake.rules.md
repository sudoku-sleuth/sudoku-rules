---
format: open-rules
title: Catch the Zippersnake
setter: Marty Sears
source: https://tinyurl.com/ywlbttwn
case: https://sudoku-sleuth.com/cases/catch-the-zippersnake
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: 3b7e5e9c710f9d80c45eca4e7cbf747d
---

```rules
sudoku 9x9
kropki-1: kropki r5c8-r6c8 black
kropki-2: kropki r2c7-r3c7 black
kropki-3: kropki r8c6-r9c6 white
kropki-4: kropki r4c7-r4c8 white
kropki-5: kropki r8c7-r8c8 white
kropki-6: kropki r6c5-r7c5 white
kropki-7: kropki r8c3-r8c4 white
kropki-8: kropki r7c2-r8c2 white
pair-1: pair r8c5-r8c6 sum 10
pair-2: pair r4c5-r5c5 sum 10
pair-3: pair r6c2-r6c3 sum 5
pair-4: pair r3c4-r3c5 sum 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#9d4fe3","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,3.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#9d4fe3","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#9d4fe3","thickness":0,"opacity":0.5,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.29,"height":0.29,"rounded":true,"fill":"#00f900","stroke":"#000000","thickness":3,"opacity":0.5,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.29,"height":0.29,"rounded":true,"fill":"#00f900","stroke":"#000000","thickness":3,"opacity":0.5,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":0.29,"height":0.29,"rounded":true,"fill":"#00f900","stroke":"#000000","thickness":3,"opacity":0.5,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0.29,"height":0.29,"rounded":true,"fill":"#00f900","stroke":"#000000","thickness":3,"opacity":0.5,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.24,"height":0.24,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":45}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.24,"height":0.24,"rounded":false,"fill":"#FFFFFF","stroke":"#000000","thickness":3,"angle":45}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.24,"height":0.24,"rounded":false,"fill":"#d70000","stroke":"#000000","thickness":3,"opacity":0.5,"angle":45}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.24,"height":0.24,"rounded":false,"fill":"#d70000","stroke":"#000000","thickness":3,"opacity":0.5,"angle":45}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,8.5],"width":0.24,"height":0.24,"rounded":false,"fill":"#f00","stroke":"#000000","thickness":3,"opacity":0.5,"angle":45}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,0.5],"width":0.24,"height":0.24,"rounded":false,"fill":"#f00","stroke":"#000000","thickness":3,"opacity":0.5,"angle":45}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,3],"width":0.31,"height":0.31,"rounded":true,"fill":"#0f0","stroke":"#000000","thickness":3,"opacity":0.5,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#0f0","stroke":"#000000","thickness":3,"opacity":0.5,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.31,"height":0.31,"rounded":true,"fill":"#0f0","stroke":"#000000","thickness":3,"opacity":0.5,"angle":0}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,1.5],"width":0.31,"height":0.31,"rounded":true,"fill":"#0f0","stroke":"#000000","thickness":3,"opacity":0.5,"angle":0}}
```

• Normal sudoku rules apply.
• Draw a snake that starts and ends at a purple spot and has a purple spot exactly at its centre. The snake can only move orthogonally from cell to cell, and may not touch itself, not even diagonally.
• The snake functions as a zipper line; any pair of digits that are an equal distance from the central spot sum to the digit on that central spot.
• Any pair of cells connected by a clue (dot, diamond, X or V) must either both be on the snake, or both be off the snake.
• Cells connected by a white dot are consecutive.
• Cells connected by black dot are in a 1:2 ratio (one is double the other.)
• Cells connected by a green dot must have a difference of at least 5.
• Cells connected by red diamond have the same parity (they're both odd or both even.)
• Cells connected by an X sum to 10.
• Cells connected by a V sum to 5.
