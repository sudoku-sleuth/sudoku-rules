---
format: open-rules
title: Quiet Day in Germany
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/0t21a948o7
case: https://sudoku-sleuth.com/cases/quiet-day-in-germany
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c9=4 r9c1=9 r9c9=3
exported: 300b5122baef0d524972a81b66fd3dc3
---

```rules
sudoku 9x9
anti-knight
kropki-1: kropki r8c6-r9c6 black
kropki-2: kropki r8c6-r8c7 black
kropki-3: kropki r8c4-r8c5 black
kropki-4: kropki r7c1-r8c1 black
kropki-5: kropki r3c1-r4c1 black
kropki-6: kropki r5c8-r6c8 black
kropki-7: kropki r1c4-r2c4 black
kropki-8: kropki r5c3-r6c3 black
kropki-9: kropki r7c2-r7c3 black
kropki-10: kropki r7c7-r8c7 black
kropki-11: kropki r6c2-r7c2 black
whispers-1: whispers r3c3-r4c3-r4c4-r3c4 gap 5 loop true
whispers-2: whispers r3c6-r4c6-r4c7-r3c7 gap 5 loop true
whispers-3: whispers r6c3-r7c3-r7c4-r6c4 gap 5 loop true
whispers-4: whispers r6c6-r7c6-r7c7-r6c7 gap 5 loop true
whispers-5: whispers r8c1-r8c2-r9c2 gap 5
whispers-6: whispers r9c8-r8c8-r8c9 gap 5
whispers-7: whispers r2c1-r2c2-r1c2 gap 5
whispers-8: whispers r1c8-r2c8-r2c9 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Anti-knight: Cells that are a chess knight’s move apart cannot contain the same digit.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Ratio dots: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
