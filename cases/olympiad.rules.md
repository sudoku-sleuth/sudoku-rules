---
format: open-rules
title: Olympiad
setter: Blobz
source: https://sudokupad.app/blobz/olympiad
case: https://sudoku-sleuth.com/cases/olympiad
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r7c5=4 r9c1=6 r9c4=5 r9c6=3 r9c9=2
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r3c5 colour "white"
kropki-2: kropki r5c9-r6c9 colour "black"
kropki-3: kropki r5c1-r6c1 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":3.76,"height":3.76,"rounded":true,"stroke":"#00000060","thickness":10.24,"angle":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,3],"width":3.76,"height":3.76,"rounded":true,"stroke":"#f4bb4a84","thickness":10.24,"angle":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6],"width":3.76,"height":3.76,"rounded":true,"stroke":"#26df0c60","thickness":10.24,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,2],"width":3.76,"height":3.76,"rounded":true,"stroke":"#0c4edf60","thickness":10.24,"angle":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,7],"width":3.76,"height":3.76,"rounded":true,"stroke":"#df0c0c60","thickness":10.24,"angle":0}}
```

Normal sudoku rules apply.

Black dots separate digits where one is double the other. White dots separate consecutive digits. Not all such dots are shown.

Place digits along the circles such that:

- Blue (top left) uses digits from {1234}
- Yellow (bottom left) uses digits from {3456}
- Black (top middle) uses digits from {1256}
- Red (top right) uses digits from {56789}
- Green (bottom right) uses the digits 1 to 9 once each, in addition to the given 4
