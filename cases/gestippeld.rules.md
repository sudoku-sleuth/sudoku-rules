---
format: open-rules
title: Gestippeld
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/09j1qz73f0
case: https://sudoku-sleuth.com/cases/gestippeld
library: https://rules.sudoku-sleuth.com/
status: read
exported: 73efe164cb83aec95c863e1db1f894ed
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r4c5 black
kropki-2: kropki r4c6-r5c6 black
kropki-3: kropki r6c5-r6c6 black
kropki-4: kropki r1c9-r2c9 black
kropki-5: kropki r1c7-r2c7 black
kropki-6: kropki r8c7-r9c7 black
kropki-7: kropki r5c7-r6c7 black
kropki-8: kropki r1c6-r2c6 black
kropki-9: kropki r7c4-r8c4 black
kropki-10: kropki r8c2-r9c2 black
kropki-11: kropki r4c3-r5c3 black
kropki-12: kropki r8c9-r9c9 black
kropki-13: kropki r7c1-r7c2 black
kropki-14: kropki r3c5-r4c5 black
whispers-1: whispers r3c1-r2c2-r1c3-r1c4-r1c5-r2c4-r3c3-r4c2-r5c1-r6c1-r7c1-r6c2-r5c3-r4c4-r3c5-r2c6-r1c7-r1c8-r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1-r9c2-r9c3-r8c4-r7c5-r6c6-r5c7-r4c8-r3c9-r4c9-r5c9-r6c8-r7c7-r8c6-r9c5-r9c6-r9c7-r8c8-r7c9-r8c9-r9c9 gap 4
whispers-2: whispers r3c1-r2c1-r1c1 gap 4
```

**Sudoku, Dutch Whispers, Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Ratio Pairs: Cells separated by a black dot are in a 2:1 ratio. Not all dots are necessarily given.
