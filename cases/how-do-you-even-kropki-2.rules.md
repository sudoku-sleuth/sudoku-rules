---
format: open-rules
title: How do you Even Kropki? 2
setter: The Bard
source: https://sudokupad.app/j1p665m3vb
case: https://sudoku-sleuth.com/cases/how-do-you-even-kropki-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 6cc9d61eb69357a3f2c61f392e54d2a9
---

```rules
sudoku 9x9
kropki-1: kropki r4c1-r4c2 white
kropki-2: kropki r4c1-r5c1 white
kropki-3: kropki r6c2-r6c3 white
kropki-4: kropki r7c4-r8c4 white
kropki-5: kropki r4c2-r5c2 white
kropki-6: kropki r9c2-r9c3 black
kropki-7: kropki r9c7-r9c8 black
kropki-8: kropki r6c7-r6c8 black
kropki-9: kropki r5c5-r6c5 black
kropki-10: kropki r6c5-r7c5 black
parity-cells-1: parity-cells r1c2-r1c8-r2c9-r8c9-r9c2-r8c1 parity "odd"
parity-cells-2: parity-cells r3c6-r3c5-r3c4-r4c6-r4c7-r5c7-r7c7-r7c6-r7c4-r7c3-r5c3 parity "even"
```

```drawing
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0004","stroke":"#FF0004","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0004","stroke":"#FF0004","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0004","stroke":"#FF0004","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0004","stroke":"#FF0004","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0004","stroke":"#FF0004","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0004","stroke":"#FF0004","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.
Anti-Kropki: Digits between a red dot CANNOT be consecutive. 
Odd, Even: Digits in a grey square are even, and digits in a grey circle are odd.
