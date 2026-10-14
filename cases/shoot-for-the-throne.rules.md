---
format: open-rules
title: Shoot for the Throne
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/b7w7m8z2eg
case: https://sudoku-sleuth.com/cases/shoot-for-the-throne
library: https://rules.sudoku-sleuth.com/
status: read
exported: 8e66599aa798b21855eeb8a7ee2e96b6
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r3c2-r3c3 black
kropki-2: kropki r7c6-r7c7 black
kropki-3: kropki r2c1-r3c1 black
kropki-4: kropki r3c5-r4c5 black
kropki-5: kropki r4c7-r5c7 black
kropki-6: kropki r5c6-r6c6 black
kropki-7: kropki r4c4-r5c4 black
arrow-1: arrow r3c2-r3c3-r3c4-r4c5 bulb ["r3c1"]
arrow-2: arrow r7c8-r7c7-r7c6-r6c5 bulb ["r7c9"]
arrow-3: arrow r8c2-r8c3-r9c4-r9c5 bulb ["r7c1"]
arrow-4: arrow r2c8-r2c7-r1c6-r1c5 bulb ["r3c9"]
arrow-5: arrow r5c1-r6c1-r6c2 bulb ["r4c1"]
arrow-6: arrow r5c9-r4c9-r4c8 bulb ["r6c9"]
arrow-7: arrow r5c4-r5c3 bulb ["r5c5"]
arrow-8: arrow r1c2-r1c1 bulb ["r1c3"]
arrow-9: arrow r7c3-r7c4 bulb ["r6c3"]
```

- Normal sudoku rules apply.
- Antiking: Digits a chess king's move apart must be different.
- Arrows: Digits along the shaft of an arrow sum to the value shown in the attached circle. Digits may repeat along arrows if allowed by other rules.
- Ratio dots: Digits separated by a black dot are in a 1:2 ratio.
