---
format: open-rules
title: Whisper 8
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ubj0nxypf1
case: https://sudoku-sleuth.com/cases/whisper-8
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=8
exported: 255be4f7f399b30a93ed34af73ce6161
---

```rules
sudoku 9x9
whispers-1: whispers r4c1-r4c2-r3c2-r3c3-r2c3-r2c4-r1c4 gap 5
whispers-2: whispers r1c6-r2c6-r2c7-r3c7-r3c8-r4c8-r4c9 gap 5
whispers-3: whispers r3c1-r2c1-r1c1-r1c2-r1c3 gap 5
whispers-4: whispers r1c7-r1c8-r2c8-r2c9-r3c9 gap 5
whispers-5: whispers r3c4-r4c3-r5c3-r6c3 gap 5
whispers-6: whispers r3c6-r4c7-r5c7-r6c7 gap 5
whispers-7: whispers r8c4-r8c3-r9c3-r9c4 gap 5
whispers-8: whispers r7c6-r7c7-r8c7-r8c8-r9c8 gap 5
whispers-9: whispers r6c2-r6c1-r7c1-r7c2-r8c2-r9c2 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Usually shown as green lines, adjacent digits along a German Whispers line must differ by at least five.
