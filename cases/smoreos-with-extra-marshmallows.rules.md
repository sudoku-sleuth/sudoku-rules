---
format: open-rules
title: Smoreos with extra marshmallows
setter: Chip Sounder
source: https://sudokupad.app/z8u19phdnv
case: https://sudoku-sleuth.com/cases/smoreos-with-extra-marshmallows
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: a714622a86219471cb9273292aa49727
---

```rules
sudoku 9x9
kropki-1: kropki r8c4-r8c5 black
kropki-2: kropki r7c2-r8c2 black
kropki-3: kropki r6c1-r7c1 black
kropki-4: kropki r4c1-r4c2 black
kropki-5: kropki r3c2-r3c3 black
kropki-6: kropki r9c5-r9c6 black
kropki-7: kropki r2c6-r3c6 black
kropki-8: kropki r1c7-r2c7 black
kropki-9: kropki r3c9-r4c9 black
kropki-10: kropki r4c8-r5c8 black
kropki-11: kropki r7c7-r7c8 black
kropki-12: kropki r8c6-r8c7 black
kropki-13: kropki r4c4-r5c4 black
kropki-14: kropki r5c5-r6c5 black
whispers-1: whispers r4c5-r3c6-r3c7-r4c8 gap 5
whispers-2: whispers r8c8-r7c7-r7c6-r8c5 gap 5
whispers-3: whispers r8c4-r7c4-r7c3-r8c2-r9c1 gap 5
whispers-4: whispers r2c6-r2c5-r3c5 gap 5
whispers-5: whispers r1c1-r2c1 gap 5
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [5,7,9]
quadruple-2: quadruple r7c8-r7c9-r8c8-r8c9 digits [5,7,9]
quadruple-3: quadruple r2c7-r2c8-r3c7-r3c8 digits [5,7,9]
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,4.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,1],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,1.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,6],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,8],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,6.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,4],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,8],"width":0.34,"height":0.34,"rounded":true,"fill":"#FFFFFF","stroke":"#000000","thickness":1.28,"text":"2","textColor":"#000000"}}
```

Conflict checker off is requested for this set. 
Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by an oreo are a 1:2 ratio (black dot).
Cells separated by a marshmallow have a difference of 2.
Digits in a jumbo marshmallow (quadruple clue) must appear in the cells connected to the marshmallow. 
Adjacent cells on a green line must differ by at least 5.
