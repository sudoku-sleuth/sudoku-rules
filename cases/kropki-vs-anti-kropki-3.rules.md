---
format: open-rules
title: Kropki vs Anti-Kropki 3
setter: The Bard
source: https://sudokupad.app/3swjzzf73k
case: https://sudoku-sleuth.com/cases/kropki-vs-anti-kropki-3
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r4c9-r5c9 colour "white"
kropki-2: kropki r4c8-r5c8 colour "white"
kropki-3: kropki r4c7-r5c7 colour "white"
kropki-4: kropki r7c4-r7c5 colour "white"
kropki-5: kropki r8c4-r8c5 colour "white"
kropki-6: kropki r9c4-r9c5 colour "white"
kropki-7: kropki r6c7-r6c8 colour "white"
kropki-8: kropki r7c6-r8c6 colour "white"
kropki-9: kropki r5c5-r6c5 colour "white"
kropki-10: kropki r5c9-r6c9 colour "black"
kropki-11: kropki r9c5-r9c6 colour "black"
kropki-12: kropki r5c6-r6c6 colour "black"
kropki-13: kropki r2c8-r2c9 colour "black"
kropki-14: kropki r2c2-r3c2 colour "black"
kropki-15: kropki r8c8-r9c8 colour "black"
parity-cells r1c4-r2c4-r3c4-r4c4-r4c3-r4c2-r4c1 parity "even"
```

```drawing
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1],"width":0.25,"height":0.25,"rounded":true,"fill":"#F6FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,2],"width":0.25,"height":0.25,"rounded":true,"fill":"#F6FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#F6FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#F6FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,3.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#F6FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,3.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#F6FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,2],"width":0.25,"height":0.25,"rounded":true,"fill":"#F6FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF1500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF1500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF1500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF1500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF1500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,0.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF1500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF1500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,3.5],"width":0.25,"height":0.25,"rounded":true,"fill":"#FF1500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku Rules Apply. Place the digits 1-9 in each row, column, and box.

Diagonal: Digits may not repeat along either of the marked diagonals.

Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.

Anti-Kropki: Digits separated a red dot CANNOT be consecutive, digits separated by a yellow dot CANNOT be in a ratio of 2 to 1.

Even: Digits in bordered squares must be even.
