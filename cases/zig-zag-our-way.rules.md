---
format: open-rules
title: zig-zag our way
setter: Chip Sounder
source: https://sudokupad.app/2uw8tiidbs
case: https://sudoku-sleuth.com/cases/zig-zag-our-way
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r4c1-r5c1 colour "black"
kropki-2: kropki r9c8-r9c9 colour "black"
kropki-3: kropki r6c7-r6c8 colour "black"
kropki-4: kropki r2c1-r2c2 colour "black"
kropki-5: kropki r6c5-r6c6 colour "black"
kropki-6: kropki r7c4-r8c4 colour "black"
kropki-7: kropki r1c6-r2c6 colour "black"
kropki-8: kropki r8c2-r9c2 colour "black"
kropki-9: kropki r1c2-r1c3 colour "white"
kropki-10: kropki r3c2-r4c2 colour "white"
kropki-11: kropki r7c1-r7c2 colour "white"
kropki-12: kropki r2c7-r2c8 colour "white"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[0,9,10,19,20,29,30,39,40,49,50,59,60,69,70,79,80],"label":"23511822","color":"#fd6767ff","labelColor":"#f54040ff"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[2,3,12,13,22,23,32,33,42,43,52,53,62],"label":"334614","color":"#fd6767ff","labelColor":"#f54040ff"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[27,36,37,46,47,56,57,66,67,76,77],"label":"3327","color":"#fd6767ff","labelColor":"#f54040ff"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[63,72,73],"label":"14","color":"#fd6767ff","labelColor":"#f54040ff"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[5,6,15,16,25,26,35],"label":"29","color":"#fd6767ff","labelColor":"#f54040ff"}}
```

Normal sudoku rules apply. Place the digits 1-9 once each in every row, column and 3x3 box.
Cells separated by a king's move (in chess) cannot contain the same digit.
Digits may repeat in a cage. Read the clue out loud and that will tell you how many times a particular digit appears in the cage. i.e. if the clue reads 1432 that means there is one 4 and three 2s in the cage.
Cells separated by a black dot has one digit double the other (1:2 ratio).
Cells separated by a white dot are consecutive.
Not all dots are necessarily given,
