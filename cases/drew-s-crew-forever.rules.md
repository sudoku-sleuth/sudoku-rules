---
format: open-rules
title: Drew's Crew Forever
setter: Timotab
source: https://sudokupad.app/vr2jg5sl89
case: https://sudoku-sleuth.com/cases/drew-s-crew-forever
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=3 r2c1=1 r8c9=1 r9c9=3
---

```rules
sudoku 9x9
thermo-1: thermo r9c3-r8c4-r7c5-r6c6-r5c7-r4c7-r3c7-r2c6-r1c5
thermo-2: thermo r2c4-r3c3-r4c3-r5c3
thermo-3: thermo r6c4-r7c5-r8c6-r9c7
kropki-1: kropki r3c9-r4c9 colour "black"
kropki-2: kropki r1c7-r1c8 colour "black"
kropki-3: kropki r4c9-r5c9 colour "black"
kropki-4: kropki r5c5-r5c6 colour "black"
kropki-5: kropki r4c2-r5c2 colour "black"
kropki-6: kropki r7c2-r8c2 colour "black"
nabner-1: nabner r9c4-r8c5-r7c6-r6c7-r5c8 distinct true
nabner-2: nabner r4c8-r3c8-r2c7-r1c6-r2c5 distinct true
nabner-3: nabner r3c4-r4c4-r5c4-r6c5 distinct true
nabner-4: nabner r8c7-r9c8 distinct true
```

This is dedicated to Drew Patchin. 3/20/2013 - 1/1/2026

• Normal sudoku rules apply: Place the digits 1 to 9 once each in every row, column, and box.
• Digits on a grey thermometer strictly increase from the bulb end.
• No two digits on a gold line can be consecutive, regardless of their position on the line. Digits may not repeat on a gold line.
• Where digits are separated by a black dot, one is double the other.

Please check out Drew's book, Marshmallow Can Do Hard Things: https://a.co/d/05YuoBci
