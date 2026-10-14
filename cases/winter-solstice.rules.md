---
format: open-rules
title: Winter Solstice
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1l71kvkq5e
case: https://sudoku-sleuth.com/cases/winter-solstice
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r1c2=1 r5c7=1 r5c8=2 r8c5=2 r8c6=5
exported: e041cb66952de96a7861f0737ae4a9ca
---

```rules
sudoku 9x9
kropki-1: kropki r4c2-r5c2 white
kropki-2: kropki r3c5-r4c5 white
kropki-3: kropki r6c7-r6c8 white
kropki-4: kropki r6c5-r7c5 white
kropki-5: kropki r6c2-r7c2 white
kropki-6: kropki r6c8-r7c8 white
kropki-7: kropki r2c7-r2c8 white
kropki-8: kropki r9c4-r9c5 white
kropki-9: kropki r8c5-r9c5 white
kropki-10: kropki r4c6-r5c6 white
kropki-11: kropki r7c8-r8c8 white
kropki-12: kropki r7c4-r7c5 white
whispers-1: whispers r1c8-r1c7-r2c6-r3c6-r4c7-r4c8-r3c9-r2c9 gap 5 loop true
whispers-2: whispers r9c3-r8c3-r7c3-r6c4 gap 4
whispers-3: whispers r7c3-r6c3 gap 4
whispers-4: whispers r7c3-r6c2 gap 4
whispers-5: whispers r6c2-r5c2 gap 4
whispers-6: whispers r6c2-r5c1 gap 4
whispers-7: whispers r6c4-r5c4 gap 4
whispers-8: whispers r6c4-r5c5 gap 4
whispers-9: whispers r6c3-r5c3 gap 4
whispers-10: whispers r5c3-r4c2 gap 4
whispers-11: whispers r5c3-r4c4 gap 4
whispers-12: whispers r4c2-r3c1 gap 4
whispers-13: whispers r4c2-r3c2 gap 4
whispers-14: whispers r4c2-r3c3 gap 4
whispers-15: whispers r4c4-r3c4 gap 4
whispers-16: whispers r4c4-r3c5 gap 4
whispers-17: whispers r5c5-r4c5 gap 4
whispers-18: whispers r5c5-r4c6 gap 4
```

**Sudoku, Whisper-4, Whisper-5, Consecutive pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 line must differ by at least four.
- Whisper-5 Lines: Adjacent digits along a Whisper-5 line must differ by at least five.
- Consecutive pairs: Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
