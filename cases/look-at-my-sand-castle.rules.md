---
format: open-rules
title: Look At My Sand Castle!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/vhx4nhq7tc
case: https://sudoku-sleuth.com/cases/look-at-my-sand-castle
library: https://rules.sudoku-sleuth.com/
status: read
exported: e96ba8db27631dd324eeda23e8b9b58f
---

```rules
sudoku 9x9
kropki-1: kropki r6c7-r7c7 white
kropki-2: kropki r4c7-r5c7 white
kropki-3: kropki r5c5-r5c6 black
kropki-4: kropki r3c4-r4c4 black
whispers-1: whispers r2c2-r3c1-r4c2-r3c3-r4c4-r5c3-r6c4-r5c5-r6c6-r7c5-r8c6-r7c7-r8c8-r9c7 gap 5
whispers-2: whispers r9c6-r8c5-r7c4-r6c3-r5c2-r4c1 gap 5
whispers-3: whispers r2c3-r3c4-r4c5-r5c6-r6c7-r7c8 gap 5
whispers-4: whispers r2c4-r1c5-r2c6-r3c5 gap 5
whispers-5: whispers r5c7-r4c8-r5c9-r6c8 gap 5
whispers-6: whispers r2c7-r3c8 gap 5
whispers-7: whispers r1c8-r1c9-r2c9 gap 5
whispers-8: whispers r9c1-r8c2-r7c3-r7c2 gap 5
whispers-9: whispers r8c3-r7c3 gap 5
```

**Sudoku, Whisper-5, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-5 Lines: Adjacent digits along a Whisper-5 Line differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
