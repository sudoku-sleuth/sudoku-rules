---
format: open-rules
title: SC to NS
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zjdwgt17mo
case: https://sudoku-sleuth.com/cases/sc-to-ns
library: https://rules.sudoku-sleuth.com/
status: read
exported: 0bfc837b1c0a66026634a4788a917019
---

```rules
sudoku 9x9
kropki-1: kropki r2c5-r2c6 white
kropki-2: kropki r5c3-r5c4 white
kropki-3: kropki r3c8-r3c9 white
kropki-4: kropki r5c9-r6c9 white
kropki-5: kropki r2c7-r2c8 white
kropki-6: kropki r8c2-r8c3 black
kropki-7: kropki r6c3-r7c3 black
kropki-8: kropki r5c5-r6c5 black
kropki-9: kropki r2c4-r2c5 black
kropki-10: kropki r4c6-r5c6 black
kropki-11: kropki r6c2-r6c3 black
kropki-12: kropki r1c8-r1c9 black
kropki-13: kropki r2c2-r2c3 black
arrow r7c3-r6c4-r5c5-r4c6-r3c7 bulb ["r8c2"]
whispers-1: whispers r7c5-r7c4-r8c4-r8c5-r9c5-r9c4 gap 5
whispers-2: whispers r7c8-r7c7-r8c7-r9c7-r9c8 gap 5
whispers-3: whispers r3c3-r2c3-r1c3-r2c4-r3c5-r2c5-r1c5 gap 5
whispers-4: whispers r1c7-r1c6-r2c6-r2c7-r3c7-r3c6 gap 5
```

**Sudoku, Arrows, Whisper-5, Kropki pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
- Whisper-5: Adjacent digits along a Whisper-5 line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.


For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
