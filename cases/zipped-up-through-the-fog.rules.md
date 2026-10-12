---
fog:
  initiallyLit:
    - 0
    - 1
    - 2
    - 9
    - 10
    - 11
    - 18
    - 19
    - 20
format: open-rules
title: Zipped Up through the Fog
setter: Meggen033
source: https://sudokupad.app/n7d459f076
case: https://sudoku-sleuth.com/cases/zipped-up-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r2c3-r3c3 colour "white"
kropki-3: kropki r3c2-r4c2 colour "white"
kropki-4: kropki r2c3-r2c4 colour "white"
kropki-5: kropki r3c4-r3c5 colour "white"
kropki-6: kropki r3c5-r4c5 colour "white"
kropki-7: kropki r9c6-r9c7 colour "white"
kropki-8: kropki r6c2-r7c2 colour "black"
pair-1: pair r4c3-r4c4 relation {"op":"sum","value":10}
pair-2: pair r3c4-r4c4 relation {"op":"sum","value":10}
parity-cells r4c4-r8c9 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5],[2.5,1.5],[2.5,0.5],[3.5,0.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[0.5,1.5],[1.5,2.5],[0.5,2.5],[0.5,3.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[3.5,0.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[0.5,3.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,4.5],[1.5,3.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[2.5,4.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,1.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,6.5],[1.5,5.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,7.5],[1.5,6.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[4.5,7.5],[3.5,7.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[5.5,5.5],[6.5,6.5],[6.5,7.5],[5.5,8.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[4.5,6.5],[3.5,5.5],[2.5,5.5],[3.5,4.5],[4.5,3.5],[5.5,3.5],[6.5,2.5],[7.5,1.5],[6.5,1.5],[5.5,2.5]],"color":"#C2A1FF","thickness":9.6,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,0.5],"width":0.5,"height":0.5,"rounded":true,"fill":"#C2A1FF","stroke":"#C2A1FF","thickness":1,"textColor":"#000000","opacity":0.5}}
```

•    Normal Sudoku rules apply. 
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•    THERE IS ONE, AND ONLY ONE, purple Zipper Line, along which each pair of digits that are the same distance from the line's central cell (indicated by a filled purple circle), must sum to the digit in that central cell.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    Adjacent cells connected with an X must sum to 10. 
•    Cells with a filled grey square must be even.
