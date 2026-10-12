---
fog:
  initiallyLit:
    - 19
    - 20
    - 21
    - 22
    - 23
    - 24
    - 28
    - 29
    - 30
    - 31
    - 32
    - 33
    - 37
    - 38
    - 39
    - 40
    - 41
    - 42
    - 46
    - 47
    - 48
    - 49
    - 50
    - 51
    - 55
    - 56
    - 57
    - 58
    - 59
    - 60
    - 64
    - 65
    - 66
    - 67
    - 68
    - 69
  links:
    - trigger:
        - 19
        - 20
        - 21
        - 22
        - 23
        - 24
        - 33
        - 32
        - 31
        - 30
        - 29
        - 28
        - 37
        - 38
        - 39
        - 40
        - 41
        - 42
        - 51
        - 50
        - 49
        - 48
        - 47
        - 46
        - 55
        - 56
        - 57
        - 58
        - 59
        - 60
        - 69
        - 68
        - 67
        - 66
        - 65
        - 64
      lights:
        - 0
        - 1
        - 2
        - 3
        - 4
        - 5
        - 6
        - 7
        - 8
        - 9
        - 10
        - 11
        - 12
        - 13
        - 14
        - 15
        - 16
        - 17
        - 18
        - 25
        - 26
        - 27
        - 34
        - 35
        - 36
        - 43
        - 44
        - 45
        - 52
        - 53
        - 54
        - 61
        - 62
        - 63
        - 70
        - 71
        - 72
        - 73
        - 74
        - 75
        - 76
        - 77
        - 78
        - 79
        - 80
format: open-rules
title: Window in the Fog
setter: Timotab
source: https://sudokupad.app/ng74gn1tru
case: https://sudoku-sleuth.com/cases/window-in-the-fog
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c2-r4c2-r3c3-r3c4-r3c5-r3c6-r4c7
thermo-2: thermo r6c7-r7c7-r8c6-r8c5-r8c4-r8c3-r7c2
thermo-3: thermo r9c7-r9c8-r8c8
thermo-4: thermo r8c1-r9c1-r9c2
thermo-5: thermo r3c8-r2c8-r2c7
thermo-6: thermo r2c2-r2c1-r3c1
kropki-1: kropki r6c2-r7c2 colour "black"
kropki-2: kropki r4c7-r5c7 colour "black"
kropki-3: kropki r5c6-r6c6 colour "black"
kropki-4: kropki r6c9-r7c9 colour "black"
kropki-5: kropki r5c3-r6c3 colour "white"
kropki-6: kropki r5c5-r5c6 colour "white"
kropki-7: kropki r1c3-r2c3 colour "white"
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
