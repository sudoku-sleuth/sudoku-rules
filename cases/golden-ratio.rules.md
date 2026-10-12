---
format: open-rules
title: Golden Ratio
setter: Jobo
source: https://sudokupad.app/5sra3emkmt
case: https://sudoku-sleuth.com/cases/golden-ratio
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r4c3 colour "black"
kropki-2: kropki r6c7-r6c8 colour "black"
kropki-3: kropki r1c2-r1c3 colour "black"
kropki-4: kropki r9c2-r9c3 colour "black"
kropki-5: kropki r1c8-r1c9 colour "black"
kropki-6: kropki r3c9-r4c9 colour "black"
kropki-7: kropki r6c1-r7c1 colour "black"
kropki-8: kropki r3c4-r4c4 colour "black"
kropki-9: kropki r6c6-r7c6 colour "black"
kropki-10: kropki r9c8-r9c9 colour "black"
nabner-1: nabner r4c1-r4c2-r4c3-r4c4
nabner-2: nabner r6c9-r6c8-r6c7-r6c6
nabner-3: nabner r6c5-r6c4-r6c3-r6c2-r6c1
nabner-4: nabner r4c5-r4c6-r4c7-r4c8-r4c9
nabner-5: nabner r3c4-r2c4-r1c4-r1c5-r1c6
nabner-6: nabner r1c2-r1c1-r2c1-r3c1-r3c2
nabner-7: nabner r8c7-r7c7-r7c8-r7c9-r8c9
nabner-8: nabner r7c6-r8c6-r9c6-r9c5
nabner-9: nabner r7c1-r8c1-r9c1-r9c2
nabner-10: nabner r1c9-r2c9-r3c9-r3c8
nabner-11: nabner r3c7-r2c7-r1c7-r1c8
nabner-12: nabner r9c3-r8c3-r7c3-r7c4
```

Normal sudoku rules apply.

No two digits on a golden line can be consecutive, regardless of their order along the line.

Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
