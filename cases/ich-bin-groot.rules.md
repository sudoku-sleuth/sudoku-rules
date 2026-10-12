---
format: open-rules
title: Ich Bin Groot
setter: Blobz
source: https://sudokupad.app/uc05v2vpww
case: https://sudoku-sleuth.com/cases/ich-bin-groot
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
givens: r9c1=8
---

```rules
sudoku 9x9
cage-1: cage r9c2-r9c3-r9c4 total 9 connected true
cage-2: cage r9c6-r9c7-r9c8 total 18 connected true
cage-3: cage r1c1-r1c2-r1c3 total 22 connected true
cage-4: cage r1c7-r1c8-r1c9 total 15 connected true
cage-5: cage r5c1-r6c1-r7c1-r7c2 total 14 connected true
cage-6: cage r5c9-r6c9-r7c8-r7c9 total 14 connected true
cage-7: cage r8c1-r8c2-r8c3 total 14 connected true
cage-8: cage r8c8-r8c9 total 14 connected true
cage-9: cage r2c8-r2c9-r3c9 total 20 connected true
cage-10: cage r2c1-r2c2-r3c1 total 10 connected true
cage-11: cage r5c4-r5c5-r5c6 total 15 connected true
whispers-1: whispers r9c5-r8c4-r7c3-r6c2-r5c2-r4c2 gap 5
whispers-2: whispers r9c5-r8c6-r7c7-r6c8-r5c8-r4c8 gap 5
whispers-3: whispers r4c2-r3c2-r2c3-r3c4-r2c5-r3c6-r2c7-r3c8-r4c8 gap 5
whispers-4: whispers r7c4-r7c5-r6c6 gap 5
```

```drawing
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#55dd55","stroke":"#22dd22","thickness":1,"textColor":"#000000","opacity":0.5}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,5.5],"width":0.7,"height":0.7,"rounded":true,"fill":"#55dd55","stroke":"#22dd22","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal sudoku rules apply. 

Digits in cages do not repeat, and must sum to the given total.

Along green lines, adjacent digits must differ by 5 or more.

Green circles mark odd digits.
