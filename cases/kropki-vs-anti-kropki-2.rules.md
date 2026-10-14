---
format: open-rules
title: Kropki vs Anti-Kropki 2
setter: The Bard
source: https://sudokupad.app/9xy4iw3x9f
case: https://sudoku-sleuth.com/cases/kropki-vs-anti-kropki-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r2c5=5
exported: f5ce57c8396ce6ebdc60c75db665c335
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r7c7-r8c7 white
kropki-2: kropki r8c7-r9c7 white
kropki-3: kropki r1c3-r2c3 white
kropki-4: kropki r2c3-r3c3 white
kropki-5: kropki r2c8-r2c9 white
kropki-6: kropki r7c9-r8c9 black
kropki-7: kropki r8c9-r9c9 black
kropki-8: kropki r7c8-r8c8 black
kropki-9: kropki r1c1-r2c1 black
kropki-10: kropki r2c1-r3c1 black
kropki-11: kropki r2c2-r3c2 black
kropki-12: kropki r4c5-r5c5 black
kropki-13: kropki r5c5-r6c5 black
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FBFF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,6.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FBFF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FBFF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,8.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FBFF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,7.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FBFF00","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,1.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#FF0000","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply. Place the digits 1-9 in each row, column, and box.

Knights Move: digits within a chess knights move away from each other cannot be the same.

Kropki Dots: Digits separated by a white dot have a difference of one, digits separated by a black dot have a ratio of 2:1.

Anti-Kropki: Digits separated a red dot CANNOT be consecutive, digits separated by a yellow dot CANNOT be in a ratio of 2 to 1.
