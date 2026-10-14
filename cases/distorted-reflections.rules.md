---
format: open-rules
title: Distorted Reflections
setter: Meggen033
source: https://sudokupad.app/t9gvc3nxq6
case: https://sudoku-sleuth.com/cases/distorted-reflections
library: https://rules.sudoku-sleuth.com/
status: read
exported: 56d384c51c70ad8931f1b3b049985331
---

```rules
sudoku 9x9
cage-1: cage r7c1-r8c1-r9c1 total 21 connected true
cage-2: cage r1c7-r1c8-r1c9 total 22 connected true
cage-3: cage r2c8-r3c8 total 7 connected true
cage-4: cage r8c2-r8c3 total 9 connected true
diagonal direction "main"
kropki-1: kropki r8c6-r9c6 white
kropki-2: kropki r6c8-r6c9 white
kropki-3: kropki r5c4-r5c5 white
kropki-4: kropki r8c2-r9c2 white
kropki-5: kropki r3c8-r3c9 white
kropki-6: kropki r4c8-r4c9 white
kropki-7: kropki r4c1-r4c2 black
kropki-8: kropki r1c4-r2c4 black
kropki-9: kropki r4c5-r5c5 black
kropki-10: kropki r8c6-r8c7 black
arrow-1: arrow r4c2-r4c1 bulb ["r4c3"]
arrow-2: arrow r2c4-r1c4 bulb ["r3c4"]
arrow-3: arrow r8c6-r9c6 bulb ["r7c6"]
arrow-4: arrow r6c8-r6c9 bulb ["r6c7"]
arrow-5: arrow r8c4 bulb ["r7c3"]
arrow-6: arrow r2c6 bulb ["r3c7"]
whispers-1: whispers r7c7-r6c7-r6c6-r7c6 gap 5
whispers-2: whispers r9c8-r9c9-r8c9 gap 5
whispers-3: whispers r8c8-r8c9 gap 5
renban-1: renban r3c3-r4c3-r4c4-r3c4
renban-2: renban r2c1-r1c1-r1c2
```

Normal Sudoku rules apply.

Digits along the negative diagonal cannot repeat

Adjacent digits along a green german whisper line must have a difference of at least 5.

Digits along a megenta renban form a set of consecutive non-repeating digits in any order.

The digits along each arrow must sum to the digit in the circled cell. Digits may repeat along an arrow if other rules allow.

A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.
