---
format: open-rules
title: 159 Whispers
setter: Blobz
source: https://sudokupad.app/blobz/159-whispers
case: https://sudoku-sleuth.com/cases/159-whispers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
whispers-1: whispers r1c1-r2c1-r3c1-r4c1 gap 5
whispers-2: whispers r6c1-r7c1-r8c1-r9c1 gap 5
whispers-3: whispers r6c2-r7c3-r6c3-r7c2 gap 5
whispers-4: whispers r9c4-r8c4-r8c5-r8c6-r9c6 gap 5
whispers-5: whispers r4c5-r5c5-r6c5 gap 5
whispers-6: whispers r2c3-r1c4-r2c4-r2c5-r1c6-r2c6 gap 5
whispers-7: whispers r3c8-r3c7-r4c7-r4c8 gap 5
whispers-8: whispers r2c9-r3c9-r4c9 gap 5
whispers-9: whispers r6c9-r7c9-r8c9 gap 5
index r1c1-r1c5-r1c9-r2c1-r2c5-r2c9-r3c1-r3c5-r3c9-r4c1-r4c5-r4c9-r5c1-r5c5-r5c9-r6c1-r6c5-r6c9-r7c1-r7c5-r7c9-r8c1-r8c5-r8c9-r9c1-r9c5-r9c9 axis "column"
```

Normal sudoku rules apply.

Digits in column 1 indicate the column in which the digit 1 appears in that row (e.g. if r4c1 is a 6, r4c6 is a 1). The same applies to columns 5 and 9, with the digits 5 and 9 respectively.

Along green lines, adjacent digits differ by at least 5.
