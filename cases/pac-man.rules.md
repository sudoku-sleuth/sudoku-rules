---
format: open-rules
title: Pac-Man
setter: Blobz
source: https://sudokupad.app/blobz/pac-man
case: https://sudoku-sleuth.com/cases/pac-man
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c1=1 r2c9=2 r8c1=3 r8c9=4
---

```rules
sudoku 9x9
kropki-1: kropki r6c3-r7c3 colour "white"
kropki-2: kropki r5c3-r6c3 colour "white"
kropki-3: kropki r4c3-r5c3 colour "white"
kropki-4: kropki r4c3-r4c4 colour "white"
kropki-5: kropki r3c1-r3c2 colour "white"
kropki-6: kropki r3c2-r3c3 colour "white"
kropki-7: kropki r3c4-r3c5 colour "white"
kropki-8: kropki r3c5-r3c6 colour "white"
kropki-9: kropki r3c8-r3c9 colour "white"
kropki-10: kropki r1c1-r1c2 colour "white"
kropki-11: kropki r1c2-r1c3 colour "white"
kropki-12: kropki r1c3-r2c3 colour "white"
kropki-13: kropki r1c7-r2c7 colour "white"
kropki-14: kropki r1c7-r1c8 colour "white"
kropki-15: kropki r3c8-r4c8 colour "white"
kropki-16: kropki r4c8-r5c8 colour "white"
kropki-17: kropki r9c7-r9c8 colour "white"
kropki-18: kropki r6c8-r7c8 colour "white"
kropki-19: kropki r4c2-r5c2 colour "white"
kropki-20: kropki r3c2-r4c2 colour "white"
kropki-21: kropki r5c8-r5c9 colour "white"
kropki-22: kropki r6c4-r6c5 colour "white"
kropki-23: kropki r9c5-r9c6 colour "white"
kropki-24: kropki r1c9-r2c9 colour "white"
kropki-25: kropki r8c1-r9c1 colour "white"
kropki-26: kropki r7c9-r8c9 colour "white"
kropki-27: kropki r9c8-r9c9 colour "white"
unique r1c6-r5c6-r6c7-r9c4
allowed-digits r1c6-r5c6-r6c7-r9c4 digits [1,2,3,4]
```

```drawing
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8d56fff","thickness":0,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8d56fff","thickness":0,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8d56fff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#f8d56fff","thickness":0,"angle":0}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[6.4,2.6],[6.5,2.6],[6.5,2.4],[6.4,2.4],[6.3,2.3],[6.1,2.3],[6.3,2.1],[6.7,2.1],[6.9,2.3],[6.9,2.7],[6.7,2.9],[6.3,2.9],[6.1,2.7],[6.3,2.7],[6.4,2.6]],"color":"#f7e416d0","thickness":6,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[4,4],[4,3],[5,3],[5,6],[4,6],[4,5]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4,2],[3,2],[3,4]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4,7],[3,7],[3,5]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4,0],[4,1],[3,1],[3,0],[0,0],[0,9],[3,9],[3,8],[4,8],[4,9]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[5,9],[5,8],[6,8],[6,9],[9,9],[9,0],[6,0],[6,1],[5,1],[5,0]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[8,4],[8,1],[7,1],[7,2],[8,2]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[8,5],[8,8],[7,8],[7,7],[8,7]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[5,2],[6,2]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[5,7],[6,7]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[1,5],[1,6],[2,6],[2,3],[1,3],[1,5]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[7,5],[7,6],[6,6],[6,3],[7,3],[7,5]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[1,7],[2,7],[2,8],[1,8],[1,7]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[1,1],[2,1],[2,2],[1,2],[1,1]],"color":"#6e6e6ecc","thickness":10,"rounded":true,"layer":"over"}}
- {"id":"drawing-72","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.5],"width":0.87,"height":0.22,"rounded":false,"fill":"#ffffffb8","stroke":"#0008","thickness":1,"angle":0}}
```

Normal sudoku rules apply. 

The ghosts (Blinky, Pinky, Inky, and Clyde) are a set of the digits 1-4.

White dots separate consecutive digits.
