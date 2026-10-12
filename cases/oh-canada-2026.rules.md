---
format: open-rules
title: Oh Canada 2026
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/nw6fjss15q
case: https://sudoku-sleuth.com/cases/oh-canada-2026
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=1 r2c9=7 r7c8=2 r7c9=6
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r5c3 colour "white"
kropki-2: kropki r8c5-r8c6 colour "white"
kropki-3: kropki r3c1-r3c2 colour "black"
kropki-4: kropki r5c2-r6c2 colour "black"
kropki-5: kropki r4c3-r5c3 colour "black"
kropki-6: kropki r8c4-r9c4 colour "black"
kropki-7: kropki r8c3-r8c4 colour "black"
kropki-8: kropki r8c9-r9c9 colour "black"
whispers-1: whispers r3c1-r2c1-r1c1-r1c2-r2c2-r3c2 gap 4 loop true
whispers-2: whispers r1c6-r2c6-r3c6 gap 4
whispers-3: whispers r1c4-r2c4-r3c4 gap 4
whispers-4: whispers r2c4-r2c5-r2c6 gap 4
whispers-5: whispers r4c2-r4c1-r5c1-r6c1-r6c2 gap 4
whispers-6: whispers r6c4-r5c4-r4c5-r5c6-r6c6 gap 4
whispers-7: whispers r5c6-r5c5-r5c4 gap 4
whispers-8: whispers r6c7-r5c7-r4c7-r5c8-r6c9-r5c9-r4c9 gap 4
whispers-9: whispers r9c1-r8c1-r7c2-r8c3-r9c3 gap 4
whispers-10: whispers r8c3-r8c2-r8c1 gap 4
whispers-11: whispers r9c4-r8c4-r7c4-r7c5-r8c6-r9c5 gap 4 loop true
whispers-12: whispers r9c7-r8c7-r7c8-r8c9-r9c9 gap 4
whispers-13: whispers r8c9-r8c8-r8c7 gap 4
```

**Sudoku, Whisper-4, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four. In this puzzle, the line forming the N is a Whisper-4 line.
- Kropki Pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
