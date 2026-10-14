---
format: open-rules
title: Three Strings
setter: The Bard
source: https://sudokupad.app/q4po15euzx
case: https://sudoku-sleuth.com/cases/three-strings
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c9=1 r9c1=8
exported: cf94a303e847ee094f7db6e7d291f7cf
---

```rules
sudoku 9x9
thermo-1: thermo r6c2-r5c3-r4c4-r3c5-r2c6
thermo-2: thermo r3c6-r4c5-r5c4-r6c3
thermo-3: thermo r8c4-r7c5-r6c6-r5c7-r4c8
thermo-4: thermo r7c9-r8c8
thermo-5: thermo r1c4-r2c3-r3c2
thermo-6: thermo r4c7-r3c8
thermo-7: thermo r8c2-r8c3
whispers-1: whispers r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 gap 5
whispers-2: whispers r1c3-r2c4-r3c5-r4c6-r5c7-r6c8-r7c9 gap 5
whispers-3: whispers r3c1-r4c2-r5c3-r6c4-r7c5-r8c6-r9c7 gap 5
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German Whispers: Consecutive digits along the green line differ by at least 5.
Thermometers: Digits along the grey line increase in value from the bulb end.
