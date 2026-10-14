---
format: open-rules
title: Index Lines
setter: Marty Sears
source: https://sudokupad.app/idypl2s47b
case: https://sudoku-sleuth.com/cases/index-lines
library: https://rules.sudoku-sleuth.com/
status: read
exported: eb690b89ebeec235356db42d034f707b
---

```rules
sudoku 9x9
index-line-1: index-line r3c2-r3c1-r2c1-r1c1-r1c2-r1c3
index-line-2: index-line r9c1-r8c1-r7c1
index-line-3: index-line r7c3-r6c3-r6c2-r5c1-r4c2-r4c3-r3c3-r2c4-r2c3
index-line-4: index-line r4c4-r4c5-r5c5-r5c4-r5c3-r5c2
index-line-5: index-line r3c7-r3c6-r4c6-r3c5-r3c4-r2c5-r1c4
index-line-6: index-line r6c9-r5c8-r5c7-r5c6-r6c6-r6c7-r6c8
index-line-7: index-line r3c8-r4c8-r3c9-r2c9-r1c9-r1c8-r2c7-r2c8
index-line-8: index-line r7c6-r8c6-r9c6-r9c5-r8c4-r8c5-r7c4-r8c3-r7c2
index-line-9: index-line r7c9-r8c9-r7c8-r7c7-r8c7-r8c8-r9c9-r9c8-r9c7
```

Normal sudoku rules apply. On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears.

Eg: 3214 would be a valid line; the 1st digit, 3, indicates that the 3rd digit is a 1, and so on.
