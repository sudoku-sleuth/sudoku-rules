---
format: open-rules
title: At the Karaoke Bar
setter: Will Power
source: https://sudokupad.app/oryy0zeq0u
case: https://sudoku-sleuth.com/cases/at-the-karaoke-bar
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - Some of the source rules still need to be included in our reading.
exported: 2f88be9853c71850bc03755dc488c31d
---

```rules
sudoku 9x9
cage-1: cage r1c6-r2c6 total 5 connected true
cage-2: cage r2c8-r3c8 total 5 connected true
cage-3: cage r5c9-r6c9 total 5 connected true
cage-4: cage r5c7-r5c8 total 5 connected true
cage-5: cage r7c6-r7c7 total 5 connected true
cage-6: cage r8c7-r9c7 total 5 connected true
cage-7: cage r4c4-r4c5 total 5 connected true
kropki-1: kropki r1c5-r1c6 white
kropki-2: kropki r1c6-r1c7 white
kropki-3: kropki r1c7-r2c7 white
kropki-4: kropki r9c3-r9c4 white
kropki-5: kropki r5c5-r6c5 white
whispers-1: whispers r9c2-r8c1-r7c1-r7c2-r7c3-r6c2-r5c3-r4c2-r4c3-r4c4-r3c5-r2c6-r2c7-r3c8-r4c9-r5c9-r6c8-r7c7-r8c6-r9c5 gap 4
whispers-2: whispers r7c5-r7c6-r6c7 gap 4
whispers-3: whispers r4c4-r5c4-r5c5 gap 4
whispers-4: whispers r4c4-r5c5 gap 4
whispers-5: whispers r2c4-r3c5-r4c6 gap 4
whispers-6: whispers r5c7-r6c8-r7c9 gap 4
pair-1: pair r1c1-r1c2 sum 10
pair-2: pair r2c1-r2c2 sum 10
pair-3: pair r3c2-r3c3 sum 10
pair-4: pair r4c2-r4c3 sum 10
pair-5: pair r5c1-r5c2 sum 10
pair-6: pair r7c2-r7c3 sum 10
```

Normal Sudoku rules apply. 
DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. Numbers may repeat on red lines. 
X PAIRS- Numbers with an X between them sum to 10. Not all possible X are given. 
KILLER CAGES- Numbers in cages sum to 5. ALL POSSIBLE 5 CAGES ARE GIVEN.
KROPKI PAIRS- Numbers with a white dot between them are consecutive. Not all possible dots are shown.
