---
format: open-rules
title: Nothing But Net
setter: Will Power
source: ""
case: https://sudoku-sleuth.com/cases/nothing-but-net
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
givens: r9c2=8 r9c8=9
---

```rules
sudoku 9x9
arrow-1: arrow r8c3-r7c4-r6c5-r5c6-r4c7 bulb ["r9c2"]
arrow-2: arrow r8c7-r7c6-r6c5-r5c4-r4c3 bulb ["r9c8"]
arrow-3: arrow r8c5-r7c4 bulb ["r9c6"]
arrow-4: arrow r8c7-r7c8 bulb ["r9c6"]
arrow-5: arrow r8c3-r7c2 bulb ["r9c4"]
arrow-6: arrow r8c5-r7c6 bulb ["r9c4"]
arrow-7: arrow r5c8-r6c7 bulb ["r4c9"]
arrow-8: arrow r5c2-r6c3 bulb ["r4c1"]
arrow-9: arrow r7c2-r6c2 bulb ["r8c2"]
arrow-10: arrow r5c8-r4c8 bulb ["r6c8"]
arrow-11: arrow r5c3 bulb ["r4c4"]
whispers-1: whispers r3c8-r2c7-r1c6-r1c5-r1c4-r2c3-r3c2-r4c2 gap 5
whispers-2: whispers r7c4-r7c5-r7c6-r6c7-r5c8 gap 5
whispers-3: whispers r3c5-r2c5-r1c5 gap 5
```

Normal Sudoku rules apply. Numbers on arrows sum to the number in the arrow's circle. Numbers may repeat on arrows, if other rules allow. The given 8 and 9 arrows are 5 in length. All other arrows are 1 or 2 in length. The numbers on the top of the basketball (yellow line) are at least 5 apart from their neighbors on the line. The numbers on the bottom of the basketball (brown line) are consecutive with their neighbors on the line. Numbers may not repeat on the brown line. The center (orange line) is only decorative to show the basketball rim. Extra points if you finish boxes 4, 5, 6, 7, 8 and 9 (the net) first, with no numbers filled in boxes 1, 2 and 3 yet.
