---
format: open-rules
title: Reflections
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ij3glm8olc
case: https://sudoku-sleuth.com/cases/reflections
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c9=2 r7c1=4
---

```rules
sudoku 9x9
kropki-1: kropki r2c2-r2c3 colour "black"
kropki-2: kropki r1c9-r2c9 colour "black"
kropki-3: kropki r2c1-r2c2 colour "black"
kropki-4: kropki r1c8-r2c8 colour "black"
kropki-5: kropki r3c3-r4c3 colour "black"
kropki-6: kropki r6c2-r6c3 colour "black"
kropki-7: kropki r3c4-r4c4 colour "black"
kropki-8: kropki r4c2-r4c3 colour "black"
kropki-9: kropki r8c8-r8c9 colour "white"
kropki-10: kropki r8c2-r9c2 colour "white"
kropki-11: kropki r8c1-r9c1 colour "white"
kropki-12: kropki r8c7-r8c8 colour "white"
kropki-13: kropki r6c7-r7c7 colour "white"
kropki-14: kropki r4c7-r4c8 colour "white"
kropki-15: kropki r6c6-r7c6 colour "white"
kropki-16: kropki r6c7-r6c8 colour "white"
modular-1: modular r9c9-r8c9-r7c9-r6c9
modular-2: modular r1c1-r2c1-r3c1-r4c1
modular-3: modular r1c9-r1c8-r1c7-r1c6
modular-4: modular r9c1-r9c2-r9c3-r9c4
modular-5: modular r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r8c7-r8c6-r8c5-r8c4-r8c3-r8c2
modular-6: modular r6c2-r7c3
modular-7: modular r4c2-r5c3-r6c4-r7c5
modular-8: modular r3c5-r4c6-r5c7-r6c8
modular-9: modular r3c7-r4c8
```

- Normal sudoku rules apply.
- Modular lines: Every set of three adjacent cells along a modular line must contain digits with three different remainders when divided by 3.
- Kropki pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
