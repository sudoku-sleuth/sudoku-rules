---
format: open-rules
title: Sting in the Tail
setter: Timotab
source: https://sudokupad.app/6og3rrs1zc
case: https://sudoku-sleuth.com/cases/sting-in-the-tail
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
whispers-1: whispers r2c9-r2c8-r2c7-r2c6-r1c5-r1c4-r2c3-r2c2-r2c1-r3c1-r4c1-r3c2 gap 5
whispers-2: whispers r8c1-r8c2-r8c3-r8c4-r9c5-r9c6-r8c7-r8c8-r8c9-r7c9-r6c9-r7c8 gap 5
whispers-3: whispers r3c6-r3c7-r3c8-r3c9-r4c8-r4c7-r5c6-r6c6-r6c5-r7c5 gap 5
whispers-4: whispers r7c4-r7c3-r7c2-r7c1-r6c2-r6c3-r5c4-r4c4-r4c5-r3c5 gap 5
whispers-5: whispers r5c9-r5c8-r6c7 gap 5
whispers-6: whispers r5c1-r5c2-r4c3 gap 5
```

```drawing
- {"id":"drawing-7","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0.42,"height":0.42,"rounded":false,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,5],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"XI","textColor":"#000000","fontSize":28,"textStroke":"#ffffff","textStrokeWidth":1}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"shape","layer":"over","center":[1.5,4],"width":0,"height":0.738,"rounded":true,"thickness":0,"angle":0,"text":"IX","textColor":"#000000","fontSize":28,"textStroke":"#ffffffff","textStrokeWidth":1}}
```

• Normal sudoku rules apply: Place the digits 1-9 in every row, column, and box, without repetition.
• Adjacent digits along a green German Whispers line must differ by at least 5.
• Digits separated by IX must sum to 9. Digits separated by XI must sum to 11.
