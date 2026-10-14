---
fog:
  initiallyLit:
    - r8c4
    - r8c5
    - r8c6
format: open-rules
title: Dot-to-Dot
setter: Blobz
source: https://sudokupad.app/blobz/dot-to-dot
case: https://sudoku-sleuth.com/cases/dot-to-dot
library: https://rules.sudoku-sleuth.com/
status: read
exported: d5f3058049dce6643f48c7a73db3e195
---

```rules
sudoku 9x9
kropki-1: kropki r8c1-r9c1 white
kropki-2: kropki r8c4-r8c5 white
kropki-3: kropki r8c5-r8c6 white
kropki-4: kropki r7c9-r8c9 white
kropki-5: kropki r6c4-r7c4 white
kropki-6: kropki r6c6-r7c6 white
kropki-7: kropki r6c2-r6c3 white
kropki-8: kropki r5c4-r5c5 white
kropki-9: kropki r4c2-r4c3 white
kropki-10: kropki r5c8-r6c8 white
kropki-11: kropki r2c1-r3c1 white
kropki-12: kropki r1c4-r2c4 white
kropki-13: kropki r2c4-r2c5 white
kropki-14: kropki r1c8-r2c8 white
kropki-15: kropki r1c2-r1c3 black
kropki-16: kropki r1c6-r1c7 black
kropki-17: kropki r3c3-r4c3 black
kropki-18: kropki r3c5-r4c5 black
kropki-19: kropki r4c6-r4c7 black
kropki-20: kropki r4c8-r4c9 black
kropki-21: kropki r6c4-r6c5 black
kropki-22: kropki r6c5-r6c6 black
kropki-23: kropki r7c5-r8c5 black
kropki-24: kropki r8c3-r8c4 black
kropki-25: kropki r8c6-r8c7 black
```

Normal sudoku rules apply. 

White dots separate consecutive digits. Black dots separate digits where one is double the other. Not all such dots are shown.

Placing correct digits will clear the fog from surrounding cells, possibly revealing more clues.
