---
format: open-rules
title: Ferris Wheel
setter: Jobo
source: https://sudokupad.app/e79tk18ec0
case: https://sudoku-sleuth.com/cases/ferris-wheel
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r2c5-r1c5
thermo-2: thermo r3c3-r2c3
thermo-3: thermo r3c7-r2c7
thermo-4: thermo r7c3-r6c3
thermo-5: thermo r7c7-r6c7
thermo-6: thermo r5c8-r4c8
thermo-7: thermo r8c5-r7c5
thermo-8: thermo r5c2-r4c2
kropki-1: kropki r4c4-r5c4 colour "white"
kropki-2: kropki r4c6-r5c6 colour "white"
kropki-3: kropki r5c4-r5c5 colour "white"
kropki-4: kropki r5c5-r5c6 colour "white"
kropki-5: kropki r7c9-r8c9 colour "white"
between-1: between r5c4-r6c3-r7c2 ends ["r4c5","r8c1"]
between-2: between r7c8-r6c7-r5c6 ends ["r8c9","r4c5"]
renban-1: renban r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
renban-2: renban r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
pair-1: pair r8c3-r8c4 sum 10
pair-2: pair r8c6-r8c7 sum 10
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits on between lines must be between the digits in the attached circles.

Adjacent digits along the green wheel (line) must differ by at least 5.

Digits along a purple line are a set of consecutive, non-repeating digits in any order. Lines go straight where they cross.

Digits separated by a white dot must be consecutive.
Digits separated by an X must sum to 10.
Not all dots and X are given.
