---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r1c3
    - r2c1
    - r2c2
    - r2c3
    - r3c1
    - r3c2
    - r3c3
format: open-rules
title: Zippopotamus through the Fog
setter: Meggen033
source: https://sudokupad.app/7j1tmvqx3x
case: https://sudoku-sleuth.com/cases/zippopotamus-through-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: e90bad2b08293ddda159d015cc813043
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 white
kropki-2: kropki r1c4-r2c4 white
kropki-3: kropki r4c1-r4c2 white
kropki-4: kropki r2c5-r3c5 white
kropki-5: kropki r3c5-r4c5 white
kropki-6: kropki r5c3-r5c4 white
kropki-7: kropki r3c6-r4c6 white
kropki-8: kropki r5c6-r5c7 white
kropki-9: kropki r3c7-r4c7 white
kropki-10: kropki r1c2-r2c2 black
kropki-11: kropki r2c2-r3c2 black
kropki-12: kropki r2c3-r2c4 black
kropki-13: kropki r5c4-r5c5 black
kropki-14: kropki r4c6-r5c6 black
kropki-15: kropki r9c4-r9c5 black
kropki-16: kropki r8c7-r9c7 black
kropki-17: kropki r7c7-r8c7 black
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[1.5,1.5],[1.5,0.5],[2.5,0.5],[3.5,0.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[0.5,2.5],[0.5,1.5],[1.5,2.5],[2.5,2.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[2.5,5.5],[1.5,4.5],[0.5,3.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[4.5,2.5],[3.5,1.5],[3.5,0.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[5.5,2.5],[4.5,2.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,5.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[6.5,2.5],[5.5,2.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,7.5],[2.5,6.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[6.5,2.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[3.5,7.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[8.5,4.5],[7.5,3.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[5.5,7.5],[4.5,8.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[8.5,5.5],[8.5,4.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[5.5,7.5]],"color":"#AD91FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,2.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#AD91FF","stroke":"#AD91FF","thickness":1,"textColor":"#000000","opacity":0.5}}
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	THERE IS ONE, AND ONLY ONE, purple Zipper Line, along which each pair of digits that are the same distance from the line's central cell (indicated by a filled purple circle), must sum to the digit in that central cell.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
