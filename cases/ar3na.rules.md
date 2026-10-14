---
format: open-rules
title: AR3NA
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mn17sfj5cm
case: https://sudoku-sleuth.com/cases/ar3na
library: https://rules.sudoku-sleuth.com/
status: read
exported: b5ec0f45efb5caee31daeaa1e08f803d
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 white
kropki-2: kropki r3c6-r3c7 white
kropki-3: kropki r3c2-r4c2 white
kropki-4: kropki r1c3-r1c4 white
kropki-5: kropki r1c2-r2c2 white
kropki-6: kropki r3c9-r4c9 white
kropki-7: kropki r2c9-r3c9 white
kropki-8: kropki r7c9-r8c9 white
kropki-9: kropki r8c8-r9c8 black
kropki-10: kropki r1c9-r2c9 black
kropki-11: kropki r4c9-r5c9 black
kropki-12: kropki r5c5-r6c5 black
kropki-13: kropki r2c7-r2c8 black
whispers-1: whispers r3c1-r2c1-r1c2-r2c3-r3c3 gap 5
whispers-2: whispers r2c3-r2c2-r2c1 gap 5
whispers-3: whispers r3c6-r2c6-r1c6-r1c7-r1c8-r2c7-r3c8 gap 5
whispers-4: whispers r9c2-r8c2-r7c2-r8c3-r9c4-r8c4-r7c4 gap 5
whispers-5: whispers r9c7-r8c7-r7c8-r8c9-r9c9 gap 5
whispers-6: whispers r8c7-r8c8-r8c9 gap 5
whispers-7: whispers r4c5-r4c6-r5c6-r6c6-r6c5-r6c4 gap 5
whispers-8: whispers r5c5-r5c6 gap 5
```

**Standard Sudoku, German Whisper, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Adjacent digits along a line must differ by at least 5.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separted by a white dot are consecutive.
