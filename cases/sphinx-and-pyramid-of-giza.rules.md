---
format: open-rules
title: Sphinx and Pyramid of Giza
setter: Will Power
source: https://sudokupad.app/brk57vep8p
case: https://sudoku-sleuth.com/cases/sphinx-and-pyramid-of-giza
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r8c4-r8c5-r8c6 total 12 connected true
cage-2: cage r4c4-r4c5 total 10 connected true
cage-3: cage r4c6-r4c7 total 10 connected true
cage-4: cage r8c9-r9c9 total 10 connected true
cage-5: cage r7c1-r8c1-r9c1 total 20 connected true
cage-6: cage r4c8-r4c9 total 11 connected true
cage-7: cage r4c1-r4c2 total 11 connected true
cage-8: cage r6c5-r7c5 total 13 connected true
cage-9: cage r2c5-r2c6 total 12 connected true
cage-10: cage r1c1-r1c2 total 16 connected true
cage-11: cage r1c3-r1c4 total 14 connected true
kropki r8c7-r8c8 colour "black"
whispers-1: whispers r5c1-r4c2-r3c3-r2c4-r1c5-r2c6-r3c7-r4c8-r5c9 gap 4
whispers-2: whispers r9c1-r8c1-r7c1-r6c1-r5c2-r4c3-r4c4-r4c5-r4c6-r4c7-r5c8-r6c9-r7c9 gap 4
whispers-3: whispers r8c9-r9c9 gap 4
whispers-4: whispers r4c7-r5c7-r6c7-r7c7-r8c6-r8c5-r8c4 gap 4
whispers-5: whispers r4c3-r5c3-r6c3-r7c3 gap 4
whispers-6: whispers r8c2-r8c3 gap 4
whispers-7: whispers r9c3-r9c4-r9c5-r9c6-r9c7 gap 4
whispers-8: whispers r8c7-r8c8 gap 4
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,3.5],"width":0.8,"height":0.4,"rounded":true,"fill":"#FFDA75","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,5.5],"width":0.8,"height":0.4,"rounded":true,"fill":"#FFDA75","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"shape","layer":"over","center":[7,4.5],"width":0.8,"height":0.4,"rounded":true,"fill":"#FFDA75","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,2.5],"width":0.4,"height":0.8,"rounded":true,"fill":"#FFDA75","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"shape","layer":"over","center":[5,6.5],"width":0.4,"height":0.8,"rounded":true,"fill":"#FFDA75","stroke":"#000000","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudou rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines, if other rules allow. KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. KROPKI PAIR- Numbers with a black dot between them are in a ratio of 2:1. TAN OVALS (eyes, ears and mouth)- Numbers with a tan oval between them sum to an even number. The 11 is duplicated in its cage because the red line can obscure it in some formats.
