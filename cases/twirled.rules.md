---
format: open-rules
title: Twirled
setter: sujoyku
source: https://sudokupad.app/j0zsvkkkf3
case: https://sudoku-sleuth.com/cases/twirled
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r3c1-r3c2-r3c3-r4c4-r4c5-r4c6
thermo-2: thermo r7c9-r6c9-r5c9-r4c8-r3c8-r2c8
thermo-3: thermo r6c1-r6c2-r6c3-r7c4-r7c5-r7c6
thermo-4: thermo r9c6-r9c7-r8c8
thermo-5: thermo r1c5-r2c4-r1c3-r2c2
entropic-1: entropic r4c1-r4c2-r4c3-r3c4-r3c5-r3c6
entropic-2: entropic r7c8-r6c8-r5c8-r4c9-r3c9-r2c9
entropic-3: entropic r9c3-r9c4-r8c5-r8c6-r7c7
```

- Normal sudoku rules apply, i.e. each Row, Column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Thermometers: Digits along a thermometer must strictly increase from the bulb end.

- Entropic Lines: Any three adjacent digits along a peach line must contain one low digit (1, 2, or 3), one medium digit (4, 5, or 6) and one high digit (7, 8, or 9).
