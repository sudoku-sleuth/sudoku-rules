---
format: open-rules
title: Ask The Right Question
setter: Tingo
source: https://tinyurl.com/mu882msw
case: https://sudoku-sleuth.com/cases/ask-the-right-question
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo r8c8-r7c8-r6c8-r5c9-r4c9-r3c9-r3c8-r3c7-r4c7
kropki-1: kropki r9c8-r9c9 colour "white"
kropki-2: kropki r8c4-r8c5 colour "white"
pair-1: pair r7c8-r7c9 relation {"op":"sum","value":5}
pair-2: pair r9c6-r9c7 relation {"op":"sum","value":5}
pair-3: pair r6c1-r7c1 relation {"op":"sum","value":5}
pair-4: pair r2c3-r3c3 relation {"op":"sum","value":5}
pair-5: pair r3c5-r3c6 relation {"op":"sum","value":5}
pair-6: pair r1c6-r1c7 relation {"op":"sum","value":5}
pair-7: pair r2c7-r2c8 relation {"op":"sum","value":5}
pair-8: pair r5c9-r6c9 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[3.5,2.5],[3.5,3.5],[2.5,3.5],[3.5,4.5],[4.5,5.5],[5.5,4.5],[6.5,3.5],[5.5,3.5],[5.5,2.5]],"color":"#8AA7FF","thickness":16,"rounded":true}}
```

Normal Sudoku Rules Apply
The blue line in the shape of a right arrow is a thermometer. The bulb end must be determined.
All digits on a thermometer must increase from the bulb end.
Cells separated by a V sum to 5. Not all Vs are given.
Cells separated by a white dot are consecutive. Not all white dots are given.
