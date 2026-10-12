---
format: open-rules
title: 7-Up
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/06whb6rnv8
case: https://sudoku-sleuth.com/cases/7-up
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c5=7
---

```rules
sudoku 9x9
kropki-1: kropki r5c4-r5c5 colour "white"
kropki-2: kropki r5c5-r5c6 colour "white"
kropki-3: kropki r3c8-r4c8 colour "white"
kropki-4: kropki r3c7-r4c7 colour "white"
kropki-5: kropki r4c7-r4c8 colour "white"
kropki-6: kropki r3c7-r3c8 colour "white"
kropki-7: kropki r7c3-r8c3 colour "white"
kropki-8: kropki r6c3-r6c4 colour "white"
kropki-9: kropki r5c4-r6c4 colour "white"
kropki-10: kropki r4c9-r5c9 colour "white"
kropki-11: kropki r1c3-r1c4 colour "white"
kropki-12: kropki r1c5-r1c6 colour "white"
kropki-13: kropki r1c7-r1c8 colour "white"
kropki-14: kropki r2c5-r2c6 colour "white"
kropki-15: kropki r2c4-r2c5 colour "white"
kropki-16: kropki r2c3-r2c4 colour "white"
kropki-17: kropki r1c4-r2c4 colour "white"
kropki-18: kropki r1c3-r2c3 colour "white"
kropki-19: kropki r3c2-r3c3 colour "white"
kropki-20: kropki r2c8-r3c8 colour "white"
kropki-21: kropki r3c2-r4c2 colour "white"
kropki-22: kropki r4c8-r4c9 colour "white"
kropki-23: kropki r4c7-r5c7 colour "white"
kropki-24: kropki r5c1-r5c2 colour "white"
kropki-25: kropki r4c1-r5c1 colour "white"
kropki-26: kropki r6c1-r6c2 colour "white"
kropki-27: kropki r6c2-r6c3 colour "white"
kropki-28: kropki r6c8-r6c9 colour "white"
kropki-29: kropki r5c6-r5c7 colour "white"
kropki-30: kropki r7c2-r7c3 colour "white"
kropki-31: kropki r7c3-r7c4 colour "white"
kropki-32: kropki r7c2-r8c2 colour "white"
kropki-33: kropki r8c4-r8c5 colour "white"
kropki-34: kropki r8c7-r8c8 colour "white"
kropki-35: kropki r8c8-r8c9 colour "white"
kropki-36: kropki r7c9-r8c9 colour "white"
kropki-37: kropki r9c7-r9c8 colour "white"
kropki-38: kropki r4c4-r5c4 colour "black"
kropki-39: kropki r6c3-r7c3 colour "black"
kropki-40: kropki r3c9-r4c9 colour "black"
kropki-41: kropki r8c2-r8c3 colour "black"
kropki-42: kropki r2c9-r3c9 colour "black"
kropki-43: kropki r1c9-r2c9 colour "black"
kropki-44: kropki r1c2-r2c2 colour "black"
kropki-45: kropki r6c9-r7c9 colour "black"
kropki-46: kropki r4c6-r5c6 colour "black"
kropki-47: kropki r4c6-r4c7 colour "black"
kropki-48: kropki r3c4-r3c5 colour "black"
kropki-49: kropki r3c5-r4c5 colour "black"
kropki-50: kropki r5c8-r6c8 colour "black"
kropki-51: kropki r6c6-r6c7 colour "black"
kropki-52: kropki r7c7-r7c8 colour "black"
kropki-53: kropki r6c7-r7c7 colour "black"
kropki-54: kropki r4c3-r4c4 colour "black"
kropki-55: kropki r1c6-r1c7 colour "black"
kropki-56: kropki r4c3-r5c3 colour "black"
kropki-57: kropki r2c2-r3c2 colour "black"
```

Normal sudoku rules apply. Cells separated by a white dot differ by one (standard Kropki difference dots). Cells separated by a black dot are in a 2:1 ratio (standard Kropki ratio dots).
