---
format: open-rules
title: German Whispers Shepherd, Max
setter: Will Power
source: https://sudokupad.app/4j9eqbx1k3
case: https://sudoku-sleuth.com/cases/german-whispers-shepherd-max
library: https://rules.sudoku-sleuth.com/
status: read
exported: 389c6d714475dd810d299ac4e045f321
---

```rules
sudoku 9x9
cage-1: cage r2c8-r3c8 total 12 connected true
cage-2: cage r3c4-r3c5 total 11 connected true
cage-3: cage r2c6-r3c6 total 7 connected true
cage-4: cage r4c2-r5c2 total 9 connected true
cage-5: cage r7c8-r8c8 total 9 connected true
cage-6: cage r8c2-r9c2 total 12 connected true
cage-7: cage r6c7-r6c8-r6c9 total 24 connected true
cage-8: cage r4c4-r4c5-r4c6 total 18 connected true
cage-9: cage r4c7-r4c8 total 11 connected true
cage-10: cage r7c1-r7c2 total 5 connected true
cage-11: cage r1c2-r2c2 total 14 connected true
anti-king
kropki-1: kropki r6c4-r6c5 black
kropki-2: kropki r6c5-r6c6 black
whispers-1: whispers r9c2-r8c2 gap 5
whispers-2: whispers r8c3-r7c2 gap 5
whispers-3: whispers r8c8-r7c8-r6c8-r5c8-r4c7-r3c6-r3c5 gap 5
whispers-4: whispers r3c4-r2c4-r1c3-r2c2 gap 5
whispers-5: whispers r3c6-r2c6-r1c7-r2c8-r3c8 gap 5
whispers-6: whispers r3c5-r3c4-r4c3 gap 5
whispers-7: whispers r5c2-r4c2 gap 5
renban-1: renban r7c6-r8c6
renban-2: renban r7c5-r7c4-r8c4-r9c5
extremum r5c4-r5c6 type "max" exhaustive false
```

Normal Sudoku rules apply.

ANTI-KING- Cells a chess king's move apart cannot have the same number. DO NOT FORGET ANTI-KING.

GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line.

RENBAN- Numbers on pink lines are each a set of non-repeating, consecutive numbers, in any order.

KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage. The 11 and 12 are duplicated in the cage because the green line can obscure them in some puzzle formats.

KROPKI PAIRS- Numbers with a black dot between them are in a ratio of 2:1. Not all possible dots are shown.

MAXIMUMS- Numbers in the two gray cells (Eyes) are greater than all 4 of their orthogonal neighbors.
