---
fog:
  initiallyLit:
    - r1c1
    - r2c2
    - r3c3
    - r9c2
    - r9c9
format: open-rules
title: Foggy Faces
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/foggy-faces
library: https://rules.sudoku-sleuth.com/
status: read
givens: r9c9=5
exported: 004fa643931edd0bbeefbcbd9378d367
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main" stated true
diagonal-2: diagonal direction "anti" stated true
thermo r8c2-r9c2
kropki-1: kropki r8c5-r9c5 white
kropki-2: kropki r7c3-r8c3 white
kropki-3: kropki r4c7-r5c7 white
kropki-4: kropki r5c7-r5c8 white
kropki-5: kropki r5c1-r5c2 white
kropki-6: kropki r4c4-r5c4 black
kropki-7: kropki r4c4-r4c5 black
kropki-8: kropki r1c1-r2c1 black
kropki-9: kropki r1c1-r1c2 black
whispers-1: whispers r3c2-r3c3-r2c3 gap 5
whispers-2: whispers r6c5-r5c5-r5c6 gap 5
whispers-3: whispers r9c7-r9c8-r8c9-r7c9 gap 5
whispers-4: whispers r8c3-r9c2-r9c3 gap 5
nabner r9c4-r8c4-r8c5-r9c6-r8c6
quadruple r8c1-r8c2-r9c1-r9c2 digits [1,2,3,4]
```

Normal sudoku rules apply.
Digits along a marked diagonal must not repeat.
Digits separated by a black dot must be in a 1:2 ratio.
Digits separated by a white dot must be consecutive.
Digits along a green ‘German Whisper’ line must have a difference of at least 5.
No digits along a golden ‘Nabner’ line are consecutive with any other. There is only 1 Nabner line in this puzzle.
Digits along a thermometer must increase from the bulb end.
Cells around a big white circle must include the digits given in the circle. (Digits increase from top right anti-clockwise)
The grid is partially covered with fog, correct inputs will clear the surrounding fog (no cheating is required)
No negative constraint
