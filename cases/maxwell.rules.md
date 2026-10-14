---
format: open-rules
title: Maxwell
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/47ifqcq50a
case: https://sudoku-sleuth.com/cases/maxwell
library: https://rules.sudoku-sleuth.com/
status: read
exported: 55f5b4f681379a277d831ef59798b8e2
---

```rules
sudoku 9x9
kropki-1: kropki r6c2-r6c3 white
kropki-2: kropki r5c6-r6c6 white
kropki-3: kropki r1c8-r2c8 white
kropki-4: kropki r2c3-r2c4 black
kropki-5: kropki r1c1-r2c1 black
kropki-6: kropki r7c7-r8c7 black
kropki-7: kropki r9c2-r9c3 black
kropki-8: kropki r7c1-r8c1 black
kropki-9: kropki r4c9-r5c9 black
whispers-1: whispers r8c1-r7c2-r6c3-r5c4-r4c5-r3c6-r2c5-r2c4-r1c5-r1c6-r1c7-r2c8-r3c8-r4c9-r5c8-r4c7-r5c6-r6c5-r7c4-r8c3-r9c2 gap 5
whispers-2: whispers r3c1-r2c1-r1c1-r2c2-r1c3-r2c3-r3c3 gap 4
whispers-3: whispers r7c7-r8c7-r9c7-r8c8-r9c9-r8c9-r7c9 gap 4
```

**Sudoku, German Whispers, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net
