---
format: open-rules
title: Ovary Action
setter: Marty Sears
source: https://sudokupad.app/3u3dus8t3a
case: https://sudoku-sleuth.com/cases/ovary-action
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 6
  cols: 6
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
pair-1: pair r2c1-r3c1 sum 10
pair-2: pair r2c1-r2c2 sum 10
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"shape","layer":"under","center":[2,0],"width":2.7,"height":2.7,"rounded":true,"fill":"#ffafd7ff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[2.5,1.5],[2.5,2.5],[3.5,2.5],[3.5,3.5]],"color":"#c5c5c5ff","thickness":9.6,"rounded":true,"path":"M96 160L128 160Q160 160 160 192Q160 224 192 224L224 224","bounds":[2.5,1.5,3.5,3.5]}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,1.5],[4.5,1.5],[4.5,2.5],[5.5,2.5]],"color":"#c5c5c5ff","thickness":9.6,"rounded":true,"path":"M96 224L96 256Q96 288 128 288Q160 288 160 320L160 352","bounds":[3.5,1.5,5.5,2.5]}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,2.5],[1.5,3.5],[2.5,3.5],[2.5,4.5]],"color":"#c5c5c5ff","thickness":9.6,"rounded":true,"path":"M160 96L192 96Q224 96 224 128Q224 160 256 160L288 160","bounds":[1.5,2.5,2.5,4.5]}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[1.5,5.5],[0.5,4.5],[1.5,4.5],[0.5,3.5]],"color":"#c5c5c5ff","thickness":9.6,"rounded":true,"path":"M352 96L320 64Q288 32 288 64Q288 96 256 64L224 32","bounds":[0.5,3.5,1.5,5.5]}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[4.5,3.5],[5.5,4.5],[5.5,3.5]],"color":"#c5c5c5ff","thickness":9.6,"rounded":true,"path":"M288 224L256 256Q224 288 256 320Q288 352 256 352L224 352","bounds":[3.5,3.5,5.5,4.5]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[2.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#c5c5c5ff","thickness":0,"angle":0}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,2.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#c5c5c5ff","thickness":0,"angle":0}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,1.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#c5c5c5ff","thickness":0,"angle":0}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"shape","layer":"over","center":[0.5,3.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#c5c5c5ff","thickness":0,"angle":0}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[3.5,4.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#c5c5c5ff","thickness":0,"angle":0}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"shape","layer":"over","center":[2,0.5],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffafd7ff","thickness":0,"angle":0}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,1],"width":0.3,"height":0.3,"rounded":true,"fill":"#ffafd7ff","thickness":0,"angle":0}}
```

Normal sex by sex sudoku rules apply.

Digits along a spermometer strictly increase, moving from head to tail.

Digits separated by an X chromosome sum to 10.

Digits touching the pink egg have the same sum on either side of the box border that divides the egg into two.
