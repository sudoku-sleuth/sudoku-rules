---
format: open-rules
title: European Neighborhood
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/european-neighborhood
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r2c4-r2c5-r2c6 gap 5
whispers-2: whispers r1c7-r1c8-r1c9 gap 5
whispers-3: whispers r4c8-r4c9 gap 5
whispers-4: whispers r7c5-r8c5-r9c5 gap 5
whispers-5: whispers r7c2-r8c2-r9c2 gap 5
whispers-6: whispers r5c1-r5c2-r5c3 gap 5
whispers-7: whispers r8c9-r8c8-r8c7 gap 5
whispers-8: whispers r8c6-r8c5-r8c4 gap 5
renban-1: renban r4c7-r5c7-r6c7-r5c8
renban-2: renban r3c4-r3c5-r3c6
renban-3: renban r6c1-r6c2-r6c3
renban-4: renban r7c1-r8c1-r9c1
pair-1: pair r8c5-r9c5 sum 10
pair-2: pair r7c6-r8c6 sum 10
pair-3: pair r4c3-r5c3 sum 5
pair-4: pair r2c6-r2c7 sum 5
pair-5: pair r5c8-r6c8 sum 5
pair-6: pair r8c8-r9c8 sum 5
pair-7: pair r2c3-r2c4 sum 5
pair-8: pair r4c3-r4c4 sum 5
parity-cells-1: parity-cells r1c1-r2c1-r3c1-r4c4-r4c5-r4c6 parity "odd"
parity-cells-2: parity-cells r3c2-r2c2-r1c2-r6c4-r6c5-r6c6 parity "even"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"cage","cells":[69,70,71],"label":"17"}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"cage","cells":[36,37,38],"label":"12"}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"cage","cells":[6,7,8],"label":"13"}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"cage","cells":[12,13,14],"label":"11"}}
```

Normal Sudoku rules apply. Numbers on light green lines are at least 5 apart from their neighbors on the line. Numbers on a dark blue line are a set of non-repeating, consecutive numbers, in any order. Numbers on a gray square are even. Numbers on a gray circle are odd. Numbers with a V between them sum to 5. Numbers with an X between them sum to 10. Not all possible X and V are given. NOTE: AFTER COMPLETING THE PUZZLE- color all cells red. Then, color all cells on green lines white, all cells on blue lines blue, all cells with squares yellow or orange, and all cells with circles black or gray. Welcome to the neighborhood. I apologize if I missed your country, but there are only 9 boxes, and Sudoku with the rule set made some countries more difficult to include than others. Peace to you.
