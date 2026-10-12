---
format: open-rules
title: The Crucifixion
setter: The Bard
source: https://sudokupad.app/kpy0h75bt1
case: https://sudoku-sleuth.com/cases/the-crucifixion
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=7 r1c7=4 r9c1=8 r9c9=5
---

```rules
sudoku 9x9
anti-king
thermo-1: thermo r8c8-r7c8-r6c8-r5c8
thermo-2: thermo r4c2-r5c2-r6c2-r7c2
thermo-3: thermo r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
kropki-1: kropki r2c6-r2c7 colour "white"
kropki-2: kropki r2c3-r2c4 colour "white"
kropki-3: kropki r7c6-r8c6 colour "white"
kropki-4: kropki r7c4-r8c4 colour "white"
whispers-1: whispers r3c3-r3c4-r3c5-r3c6-r3c7 gap 5
whispers-2: whispers r6c7-r6c8-r6c9 gap 5
whispers-3: whispers r5c1-r5c2-r5c3 gap 5
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
Kings Move: Digits within a chess piece kings move away cannot contain the same digit. 
German Whispers: Consecutive digits along the green line differ by at least 5.
Thermometers: Digits along the grey line increase in value from the bulb end. 
Kropki Dots: Digits separated by a white dot are consecutive.
