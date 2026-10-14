---
format: open-rules
title: Grist for the Gossip Mill
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/grist-for-the-gossip-mill
library: https://rules.sudoku-sleuth.com/
status: read
exported: 656a68119cac66492bf0875b2727ba2c
---

```rules
sudoku 9x9
arrow-1: arrow r7c5-r6c4-r6c3 bulb ["r8c6"]
arrow-2: arrow r3c3-r3c4 bulb ["r2c2"]
arrow-3: arrow r3c6-r4c7 bulb ["r2c5"]
arrow-4: arrow r8c8-r9c8 bulb ["r7c7"]
arrow-5: arrow r7c2-r6c2 bulb ["r8c3"]
arrow-6: arrow r4c5-r4c4 bulb ["r5c6"]
arrow-7: arrow r3c8-r2c7 bulb ["r4c8"]
whispers-1: whispers r3c3-r4c3-r5c3-r6c3-r7c3 gap 5
whispers-2: whispers r2c2-r2c3-r2c4-r2c5-r2c6 gap 5
whispers-3: whispers r3c7-r4c7-r5c7-r6c7-r7c7 gap 5
whispers-4: whispers r8c5-r8c6-r8c7-r8c8-r8c9 gap 5
whispers-5: whispers r7c9-r6c8-r5c8 gap 5
whispers-6: whispers r9c7-r9c8-r9c9 gap 5
whispers-7: whispers r3c9-r2c9-r1c9 gap 5
whispers-8: whispers r9c1-r8c1-r7c1 gap 5
whispers-9: whispers r1c1-r1c2-r1c3 gap 5
whispers-10: whispers r1c2-r2c2 gap 5
```

- Normal Sudoku rules apply.

- On green German Whisper Lines adjacent digits must have a difference of at least 5.

- Digits placed on an arrow must sum to the digit placed in that arrow's circle.
