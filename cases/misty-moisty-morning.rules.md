---
fog:
  initiallyLit:
    - r4c4
    - r4c5
    - r4c6
    - r5c4
    - r5c5
    - r5c6
    - r6c4
    - r6c5
    - r6c6
format: open-rules
title: Misty Moisty Morning
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4riwnrfph1
case: https://sudoku-sleuth.com/cases/misty-moisty-morning
library: https://rules.sudoku-sleuth.com/
status: read
exported: e51a7a1ff6f32921689c60fb8ddf4195
---

```rules
sudoku 9x9
kropki-1: kropki r4c4-r5c4 white
kropki-2: kropki r4c6-r5c6 white
kropki-3: kropki r6c4-r6c5 white
kropki-4: kropki r6c5-r6c6 white
kropki-5: kropki r8c4-r8c5 white
kropki-6: kropki r2c5-r3c5 white
kropki-7: kropki r5c2-r5c3 white
kropki-8: kropki r4c3-r5c3 white
kropki-9: kropki r6c2-r6c3 white
kropki-10: kropki r6c1-r6c2 white
kropki-11: kropki r4c1-r5c1 white
kropki-12: kropki r5c7-r6c7 white
kropki-13: kropki r8c6-r9c6 white
kropki-14: kropki r9c6-r9c7 white
kropki-15: kropki r7c6-r7c7 white
kropki-16: kropki r6c8-r7c8 white
kropki-17: kropki r5c7-r5c8 white
kropki-18: kropki r4c8-r5c8 white
kropki-19: kropki r3c7-r3c8 white
kropki-20: kropki r1c8-r2c8 white
kropki-21: kropki r4c9-r5c9 white
kropki-22: kropki r4c4-r4c5 black
kropki-23: kropki r4c5-r4c6 black
kropki-24: kropki r7c4-r7c5 black
kropki-25: kropki r7c5-r7c6 black
kropki-26: kropki r2c4-r3c4 black
kropki-27: kropki r3c4-r3c5 black
kropki-28: kropki r7c3-r8c3 black
kropki-29: kropki r8c3-r8c4 black
kropki-30: kropki r3c6-r3c7 black
kropki-31: kropki r2c6-r3c6 black
kropki-32: kropki r3c2-r3c3 black
kropki-33: kropki r2c3-r3c3 black
kropki-34: kropki r9c1-r9c2 black
kropki-35: kropki r8c2-r9c2 black
kropki-36: kropki r1c8-r1c9 black
kropki-37: kropki r8c7-r8c8 black
```

- Normal sudoku rules apply.
- Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all possible dots are necessarily given.
- Part of the grid is covered with fog. As correct digits are placed, the fog will clear from cells surrounding the correct digit, revealing additional clues. There is always enough information in the revealed portion of the grid to place another correct digit without guessing. Digits can be placed within the fog.
