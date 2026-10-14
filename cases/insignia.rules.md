---
format: open-rules
title: Insignia
setter: Blobz
source: https://sudokupad.app/blobz/insignia
case: https://sudoku-sleuth.com/cases/insignia
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9bc3f0aeebdab3f0fe559ee59e128b46
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r5c6 black
kropki-2: kropki r5c4-r5c5 black
kropki-3: kropki r7c2-r7c3 black
kropki-4: kropki r3c8-r3c9 black
whispers-1: whispers r2c2-r3c3-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4-r9c5-r8c6-r7c7-r8c8-r7c8-r6c8-r5c8-r4c8-r3c7-r2c6-r3c6-r4c6-r5c6-r6c6-r7c7 gap 5
whispers-2: whispers r2c2-r3c2-r4c2-r5c2-r6c2-r7c3-r8c4 gap 5
whispers-3: whispers r3c3-r2c4-r1c5-r1c6-r2c6 gap 5
whispers-4: whispers r3c2-r4c3-r5c4 gap 5
whispers-5: whispers r6c4-r5c3-r4c2 gap 5
whispers-6: whispers r7c4-r6c3-r5c2 gap 5
whispers-7: whispers r5c6-r6c7-r7c8 gap 5
whispers-8: whispers r4c6-r5c7-r6c8 gap 5
whispers-9: whispers r3c6-r4c7-r5c8 gap 5
```

Normal sudoku rules apply. 

Along green lines, adjacent digits differ by 5 or more. 

Black dots separate digits where one is double the other.
