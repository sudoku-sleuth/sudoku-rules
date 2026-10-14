---
fog:
  initiallyLit:
    - r4c4
    - r4c6
    - r6c4
    - r6c6
format: open-rules
title: Heavy Fog At The Airport
setter: EPH
source: https://sudokupad.app/wx1zynk2pj
case: https://sudoku-sleuth.com/cases/heavy-fog-at-the-airport
library: https://rules.sudoku-sleuth.com/
status: read
exported: d74543ea5bdd76ff1217fc42574d09a0
---

```rules
sudoku 9x9
thermo-1: thermo r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
thermo-2: thermo r5c7-r4c7-r3c7-r2c7
thermo-3: thermo r9c7-r9c8-r9c9
thermo-4: thermo r1c9-r1c8-r1c7
thermo-5: thermo r9c3-r9c2
thermo-6: thermo r3c5-r3c4-r3c3-r3c2
thermo-7: thermo r1c3-r1c2
whispers-1: whispers r6c4-r5c4-r4c4-r4c5-r4c6-r5c6-r6c6-r6c5 gap 5
whispers-2: whispers r8c9-r7c9-r6c9-r5c9 gap 5
whispers-3: whispers r8c6-r8c5-r8c4 gap 5
whispers-4: whispers r9c5-r8c5 gap 5
whispers-5: whispers r3c9-r4c9-r5c9 gap 5
whispers-6: whispers r2c9-r3c9 gap 5
whispers-7: whispers r2c4-r1c5-r2c6 gap 5
whispers-8: whispers r4c1-r5c2-r6c1 gap 5
extremum r5c5 type "max" exhaustive false
```

Standard sudoku rules apply: each row column and 3x3 box must contain all the digits from 1 to 9.

Fog: most of the airport is covered by fog.  Placing a digit correctly in a cell will remove the fog from that cell and the adjacent cells.

German Whispers: adjacent digits on a green line must have a difference of at least 5.

Maximum: a digit in a grey square must be greater than all digits in cells orthognally adjacent to it.

Thermometers: digits along grey lines must strictly increase from the bulb to the tip.
