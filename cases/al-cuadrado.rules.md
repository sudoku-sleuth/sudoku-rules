---
format: open-rules
title: Al cuadrado
setter: sujoyku
source: https://tinyurl.com/4pp38avm
case: https://sudoku-sleuth.com/cases/al-cuadrado
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r8c5-r8c6 colour "white"
kropki-2: kropki r7c9-r8c9 colour "white"
kropki-3: kropki r2c7-r3c7 colour "black"
kropki-4: kropki r3c4-r3c5 colour "black"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[60,69],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[40],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[4,5,6,7,8,17],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[74,75],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"cage","cells":[37,46,54,55,63],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"cage","cells":[64,65,72,73],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"cage","cells":[9,18,27,28,29,36,45],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[47,50,51,52,56,57,59,61,62,66,67,68,70,71,80],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[10,11,12,13,14,15,16,19,20,21,22,23,24,25,26,33,34,35],"color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[30,31,32,38,39,41,42,43,44,48,49,53,58],"color":"#000000","labelColor":"#000000"}}
```

Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each. Digits in a cage must sum to a square number. No two cages may sum to the same square number. (Digits in a cage may repeat.) Digits joined by a black dot are in a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all dots are given.)
