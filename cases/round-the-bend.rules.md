---
format: open-rules
title: Round the bend
setter: sujoyku
source: https://sudokupad.app/juli2osdmn
case: https://sudoku-sleuth.com/cases/round-the-bend
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: ba45a348627cbaa3763b9fbcdb4c4b3b
---

```rules
sudoku 9x9
whispers-1: whispers r1c9-r1c8-r1c7-r2c7-r3c7-r3c6-r3c5-r3c4-r2c4-r1c4 gap 5
whispers-2: whispers r9c1-r9c2-r9c3-r8c3-r7c3-r7c4-r7c5-r7c6-r8c6-r9c6 gap 5
whispers-3: whispers r1c3-r1c2-r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r6c2-r6c3 gap 5
whispers-4: whispers r9c7-r9c8-r9c9-r8c9-r7c9-r6c9-r5c9-r4c9-r4c8-r4c7 gap 5
renban-1: renban r8c8-r7c7-r6c6
renban-2: renban r6c4-r5c5-r4c6
renban-3: renban r2c2-r3c3-r4c4
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[16,17,25,26],"label":"11","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[4,5,13,14],"label":"9","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[54,55,63,64],"label":"13","color":"#000000","labelColor":"#000000"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[66,67,75,76],"label":"7","color":"#000000","labelColor":"#000000"}}
```

Normal Sudoku rules apply. Adjacent digits on a green line must have a difference of at least 5. Each purple line contains a set of consecutive non-repeating digits in any order. All cages are Rellik Cages. Any combination of one or more digits within such a cage CANNOT sum to the value in the top left. For example, a Rellik Cage with given value 6 cannot contain 1&2&3, 1&5, 2&4 or a single 6.
