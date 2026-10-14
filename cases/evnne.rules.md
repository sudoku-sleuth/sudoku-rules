---
format: open-rules
title: EVNNE
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/hnsiy1t3pp
case: https://sudoku-sleuth.com/cases/evnne
library: https://rules.sudoku-sleuth.com/
status: read
exported: dc6552ea0273ff42945bb36cec8bef54
---

```rules
sudoku 9x9
kropki-1: kropki r4c1-r5c1 white
kropki-2: kropki r5c1-r6c1 white
kropki-3: kropki r3c5-r4c5 black
kropki-4: kropki r4c5-r5c5 black
kropki-5: kropki r6c2-r7c2 black
kropki-6: kropki r6c7-r7c7 black
kropki-7: kropki r5c8-r6c8 black
kropki-8: kropki r4c4-r4c5 black
kropki-9: kropki r6c8-r6c9 black
kropki-10: kropki r2c8-r3c8 black
kropki-11: kropki r8c5-r9c5 black
kropki-12: kropki r3c6-r3c7 black
kropki-13: kropki r1c2-r1c3 black
whispers-1: whispers r2c2-r2c1 gap 5
whispers-2: whispers r1c2-r1c1-r2c1-r3c1-r3c2 gap 5
whispers-3: whispers r1c7-r2c7-r3c8-r2c9-r1c9 gap 5
whispers-4: whispers r6c4-r5c4-r4c4-r5c5-r6c6-r5c6-r4c6 gap 5
whispers-5: whispers r9c1-r8c1-r7c1-r8c2-r9c3-r8c3-r7c3 gap 5
whispers-6: whispers r7c9-r7c8-r8c8-r9c8-r9c9 gap 5
whispers-7: whispers r8c9-r8c8 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
