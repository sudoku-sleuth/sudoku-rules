---
format: open-rules
title: Hollandaise Man O' War
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/i7028wj0ct
case: https://sudoku-sleuth.com/cases/hollandaise-man-o-war
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=5 r3c9=8 r4c4=6 r4c8=5 r5c5=9 r6c1=7 r8c2=2
---

```rules
sudoku 9x9
whispers-1: whispers r3c1-r2c2-r1c3 gap 4
whispers-2: whispers r5c1-r4c2-r3c3-r2c4-r1c5 gap 4
whispers-3: whispers r7c1-r6c2-r5c3-r4c4-r3c5-r2c6-r1c7 gap 4
whispers-4: whispers r2c8-r3c9 gap 4
whispers-5: whispers r3c7-r4c8-r5c9 gap 4
whispers-6: whispers r4c6-r5c7-r6c8-r7c9 gap 4
whispers-7: whispers r5c5-r6c6-r7c7-r8c8-r9c9 gap 4
whispers-8: whispers r6c4-r7c5-r8c6-r9c7 gap 4
whispers-9: whispers r7c3-r8c4-r9c5 gap 4
whispers-10: whispers r8c2-r9c3 gap 4
whispers-11: whispers r6c4-r5c5-r4c6 gap 4
whispers-12: whispers r8c2-r7c3-r6c4 gap 4
whispers-13: whispers r4c6-r3c7-r2c8 gap 4
whispers-14: whispers r3c1-r4c1-r5c1-r6c1-r7c1 gap 4
whispers-15: whispers r1c3-r1c4-r1c5-r1c6-r1c7 gap 4
```

**Standard Sudoku, Dutch Whispers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.

For more puzzles by us, visit https://missingdeck.net
