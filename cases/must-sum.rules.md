---
format: open-rules
title: Must Sum!
setter: Marty Sears
source: https://sudokupad.app/2y3zmsdv85
case: https://sudoku-sleuth.com/cases/must-sum
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: bbd16e3032d6f0de8a4adb20c3ad0492
---

```rules
sudoku 9x9
cage r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8 connected true
palindrome-1: palindrome r1c7-r2c7-r2c6-r1c5-r2c4
palindrome-2: palindrome r3c6-r3c5-r2c5-r3c4-r3c3-r4c2-r5c3-r6c3-r7c3-r7c4-r7c5-r8c6-r7c6-r6c6-r6c7-r6c8-r5c7
palindrome-3: palindrome r3c8-r2c8-r3c7-r4c6-r5c6-r4c5-r5c5
palindrome-4: palindrome r3c1-r3c2-r4c1-r5c1-r6c2
palindrome-5: palindrome r4c8-r5c9-r6c9-r7c8-r7c9
palindrome-6: palindrome r8c3-r9c3-r8c4-r8c5-r9c6
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","thickness":0,"opacity":0.5}}
- {"id":"drawing-3","rules":[],"visual":{"kind":"shape","layer":"under","center":[0.5,8],"width":2,"height":1,"rounded":false,"fill":"#FFEA00","thickness":0,"opacity":0.5}}
```

• Normal sudoku rules apply.
• Each grey line is a palindrome (it reads the same in either direction.)
• The digits on each palindrome MUST SUM to the same total, which will be displayed in the yellow domino, reading left to right. The cage also has this total.
