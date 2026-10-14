---
format: open-rules
title: Stay On Target
setter: Blobz
source: https://sudokupad.app/blobz/stay-on-target
case: https://sudoku-sleuth.com/cases/stay-on-target
library: https://rules.sudoku-sleuth.com/
status: read
exported: 25c6dea5f4dda6799f9e48a4fc9dcc88
---

```rules
sudoku 9x9
kropki-1: kropki r1c8-r2c8 white
kropki-2: kropki r3c9-r4c9 white
kropki-3: kropki r5c8-r5c9 white
kropki-4: kropki r6c8-r6c9 white
kropki-5: kropki r7c1-r7c2 white
kropki-6: kropki r2c2-r3c2 white
kropki-7: kropki r3c3-r4c3 white
kropki-8: kropki r3c1-r4c1 white
kropki-9: kropki r5c1-r6c1 white
kropki-10: kropki r5c1-r5c2 white
kropki-11: kropki r2c5-r3c5 white
kropki-12: kropki r1c4-r1c5 white
kropki-13: kropki r6c4-r6c5 black
kropki-14: kropki r6c5-r6c6 black
whispers-1: whispers r7c4-r6c3-r5c3-r5c4-r6c5-r5c6-r5c7-r6c7-r7c6 gap 5
whispers-2: whispers r5c3-r4c3-r3c4 gap 5
whispers-3: whispers r5c4-r4c5-r5c6 gap 5
whispers-4: whispers r5c7-r4c7-r3c6 gap 5
whispers-5: whispers r3c1-r2c1-r1c1-r1c2-r1c3 gap 5
whispers-6: whispers r1c7-r1c8-r1c9-r2c9-r3c9 gap 5
whispers-7: whispers r7c9-r8c9-r9c9-r9c8-r9c7 gap 5
whispers-8: whispers r9c3-r9c2-r9c1-r8c1-r7c1 gap 5
```

Normal sudoku rules apply.

Along green lines, adjacent digits differ by 5 or more.

Black dots separate digits where one is double the other. White dots separate consecutive digits. Not all such dots are shown.
