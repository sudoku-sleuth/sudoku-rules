---
format: open-rules
title: "Name Series: Abbey"
setter: Tingo
source: https://tinyurl.com/nameseriesabbeysudoku
case: https://sudoku-sleuth.com/cases/name-series-abbey
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
kropki-1: kropki r2c7-r2c8 colour "white"
kropki-2: kropki r6c9-r7c9 colour "white"
kropki-3: kropki r8c1-r9c1 colour "white"
whispers-1: whispers r3c1-r2c1-r1c2-r2c3-r3c3 gap 5
whispers-2: whispers r2c2-r2c3 gap 5
whispers-3: whispers r1c4-r1c5-r2c6-r3c5-r4c6-r5c5-r5c4-r4c4-r3c4-r2c4 gap 5
whispers-4: whispers r1c7-r1c8-r2c9-r3c8-r4c9-r5c8-r5c7-r4c7-r3c7-r2c7 gap 5
whispers-5: whispers r6c5-r7c6-r6c7 gap 5
whispers-6: whispers r9c6-r8c6-r7c6 gap 5
whispers-7: whispers r7c2-r7c1-r8c2-r9c1-r9c2 gap 5
pair-1: pair r3c5-r3c6 relation {"op":"sum","value":5}
pair-2: pair r3c8-r3c9 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-13","rules":[],"visual":{"kind":"shape","layer":"over","center":[8,5.5],"width":0.25,"height":0.25,"rounded":false,"fill":"#FFFFFF","text":"X","textColor":"#000000","thickness":0,"fontSize":25}}
```

I set this puzzle as a tribute to my wife. Love you, Ab.

Normal Sudoku Rules Apply
Green lines are German Whispers lines. Adjacent digits must differ by at least 5.
Cells joined by white dots are consecutive in value. Not all dots are given.
Cells joined by Vs sum to 5. Not all Vs are given.
