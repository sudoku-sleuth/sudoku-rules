---
format: open-rules
title: How do you Even Kropki?
setter: The Bard
source: https://sudokupad.app/i1i2zzq7sg
case: https://sudoku-sleuth.com/cases/how-do-you-even-kropki
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c6=4 r4c9=1 r6c1=2
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 colour "white"
kropki-2: kropki r4c5-r4c6 colour "white"
kropki-3: kropki r3c5-r4c5 colour "white"
kropki-4: kropki r4c1-r5c1 colour "white"
kropki-5: kropki r1c7-r2c7 colour "white"
kropki-6: kropki r4c5-r5c5 colour "black"
kropki-7: kropki r5c5-r6c5 colour "black"
parity-cells-1: parity-cells r1c2-r2c1-r8c9-r9c8-r1c8-r2c9-r8c1-r9c2-r3c4-r7c4-r7c6-r5c7-r4c3-r4c7-r6c3 parity "odd"
parity-cells-2: parity-cells r1c1-r2c2-r1c9-r9c9-r8c8-r8c2-r9c1-r2c8-r8c6-r9c6-r1c5 parity "even"
```

```drawing
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0019","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0019","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0019","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0019","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.
Anti-Kropki: Digits between a red dot CANNOT be consecutive. 
Odd, Even: Digits in a grey square are even, and digits in a grey circle are odd.
