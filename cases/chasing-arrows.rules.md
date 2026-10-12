---
fog:
  initiallyLit:
    - 30
    - 31
    - 32
format: open-rules
title: Chasing Arrows
setter: Blobz
source: https://sudokupad.app/blobz/chasing-arrows
case: https://sudoku-sleuth.com/cases/chasing-arrows
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
arrow-1: arrow r2c2-r1c2 bulb ["r1c3"]
arrow-2: arrow r3c2-r4c3 bulb ["r2c1"]
arrow-3: arrow r2c5-r2c6-r1c7 bulb ["r1c4"]
arrow-4: arrow r4c6-r3c5-r4c5-r3c4-r4c4 bulb ["r3c6"]
arrow-5: arrow r2c8-r3c7-r3c8 bulb ["r1c8"]
arrow-6: arrow r4c8 bulb ["r3c9"]
arrow-7: arrow r5c7-r5c8 bulb ["r4c7"]
arrow-8: arrow r6c8-r6c9-r7c9-r8c9 bulb ["r5c9"]
arrow-9: arrow r8c5-r9c6 bulb ["r7c5"]
arrow-10: arrow r8c4-r9c5 bulb ["r9c4"]
arrow-11: arrow r7c4-r6c4 bulb ["r7c3"]
arrow-12: arrow r9c2-r8c1 bulb ["r8c3"]
arrow-13: arrow r7c2-r6c3 bulb ["r6c1"]
arrow-14: arrow r5c2-r5c3-r5c4 bulb ["r5c1"]
```

Normal sudoku rules apply. 

Digits along arrows must sum to the digit in the attached circle. Digits may repeat on arrows if allowed by other rules. Arrows do not cross or overlap in any way. All circles emit a single arrow.

Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
