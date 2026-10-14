---
format: open-rules
title: A Phistful of Circles
setter: Marty Sears
source: https://sudokupad.app/qg411d1jf2
case: https://sudoku-sleuth.com/cases/a-phistful-of-circles
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 628be38338077653f093fdf6f7946f1b
---

```rules
sudoku 9x9
whispers-1: whispers r1c2-r1c1-r2c1 gap 5
parity-1: parity r1c5-r2c5
whispers-2: whispers r1c6-r2c7 gap 5
parity-2: parity r3c8-r4c9
whispers-3: whispers r4c2-r5c2 gap 5
whispers-4: whispers r4c3-r5c3-r6c3 gap 5
parity-3: parity r5c6-r4c5-r5c4-r6c5 loop true
whispers-5: whispers r5c8-r5c9 gap 5
parity-4: parity r6c1-r7c2-r8c3-r9c4
whispers-6: whispers r6c9-r7c8-r8c7-r9c6 gap 5
parity-5: parity r7c4-r7c5-r7c6
parity-6: parity r8c1-r8c2-r9c2
parity-7: parity r8c1-r9c1-r9c2
counting-circles r1c1-r1c2-r1c8-r1c9-r2c1-r2c2-r2c9-r3c3-r3c4-r3c5-r3c6-r4c3-r4c7-r5c3-r5c7-r6c3-r6c7-r7c3-r7c4-r7c5-r7c6-r7c7-r8c1-r8c2-r8c8-r8c9-r9c1-r9c2-r9c8-r9c9
```

```drawing
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0.5,3.5],[1.5,2.5],[2.5,1.5],[3.5,0.5]],"color":"#D89FFF","thickness":11,"rounded":true}}
- {"id":"drawing-36","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,5.5]],"color":"#D89FFF","thickness":11,"rounded":true}}
- {"id":"drawing-41","rules":[],"visual":{"kind":"line","points":[[3.5,6.5],[5.5,6.5]],"color":"#D89FFF","thickness":11,"rounded":true}}
- {"id":"drawing-48","rules":[],"visual":{"kind":"line","points":[[7.5,4.5],[7.5,5.5]],"color":"#D89FFF","thickness":11,"rounded":true}}
- {"id":"drawing-49","rules":[],"visual":{"kind":"line","points":[[7.5,8.5],[8.5,8.5],[8.5,7.5]],"color":"#D89FFF","thickness":11,"rounded":true}}
```

• Normal Sudoku Rules Apply.
• A circled digit indicates exactly how many circles contain that digit.
• Digits along a purple line do not repeat and form a consecutive sequence, but can be arranged in any order.
• Adjacent digits along a green line must have a difference of at least 5.
• Digits along a red line must alternate between odd and even.
