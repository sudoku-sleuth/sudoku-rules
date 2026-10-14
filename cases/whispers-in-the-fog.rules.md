---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r1c3
    - r2c1
    - r2c2
    - r3c1
    - r3c2
    - r3c3
format: open-rules
title: Whispers in the Fog
setter: Sir Moose
source: https://sudokupad.app/nkpsdwyoxy
case: https://sudoku-sleuth.com/cases/whispers-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
exported: a7750619e749d6828a9d1a590e032663
---

```rules
sudoku 9x9
kropki-1: kropki r3c4-r3c5 black
kropki-2: kropki r8c3-r8c4 black
kropki-3: kropki r7c5-r8c5 black
kropki-4: kropki r8c5-r9c5 black
kropki-5: kropki r8c9-r9c9 black
whispers-1: whispers r3c3-r2c2-r1c3-r1c2-r1c1-r2c1-r3c1-r3c2 gap 5
whispers-2: whispers r5c1-r4c2-r5c3-r6c2-r6c3 gap 5
whispers-3: whispers r4c2-r5c2 gap 5
whispers-4: whispers r7c1-r7c2-r8c3 gap 5
whispers-5: whispers r3c5-r4c5-r5c6-r6c5-r7c6 gap 5
whispers-6: whispers r5c6-r4c7 gap 5
whispers-7: whispers r4c9-r3c8-r4c8 gap 5
whispers-8: whispers r3c8-r2c7 gap 5
whispers-9: whispers r2c8-r3c9 gap 5
whispers-10: whispers r8c8-r9c7 gap 5
```

Normal Sudoku Rules Apply.  Some of the grid is covered by fog.  Placing correct digits will clear the fog.

German Whispers: Digits along a green line must differ by at least 5.

Digits separated by a black dot are in a 1:2 ratio. Not all dots are given.
