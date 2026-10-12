---
format: open-rules
title: "SudokuCon: Manchester/Ottawa"
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/genlg75o7j
case: https://sudoku-sleuth.com/cases/sudokucon-manchester-ottawa
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r9c5-r9c6 colour "white"
kropki-2: kropki r9c4-r9c5 colour "white"
kropki-3: kropki r2c7-r3c7 colour "white"
kropki-4: kropki r6c9-r7c9 colour "white"
kropki-5: kropki r8c3-r9c3 colour "white"
kropki-6: kropki r7c3-r8c3 colour "white"
kropki-7: kropki r1c5-r1c6 colour "white"
kropki-8: kropki r3c4-r4c4 colour "white"
kropki-9: kropki r6c2-r6c3 colour "white"
kropki-10: kropki r5c2-r6c2 colour "white"
kropki-11: kropki r2c2-r2c3 colour "black"
kropki-12: kropki r8c8-r8c9 colour "black"
kropki-13: kropki r8c6-r8c7 colour "black"
kropki-14: kropki r9c2-r9c3 colour "black"
kropki-15: kropki r2c1-r3c1 colour "black"
kropki-16: kropki r3c7-r4c7 colour "black"
kropki-17: kropki r4c5-r4c6 colour "black"
kropki-18: kropki r4c9-r5c9 colour "black"
kropki-19: kropki r7c7-r8c7 colour "black"
kropki-20: kropki r7c4-r7c5 colour "black"
kropki-21: kropki r1c6-r1c7 colour "black"
kropki-22: kropki r5c4-r6c4 colour "black"
whispers-1: whispers r2c1-r1c1-r1c2-r1c3-r2c3 gap 5
whispers-2: whispers r2c2-r1c2 gap 5
whispers-3: whispers r2c5-r2c4-r3c4-r3c5 gap 5
whispers-4: whispers r3c8-r2c8-r2c9 gap 5
whispers-5: whispers r7c1-r8c1-r8c2 gap 5
whispers-6: whispers r7c2-r8c2-r9c2-r9c1 gap 5
whispers-7: whispers r7c6-r7c5-r8c5-r8c6 gap 5 loop true
whispers-8: whispers r8c7-r9c7-r9c8-r9c9-r8c9 gap 5
whispers-9: whispers r8c8-r9c8 gap 5
whispers-10: whispers r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r4c7 gap 5
whispers-11: whispers r6c7-r5c8 gap 5
```

**Sudoku, Whisper-5 Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
