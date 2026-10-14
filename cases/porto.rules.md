---
format: open-rules
title: Porto
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/gqhjz85b3r
case: https://sudoku-sleuth.com/cases/porto
library: https://rules.sudoku-sleuth.com/
status: read
exported: 567d811e444bc468c9d273faeec9c34d
---

```rules
sudoku 9x9
kropki-1: kropki r7c9-r8c9 white
kropki-2: kropki r8c9-r9c9 white
kropki-3: kropki r8c7-r9c7 white
kropki-4: kropki r9c3-r9c4 white
kropki-5: kropki r4c1-r5c1 black
kropki-6: kropki r7c2-r8c2 black
kropki-7: kropki r5c8-r6c8 black
kropki-8: kropki r2c6-r2c7 black
kropki-9: kropki r4c4-r4c5 black
whispers-1: whispers r4c7-r5c7-r6c7-r6c8-r6c9-r5c9-r4c9 gap 5
whispers-2: whispers r6c8-r7c8-r8c8-r9c8-r9c7 gap 5
whispers-3: whispers r9c9-r9c8 gap 5
whispers-4: whispers r3c1-r2c1-r1c1-r1c2-r2c2 gap 4
whispers-5: whispers r2c2-r2c1 gap 4
whispers-6: whispers r1c6-r1c5-r2c5-r2c6 gap 4 loop true
whispers-7: whispers r2c7-r1c7-r1c8 gap 4
whispers-8: whispers r7c6-r7c7-r8c7-r8c6 gap 4 loop true
whispers-9: whispers r6c3-r7c3-r8c3-r8c4 gap 4
whispers-10: whispers r7c4-r7c3 gap 4
modular r1c3-r2c3-r3c3-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2-r9c3-r9c4-r9c5-r8c5-r7c5-r6c5-r5c5-r4c5-r3c4-r2c4-r1c4
```

**Sudoku, Modular Lines, Dutch Whispers, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
