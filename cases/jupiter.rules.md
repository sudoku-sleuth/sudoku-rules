---
format: open-rules
title: Jupiter
setter: Will Power
source: https://sudokupad.app/yry0m49b47
case: https://sudoku-sleuth.com/cases/jupiter
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
cage-1: cage r5c1-r5c2-r5c3 total 8 connected true
cage-2: cage r5c4-r5c5 total 8 connected true
cage-3: cage r8c3-r9c3 total 13 connected true
cage-4: cage r8c1-r8c2 total 6 connected true
cage-5: cage r4c7-r4c8-r4c9 total 12 connected true
anti-king
kropki r1c5-r2c5 colour "white"
whispers-1: whispers r2c3-r2c4-r2c5-r2c6-r2c7 gap 5
whispers-2: whispers r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8 gap 5
whispers-3: whispers r4c1-r4c2-r4c3-r4c4-r4c5-r4c6 gap 4
whispers-4: whispers r4c7-r4c8-r4c9 gap 4
whispers-5: whispers r8c4-r8c5-r8c6-r8c7 gap 5
renban-1: renban r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
renban-2: renban r5c7-r5c8-r5c9
renban-3: renban r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r6c8
renban-4: renban r6c1-r6c2-r6c3-r6c4-r6c5
pair-1: pair r2c4-r3c4 sum 10
pair-2: pair r2c5-r3c5 sum 10
pair-3: pair r2c6-r3c6 sum 10
pair-4: pair r2c7-r3c7 sum 10
parity-cells r6c7 parity "odd"
```

```drawing
- {"id":"drawing-21","rules":[],"visual":{"kind":"shape","layer":"over","center":[5.5,6.5],"width":0.75,"height":0.75,"rounded":true,"fill":"#FF7383","stroke":"#FF7383","thickness":1,"textColor":"#000000","opacity":0.5}}
```

Normal Sudoku rules apply.

ANTI-KING- Cells a chess king's move apart cannot have the same number.
GERMAN WHISPERS- Numbers on green lines are at least 5 apart from their neighbors on the line. DUTCH WHISPERS- Numbers on red lines are at least 4 apart from their neighbors on the line. RENBAN- Numbers on purple lines are each a set of non-repeating, consecutive numbers, in any order.
XV PAIRS- Numbers with an X between them sum to 10.
KILLER CAGES- Numbers in cages sum to the number in the top left corner of the cage.
KROPKI PAIRS- Numbers with a white dot between them are consecutive.
ODD- The cell with the red circle is odd.
