---
format: open-rules
title: Asterion
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/asterion
case: https://sudoku-sleuth.com/cases/asterion
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c1-r5c2 colour "black"
kropki-2: kropki r3c8-r4c8 colour "black"
kropki-3: kropki r7c4-r7c5 colour "black"
kropki-4: kropki r7c9-r8c9 colour "black"
kropki-5: kropki r1c1-r1c2 colour "black"
whispers-1: whispers r2c2-r2c3-r1c3-r1c2-r1c1-r2c1-r3c1-r3c2-r3c3 gap 4
whispers-2: whispers r3c3-r3c4-r3c5-r3c6-r4c6-r5c6-r5c5-r4c5-r4c4-r5c4-r6c4-r6c5-r6c6-r6c7-r7c7-r7c8-r7c9-r8c9-r9c9-r9c8-r9c7-r8c7-r8c8 gap 4
whispers-3: whispers r7c3-r7c2-r7c1 gap 4
whispers-4: whispers r7c1-r8c1 gap 4
whispers-5: whispers r8c1-r8c2 gap 4
whispers-6: whispers r8c2-r9c2 gap 4
whispers-7: whispers r9c2-r9c3 gap 4
whispers-8: whispers r1c7-r1c8-r2c8-r2c9-r3c9-r3c8-r3c7-r4c7 gap 4
whispers-9: whispers r4c8-r4c7 gap 4
whispers-10: whispers r9c4-r9c3 gap 4
whispers-11: whispers r1c6-r1c7 gap 4
whispers-12: whispers r9c5-r9c4 gap 4
whispers-13: whispers r1c5-r1c6 gap 4
whispers-14: whispers r2c5-r1c5 gap 4
whispers-15: whispers r9c6-r9c5 gap 4
whispers-16: whispers r8c6-r9c6 gap 4
whispers-17: whispers r9c6-r9c7 gap 4
whispers-18: whispers r3c6-r3c7 gap 4
whispers-19: whispers r6c2-r6c3-r7c3 gap 4
whispers-20: whispers r4c4-r4c3 gap 4
whispers-21: whispers r7c5-r6c5 gap 4
whispers-22: whispers r7c6-r7c5 gap 4
whispers-23: whispers r6c1-r7c1 gap 4
whispers-24: whispers r5c1-r6c1 gap 4
whispers-25: whispers r5c2-r5c1 gap 4
whispers-26: whispers r4c1-r5c1 gap 4
whispers-27: whispers r5c8-r4c8 gap 4
whispers-28: whispers r5c9-r5c8 gap 4
whispers-29: whispers r4c9-r5c9 gap 4
whispers-30: whispers r5c7-r6c7 gap 4
whispers-31: whispers r2c6-r3c6 gap 4
whispers-32: whispers r1c6-r2c6 gap 4
whispers-33: whispers r5c3-r5c4 gap 4
whispers-34: whispers r4c3-r5c3 gap 4
whispers-35: whispers r7c3-r7c4-r8c4 gap 4
whispers-36: whispers r8c5-r8c4 gap 4
whispers-37: whispers r8c3-r8c2 gap 4
```

**Sudoku, Whisper-4, Ratio Pair**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 line must differ by at least four.
- Ratio pair: Digits in cells separated by a black dot are in a 2:1 ratio. 

For more puzzles like this, please visit https://missingdeck.net or subscribe to our weekly puzzle digest at https://missingdeck.net/mailing
