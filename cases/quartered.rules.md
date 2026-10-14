---
format: open-rules
title: Quartered
setter: Jobo
source: https://sudokupad.app/6zbt240kf8
case: https://sudoku-sleuth.com/cases/quartered
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Our reading of these rules doesn't match the published answer yet; we're checking it.
exported: 4ab450b2fdf65c5c096b684d53eb8d70
---

```rules
sudoku 9x9
arrow-1: arrow r3c3-r2c2-r1c1 bulb ["r4c4"]
arrow-2: arrow r3c7-r2c8-r1c9 bulb ["r4c6"]
arrow-3: arrow r7c7-r8c8-r9c9 bulb ["r6c6"]
arrow-4: arrow r7c3-r8c2-r9c1 bulb ["r6c4"]
whispers-1: whispers r6c6-r7c7-r8c8 gap 4
whispers-2: whispers r8c7-r9c8-r8c9-r7c8 gap 4
whispers-3: whispers r2c8-r3c7-r4c6 gap 5
whispers-4: whispers r2c7-r1c8-r2c9-r3c8 gap 5
whispers-5: whispers r2c2-r3c3-r4c4 gap 5
whispers-6: whispers r2c3-r1c2-r2c1-r3c2 gap 5
whispers-7: whispers r6c4-r7c3-r8c2 gap 4
whispers-8: whispers r7c2-r8c1-r9c2-r8c3 gap 4
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[3,4.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#cccf","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,6],"width":0.26,"height":0.26,"rounded":true,"fill":"#cccf","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[6,4.5],"width":0.26,"height":0.26,"rounded":true,"fill":"#cccf","stroke":"#000000","thickness":1.28,"angle":0}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"shape","layer":"over","center":[4.5,3],"width":0.26,"height":0.26,"rounded":true,"fill":"#cccf","stroke":"#000000","thickness":1.28,"angle":0}}
```

Normal sudoku rules apply.

Digits along an arrow must sum to the digit in that arrow's circle.

Adjacent digits along a green line must differ by at least 5.

Adjacent digits along an orange line must differ by at least 4.

A set of three sequential cells along a peach line must contain a low [123], middle [456], and high [789] digit.

A set of three sequential cells along a teal line must contain one digit from [147], one from [258], and one from [369].

Digits separated by a grey dot must sum to 5 or 10.
