---
format: open-rules
title: Boxing Day
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cunj71qn0a
case: https://sudoku-sleuth.com/cases/boxing-day
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r6c2 colour "black"
kropki-2: kropki r5c8-r6c8 colour "black"
kropki-3: kropki r9c7-r9c8 colour "black"
kropki-4: kropki r2c5-r2c6 colour "black"
kropki-5: kropki r8c4-r8c5 colour "black"
kropki-6: kropki r5c5-r5c6 colour "black"
kropki-7: kropki r3c1-r3c2 colour "black"
kropki-8: kropki r3c1-r4c1 colour "black"
kropki-9: kropki r7c2-r7c3 colour "black"
kropki-10: kropki r4c9-r5c9 colour "black"
whispers-1: whispers r3c2-r4c2-r5c2-r5c3-r5c4-r4c4-r3c4-r3c3 gap 5 loop true
whispers-2: whispers r3c2-r2c3-r2c4-r2c5-r3c5-r4c5-r5c4 gap 5
whispers-3: whispers r2c5-r3c4 gap 5
whispers-4: whispers r7c5-r8c5-r9c5-r9c6-r9c7-r8c7-r7c7-r7c6 gap 5 loop true
whispers-5: whispers r7c5-r6c6-r6c7-r6c8-r7c8-r8c8 gap 5
whispers-6: whispers r8c8-r9c7 gap 5
whispers-7: whispers r7c7-r6c8 gap 5
```

**Standard Sudoku, German Whisper, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least 5.
- Ratio Pairs: Digits separated by a black dot are in a 1:2 ratio.
