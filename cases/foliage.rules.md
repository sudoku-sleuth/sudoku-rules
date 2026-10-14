---
format: open-rules
title: Foliage
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/lhcfy8ug9v
case: https://sudoku-sleuth.com/cases/foliage
library: https://rules.sudoku-sleuth.com/
status: read
exported: 465a483f5d3620a333cd0dbcc671fae1
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r3c7 white
kropki-2: kropki r3c8-r4c8 white
kropki-3: kropki r3c5-r4c5 white
kropki-4: kropki r3c1-r4c1 white
kropki-5: kropki r6c3-r7c3 white
kropki-6: kropki r5c6-r5c7 white
kropki-7: kropki r8c3-r8c4 white
kropki-8: kropki r9c6-r9c7 white
kropki-9: kropki r6c5-r7c5 white
kropki-10: kropki r3c2-r3c3 black
kropki-11: kropki r7c7-r8c7 black
kropki-12: kropki r4c4-r4c5 black
kropki-13: kropki r6c9-r7c9 black
whispers-1: whispers r3c1-r2c1-r1c2-r1c3-r2c3-r3c2 gap 5 loop true
whispers-2: whispers r3c5-r2c4-r1c4-r1c5-r2c6-r3c6 gap 5 loop true
whispers-3: whispers r3c7-r2c7-r1c8-r1c9-r2c9-r3c8 gap 5 loop true
whispers-4: whispers r4c1-r5c1-r6c2-r6c3-r5c3-r4c2 gap 5 loop true
whispers-5: whispers r4c5-r5c4-r6c4-r6c5-r5c6-r4c6 gap 5 loop true
whispers-6: whispers r4c7-r5c7-r6c8-r6c9-r5c9-r4c8 gap 5 loop true
whispers-7: whispers r9c1-r8c1-r7c2-r7c3-r8c3-r9c2 gap 5 loop true
whispers-8: whispers r9c5-r8c4-r7c4-r7c5-r8c6-r9c6 gap 5 loop true
whispers-9: whispers r9c7-r8c7-r7c8-r7c9-r8c9-r9c8 gap 5 loop true
```

**Sudoku, Whisper-5, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
