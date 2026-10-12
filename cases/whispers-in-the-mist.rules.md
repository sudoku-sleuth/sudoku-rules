---
fog:
  initiallyLit:
    - 9
    - 10
    - 11
    - 18
    - 19
    - 20
format: open-rules
title: Whispers in the Mist
setter: Sir Moose
source: https://sudokupad.app/dnhrhvm3ib
case: https://sudoku-sleuth.com/cases/whispers-in-the-mist
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r3c3 colour "black"
kropki-2: kropki r3c1-r3c2 colour "black"
kropki-3: kropki r4c2-r5c2 colour "black"
kropki-4: kropki r9c3-r9c4 colour "black"
kropki-5: kropki r9c5-r9c6 colour "black"
kropki-6: kropki r8c7-r8c8 colour "black"
kropki-7: kropki r6c8-r7c8 colour "black"
whispers-1: whispers r3c3-r3c2-r2c3-r2c2-r3c1-r2c1-r1c1-r1c2-r1c3 gap 4
whispers-2: whispers r4c1-r4c2-r5c2-r6c3-r7c3-r8c3-r9c2-r8c2 gap 4
whispers-3: whispers r4c2-r4c3 gap 4
whispers-4: whispers r8c4-r9c4-r8c5-r8c6 gap 4
whispers-5: whispers r8c8-r9c9-r8c9-r7c8 gap 4
whispers-6: whispers r6c8-r5c8-r4c9 gap 4
whispers-7: whispers r5c8-r4c7-r3c7 gap 4
whispers-8: whispers r2c7-r1c6-r1c7 gap 4
whispers-9: whispers r3c9-r2c9-r1c8 gap 4
whispers-10: whispers r5c4-r5c5-r5c6-r4c5 gap 4
whispers-11: whispers r2c5-r3c6 gap 4
whispers-12: whispers r5c9-r6c9 gap 4
```

Normal sudoku rules apply.
Some of the grid is covered by fog. Placing correct digits will clear the surrounding fog.
Digits separated by a black dots are in a 1:2 ratio. Not all dots are given.
Dutch Whisper Lines: Digits along the lines must differ by at least 4.
