---
format: open-rules
title: Shhh ... It's Hot!
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/shhh-it-s-hot
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r9c5-r8c5
thermo-2: thermo r9c3-r8c3-r7c3
thermo-3: thermo r9c7-r8c7-r7c7-r6c7
thermo-4: thermo r9c6-r8c6-r7c6-r6c6-r5c6-r4c6
thermo-5: thermo r9c4-r8c4-r7c4-r6c4-r5c4
thermo-6: thermo r1c5-r2c5-r3c5
thermo-7: thermo r1c3-r2c3-r3c3-r4c3-r5c3
thermo-8: thermo r1c7-r2c7-r3c7-r4c7
thermo-9: thermo r7c1-r6c1-r5c1-r4c1-r3c1
thermo-10: thermo r3c9-r4c9-r5c9-r6c9
thermo-11: thermo r6c2-r5c2-r4c2
thermo-12: thermo r7c8-r6c8-r5c8-r4c8
thermo-13: thermo r7c9-r8c9-r9c9
whispers r9c3-r9c4-r9c5-r9c6-r9c7 gap 5
```

- Normal Sudoku rules apply.

- On green German Whisper Lines adjacent digits must have a difference of at least 5.

- Along Thermos digits must strictly increase from the bulb to the tip.
