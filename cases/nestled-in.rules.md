---
format: open-rules
title: Nestled In
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/zweyhk12e4
case: https://sudoku-sleuth.com/cases/nestled-in
library: https://rules.sudoku-sleuth.com/
status: read
exported: da6e8b2d2edbdf59410e38bc0baf8192
---

```rules
sudoku 9x9
kropki-1: kropki r7c1-r8c1 black
kropki-2: kropki r4c3-r4c4 black
kropki-3: kropki r4c3-r5c3 black
kropki-4: kropki r7c7-r7c8 black
kropki-5: kropki r3c8-r4c8 black
kropki-6: kropki r6c5-r7c5 black
kropki-7: kropki r1c6-r1c7 black
kropki-8: kropki r2c3-r2c4 black
kropki-9: kropki r8c6-r9c6 black
kropki-10: kropki r5c5-r6c5 white
kropki-11: kropki r2c3-r3c3 white
kropki-12: kropki r7c1-r7c2 white
kropki-13: kropki r5c5-r5c6 white
modular-1: modular r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
modular-2: modular r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
modular-3: modular r3c3-r4c3-r5c3-r6c3-r7c3-r7c4-r7c5-r7c6-r7c7
modular-4: modular r4c4-r4c5-r4c6-r5c6-r6c6
```

- Normal sudoku rules apply.
- Modular Lines: Every set of three adjacent cells along a teal Modular Line contains digits with three different remainders when divided by 3.
- Kropki Pairs: Digits separated by a black dots are in a 1:2 ratio. Digits separated by a white dot are consecutive.
