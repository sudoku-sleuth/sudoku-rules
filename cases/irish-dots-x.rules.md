---
format: open-rules
title: Irish Dots X
setter: Tingo
source: https://sudokupad.app/6e6mltwmls
case: https://sudoku-sleuth.com/cases/irish-dots-x
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e015d3721c6b3c7e6796d01af3e1273c
---

```rules
sudoku 9x9
anti-knight
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,2],"width":0.5,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,6],"width":0.5,"height":0.25,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,4],"width":0.25,"height":0.5,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,5],"width":0.25,"height":0.5,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,8],"width":0.25,"height":0.5,"rounded":false,"fill":"#FF6600","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,1],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,2],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,6],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45,"opacity":0.5}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1,1],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,3],"width":0.5,"height":0.25,"rounded":true,"fill":"#00FF00","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45,"opacity":0.5}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,8],"width":0.75,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5],"width":0.75,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":45}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,3],"width":0.75,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,7],"width":0.75,"height":0.25,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1,"textColor":"#000000","angle":-45}}
```

Normal Sudoku Rules Apply
Digits separated by a knight's move (in chess) may not contain the same digit.
Digits along the diagonals may not repeat.
Cells separated by white dots (elongated ovals) have consecutive values.
Cells separated by green dots (ovals) have a value ratio of 3:1.
Cells separated by orange dots (rectangles) have a value difference of 3, i.e. 1.4.7, 2.5.8, 3.6.9
Not all dots are given.
Note: The cells "connected" by the Irish Dots are only the 2 cells the dots "point" to. In other words, the clues only apply to the cells connected by the ends of the dots. The clues do not have any meaning for the cells that are only joined by the middle of the dots. In those cases, any cells that have values that correlate to the clue fall under the "not all dots are given" description. Also, the dots are used to illustrate the "diagonal" rules, instead of displaying the traditional diagonal lines.
