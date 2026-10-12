---
format: open-rules
title: Vampire und ihre Opfer
setter: Blobz
source: https://sudokupad.app/blobz/vampire-und-ihre-opfer
case: https://sudoku-sleuth.com/cases/vampire-und-ihre-opfer
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
---

```rules
sudoku 9x9
whispers-1: whispers r7c1-r8c1 gap 5
whispers-2: whispers r9c1-r9c2-r9c3 gap 5
whispers-3: whispers r9c4-r9c5-r9c6 gap 5
whispers-4: whispers r9c7-r9c8-r9c9 gap 5
whispers-5: whispers r7c9-r8c9 gap 5
whispers-6: whispers r4c6-r4c5-r4c4-r5c4-r5c5-r5c6-r6c6-r6c5-r6c4 gap 5
whispers-7: whispers r7c8-r6c9-r5c8-r4c9 gap 5
whispers-8: whispers r1c4-r1c3-r2c2-r3c1 gap 5
whispers-9: whispers r8c4-r7c5-r8c6 gap 5
whispers-10: whispers r2c7-r2c6-r3c5-r2c4-r2c3 gap 5
whispers-11: whispers r3c2-r4c2-r4c3 gap 5
whispers-12: whispers r4c1-r5c1-r6c1 gap 5
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[26,35],"label":"14"}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[31,32],"label":"9"}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[54,55],"label":"4"}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[73,74],"label":"16"}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[68,77],"label":"12"}}
- {"id":"drawing-18","rules":[],"visual":{"kind":"cage","cells":[69,78],"label":"6"}}
- {"id":"drawing-19","rules":[],"visual":{"kind":"cage","cells":[52,61],"label":"16"}}
- {"id":"drawing-20","rules":[],"visual":{"kind":"cage","cells":[34,43],"label":"2"}}
- {"id":"drawing-21","rules":[],"visual":{"kind":"cage","cells":[66,75],"label":"4"}}
- {"id":"drawing-22","rules":[],"visual":{"kind":"cage","cells":[45,46],"label":"4"}}
- {"id":"drawing-23","rules":[],"visual":{"kind":"cage","cells":[37,38],"label":"14"}}
- {"id":"drawing-24","rules":[],"visual":{"kind":"cage","cells":[9,10],"label":"17"}}
- {"id":"drawing-25","rules":[],"visual":{"kind":"cage","cells":[2,3],"label":"7"}}
- {"id":"drawing-26","rules":[],"visual":{"kind":"cage","cells":[4,5],"label":"12"}}
- {"id":"drawing-27","rules":[],"visual":{"kind":"cage","cells":[23,24],"label":"7"}}
- {"id":"drawing-28","rules":[],"visual":{"kind":"cage","cells":[42,51],"label":"14"}}
- {"id":"drawing-29","rules":[],"visual":{"kind":"cage","cells":[21,30],"label":"10"}}
- {"id":"drawing-30","rules":[],"visual":{"kind":"cage","cells":[8,17],"label":"8"}}
```

Normal sudoku rules apply.

There are 9 VAMPIRES (digits 1-9 once each) in the graveyard (grid); one in every row, column and box. There are also 9 VICTIMS (digits 1-9 once each) in the graveyard; one in every row, column and box. The value of a vampire cell is the sum of its digit plus the digit of the victim cell in the same box. The value of a victim cell is always 0. The value of a natural cell is its digit.

Every coffin (cage) contains either a vampire or a victim. The total shown for each coffin is the sum of the two VALUES of the cells contained therein.

Along green lines, adjacent cells must have VALUES that differ by 5 or more.
