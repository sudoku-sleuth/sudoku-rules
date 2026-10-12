---
format: open-rules
title: Dutch Decay
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/sp5io0480u
case: https://sudoku-sleuth.com/cases/dutch-decay
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r5c7-r6c7 colour "black"
kropki-2: kropki r5c9-r6c9 colour "black"
kropki-3: kropki r3c6-r3c7 colour "black"
kropki-4: kropki r8c4-r8c5 colour "black"
entropic-1: entropic r3c1-r2c2-r1c3-r1c4-r1c5-r2c6-r3c7
whispers-1: whispers r3c1-r2c2-r1c3-r1c4-r1c5-r2c6-r3c7 gap 4
entropic-2: entropic r3c3-r4c4-r5c5-r5c6-r5c7-r4c8-r3c9
whispers-2: whispers r3c3-r4c4-r5c5-r5c6-r5c7-r4c8-r3c9 gap 4
entropic-3: entropic r6c1-r7c1-r8c1-r9c2-r9c3
whispers-3: whispers r6c1-r7c1-r8c1-r9c2-r9c3 gap 4
entropic-4: entropic r9c7-r9c8-r8c9-r7c9-r6c9
whispers-4: whispers r9c7-r9c8-r8c9-r7c9-r6c9 gap 4
entropic-5: entropic r6c2-r6c3-r7c4
whispers-5: whispers r6c2-r6c3-r7c4 gap 4
entropic-6: entropic r8c5-r7c6-r6c7-r6c8
whispers-6: whispers r8c5-r7c6-r6c7-r6c8 gap 4
entropic-7: entropic r3c1-r2c2-r1c3-r1c4-r1c5-r2c6-r3c7
whispers-7: whispers r3c1-r2c2-r1c3-r1c4-r1c5-r2c6-r3c7 gap 4
entropic-8: entropic r3c3-r4c4-r5c5-r5c6-r5c7-r4c8-r3c9
whispers-8: whispers r3c3-r4c4-r5c5-r5c6-r5c7-r4c8-r3c9 gap 4
entropic-9: entropic r6c1-r7c1-r8c1-r9c2-r9c3
whispers-9: whispers r6c1-r7c1-r8c1-r9c2-r9c3 gap 4
entropic-10: entropic r8c5-r7c6-r6c7-r6c8
whispers-10: whispers r8c5-r7c6-r6c7-r6c8 gap 4
entropic-11: entropic r9c7-r9c8-r8c9-r7c9-r6c9
whispers-11: whispers r9c7-r9c8-r8c9-r7c9-r6c9 gap 4
entropic-12: entropic r6c2-r6c3-r7c4
whispers-12: whispers r6c2-r6c3-r7c4 gap 4
```

** Standard Sudoku, Kropki Pairs, Dutch Whispers, Entropic Lines**

All lines are both Entropic AND Dutch Whispers

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Ratio pairs: Digits separated by a black dot are in a 1:2 ratio. Not all dots are necessarily given.
- Dutch Whispers: Adjacent digits along a Dutch Whispers line must differ by at least four.
- Entropic Lines: Any set of three sequential cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
