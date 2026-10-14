---
format: open-rules
title: Whispering Winds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/h7lg3um713
case: https://sudoku-sleuth.com/cases/whispering-winds
library: https://rules.sudoku-sleuth.com/
status: read
exported: f50bbf6e758917344893e57d7307d9cc
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r7c2 white
kropki-2: kropki r6c8-r7c8 white
kropki-3: kropki r8c8-r9c8 white
kropki-4: kropki r8c1-r9c1 white
kropki-5: kropki r4c5-r5c5 white
kropki-6: kropki r3c1-r4c1 white
kropki-7: kropki r2c3-r3c3 white
kropki-8: kropki r1c9-r2c9 white
kropki-9: kropki r3c2-r4c2 black
kropki-10: kropki r3c8-r4c8 black
kropki-11: kropki r1c3-r2c3 black
kropki-12: kropki r7c9-r8c9 black
kropki-13: kropki r6c3-r6c4 black
kropki-14: kropki r7c1-r8c1 black
kropki-15: kropki r5c1-r6c1 black
kropki-16: kropki r2c7-r3c7 black
kropki-17: kropki r7c5-r8c5 black
kropki-18: kropki r6c5-r7c5 black
kropki-19: kropki r5c5-r6c5 black
kropki-20: kropki r4c8-r5c8 black
kropki-21: kropki r5c8-r6c8 black
whispers-1: whispers r3c2-r2c1-r1c2-r1c3-r1c4-r2c5-r1c6-r1c7-r1c8-r2c9-r3c8 gap 5
whispers-2: whispers r7c2-r8c1-r9c2-r9c3-r9c4-r8c5-r9c6-r9c7-r9c8-r8c9-r7c8 gap 5
whispers-3: whispers r4c2-r5c3-r6c4-r5c5-r6c6-r5c7-r4c8 gap 5
whispers-4: whispers r5c1-r6c2-r7c3 gap 5
whispers-5: whispers r7c7-r6c8-r5c9 gap 5
```

**Sudoku, Whisper-5, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
