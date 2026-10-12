---
format: open-rules
title: Uncle Joey
setter: Blobz
source: https://sudokupad.app/blobz/uncle-joey
case: https://sudoku-sleuth.com/cases/uncle-joey
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r5c2-r4c2 gap 5
whispers-2: whispers r3c3-r4c3-r5c3-r6c3-r7c3 gap 5
whispers-3: whispers r3c5-r4c5-r5c5-r6c5-r7c5 gap 5
whispers-4: whispers r3c6-r4c6 gap 5
whispers-5: whispers r3c7-r4c7 gap 5
renban-1: renban r7c4-r6c4-r5c4-r4c4-r3c4
renban-2: renban r7c6-r6c6-r5c6
region-sum-1: region-sum r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r4c2 segments [["r3c7"],["r3c6","r3c5","r3c4"],["r3c3","r3c2"],["r4c2"]]
region-sum-2: region-sum r6c2-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r6c7-r5c7 segments [["r6c2"],["r7c2","r7c3"],["r7c4","r7c5","r7c6"],["r7c7"],["r6c7","r5c7"]]
pair-1: pair r7c5-r8c5 relation {"op":"sum","value":10}
pair-2: pair r2c7-r3c7 relation {"op":"sum","value":10}
pair-3: pair r2c4-r3c4 relation {"op":"sum","value":10}
pair-4: pair r7c7-r8c7 relation {"op":"sum","value":10}
pair-5: pair r2c3-r3c3 relation {"op":"sum","value":10}
pair-6: pair r7c4-r8c4 relation {"op":"sum","value":10}
pair-7: pair r4c4-r5c4 relation {"op":"sum","value":10}
pair-8: pair r1c7-r1c8 relation {"op":"sum","value":10}
pair-9: pair r9c7-r9c8 relation {"op":"sum","value":10}
```

```drawing
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[63,64,65],"label":"Uncle","color":"#d38904ff","labelColor":"#d38904ff"}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[72,73,74],"label":"Joey","color":"#d38904ff","labelColor":"#d38904ff"}}
```

Normal sudoku rules apply.

Box borders divide the blue lines into segments with the same sum.

Along green lines, adjacent digits differ by at least 5.

Pink lines contain a non-repeating consecutive sequence, in any order.

Digits separated by an X sum to 10; not all such X's are given.
