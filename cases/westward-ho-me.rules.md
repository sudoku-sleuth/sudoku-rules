---
format: open-rules
title: Westward Ho(me)
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/p00jhgc1un
case: https://sudoku-sleuth.com/cases/westward-ho-me
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=6 r2c3=8 r8c1=2 r9c1=6
exported: fb8a829d05a08829a4912d3106d7b6d9
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r7c4 white
kropki-2: kropki r3c4-r4c4 white
kropki-3: kropki r4c4-r4c5 white
kropki-4: kropki r7c8-r7c9 white
whispers-1: whispers r8c5-r8c4-r7c3-r6c2-r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7 gap 5
whispers-2: whispers r5c1-r4c2-r3c3-r2c4-r2c5 gap 5
whispers-3: whispers r4c5-r4c6-r4c7-r4c8-r4c9 gap 5
whispers-4: whispers r4c6-r3c7-r3c8 gap 5
whispers-5: whispers r6c5-r6c6-r6c7-r6c8-r6c9 gap 5
whispers-6: whispers r6c6-r7c7-r7c8 gap 5
whispers-7: whispers r9c6-r9c7-r9c8-r9c9 gap 5
whispers-8: whispers r1c6-r1c7-r1c8-r1c9 gap 5
```

**Sudoku, Whisper-5, Consecutive Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Consecutive Dots: Digits in cells separated by a white dot are consecutive.
