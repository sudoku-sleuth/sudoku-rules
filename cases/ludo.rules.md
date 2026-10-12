---
format: open-rules
title: Ludo
setter: Jobo
source: https://tinyurl.com/44wjzjkn
case: https://sudoku-sleuth.com/cases/ludo
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r1c6=2 r4c1=1 r6c9=2 r9c4=8
---

```rules
sudoku 9x9
kropki-1: kropki r2c1-r3c1 colour "white"
kropki-2: kropki r1c2-r1c3 colour "white"
kropki-3: kropki r2c4-r3c4 colour "white"
kropki-4: kropki r4c2-r4c3 colour "white"
kropki-5: kropki r6c2-r6c3 colour "white"
kropki-6: kropki r7c1-r8c1 colour "white"
kropki-7: kropki r9c2-r9c3 colour "white"
kropki-8: kropki r7c4-r8c4 colour "white"
kropki-9: kropki r7c6-r8c6 colour "white"
kropki-10: kropki r9c7-r9c8 colour "white"
kropki-11: kropki r7c9-r8c9 colour "white"
kropki-12: kropki r6c7-r6c8 colour "white"
kropki-13: kropki r4c7-r4c8 colour "white"
kropki-14: kropki r2c9-r3c9 colour "white"
kropki-15: kropki r1c7-r1c8 colour "white"
kropki-16: kropki r2c6-r3c6 colour "white"
palindrome-1: palindrome r9c3-r9c4-r8c4
palindrome-2: palindrome r3c1-r4c1-r4c2
palindrome-3: palindrome r1c7-r1c6-r2c6
palindrome-4: palindrome r7c9-r6c9-r6c8
between-1: between r5c1 ends ["r4c1","r6c1"]
between-2: between r6c2-r6c3 ends ["r6c1","r6c4"]
between-3: between r7c4-r8c4 ends ["r6c4","r9c4"]
between-4: between r9c5 ends ["r9c4","r9c6"]
between-5: between r8c6-r7c6 ends ["r9c6","r6c6"]
between-6: between r6c7-r6c8 ends ["r6c6","r6c9"]
between-7: between r5c9 ends ["r6c9","r4c9"]
between-8: between r4c8-r4c7 ends ["r4c9","r4c6"]
between-9: between r3c6-r2c6 ends ["r4c6","r1c6"]
between-10: between r1c5 ends ["r1c6","r1c4"]
between-11: between r2c4-r3c4 ends ["r1c4","r4c4"]
between-12: between r4c3-r4c2 ends ["r4c4","r4c1"]
parity-cells r1c1-r1c2-r2c1-r2c2-r1c8-r1c9-r2c8-r2c9-r8c8-r8c9-r9c8-r9c9-r8c2-r8c1-r9c1-r9c2 parity "odd"
```

```drawing
- {"id":"drawing-73","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#44FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-74","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,1.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#44FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-75","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,0.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#44FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-76","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#44FF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-77","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,7.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-78","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,8.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-79","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-80","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,7.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FFDD00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-81","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,1.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#00AAFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-82","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,0.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#00AAFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-83","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,0.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#00AAFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-84","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,1.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#00AAFF","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-85","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,8.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF5500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-86","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,7.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF5500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-87","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,7.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF5500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-88","rules":[],"visual":{"kind":"shape","layer":"over","center":[8.5,8.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF5500","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply.

Digits on between lines must be between the digits in the attached circles.

Coloured circles must contain an odd digit.
Coloured lines are palindromes and must read the same in both directions.

Digits separated by a white dot must be consecutive.
Not all dots are given.
