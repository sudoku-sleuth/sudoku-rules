---
format: open-rules
title: Ceiling Fan
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/9e4fvxve2e
case: https://sudoku-sleuth.com/cases/ceiling-fan
library: https://rules.sudoku-sleuth.com/
status: read
givens: r4c1=3
---

```rules
sudoku 9x9
kropki-1: kropki r6c5-r6c6 colour "white"
kropki-2: kropki r5c4-r6c4 colour "white"
kropki-3: kropki r4c4-r4c5 colour "white"
kropki-4: kropki r8c8-r8c9 colour "white"
kropki-5: kropki r5c5-r5c6 colour "white"
kropki-6: kropki r1c2-r2c2 colour "black"
kropki-7: kropki r8c2-r9c2 colour "black"
kropki-8: kropki r1c8-r2c8 colour "black"
whispers-1: whispers r4c3-r3c2-r2c1-r1c2-r2c3-r3c4 gap 5
whispers-2: whispers r3c6-r2c7-r1c8-r2c9-r3c8-r4c7 gap 5
whispers-3: whispers r4c5-r3c5-r2c5-r1c5 gap 5
whispers-4: whispers r5c6-r5c7-r5c8-r5c9 gap 5
whispers-5: whispers r6c5-r7c5-r8c5-r9c5 gap 5
whispers-6: whispers r5c4-r5c3-r5c2-r5c1 gap 5
whispers-7: whispers r7c6-r8c7-r9c8-r8c9-r7c8-r6c7 gap 5
whispers-8: whispers r6c3-r7c2-r8c1-r9c2-r8c3-r7c4 gap 5
whispers-9: whispers r6c5-r6c4 gap 5
whispers-10: whispers r5c4-r4c4 gap 5
whispers-11: whispers r4c5-r4c6 gap 5
whispers-12: whispers r5c6-r6c6 gap 5
```

- Normal sudoku rules apply.
- German Whispers: Along German Whispers lines, adjacent digits must differ by at least 5.
- Kropki pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
