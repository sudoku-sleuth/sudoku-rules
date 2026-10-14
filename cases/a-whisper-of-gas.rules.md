---
format: open-rules
title: A Whisper of GAS
setter: Blobz
source: https://sudokupad.app/blobz/a-whisper-of-gas
case: https://sudoku-sleuth.com/cases/a-whisper-of-gas
library: https://rules.sudoku-sleuth.com/
status: read
exported: 7adbc845ae8150ef7523d0560ee2bbf5
---

```rules
sudoku 9x9
kropki-1: kropki r1c1-r1c2 black
kropki-2: kropki r4c2-r4c3 black
kropki-3: kropki r4c3-r4c4 black
kropki-4: kropki r2c9-r3c9 black
kropki-5: kropki r9c8-r9c9 black
kropki-6: kropki r7c7-r7c8 black
kropki-7: kropki r7c5-r7c6 black
kropki-8: kropki r7c4-r8c4 black
whispers-1: whispers r4c3-r5c3-r6c3-r7c3-r7c4-r7c5 gap 5
whispers-2: whispers r7c8-r7c9-r8c8-r9c7-r9c8 gap 5
whispers-3: whispers r4c6-r5c6-r6c6-r7c6-r8c6-r7c7-r6c6 gap 5
whispers-4: whispers r4c6-r5c7-r6c6 gap 5
whispers-5: whispers r3c5-r4c5-r4c4-r3c4-r2c4-r2c5 gap 5 loop true
whispers-6: whispers r1c1-r2c1-r3c1-r4c1-r5c1-r4c2-r3c1 gap 5
whispers-7: whispers r1c1-r2c2-r3c1 gap 5
```

Normal sudoku rules apply.

Adjacent digits along a green line must differ by 5 or more.

Black dots separate two digits where one is double the other. Not all such dots are shown.
