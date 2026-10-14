---
format: open-rules
title: 4 Strings
setter: The Bard
source: ""
case: https://sudoku-sleuth.com/cases/4-strings
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c8=5
exported: 47b52a43d4a8e973e96f12cf014ddac4
---

```rules
sudoku 9x9
thermo-1: thermo r1c4-r2c5-r3c6-r4c7-r5c8-r6c9
thermo-2: thermo r6c1-r7c2-r8c3-r9c4
thermo-3: thermo r8c1-r9c2
thermo-4: thermo r2c7-r1c6
thermo-5: thermo r3c8-r4c9
thermo-6: thermo r4c2-r5c3
whispers-1: whispers r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 gap 5
whispers-2: whispers r9c2-r8c3-r7c4-r6c5-r5c6-r4c7-r3c8-r2c9 gap 5
whispers-3: whispers r4c9-r5c8-r6c7-r7c6-r8c5-r9c4 gap 5
whispers-4: whispers r1c6-r2c5-r3c4-r4c3-r5c2-r6c1 gap 5
```

Normal Sudoku rules apply, place the digits 1-9 in each row, column, and box.
German Whispers: Consecutive digits along the green line differ by at least 5.
Thermometers: Digits along the grey line increase in value from the bulb end.
