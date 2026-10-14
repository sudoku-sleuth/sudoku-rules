---
format: open-rules
title: Zwispers
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hu2t9f5egd
case: https://sudoku-sleuth.com/cases/zwispers
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c1=1 r4c4=1 r4c5=2 r4c6=3 r5c4=4 r5c5=5 r5c6=6 r6c4=7 r6c5=8 r6c6=9
exported: 2788f5644e46fe254a44885826013010
---

```rules
sudoku 9x9
whispers-1: whispers r2c1-r1c1-r1c2-r1c3 gap 5
whispers-2: whispers r1c7-r1c8-r1c9-r2c9 gap 5
whispers-3: whispers r8c1-r9c1-r9c2-r9c3 gap 5
whispers-4: whispers r9c7-r9c8-r9c9-r8c9 gap 5
whispers-5: whispers r4c3-r3c3-r2c3-r2c4 gap 5
whispers-6: whispers r2c5-r2c6-r2c7-r3c7 gap 5
whispers-7: whispers r6c7-r7c7-r8c7-r8c6 gap 5
whispers-8: whispers r8c5-r8c4-r8c3-r7c3 gap 5
zipper-1: zipper r1c3-r1c2-r1c1-r2c1
zipper-2: zipper r1c7-r1c8-r1c9-r2c9
zipper-3: zipper r8c1-r9c1-r9c2-r9c3
zipper-4: zipper r9c7-r9c8-r9c9-r8c9
zipper-5: zipper r2c4-r2c3-r3c3-r4c3
zipper-6: zipper r7c3-r8c3-r8c4-r8c5
zipper-7: zipper r8c6-r8c7-r7c7-r6c7
zipper-8: zipper r2c5-r2c6-r2c7-r3c7
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- All lines in this puzzle are both German Whispers AND Zipper lines.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Zipper Line: Along Zipper lines, pairs of digits equidistant from the center of the line have the same sum. For example, in this puzzle r1c1 + r1c2 = r2c1 + r1c3.
