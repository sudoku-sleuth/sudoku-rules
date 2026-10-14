---
format: open-rules
title: Offset
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/qrlcx2xyaw
case: https://sudoku-sleuth.com/cases/offset
library: https://rules.sudoku-sleuth.com/
status: read
exported: aa2cf628c20e1d44ae0c86c3e8721c08
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r3c3 white
kropki-2: kropki r2c4-r3c4 white
kropki-3: kropki r1c6-r2c6 white
kropki-4: kropki r2c6-r3c6 white
kropki-5: kropki r4c4-r4c5 white
kropki-6: kropki r4c4-r5c4 white
kropki-7: kropki r5c6-r6c6 white
kropki-8: kropki r6c5-r6c6 white
kropki-9: kropki r7c4-r8c4 white
kropki-10: kropki r7c6-r8c6 white
kropki-11: kropki r7c7-r8c7 white
kropki-12: kropki r8c4-r9c4 white
kropki-13: kropki r2c3-r3c3 white
kropki-14: kropki r2c4-r3c4 white
kropki-15: kropki r1c6-r2c6 white
kropki-16: kropki r2c6-r3c6 white
kropki-17: kropki r4c4-r4c5 white
kropki-18: kropki r4c4-r5c4 white
kropki-19: kropki r5c6-r6c6 white
kropki-20: kropki r6c5-r6c6 white
kropki-21: kropki r7c4-r8c4 white
kropki-22: kropki r7c6-r8c6 white
kropki-23: kropki r7c7-r8c7 white
kropki-24: kropki r3c1-r4c1 black
kropki-25: kropki r5c1-r5c2 black
kropki-26: kropki r1c5-r1c6 black
kropki-27: kropki r6c3-r7c3 black
kropki-28: kropki r5c9-r6c9 black
whispers-1: whispers r6c1-r7c1-r8c1-r9c1-r9c2-r9c3-r9c4 gap 4
whispers-2: whispers r1c6-r1c7-r1c8-r1c9-r2c9-r3c9-r4c9 gap 4
whispers-3: whispers r6c6-r7c6-r7c7-r6c7 gap 4 loop true
whispers-4: whispers r6c3-r7c3-r7c4-r6c4 gap 4 loop true
whispers-5: whispers r3c6-r4c6-r4c7-r3c7 gap 4 loop true
whispers-6: whispers r3c3-r4c3-r4c4-r3c4 gap 4 loop true
whispers-7: whispers r5c4-r5c3-r5c2-r4c2-r3c2-r2c2-r2c3-r2c4-r2c5-r3c5-r4c5 gap 5
whispers-8: whispers r6c5-r7c5-r8c5-r8c6-r8c7-r8c8-r7c8-r6c8-r5c8-r5c7-r5c6 gap 5
```

**Sudoku, Whisper-4, Whisper-5, Kropki**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along an orange (thicker) Whisper-4 Line must differ by at least four. 
- Whisper-5 Lines: Adjacent digits along a green (thinner) Whisper-5 Line must differ by at least five. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. 

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
