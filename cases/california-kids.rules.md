---
format: open-rules
title: California Kids
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/lwyv2l5kdw
case: https://sudoku-sleuth.com/cases/california-kids
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 colour "white"
kropki-2: kropki r8c2-r9c2 colour "white"
kropki-3: kropki r7c5-r8c5 colour "black"
kropki-4: kropki r2c5-r2c6 colour "black"
kropki-5: kropki r3c6-r4c6 colour "black"
kropki-6: kropki r8c8-r9c8 colour "black"
kropki-7: kropki r3c8-r4c8 colour "black"
kropki-8: kropki r1c1-r1c2 colour "black"
kropki-9: kropki r4c2-r5c2 colour "black"
kropki-10: kropki r1c9-r2c9 colour "black"
whispers-1: whispers r1c1-r2c1-r3c1-r4c1-r5c1-r5c2-r5c3-r5c4-r4c4-r4c3-r4c2-r3c2-r2c2-r1c2 gap 5
whispers-2: whispers r8c5-r7c5-r6c5-r5c5-r4c5-r4c6-r5c7-r6c8-r5c8-r4c8-r4c9-r5c9-r6c9-r7c9-r8c9-r8c8-r7c7-r6c6-r7c6-r8c6 gap 4 loop true
```

**Sudoku, Whisper-5, Whisper-4, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five. In this puzzle, the line forming the L is a Whisper-5 line.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four. In this puzzle, the line forming the N is a Whisper-4 line.
- Kropki Pairs: Digits in cells separated by a black dot are in a 1:2 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
