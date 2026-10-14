---
format: open-rules
title: Quiet meetings at the front
setter: EPH
source: https://tinyurl.com/5en6hf9y
case: https://sudoku-sleuth.com/cases/quiet-meetings-at-the-front
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=2 r3c1=1 r3c9=3 r7c9=2 r9c3=1
exported: d14031e8bb3867845cb40c41479074a6
---

```rules
sudoku 9x9
cage-1: cage r6c1-r6c2-r6c3-r6c4-r7c4-r8c4-r9c4 total 30 connected true
cage-2: cage r1c6-r2c6-r3c6-r4c6-r4c7-r4c8-r4c9 total 30 connected true
cage-3: cage r1c4-r2c4-r3c4-r4c1-r4c2-r4c3-r4c4 total 40 connected true
cage-4: cage r6c6-r6c7-r6c8-r6c9-r7c6-r8c6-r9c6 total 40 connected true
cage-5: cage r8c8-r8c9 total 5 connected true
arrow-1: arrow r4c5-r3c5 bulb ["r5c5"]
arrow-2: arrow r6c5-r7c5 bulb ["r5c5"]
arrow-3: arrow r5c6-r5c7 bulb ["r5c5"]
arrow-4: arrow r5c4-r5c3 bulb ["r5c5"]
whispers-1: whispers r1c5-r2c6-r3c7-r4c8-r5c9-r6c8-r7c7-r8c6-r9c5-r8c4-r7c3-r6c2-r5c1-r4c2-r3c3-r2c4 gap 5
whispers-2: whispers r3c5-r4c4-r5c3 gap 4
whispers-3: whispers r5c7-r4c6-r3c5 gap 4
whispers-4: whispers r7c5-r6c6-r5c7 gap 4
whispers-5: whispers r6c4-r5c3 gap 4
whispers-6: whispers r6c4-r7c5 gap 4
```

Standard sudoku rules apply: each row, column, and 3x3 box must contain all the digits from 1 to 9.

Digits along an arrow must sum to the digit in the arrow's circle.

Digits in a cage cannot repeat, and must sum to the small number in the corner of the cage.

The green line is a German Whispers line: consecutive digits along the line must have a difference of at least 5.

The blue line is a Dutch Whispers line: consecutive digits along the line must have a difference of at least 4.
