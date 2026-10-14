---
format: open-rules
title: Dr Logic
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/dr-logic
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r4c9=1 r5c4=9 r9c1=4
exported: be586e720872c73c8e99b96a47a54f21
---

```rules
sudoku 9x9
diagonal direction "main"
kropki-1: kropki r3c7-r4c7 black
kropki-2: kropki r5c8-r6c8 black
kropki-3: kropki r1c8-r2c8 black
whispers-1: whispers r5c3-r6c3-r6c4-r5c4 gap 5
whispers-2: whispers r5c5-r5c4-r5c3 gap 5
whispers-3: whispers r5c7-r4c7 gap 5
whispers-4: whispers r4c9-r4c8-r5c8-r5c9 gap 5
whispers-5: whispers r6c6-r6c5-r7c5-r7c6 gap 5
whispers-6: whispers r8c5-r8c6-r7c6-r6c6 gap 5
whispers-7: whispers r3c3-r2c3-r2c4 gap 5
whispers-8: whispers r7c7-r8c8-r9c9 gap 5
whispers-9: whispers r9c7-r8c8-r7c9 gap 5
whispers-10: whispers r5c1-r6c1-r7c1-r7c2 gap 5
whispers-11: whispers r2c1-r1c1-r2c2-r3c1 gap 5
renban-1: renban r8c1-r8c2
renban-2: renban r7c3-r7c4
renban-3: renban r9c5-r9c6
renban-4: renban r6c8-r6c9
parity-cells r3c7 parity "odd"
```

Normal Sudoku Rules Apply.
Digits along a green German Whisper line must differ by at least 5.
Digits along a purple renban line must be consecutive.
Digits seperated by a black dot are in the ratio 1:2
Digits on a grey circle must be odd.
Digits along the marked diagonal must not repeat.
