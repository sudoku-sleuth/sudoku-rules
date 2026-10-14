---
format: open-rules
title: Rollkuchen
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xpgdid3j3p
case: https://sudoku-sleuth.com/cases/rollkuchen
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c9=9 r5c5=3 r9c1=1
exported: 560f1be97d9934ad005af98847b4b3b7
---

```rules
sudoku 9x9
kropki-1: kropki r5c2-r6c2 white
kropki-2: kropki r5c8-r6c8 white
kropki-3: kropki r3c3-r4c3 white
kropki-4: kropki r3c7-r4c7 white
kropki-5: kropki r7c5-r8c5 white
kropki-6: kropki r5c4-r6c4 white
kropki-7: kropki r1c5-r2c5 black
whispers-1: whispers r4c1-r3c1-r2c2-r1c3-r1c4 gap 5
whispers-2: whispers r1c6-r1c7-r2c8-r3c9-r4c9 gap 5
whispers-3: whispers r5c2-r4c2-r3c3-r2c4-r2c5-r2c6-r3c7-r4c8-r5c8 gap 5
whispers-4: whispers r4c3-r5c3-r6c4-r6c5-r6c6-r5c7-r4c7 gap 5
whispers-5: whispers r6c2-r7c2-r8c3-r8c4-r8c5-r8c6-r8c7-r7c8-r6c8 gap 5
whispers-6: whispers r8c1-r9c2 gap 5
whispers-7: whispers r9c8-r8c9 gap 5
whispers-8: whispers r9c4-r9c5-r9c6 gap 5
whispers-9: whispers r5c4-r4c5-r5c6 gap 5
```

**Sudoku, Whisper-5 Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
