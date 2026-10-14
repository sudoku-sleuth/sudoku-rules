---
format: open-rules
title: Spot the Difference
setter: Marty Sears
source: https://sudokupad.app/atbh8bj6bp
case: https://sudoku-sleuth.com/cases/spot-the-difference
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 025e455458b421ef896937889ec27a46
---

```rules
sudoku 9x9
kropki-1: kropki r4c6-r5c6 black
kropki-2: kropki r2c7-r2c8 black
parity-cells r1c5-r1c5-r2c8-r2c8-r3c9-r3c9-r9c2-r9c2 parity "even"
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#18B8FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#18B8FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#73F476","thickness":0,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#73F476","thickness":0,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FF9900","thickness":0,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FF9900","thickness":0,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#73F476","thickness":0,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#73F476","thickness":0,"opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FFEA00","thickness":0,"opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FFEA00","thickness":0,"opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FF9900","thickness":0,"opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,1.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FF9900","thickness":0,"opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FFEA00","thickness":0,"opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#FFEA00","thickness":0,"opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#18B8FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#18B8FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,4.5],"width":0.44,"height":0.44,"rounded":true,"fill":"#CC99FF","thickness":0,"opacity":0.5}}
```

• Normal sudoku rules apply.
• Connect each pair of matching coloured spots with a snake. Snakes may only move orthogonally through the grid, not diagonally. They may touch each other (and themselves), but cannot share cells.
• Each pair of adjacent digits along a snake has the same difference, but this 'difference value' may be different for different snakes.
• A grey square contains an even digit.
• A black dot connects two digits with a 1:2 ratio (one is double the other.)
