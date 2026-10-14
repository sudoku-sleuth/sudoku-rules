---
format: open-rules
title: Dancing on the Ceiling
setter: Will Power
source: https://sudokupad.app/rgc9ry1hfz
case: https://sudoku-sleuth.com/cases/dancing-on-the-ceiling
library: https://rules.sudoku-sleuth.com/
status: read
exported: b7beeea9bed829076cbc0332683e1bf9
---

```rules
sudoku 9x9
kropki-1: kropki r1c3-r1c4 white
kropki-2: kropki r1c2-r1c3 white
kropki-3: kropki r2c9-r3c9 white
kropki-4: kropki r3c9-r4c9 white
kropki-5: kropki r8c6-r9c6 white
kropki-6: kropki r5c1-r5c2 white
kropki-7: kropki r5c2-r5c3 white
kropki-8: kropki r7c1-r8c1 white
kropki-9: kropki r8c1-r8c2 white
kropki-10: kropki r9c6-r9c7 white
kropki-11: kropki r1c7-r1c8 black
kropki-12: kropki r7c6-r7c7 black
kropki-13: kropki r1c6-r2c6 black
kropki-14: kropki r3c1-r4c1 black
kropki-15: kropki r3c2-r4c2 black
kropki-16: kropki r4c4-r4c5 black
whispers-1: whispers r1c2-r1c1-r2c2-r3c2-r2c3-r1c4-r1c5 gap 4
whispers-2: whispers r3c2-r4c3-r5c4-r5c5-r6c5-r6c4 gap 4
whispers-3: whispers r5c4-r6c4 gap 4
whispers-4: whispers r5c1-r4c2-r4c3-r3c4-r3c5 gap 4
whispers-5: whispers r1c7-r1c8-r2c8-r3c8-r4c8-r5c8-r6c8 gap 4
whispers-6: whispers r6c8-r7c8-r7c7-r6c7 gap 4
whispers-7: whispers r6c7-r6c8 gap 4
whispers-8: whispers r7c9-r6c9-r5c8-r4c7-r4c6 gap 4
whispers-9: whispers r2c6-r2c7-r3c7-r3c8 gap 4
pair-1: pair r3c7-r3c8 sum 10
pair-2: pair r2c2-r3c2 sum 10
pair-3: pair r5c4-r5c5 sum 10
```

Oh, what a Feeling! Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. XV PAIRS- Numbers with an X between them sum to 10. Not all possible X and dots are given.
