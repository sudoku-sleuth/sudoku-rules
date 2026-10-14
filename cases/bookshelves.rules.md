---
format: open-rules
title: Bookshelves
setter: Will Power
source: https://sudokupad.app/c2c8ihzlf9
case: https://sudoku-sleuth.com/cases/bookshelves
library: https://rules.sudoku-sleuth.com/
status: read
exported: 36f9d020796bc2f316d64b12296de095
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r2c2 black
kropki-2: kropki r3c2-r4c2 black
kropki-3: kropki r6c2-r7c2 black
kropki-4: kropki r1c4-r2c4 black
kropki-5: kropki r5c4-r6c4 black
kropki-6: kropki r7c5-r8c5 black
kropki-7: kropki r3c8-r4c8 black
kropki-8: kropki r4c9-r5c9 black
kropki-9: kropki r8c9-r9c9 black
kropki-10: kropki r3c1-r4c1 black
kropki-11: kropki r7c1-r8c1 black
kropki-12: kropki r4c3-r5c3 black
whispers-1: whispers r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8 gap 4
whispers-2: whispers r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8 gap 4
whispers-3: whispers r8c7-r8c6-r8c5-r8c4-r8c3-r8c2-r8c1 gap 4
whispers-4: whispers r7c1-r6c1-r5c1-r4c1-r3c1-r2c1-r1c1 gap 4
whispers-5: whispers r4c2-r4c3-r4c4-r4c5-r4c6-r4c7 gap 4
whispers-6: whispers r6c2-r6c3-r6c4-r6c5-r6c6-r6c7 gap 4
parity-cells r4c1-r4c2-r4c9-r4c8 parity "even"
```

Normal Sudoku rules apply. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. EVEN- Numbers in cells with a gray square are even.
