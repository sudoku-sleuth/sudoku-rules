---
fog:
  initiallyLit:
    - r3c3
    - r3c4
    - r3c5
    - r3c6
    - r3c7
    - r4c3
    - r4c7
    - r5c3
    - r5c7
    - r6c3
    - r6c7
    - r7c3
    - r7c4
    - r7c5
    - r7c6
    - r7c7
format: open-rules
title: Phisto Fortress
setter: Blobz
source: https://sudokupad.app/blobz/phisto-fortress
case: https://sudoku-sleuth.com/cases/phisto-fortress
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 357ec4d2bab80596372ad97a5d168714
---

```rules
sudoku 9x9
whispers-1: whispers r3c4-r3c5-r3c6 gap 5
whispers-2: whispers r4c3-r5c3-r6c3 gap 5
whispers-3: whispers r8c6-r8c7-r8c8-r7c8-r6c8 gap 5
whispers-4: whispers r2c4-r2c3-r2c2-r3c2-r4c2 gap 5
whispers-5: whispers r2c7-r2c8-r3c8 gap 5
whispers-6: whispers r7c1-r7c2 gap 5
whispers-7: whispers r1c8-r1c9 gap 5
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,2.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"under","center":[5.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"under","center":[4.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"under","center":[3.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,6.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,5.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,3.5],"width":1,"height":1,"rounded":false,"fill":"#aa40ff38","thickness":0}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"line","points":[[2.38,2.11],[2.5,2.06],[2.62,2.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"line","points":[[2.11,2.62],[2.06,2.5],[2.11,2.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"line","points":[[3.38,2.11],[3.5,2.06],[3.62,2.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"line","points":[[3.62,2.89],[3.5,2.94],[3.38,2.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"line","points":[[4.38,2.11],[4.5,2.06],[4.62,2.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"line","points":[[4.62,2.89],[4.5,2.94],[4.38,2.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"line","points":[[5.38,2.11],[5.5,2.06],[5.62,2.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"line","points":[[5.62,2.89],[5.5,2.94],[5.38,2.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"line","points":[[6.38,2.11],[6.5,2.06],[6.62,2.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"line","points":[[6.89,2.38],[6.94,2.5],[6.89,2.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"line","points":[[6.11,3.62],[6.06,3.5],[6.11,3.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"line","points":[[6.89,3.38],[6.94,3.5],[6.89,3.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"line","points":[[6.11,4.62],[6.06,4.5],[6.11,4.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"line","points":[[6.89,4.38],[6.94,4.5],[6.89,4.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-31","rules":[],"visual":{"kind":"line","points":[[6.11,5.62],[6.06,5.5],[6.11,5.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-32","rules":[],"visual":{"kind":"line","points":[[6.89,5.38],[6.94,5.5],[6.89,5.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[6.62,6.89],[6.5,6.94],[6.38,6.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[6.89,6.38],[6.94,6.5],[6.89,6.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-35","rules":[],"visual":{"kind":"line","points":[[5.38,6.11],[5.5,6.06],[5.62,6.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[5.62,6.89],[5.5,6.94],[5.38,6.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-37","rules":[],"visual":{"kind":"line","points":[[4.38,6.11],[4.5,6.06],[4.62,6.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-38","rules":[],"visual":{"kind":"line","points":[[4.62,6.89],[4.5,6.94],[4.38,6.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-39","rules":[],"visual":{"kind":"line","points":[[3.38,6.11],[3.5,6.06],[3.62,6.11]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-40","rules":[],"visual":{"kind":"line","points":[[3.62,6.89],[3.5,6.94],[3.38,6.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[2.62,6.89],[2.5,6.94],[2.38,6.89]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-42","rules":[],"visual":{"kind":"line","points":[[2.11,6.62],[2.06,6.5],[2.11,6.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-43","rules":[],"visual":{"kind":"line","points":[[2.11,5.62],[2.06,5.5],[2.11,5.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-44","rules":[],"visual":{"kind":"line","points":[[2.89,5.38],[2.94,5.5],[2.89,5.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-45","rules":[],"visual":{"kind":"line","points":[[2.11,4.62],[2.06,4.5],[2.11,4.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-46","rules":[],"visual":{"kind":"line","points":[[2.89,4.38],[2.94,4.5],[2.89,4.62]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-47","rules":[],"visual":{"kind":"line","points":[[2.11,3.62],[2.06,3.5],[2.11,3.38]],"color":"#000000","thickness":2,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[2.89,3.38],[2.94,3.5],[2.89,3.62]],"color":"#000000","thickness":2,"rounded":true}}
```

Normal sudoku rules apply.

Digits in fortress cells are LARGER than all digits in orthogonally adjacent non-fortress cells.

Along a green line, adjacent digits differ by at least 5.

The grid is partially covered by fog. Placing a correct digit will clear surrounding fog, possibly revealing more clues.
