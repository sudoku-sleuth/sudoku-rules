---
format: open-rules
title: Boxed About
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9cdkd26m7e
case: https://sudoku-sleuth.com/cases/boxed-about
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4f549712443278d74d2e1e390f3f150b
---

```rules
sudoku 9x9
kropki-1: kropki r2c4-r2c5 white
kropki-2: kropki r2c5-r2c6 white
kropki-3: kropki r8c5-r9c5 white
kropki-4: kropki r1c6-r2c6 white
kropki-5: kropki r1c4-r2c4 white
kropki-6: kropki r1c4-r1c5 white
kropki-7: kropki r6c9-r7c9 white
kropki-8: kropki r5c1-r5c2 white
kropki-9: kropki r2c3-r2c4 black
kropki-10: kropki r2c6-r2c7 black
kropki-11: kropki r7c5-r8c5 black
kropki-12: kropki r4c2-r5c2 black
kropki-13: kropki r5c8-r6c8 black
kropki-14: kropki r4c1-r5c1 black
whispers-1: whispers r3c3-r3c4-r3c5-r3c6-r3c7-r4c7-r5c7-r6c7-r7c7-r7c6-r7c5-r7c4-r7c3-r6c3-r5c3-r4c3 gap 5 loop true
whispers-2: whispers r2c3-r2c2-r3c2 gap 5
whispers-3: whispers r2c7-r2c8-r3c8 gap 5
whispers-4: whispers r7c8-r8c8-r8c7 gap 5
whispers-5: whispers r7c2-r8c2-r8c3 gap 5
whispers-6: whispers r8c2-r9c1 gap 5
whispers-7: whispers r2c2-r1c1 gap 5
whispers-8: whispers r2c8-r1c9 gap 5
whispers-9: whispers r9c9-r8c8 gap 5
```

**Sudoku, Whisper-5 Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
