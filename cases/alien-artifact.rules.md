---
format: open-rules
title: Alien Artifact
setter: Blobz
source: https://sudokupad.app/blobz/alien-artifact
case: https://sudoku-sleuth.com/cases/alien-artifact
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=6 r9c1=6
---

```rules
sudoku 9x9
thermo-1: thermo r5c1-r6c2-r7c3
thermo-2: thermo r2c8-r3c9
thermo-3: thermo r8c2-r9c3
thermo-4: thermo r3c2-r2c1-r1c2-r2c3
thermo-5: thermo r1c5-r2c6-r3c7
whispers-1: whispers r9c4-r9c3-r9c2-r8c1-r7c1-r6c1 gap 5
whispers-2: whispers r1c6-r1c7-r1c8-r2c9-r3c9-r4c9 gap 5
whispers-3: whispers r4c1-r3c2-r2c3-r1c4 gap 5
whispers-4: whispers r4c5-r5c4-r4c3-r5c3-r6c3-r7c3-r7c4-r7c5-r7c6-r7c7-r6c7-r5c7-r6c6-r7c5 gap 5
whispers-5: whispers r4c5-r3c5-r3c6-r3c7-r4c7-r5c7 gap 5
whispers-6: whispers r4c3-r3c3-r3c4-r3c5 gap 5
whispers-7: whispers r6c3-r6c4-r5c5-r4c6-r3c6 gap 5
```

Normal sudoku rules apply.

Digits along thermometers increase, starting from the bulb.

Adjacent digits along green lines must differ by 5 or more.
