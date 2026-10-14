---
format: open-rules
title: Little Whisper Miracle
setter: sujoyku
source: https://sudokupad.app/2debf537hn
case: https://sudoku-sleuth.com/cases/little-whisper-miracle
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 886dc861eb4ae4397e12c7d0ea8617a0
---

```rules
sudoku 9x9
whispers r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r3c3-r4c4-r5c5-r6c5-r6c6-r6c7-r6c8-r7c9-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3 gap 5
equal-sums groups [["r1c2","r2c1"],["r4c9","r5c8","r6c7","r7c6","r8c5","r9c4"],["r1c8","r2c9"]]
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[2.794,-0.306],[3.006,-0.094]],"color":"#000000","thickness":3.2,"headLength":0.125,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- Little Killers: The digits on each marked diagonal sum to the same total which has to be determined by the solver. (If there is no conflict with other rules, digits on such a diagonal may repeat.)

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.
