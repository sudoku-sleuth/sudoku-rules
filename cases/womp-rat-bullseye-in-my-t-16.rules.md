---
format: open-rules
title: Womp Rat Bullseye in my T-16
setter: Meggen033
source: https://sudokupad.app/mnf6p1p16v
case: https://sudoku-sleuth.com/cases/womp-rat-bullseye-in-my-t-16
library: https://rules.sudoku-sleuth.com/
status: read
exported: 50664ae1f3bd30f0377c2a103472aebb
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2 total 9 connected true
cage-2: cage r5c8-r5c9 total 9 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
kropki-1: kropki r6c6-r6c7 white
kropki-2: kropki r6c3-r6c4 black
whispers-1: whispers r5c4-r4c5-r5c6-r6c5 gap 5 loop true
whispers-2: whispers r1c1-r2c2-r3c3-r4c4 gap 5
whispers-3: whispers r1c9-r2c8-r3c7-r4c6 gap 5
whispers-4: whispers r9c9-r8c8-r7c7-r6c6 gap 5
whispers-5: whispers r9c1-r8c2-r7c3-r6c4 gap 5
whispers-6: whispers r5c7-r6c7-r7c6 gap 5
whispers-7: whispers r5c3-r4c3-r3c4 gap 5
whispers-8: whispers r9c7-r8c8-r7c9 gap 5
whispers-9: whispers r9c3-r8c2-r7c1 gap 5
whispers-10: whispers r7c1-r6c1-r5c2 gap 5
whispers-11: whispers r7c9-r6c9-r5c8 gap 5
renban-1: renban r4c4-r5c5-r6c6-r6c4-r4c6
renban-2: renban r9c2-r8c1-r7c2-r8c3
renban-3: renban r8c7-r9c8-r8c9-r7c8
renban-4: renban r7c6-r7c5-r7c4-r6c3-r5c3
renban-5: renban r5c7-r4c7-r3c6-r3c5-r3c4
```

•    Normal Sudoku rules apply. 
•    Digits along a diagonal cannot repeat.
•    Adjacent digits along a green German whisper line must have a difference of at least 5.
•     Digits along a magenta Renban form a set of consecutive non-repeating digits in any order.
•    Digits in a cage do not repeat and sum to the clue in the top left.
•    A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
