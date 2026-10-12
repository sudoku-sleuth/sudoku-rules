---
format: open-rules
title: BTS
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/i1j15emi37
case: https://sudoku-sleuth.com/cases/bts
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r9c2-r9c3 colour "white"
kropki-2: kropki r2c3-r3c3 colour "black"
kropki-3: kropki r5c6-r6c6 colour "black"
kropki-4: kropki r8c7-r9c7 colour "black"
kropki-5: kropki r1c5-r1c6 colour "black"
kropki-6: kropki r8c1-r9c1 colour "black"
kropki-7: kropki r5c3-r6c3 colour "black"
kropki-8: kropki r4c1-r5c1 colour "black"
kropki-9: kropki r1c9-r2c9 colour "black"
kropki-10: kropki r9c5-r9c6 colour "black"
kropki-11: kropki r6c6-r7c6 colour "black"
kropki-12: kropki r4c7-r4c8 colour "black"
whispers-1: whispers r7c9-r7c8-r8c8-r8c9-r9c9-r9c8 gap 5
whispers-2: whispers r1c3-r1c2-r1c1-r2c1-r3c1-r3c2-r3c3 gap 5
whispers-3: whispers r6c5-r5c5-r4c5 gap 5
whispers-4: whispers r4c4-r4c5-r4c6 gap 5
renban r1c3-r2c2-r3c3
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Usually shown as green lines, adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive
- Renban line: Usually shown as purple lines, digits along a Renban line must form a set of non-repeating consecutive digits in any order.
