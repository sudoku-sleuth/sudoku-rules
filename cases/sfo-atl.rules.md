---
format: open-rules
title: SFO -> ATL
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/f0ynt8zrpp
case: https://sudoku-sleuth.com/cases/sfo-atl
library: https://rules.sudoku-sleuth.com/
status: read
exported: 3d0471dc11f7ed5c3d347685c3f27e92
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r3c2 black
kropki-2: kropki r2c4-r2c5 black
kropki-3: kropki r1c7-r1c8 black
kropki-4: kropki r3c8-r3c9 black
kropki-5: kropki r4c9-r5c9 black
kropki-6: kropki r6c7-r7c7 black
kropki-7: kropki r7c3-r7c4 black
kropki-8: kropki r5c2-r6c2 black
whispers-1: whispers r1c2-r1c1-r2c1-r2c2-r3c2-r3c1 gap 4
whispers-2: whispers r1c5-r1c4-r2c4-r3c4 gap 4
whispers-3: whispers r2c4-r2c5 gap 4
whispers-4: whispers r7c5-r7c6-r7c7 gap 4
whispers-5: whispers r7c6-r8c6-r9c6 gap 4
whispers-6: whispers r7c8-r8c8-r9c8-r9c9 gap 4
whispers-7: whispers r9c3-r8c3-r8c4-r9c4 gap 4
whispers-8: whispers r8c3-r7c3-r7c4-r8c4 gap 4
whispers-9: whispers r1c7-r2c7-r3c7-r3c8-r2c8-r1c8 gap 4 loop true
whispers-10: whispers r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r6c6 gap 5
whispers-11: whispers r5c7-r4c6 gap 5
```

**Sudoku, Whisper-5, Whisper-4, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five. In this puzzle, the thicker line forming the arrow is a Whisper-5 line.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four. In this puzzle, the thinner lines forming the letters are Whisper-4 lines.
- Ratio Pairs: Digits in cells separated by a black dot are in a 1:2 ratio. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
