---
format: open-rules
title: Dottiness
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/52fext900g
case: https://sudoku-sleuth.com/cases/dottiness
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r1c5 colour "white"
kropki-2: kropki r6c9-r7c9 colour "white"
kropki-3: kropki r6c1-r7c1 colour "white"
kropki-4: kropki r3c1-r4c1 colour "white"
kropki-5: kropki r2c9-r3c9 colour "white"
kropki-6: kropki r5c6-r6c6 colour "white"
kropki-7: kropki r7c3-r7c4 colour "white"
kropki-8: kropki r7c5-r8c5 colour "white"
kropki-9: kropki r7c2-r8c2 colour "white"
kropki-10: kropki r9c1-r9c2 colour "white"
kropki-11: kropki r8c8-r9c8 colour "white"
kropki-12: kropki r4c7-r4c8 colour "white"
kropki-13: kropki r2c6-r2c7 colour "white"
kropki-14: kropki r1c1-r1c2 colour "black"
kropki-15: kropki r1c2-r1c3 colour "black"
kropki-16: kropki r1c3-r1c4 colour "black"
kropki-17: kropki r1c9-r2c9 colour "black"
kropki-18: kropki r4c1-r5c1 colour "black"
kropki-19: kropki r5c1-r6c1 colour "black"
kropki-20: kropki r4c9-r5c9 colour "black"
kropki-21: kropki r5c9-r6c9 colour "black"
kropki-22: kropki r5c3-r5c4 colour "black"
kropki-23: kropki r4c6-r5c6 colour "black"
kropki-24: kropki r3c6-r4c6 colour "black"
kropki-25: kropki r7c5-r7c6 colour "black"
kropki-26: kropki r7c4-r7c5 colour "black"
kropki-27: kropki r8c8-r8c9 colour "black"
kropki-28: kropki r8c7-r8c8 colour "black"
```

- Normal sudoku rules apply.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive.
