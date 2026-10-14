---
format: open-rules
title: Happy 25th Anniversary, Timotab!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/81ogb1xdna
case: https://sudoku-sleuth.com/cases/happy-25th-anniversary-timotab
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c3=1 r3c4=2 r6c2=2 r6c3=5 r6c8=1 r7c9=3
exported: 210f223daf796cb021c4351af6771bd0
---

```rules
sudoku 9x9
kropki-1: kropki r3c1-r4c1 black
kropki-2: kropki r4c4-r4c5 black
kropki-3: kropki r3c7-r4c7 black
kropki-4: kropki r1c1-r1c2 black
kropki-5: kropki r1c8-r1c9 white
kropki-6: kropki r5c9-r6c9 white
kropki-7: kropki r4c8-r5c8 white
kropki-8: kropki r5c8-r5c9 white
kropki-9: kropki r5c4-r6c4 white
arrow r4c4-r5c5-r6c6-r7c7 bulb ["r3c3"]
whispers-1: whispers r1c1-r2c1-r3c1-r3c2-r2c3-r3c3 gap 4
whispers-2: whispers r2c3-r1c3 gap 4
whispers-3: whispers r1c4-r2c4-r3c4 gap 4
whispers-4: whispers r2c4-r2c5-r3c6 gap 4
whispers-5: whispers r2c5-r1c6 gap 4
whispers-6: whispers r7c4-r8c4-r9c4-r9c5-r8c6-r9c6 gap 4
whispers-7: whispers r8c6-r7c6 gap 4
whispers-8: whispers r7c9-r7c8-r7c7-r8c7-r8c8-r8c9-r9c9-r9c8-r9c7 gap 4
```

**Sudoku, whisper-4, kropki pairs, Arrows**
- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- Whisper-4: Adjacent digits along a Whisper-4 line must differ by at least four.
- Arrows: Digits along an arrow must sum to the number indicated in the circle from which the arrow emerges. Digits may repeat along arrows if allowed by other rules.
