---
fog:
  initiallyLit:
    - r3c2
    - r3c3
    - r3c4
    - r3c5
    - r3c6
    - r3c7
    - r4c2
    - r4c3
    - r4c4
    - r4c5
    - r4c6
    - r4c7
    - r5c2
    - r5c3
    - r5c4
    - r5c5
    - r5c6
    - r5c7
    - r6c2
    - r6c3
    - r6c4
    - r6c5
    - r6c6
    - r6c7
    - r7c2
    - r7c3
    - r7c4
    - r7c5
    - r7c6
    - r7c7
    - r8c2
    - r8c3
    - r8c4
    - r8c5
    - r8c6
    - r8c7
  links:
    - trigger:
        - r3c2
        - r3c3
        - r3c4
        - r3c5
        - r3c6
        - r3c7
        - r4c7
        - r4c6
        - r4c5
        - r4c4
        - r4c3
        - r4c2
        - r5c2
        - r5c3
        - r5c4
        - r5c5
        - r5c6
        - r5c7
        - r6c7
        - r6c6
        - r6c5
        - r6c4
        - r6c3
        - r6c2
        - r7c2
        - r7c3
        - r7c4
        - r7c5
        - r7c6
        - r7c7
        - r8c7
        - r8c6
        - r8c5
        - r8c4
        - r8c3
        - r8c2
      lights:
        - r1c1
        - r1c2
        - r1c3
        - r1c4
        - r1c5
        - r1c6
        - r1c7
        - r1c8
        - r1c9
        - r2c1
        - r2c2
        - r2c3
        - r2c4
        - r2c5
        - r2c6
        - r2c7
        - r2c8
        - r2c9
        - r3c1
        - r3c8
        - r3c9
        - r4c1
        - r4c8
        - r4c9
        - r5c1
        - r5c8
        - r5c9
        - r6c1
        - r6c8
        - r6c9
        - r7c1
        - r7c8
        - r7c9
        - r8c1
        - r8c8
        - r8c9
        - r9c1
        - r9c2
        - r9c3
        - r9c4
        - r9c5
        - r9c6
        - r9c7
        - r9c8
        - r9c9
format: open-rules
title: Window in the Fog
setter: Timotab
source: https://sudokupad.app/ng74gn1tru
case: https://sudoku-sleuth.com/cases/window-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6c04790ab7d875d9c1f3bc3cd2f1276a
---

```rules
sudoku 9x9
thermo-1: thermo r5c2-r4c2-r3c3-r3c4-r3c5-r3c6-r4c7
thermo-2: thermo r6c7-r7c7-r8c6-r8c5-r8c4-r8c3-r7c2
thermo-3: thermo r9c7-r9c8-r8c8
thermo-4: thermo r8c1-r9c1-r9c2
thermo-5: thermo r3c8-r2c8-r2c7
thermo-6: thermo r2c2-r2c1-r3c1
kropki-1: kropki r6c2-r7c2 black
kropki-2: kropki r4c7-r5c7 black
kropki-3: kropki r5c6-r6c6 black
kropki-4: kropki r6c9-r7c9 black
kropki-5: kropki r5c3-r6c3 white
kropki-6: kropki r5c5-r5c6 white
kropki-7: kropki r1c3-r2c3 white
unique-1: unique r3c2-r3c3-r3c4-r4c2-r4c3-r4c4-r5c2-r5c3-r5c4
unique-2: unique r6c5-r6c6-r6c7-r7c5-r7c6-r7c7-r8c5-r8c6-r8c7
unique-3: unique r3c5-r3c6-r3c7-r4c5-r4c6-r4c7-r5c5-r5c6-r5c7
unique-4: unique r6c2-r6c3-r6c4-r7c2-r7c3-r7c4-r8c2-r8c3-r8c4
```

• Normal Sudoku Rules Apply. Place the digits 1-9 in every row, column, and box, without repetition.
• Dynamic fog: The grid is partially covered in fog. When all initially-unfogged cells have correct digits, the fog in the rest of the puzzle will clear. No guessing is necessary.
• Extra regions: The four shaded 3x3 areas are extra regions. Digits cannot repeat within each such region.
• Thermometers: Digits along a thermometer strictly increase from the bulb end.
• Kropki: Where digits are separated by a white dot they are consecutive. Where digits are separated by a black dot, one is double the other. Not all dots are necessarily given.
