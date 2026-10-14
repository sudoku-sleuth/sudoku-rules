---
format: open-rules
title: The Sears Catalog
setter: Kennet's Dad
source: https://sudokupad.app/eiclck8out
case: https://sudoku-sleuth.com/cases/the-sears-catalog
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 7bb1173e338f8e1725f8a3f27390c719
---

```rules
sudoku 9x9
index r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1 axis "column"
index-line-1: index-line r1c1-r2c1-r3c1-r4c2-r3c2-r2c3-r1c3
index-line-2: index-line r6c7-r6c6-r6c5-r5c5-r4c5-r4c4-r5c3
index-line-3: index-line r8c8-r9c8-r9c9
index-line-4: index-line r1c9-r1c8-r1c7-r2c6-r2c7-r3c8-r2c9
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,4.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"under","center":[1.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"under","center":[7.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"under","center":[8.5,8.5],"width":1.02,"height":1.02,"rounded":false,"fill":"#ffafafff","stroke":"#000000","thickness":1.28,"angle":0}}
```

-Normal sudoku rules apply. 
-Red Indexing Columns: digits in column 1 indicate the column in which the digit 1 appears in that row (e.g., if r4c1 is a 6, then r4c6 is a 1). This also applies to columns 5 and 9 with the digits 5 and 9 respectively. 
-Index Lines: starting from the diamond, the digit in the Nth cell along a blue index line indicates the position along the line where the digit N appears.
