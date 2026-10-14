---
format: open-rules
title: Extenban 159
setter: Blobz
source: https://sudokupad.app/sfz771btbr
case: https://sudoku-sleuth.com/cases/extenban-159
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
exported: c5507b253f5ebbdfc57d33031ea46262
---

```rules
sudoku 9x9
index r1c1-r1c5-r1c9-r2c1-r2c5-r2c9-r3c1-r3c5-r3c9-r4c1-r4c5-r4c9-r5c1-r5c5-r5c9-r6c1-r6c5-r6c9-r7c1-r7c5-r7c9-r8c1-r8c5-r8c9-r9c1-r9c5-r9c9 axis "column"
```

```drawing
- {"id":"drawing-1","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[6.5,4.5],[5.5,4.5],[4.5,3.5]],"color":"#FF66FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,0.5],[6.5,1.5]],"color":"#FF66FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"line","points":[[4.5,8.5],[3.5,8.5],[2.5,7.5]],"color":"#FF66FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[5.5,8.5],[6.5,8.5],[7.5,7.5]],"color":"#FF66FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[3.5,0.5],[2.5,0.5],[2.5,1.5]],"color":"#FF66FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,5.5],[3.5,6.5],[4.5,7.5],[3.5,7.5]],"color":"#FF66FF","thickness":11.2,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[3.5,3.5],[2.5,3.5],[1.5,4.5],[2.5,4.5],[2.5,5.5]],"color":"#FF66FF","thickness":11.2,"rounded":true}}
```

Normal sudoku rules apply:

159: Digits in column 1 indicate the column in which the digit 1 appears in that row (e.g. if r4c1 is a 6, r4c6 is a 1). The same applies to columns 5 and 9, with the digits 5 and 9 respectively.

Extended Renbans: Digits along a pink line form a consecutive group in any order. Digits do not repeat on the line EXCEPT for the ends, which are the SAME digit.

For example, possible fills for a line of length 5 might be 64756, 25342, 34123, etc.
