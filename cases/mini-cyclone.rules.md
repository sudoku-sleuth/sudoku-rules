---
format: open-rules
title: Mini Cyclone
setter: Blobz
source: https://sudokupad.app/wi1580n360
case: https://sudoku-sleuth.com/cases/mini-cyclone
library: https://rules.sudoku-sleuth.com/
status: read
exported: 38bc22f0cd4e2e1372b9fa4fbb030805
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1-r2c2 total 9 connected true
cage-2: cage r8c8-r8c9-r9c9 total 10 connected true
cage-3: cage r5c7-r5c8-r5c9 total 10 connected true
cage-4: cage r8c2-r9c1-r9c2 total 8 connected true
cage-5: cage r2c5-r2c6-r3c5 total 12 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r6c3-r5c3-r4c4 bulb ["r7c3"]
arrow-2: arrow r3c4-r3c5-r4c6 bulb ["r3c3"]
arrow-3: arrow r4c7-r5c7-r6c6 bulb ["r3c7"]
arrow-4: arrow r7c6-r7c5-r6c4 bulb ["r7c7"]
arrow-5: arrow r5c1-r4c2 bulb ["r6c1"]
arrow-6: arrow r5c9-r6c9 bulb ["r4c8"]
whispers-1: whispers r3c3-r4c4 gap 5
whispers-2: whispers r3c7-r4c6 gap 5
whispers-3: whispers r6c6-r7c7 gap 5
whispers-4: whispers r6c4-r7c3 gap 5
whispers-5: whispers r8c1-r9c2 gap 5
whispers-6: whispers r8c9-r9c8 gap 5
```

Normal sudoku rules apply.

Digits in cages sum to the clue in the top left corner.

Digits along arrows (which may repeat if allowed by other rules) sum to the value in the attached circle.

Adjacent digits along green lines differ by at least 5.

Digits may not repeat along either main diagonal.
