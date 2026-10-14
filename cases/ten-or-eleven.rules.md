---
format: open-rules
title: Ten or Eleven
setter: Marty Sears
source: https://sudokupad.app/8x0f0me5v5
case: https://sudoku-sleuth.com/cases/ten-or-eleven
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 11d22cec2b5a0dbeb4bfce60d418aa0b
---

```rules
sudoku 9x9
entropic r5c2-r4c2-r5c3
whispers r8c6-r9c7 gap 5
parity r9c4-r9c5
renban r2c4-r1c4-r2c5
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"line","points":[[0.5,0.5],[1.5,0.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,6.5],[0.5,7.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[2.5,8.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[1.5,7.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[2.5,0.5],[3.5,0.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[2.5,6.5],[2.5,7.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"line","points":[[3.5,4.5],[3.5,3.5],[5.5,3.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[3.5,5.5],[5.5,5.5],[5.5,4.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"line","points":[[4.5,0.5],[5.5,0.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[6.5,0.5],[6.5,8.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[7.5,0.5],[8.5,0.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"line","points":[[7.5,3.5],[8.5,2.5]],"color":"#D8D8D8","thickness":11,"rounded":true}}
```

Normal Sudoku rules apply.

The green line is a German Whisper; its digits must have a difference of at least 5.

The red line is a parity line; it must contain one even digit and one odd digit.

The purple line is a renban; it must contain three consecutive digits (but they can be arranged in any order).

The yellow line is entropic; it must contain one low digit (1, 2 or 3), one medium digit (4, 5 or 6) and one high digit (7, 8 or 9), in any order.

Adjacent digits on ANY line must sum to 10 or 11.
