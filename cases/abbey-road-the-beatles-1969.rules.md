---
format: open-rules
title: Abbey Road (The Beatles) 1969
setter: Will Power
source: https://sudokupad.app/fg02kkaghy
case: https://sudoku-sleuth.com/cases/abbey-road-the-beatles-1969
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c4=7 r7c7=5 r8c5=5
---

```rules
sudoku 9x9
cage-1: cage r3c8-r4c8 total 14 connected true
cage-2: cage r8c8-r9c8 total 13 connected true
cage-3: cage r3c9-r4c9 total 6 connected true
cage-4: cage r3c5-r4c5 total 9 connected true
cage-5: cage r3c1-r4c1 total 9 connected true
kropki-1: kropki r1c7-r1c8 colour "black"
kropki-2: kropki r1c2-r1c3 colour "black"
kropki-3: kropki r7c1-r8c1 colour "black"
kropki-4: kropki r8c9-r9c9 colour "black"
kropki-5: kropki r3c6-r4c6 colour "black"
kropki-6: kropki r8c4-r9c4 colour "black"
kropki-7: kropki r2c8-r2c9 colour "black"
whispers-1: whispers r3c8-r3c9-r4c9-r4c8 gap 4
whispers-2: whispers r3c8-r4c8 gap 4
whispers-3: whispers r5c8-r6c8-r7c8-r8c8-r9c7 gap 4
whispers-4: whispers r7c9-r6c8 gap 4
whispers-5: whispers r9c9-r8c9-r7c8 gap 4
whispers-6: whispers r3c4-r4c4-r4c5-r3c5 gap 4
whispers-7: whispers r3c4-r3c5 gap 4
whispers-8: whispers r5c4-r6c4-r7c4-r8c4-r9c4 gap 4
whispers-9: whispers r7c5-r6c4 gap 4
whispers-10: whispers r7c4-r8c5-r9c5 gap 4
whispers-11: whispers r3c6-r4c6-r4c7-r3c7 gap 4
whispers-12: whispers r3c6-r3c7 gap 4
whispers-13: whispers r5c6-r6c6-r7c6-r8c6-r9c5 gap 4
whispers-14: whispers r6c6-r7c7 gap 4
whispers-15: whispers r7c6-r8c7-r9c7 gap 4
whispers-16: whispers r3c2-r4c2-r4c3-r3c3 gap 4
whispers-17: whispers r3c2-r3c3 gap 4
whispers-18: whispers r5c2-r6c2-r7c2-r8c2-r9c1 gap 4
whispers-19: whispers r7c3-r6c2 gap 4
whispers-20: whispers r7c2-r8c3-r9c4 gap 4
```

Normal Sudoku rules apply.

DUTCH WHISPERS- Numbers on ALL lines are at least 4 apart from their neighbors on the line. Numbers may repeat on lines, if other rules allow.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are given.
