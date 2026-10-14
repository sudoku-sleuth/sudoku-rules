---
format: open-rules
title: Milestone for timotab
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/7v2aizzynz
case: https://sudoku-sleuth.com/cases/milestone-for-timotab
library: https://rules.sudoku-sleuth.com/
status: read
exported: bb4a373bc913c81089cf25ffaa7fb1f5
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r6c4 black
kropki-2: kropki r6c6-r7c6 black
kropki-3: kropki r7c8-r8c8 black
kropki-4: kropki r3c3-r4c3 black
kropki-5: kropki r4c5-r5c5 black
kropki-6: kropki r5c7-r6c7 black
kropki-7: kropki r1c2-r2c2 black
kropki-8: kropki r6c2-r6c3 white
kropki-9: kropki r5c6-r5c7 white
kropki-10: kropki r6c2-r7c2 white
kropki-11: kropki r4c8-r4c9 white
kropki-12: kropki r1c6-r1c7 white
kropki-13: kropki r9c3-r9c4 white
kropki-14: kropki r9c2-r9c3 white
kropki-15: kropki r5c4-r5c5 white
kropki-16: kropki r2c7-r3c7 white
entropic-1: entropic r2c1-r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
entropic-2: entropic r7c3-r6c3-r5c3-r4c3-r3c3-r2c4-r3c4-r4c4-r5c4-r6c4
entropic-3: entropic r8c5-r7c5-r6c5-r5c5-r4c5-r3c6-r4c6-r5c6-r6c6-r7c6
entropic-4: entropic r9c7-r8c7-r7c7-r6c7-r5c7-r4c8-r5c8-r6c8-r7c8-r8c8
renban-1: renban r6c4-r7c3
renban-2: renban r7c6-r8c5
renban-3: renban r8c8-r9c7
```

**Sudoku, Entropic Lines, Renban Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three sequential cells along a thicker peach entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Renban line: Digits along a thinner pink Renban line must form a set of non-repeating consecutive digits in some order.
- Kropki Pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive.
