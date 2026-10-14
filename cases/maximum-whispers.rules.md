---
format: open-rules
title: Maximum Whispers
setter: Will Power
source: https://sudokupad.app/ht3w57alw3
case: https://sudoku-sleuth.com/cases/maximum-whispers
library: https://rules.sudoku-sleuth.com/
status: read
exported: 571040268c104fca5c178d26b65d32a3
---

```rules
sudoku 9x9
anti-king
kropki-1: kropki r1c2-r1c3 white
kropki-2: kropki r2c1-r3c1 white
kropki-3: kropki r8c6-r9c6 white
kropki-4: kropki r1c9-r2c9 white
kropki-5: kropki r2c9-r3c9 white
kropki-6: kropki r3c9-r4c9 white
kropki-7: kropki r1c6-r1c7 white
kropki-8: kropki r1c5-r1c6 white
kropki-9: kropki r3c2-r3c3 black
kropki-10: kropki r2c2-r3c2 black
kropki-11: kropki r1c2-r2c2 black
kropki-12: kropki r1c1-r2c1 black
whispers-1: whispers r2c3-r2c4-r2c5-r2c6-r2c7 gap 5
whispers-2: whispers r3c8-r4c8-r5c8-r6c8-r7c8 gap 5
whispers-3: whispers r8c7-r8c6-r8c5-r8c4-r8c3-r7c2-r6c2-r5c2-r5c3 gap 4
extremum r2c3-r2c7-r3c8-r7c8-r8c7-r7c2-r5c3 type "max" exhaustive false
```

Normal Sudoku rules apply. ANTI-KING- Numbers a chess king's move apart cannot contain the same number. GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on the red line are at least 4 apart from their neighbors on the line. KROPKI PAIRS- Numbers with a white dot between them are consecutive. Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given. MAXIMUMS- Numbers in grey cells with greater than symbols are greater than all 4 orthogonally adjacent cells.
