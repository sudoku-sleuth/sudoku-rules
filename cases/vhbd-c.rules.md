---
format: open-rules
title: VHBD, C
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/bkgt70h452
case: https://sudoku-sleuth.com/cases/vhbd-c
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r8c1-r9c1 total 13 connected true
cage-2: cage r1c9-r2c9 total 8 connected true
cage-3: cage r1c1-r2c1 total 8 connected true
cage-4: cage r8c9-r9c9 total 6 connected true
kropki-1: kropki r1c8-r1c9 colour "white"
kropki-2: kropki r6c8-r6c9 colour "white"
kropki-3: kropki r7c1-r7c2 colour "white"
kropki-4: kropki r6c2-r7c2 colour "white"
kropki-5: kropki r2c1-r2c2 colour "white"
kropki-6: kropki r9c7-r9c8 colour "white"
kropki-7: kropki r8c5-r8c6 colour "white"
kropki-8: kropki r7c4-r7c5 colour "white"
kropki-9: kropki r3c6-r3c7 colour "white"
kropki-10: kropki r7c1-r8c1 colour "white"
kropki-11: kropki r8c4-r8c5 colour "white"
kropki-12: kropki r6c4-r7c4 colour "white"
kropki-13: kropki r1c2-r1c3 colour "black"
kropki-14: kropki r2c5-r2c6 colour "black"
kropki-15: kropki r3c8-r3c9 colour "black"
kropki-16: kropki r6c2-r6c3 colour "black"
kropki-17: kropki r5c4-r5c5 colour "black"
kropki-18: kropki r7c5-r8c5 colour "black"
kropki-19: kropki r3c6-r4c6 colour "black"
kropki-20: kropki r5c1-r5c2 colour "black"
kropki-21: kropki r3c9-r4c9 colour "black"
kropki-22: kropki r2c8-r2c9 colour "black"
whispers-1: whispers r1c3-r1c2-r1c1-r2c1-r3c1-r3c2-r3c3 gap 4
whispers-2: whispers r1c6-r1c5-r1c4-r2c4-r3c4-r3c5-r3c6 gap 4
whispers-3: whispers r2c5-r2c4 gap 4
whispers-4: whispers r1c7-r2c7-r3c7-r2c8-r3c9-r2c9-r1c9 gap 4
whispers-5: whispers r4c3-r4c2-r4c1-r5c1-r6c1-r6c2-r6c3 gap 4
whispers-6: whispers r4c4-r5c4-r6c5-r5c6-r4c6 gap 4
whispers-7: whispers r4c7-r5c7-r6c7 gap 4
whispers-8: whispers r5c9-r5c8-r5c7 gap 4
whispers-9: whispers r4c9-r5c9-r6c9 gap 4
whispers-10: whispers r7c2-r8c2-r9c2-r9c3-r9c4-r8c3-r7c4-r7c3 gap 4
whispers-11: whispers r7c6-r8c6-r9c6-r9c7-r8c8-r7c7 gap 4
```

**Sudoku, Whisper-4, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
