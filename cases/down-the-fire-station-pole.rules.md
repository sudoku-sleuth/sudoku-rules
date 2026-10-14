---
format: open-rules
title: Down the Fire Station Pole
setter: Will Power
source: https://sudokupad.app/c0z15n7j8j
case: https://sudoku-sleuth.com/cases/down-the-fire-station-pole
library: https://rules.sudoku-sleuth.com/
status: read
exported: a3af8dbd4091ec306054c2fa2e61e516
---

```rules
sudoku 9x9
kropki-1: kropki r7c4-r8c4 white
kropki-2: kropki r5c7-r6c7 white
kropki-3: kropki r4c7-r5c7 white
kropki-4: kropki r3c6-r4c6 white
kropki-5: kropki r2c6-r2c7 white
pair-1: pair r2c8-r3c8 ratio 3
pair-2: pair r4c6-r5c6 ratio 3
pair-3: pair r4c4-r4c5 ratio 3
pair-4: pair r5c3-r6c3 ratio 3
pair-5: pair r6c2-r6c3 ratio 3
pair-6: pair r4c2-r5c2 ratio 3
pair-7: pair r2c1-r2c2 ratio 3
pair-8: pair r7c1-r8c1 ratio 3
pair-9: pair r9c8-r9c9 ratio 3
pair-10: pair r7c6-r8c6 ratio 3
pair-11: pair r7c4-r7c5 ratio 3
pair-12: pair r3c5-r4c5 ratio 3
whispers-1: whispers r1c2-r1c1-r2c1-r3c1 gap 4
whispers-2: whispers r2c2-r2c1 gap 4
whispers-3: whispers r3c3-r4c3-r5c3 gap 4
whispers-4: whispers r5c4-r5c5-r4c5-r4c4 gap 4
whispers-5: whispers r6c4-r5c4-r4c4 gap 4
whispers-6: whispers r6c5-r5c4 gap 4
whispers-7: whispers r7c5-r8c5-r9c5 gap 4
whispers-8: whispers r7c6-r7c5 gap 4
whispers-9: whispers r8c6-r8c5 gap 4
whispers-10: whispers r9c6-r9c5 gap 4
whispers-11: whispers r8c8-r9c8 gap 4
whispers-12: whispers r1c8-r2c8 gap 4
whispers-13: whispers r3c8-r4c8-r5c8-r6c8-r7c8 gap 4
renban-1: renban r3c6-r2c7-r4c7-r5c8-r2c8-r3c7-r3c8-r4c8
renban-2: renban r6c7-r7c7-r8c7-r9c7-r9c8-r7c8-r8c8-r5c7
```

Normal Sudoku rules apply.

DUTCH WHISPERS- Numbers on red lines (light letters and pole, for colorblind) are at least 4 apart from their neighbors on the line.

RENBAN- Numbers on purple lines (dark fireman) are each a set of non-repeating, consecutive numbers, in any order.

KROPKI PAIRS(+)- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 3:1. Not all possible dots are given.
