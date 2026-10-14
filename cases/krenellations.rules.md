---
format: open-rules
title: Krenellations
setter: Blobz
source: https://sudokupad.app/blobz/krenellations
case: https://sudoku-sleuth.com/cases/krenellations
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r5c5=6
exported: d4c44e2e69ae0b3640d44e99d5de4790
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r1c5 white
kropki-2: kropki r1c5-r1c6 white
kropki-3: kropki r9c2-r9c3 white
kropki-4: kropki r9c7-r9c8 white
kropki-5: kropki r5c9-r6c9 white
kropki-6: kropki r4c1-r5c1 white
kropki-7: kropki r8c1-r9c1 white
kropki-8: kropki r8c9-r9c9 white
kropki-9: kropki r3c6-r3c7 white
kropki-10: kropki r3c7-r4c7 white
kropki-11: kropki r6c7-r7c7 white
kropki-12: kropki r6c3-r7c3 white
kropki-13: kropki r8c6-r9c6 white
kropki-14: kropki r7c1-r7c2 white
kropki-15: kropki r9c4-r9c5 black
kropki-16: kropki r9c5-r9c6 black
kropki-17: kropki r1c2-r1c3 black
kropki-18: kropki r1c7-r1c8 black
kropki-19: kropki r4c9-r5c9 black
kropki-20: kropki r5c1-r6c1 black
kropki-21: kropki r3c3-r3c4 black
kropki-22: kropki r3c3-r4c3 black
pair-1: pair r2c3-r2c4 sum 10
pair-2: pair r2c6-r2c7 sum 10
pair-3: pair r8c6-r8c7 sum 10
pair-4: pair r8c3-r8c4 sum 10
pair-5: pair r3c2-r4c2 sum 10
pair-6: pair r6c2-r7c2 sum 10
pair-7: pair r3c8-r4c8 sum 10
pair-8: pair r6c8-r7c8 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[2.5,2.5],[3.5,2.5],[4.5,3.5],[5.5,2.5],[6.5,2.5],[6.5,3.5],[5.5,4.5],[6.5,5.5],[6.5,6.5],[5.5,6.5],[4.5,5.5],[3.5,6.5],[2.5,6.5],[2.5,5.5],[3.5,4.5],[2.5,3.5],[2.5,2.5]],"color":"#7774","thickness":9.6,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,3.5],[0.5,3.5],[0.5,5.5],[1.5,5.5],[1.5,6.5],[0.5,6.5],[0.5,8.5],[2.5,8.5],[2.5,7.5],[3.5,7.5],[3.5,8.5],[5.5,8.5],[5.5,7.5],[6.5,7.5],[6.5,8.5],[8.5,8.5],[8.5,6.5],[7.5,6.5],[7.5,5.5],[8.5,5.5],[8.5,3.5],[7.5,3.5],[7.5,2.5],[8.5,2.5],[8.5,0.5],[6.5,0.5],[6.5,1.5],[5.5,1.5],[5.5,0.5],[3.5,0.5],[3.5,1.5],[2.5,1.5],[2.5,0.5],[0.5,0.5],[0.5,2.5],[1.5,2.5]],"color":"#7774","thickness":9.6,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#000000","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Along the lines, white dots separate consecutive digits, black dots separate digits where one is double the other (not all such dots are shown).

Digits separated by an X sum to 10 (not all X’s are shown).
