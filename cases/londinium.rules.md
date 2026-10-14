---
format: open-rules
title: Londinium
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0kbuhu6xxv
case: https://sudoku-sleuth.com/cases/londinium
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9339869ed2b8062e005f712979b4f24e
---

```rules
sudoku 9x9
kropki-1: kropki r3c6-r3c7 white
kropki-2: kropki r3c9-r4c9 white
kropki-3: kropki r5c5-r6c5 white
kropki-4: kropki r4c2-r4c3 white
kropki-5: kropki r2c4-r3c4 black
kropki-6: kropki r2c1-r3c1 black
kropki-7: kropki r6c4-r7c4 black
kropki-8: kropki r7c5-r8c5 black
kropki-9: kropki r4c6-r5c6 black
kropki-10: kropki r6c2-r7c2 black
kropki-11: kropki r2c8-r3c8 black
kropki-12: kropki r4c4-r4c5 black
kropki-13: kropki r4c3-r4c4 black
kropki-14: kropki r7c3-r7c4 black
kropki-15: kropki r2c3-r3c3 black
kropki-16: kropki r7c3-r8c3 black
whispers-1: whispers r1c1-r2c1-r3c1-r3c2 gap 4
whispers-2: whispers r2c4-r3c4-r3c5-r2c5-r1c5-r1c4 gap 4 loop true
whispers-3: whispers r3c7-r2c7-r1c7-r2c8-r3c9-r2c9-r1c9 gap 4
whispers-4: whispers r4c1-r5c1-r6c1-r6c2-r5c3-r4c2 gap 4 loop true
whispers-5: whispers r6c4-r5c4-r4c4 gap 4
whispers-6: whispers r6c6-r5c6-r4c6-r5c7-r6c8-r5c8-r4c8 gap 4
whispers-7: whispers r7c2-r8c2-r9c2 gap 4
whispers-8: whispers r7c4-r8c4-r9c4-r9c5-r8c5-r7c5 gap 4
whispers-9: whispers r9c7-r8c7-r7c7-r8c8-r7c9-r8c9-r9c9 gap 4
```

**Sudoku, Whisper-4, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Kropki Pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
