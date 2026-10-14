---
format: open-rules
title: Teutonic Chivalry
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4280yypwlx
case: https://sudoku-sleuth.com/cases/teutonic-chivalry
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c6=3 r2c7=2 r4c6=6 r5c2=7 r5c9=4 r7c3=5 r7c7=9 r8c5=8
exported: 06096790ce653de8719bcc568309d27a
---

```rules
sudoku 9x9
anti-knight
whispers-1: whispers r4c3-r3c4-r4c5-r3c6-r4c7 gap 5
whispers-2: whispers r6c7-r7c6-r6c5-r7c4-r6c3 gap 5
whispers-3: whispers r6c4-r5c5-r6c6 gap 5
whispers-4: whispers r4c2-r3c3-r2c4 gap 5
whispers-5: whispers r2c6-r3c7-r4c8 gap 5
whispers-6: whispers r9c3-r8c4 gap 5
whispers-7: whispers r9c6-r8c7 gap 5
whispers-8: whispers r9c9-r8c9-r7c8 gap 5
whispers-9: whispers r9c1-r8c2-r7c2 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
