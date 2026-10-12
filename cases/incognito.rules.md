---
format: open-rules
title: Incognito
setter: Jobo
source: https://sudokupad.app/v0o7ewn7ni
case: https://sudoku-sleuth.com/cases/incognito
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r8c2-r9c2-r9c1 gap 5
whispers-2: whispers r8c8-r9c8-r9c9 gap 5
whispers-3: whispers r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8 gap 5
whispers-4: whispers r8c2-r7c2-r7c3 gap 5
whispers-5: whispers r8c8-r7c8-r7c7 gap 5
whispers-6: whispers r7c7-r6c7-r5c7 gap 5
whispers-7: whispers r5c3-r6c3-r7c3 gap 5
whispers-8: whispers r5c3-r5c4-r5c5-r5c6-r5c7 gap 5
whispers-9: whispers r3c3-r2c3-r1c4-r1c5-r1c6-r2c7-r3c7 gap 5
region-sum r9c5-r8c4-r7c5-r6c5 segments [["r9c5","r8c4","r7c5"],["r6c5"]]
renban-1: renban r4c5-r4c4-r4c3-r3c3
renban-2: renban r4c5-r4c6-r4c7-r3c7
```

```drawing
- {"id":"drawing-14","rules":[],"visual":{"kind":"path","layer":"lines","d":"M139 287q0 -10 25 -17","bounds":[4.21875,2.171875,4.484375,2.5625],"color":"#cccccc","thickness":9.6,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"path","layer":"lines","d":"M411 269q19 7 26 19","bounds":[4.203125,6.421875,4.5,6.828125],"color":"#cccccc","thickness":9.6,"rounded":true}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.5],"width":0.18,"height":0.22,"rounded":false,"fill":"#535353ff","thickness":0,"angle":0}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.4],"width":0.22,"height":0.22,"rounded":true,"fill":"#535353ff","thickness":0,"angle":0}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"shape","layer":"over","center":[4,4.6],"width":0.22,"height":0.22,"rounded":true,"fill":"#535353ff","thickness":0,"angle":0}}
```

Normal sudoku rules apply.

Adjacent digits along a grey line must differ by at least 5.

Purple lines contain a non-repeating set of consecutive digits in any order.

Box borders divide the blue line into segments with the same sum.

Digits separated by the black pill must be in a 1:2 ratio.
