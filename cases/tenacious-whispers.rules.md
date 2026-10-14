---
format: open-rules
title: Tenacious Whispers
setter: sujoyku
source: https://sudokupad.app/ja8iov3ag3
case: https://sudoku-sleuth.com/cases/tenacious-whispers
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 7c7f5a3572a50f0e3edea10fd293887f
---

```rules
sudoku 9x9
whispers-1: whispers r7c8-r7c9-r8c9-r9c9-r9c8-r8c8-r8c7 gap 5
whispers-2: whispers r3c2-r3c1-r2c1-r1c1-r1c2-r2c2-r2c3 gap 5
whispers-3: whispers r1c7-r2c7-r3c7-r3c8-r3c9-r2c9-r2c8 gap 5
whispers-4: whispers r9c3-r8c3-r7c3-r7c2-r7c1-r8c1-r8c2 gap 5
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,6.5],[6.5,4.5],[4.5,2.5],[2.5,2.5]],"color":"#c0bfbfff","thickness":3.2,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[4.5,4.5],[3.5,4.5],[2.5,3.5],[2.5,5.5],[3.5,5.5],[4.5,6.5],[4.5,8.5]],"color":"#c0bfbfff","thickness":3.2,"rounded":true}}
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- German Whispers: Adjacent digits along a green line must differ by at least 5.

- Ten lines: Each grey line can be split into contiguous, non-overlapping segments that sum to exactly 10. If allowed by other rules, digits inside a segment may repeat. For example, a valid ten line could read 37424 where the segments 37 and 424 both sum to 10.
