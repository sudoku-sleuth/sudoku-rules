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
title: Zip-Zapped Through the Fog
setter: Meggen033
source: https://sudokupad.app/jngwtctssd
case: https://sudoku-sleuth.com/cases/zip-zapped-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 colour "white"
kropki-2: kropki r1c2-r2c2 colour "white"
kropki-3: kropki r1c1-r2c1 colour "white"
kropki-4: kropki r4c1-r5c1 colour "white"
kropki-5: kropki r5c3-r5c4 colour "white"
kropki-6: kropki r6c5-r7c5 colour "white"
kropki-7: kropki r9c3-r9c4 colour "white"
kropki-8: kropki r9c4-r9c5 colour "white"
kropki-9: kropki r9c5-r9c6 colour "white"
kropki-10: kropki r1c2-r1c3 colour "black"
kropki-11: kropki r3c8-r4c8 colour "black"
pair-1: pair r2c2-r3c2 sum 10
pair-2: pair r2c3-r3c3 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[2.5,0.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[0.5,1.5],[1.5,0.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,1.5],[3.5,1.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,0.5],[4.5,1.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[0.5,1.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,0.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,2.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[0.5,3.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,1.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,2.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,2.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,2.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.5,4.5],[7.5,3.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[6.5,5.5],[6.5,4.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[3.5,3.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[7.5,5.5],[6.5,5.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[1.5,3.5],[2.5,3.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[1.5,3.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[8.5,6.5],[7.5,5.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[7.5,7.5],[8.5,6.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[0.5,5.5],[0.5,4.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[0.5,5.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[7.5,7.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6.5,8.5],[7.5,8.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[2.5,7.5],[1.5,6.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,8.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,7.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[2.5,6.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[5.5,8.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[2.5,5.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[4.5,6.5],[3.5,5.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[4.5,7.5],[5.5,7.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[4.5,7.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[4.5,6.5]],"color":"#D8A1FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-52","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,0.5],"width":0.55,"height":0.55,"rounded":true,"fill":"#DBA1FF","stroke":"#FFFFFF","thickness":1,"textColor":"#000000","opacity":0.5}}
```

•    Normal Sudoku rules apply. 
•    THERE IS ONE, AND ONLY ONE, purple Zipper Line, along which each pair of digits that are the same distance from the line's central cell (indicated by a filled purple circle), must sum to the digit in that central cell.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•    Adjacent cells connected with an X must sum to 10. 
•    Cells with a filled square must be even.
•    The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
