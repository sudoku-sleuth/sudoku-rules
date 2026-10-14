---
format: open-rules
title: "Dutch Flat Mates: Index Lines"
setter: Marty Sears
source: https://sudokupad.app/6yrt3m6dqg
case: https://sudoku-sleuth.com/cases/dutch-flat-mates-index-lines
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4dc1b68906b20cdad17cfdf19f3f4c26
---

```rules
sudoku 9x9
index-line-1: index-line r9c4-r9c5-r9c6-r8c6-r8c5-r8c4
index-line-2: index-line r9c7-r9c8-r9c9-r8c9-r7c9-r7c8-r7c7-r7c6-r7c5
index-line-3: index-line r6c9-r5c9-r4c9-r3c9-r3c8
index-line-4: index-line r9c3-r9c2-r9c1-r8c1-r8c2-r8c3-r7c3-r6c3-r6c4
index-line-5: index-line r5c1-r6c1-r7c1
index-line-6: index-line r4c4-r3c4-r2c4-r1c5-r1c4-r1c3-r1c2-r2c3-r3c2
```

Normal sudoku rules apply.

On an index line, the digit in the Nth cell along the line (starting from the diamond) indicates the position along the line where the digit N appears.

Eg: 3214 would be a valid line - the 1st digit, 3, indicates that the 3rd digit is a 1, and so on.

Dutch Flat Mates: Every 5 in the grid either needs a 1 directly above it or a 9 directly below it. It can have both, but it doesn't need both.
