---
format: open-rules
title: One Full Year of Timotab
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/dn6be8we3h
case: https://sudoku-sleuth.com/cases/one-full-year-of-timotab
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=3 r1c7=6 r1c8=5 r4c5=8 r5c1=2 r6c1=8 r8c6=2 r9c7=5
exported: e18f9e64013977d53cd3cc385f3a2a5c
---

```rules
sudoku 9x9
kropki-1: kropki r7c3-r7c4 white
kropki-2: kropki r6c2-r7c2 white
kropki-3: kropki r4c4-r5c4 white
kropki-4: kropki r1c3-r1c4 white
kropki-5: kropki r1c4-r2c4 black
kropki-6: kropki r7c2-r7c3 black
kropki-7: kropki r5c3-r5c4 black
kropki-8: kropki r2c1-r3c1 black
kropki-9: kropki r6c5-r7c5 black
kropki-10: kropki r8c2-r9c2 black
kropki-11: kropki r6c3-r7c3 black
whispers-1: whispers r1c2-r2c2-r3c2-r4c2-r5c3 gap 4
whispers-2: whispers r3c1-r2c2-r1c3 gap 4
whispers-3: whispers r2c4-r3c4-r4c4 gap 4
whispers-4: whispers r4c6-r3c6-r2c6 gap 4
whispers-5: whispers r3c6-r2c7-r3c8-r2c9-r3c9-r4c9 gap 4
whispers-6: whispers r7c2-r8c1-r9c2-r8c3 gap 4 loop true
whispers-7: whispers r5c4-r6c4-r7c4-r8c4-r9c5 gap 4
whispers-8: whispers r7c3-r6c4-r5c5 gap 4
whispers-9: whispers r5c8-r6c8-r7c8-r8c8 gap 4
whispers-10: whispers r7c8-r6c9-r7c9-r8c8 gap 4
whispers-11: whispers r6c6-r7c5-r7c6-r6c7 gap 4 loop true
whispers-12: whispers r6c7-r7c7 gap 4
```

**Sudoku, Whisper-4 Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 Line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
