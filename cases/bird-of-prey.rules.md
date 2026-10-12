---
format: open-rules
title: Bird of Prey
setter: Blobz
source: https://sudokupad.app/mzhbktb4vo
case: https://sudoku-sleuth.com/cases/bird-of-prey
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r5c2-r6c1-r5c1-r4c1
thermo-2: thermo r6c9-r5c9-r4c9-r5c8
thermo-3: thermo r9c6-r8c6-r8c5-r8c4
thermo-4: thermo r4c5-r3c5-r4c4
whispers-1: whispers r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4-r7c3-r6c3-r5c3-r4c3 gap 5 loop true
whispers-2: whispers r2c1-r1c1-r1c2-r2c2 gap 5
whispers-3: whispers r9c8-r9c9-r8c9-r8c8 gap 5
whispers-4: whispers r1c8-r1c9-r2c9-r2c8 gap 5 loop true
whispers-5: whispers r3c7-r2c8 gap 5
whispers-6: whispers r8c2-r7c3 gap 5
whispers-7: whispers r2c2-r3c3 gap 5
whispers-8: whispers r7c7-r8c8 gap 5
whispers-9: whispers r5c4-r5c3 gap 5
whispers-10: whispers r6c5-r7c5 gap 5
whispers-11: whispers r5c6-r5c7 gap 5
whispers-12: whispers r5c4-r6c4-r6c5 gap 5
whispers-13: whispers r9c4-r9c5-r9c6-r8c7 gap 5
whispers-14: whispers r3c9-r4c8 gap 5
whispers-15: whispers r3c1-r4c2 gap 5
whispers-16: whispers r7c1-r8c1-r8c2-r9c2-r9c3 gap 5
whispers-17: whispers r1c3-r2c4-r2c5-r2c6 gap 5
```

Normal sudoku rules apply. 

Adjacent digits along a green line differ by at least 5.

Along thermometers, digits strictly increase from the bulb end.
