---
format: open-rules
title: Bright Eyes
setter: Meggen033
source: https://sudokupad.app/266ljjc898
case: https://sudoku-sleuth.com/cases/bright-eyes
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
exported: 2f7d16184d5033ca218f893b27ed7290
---

```rules
sudoku 9x9
cage-1: cage r1c1-r2c1 total 12 connected true
cage-2: cage r7c9-r8c9 total 10 connected true
cage-3: cage r7c8-r8c8 total 10 connected true
cage-4: cage r6c3-r6c4 total 10 connected true
cage-5: cage r1c2-r2c2 total 5 connected true
kropki-1: kropki r4c9-r5c9 black
kropki-2: kropki r1c9-r2c9 black
kropki-3: kropki r4c1-r5c1 black
kropki-4: kropki r7c1-r8c1 black
quadruple-1: quadruple r1c3-r1c4-r2c3-r2c4 digits [2,3,4]
quadruple-2: quadruple r1c6-r1c7-r2c6-r2c7 digits [2,6,8]
quadruple-3: quadruple r7c6-r7c7-r8c6-r8c7 digits [2,3,4]
quadruple-4: quadruple r7c3-r7c4-r8c3-r8c4 digits [4,6,8]
parity-cells-1: parity-cells r2c5 parity "odd"
parity-cells-2: parity-cells r4c6-r2c3 parity "even"
unique-1: unique r1c1-r1c4-r1c7-r4c1-r4c4-r4c7-r7c1-r7c4-r7c7
unique-2: unique r1c2-r1c5-r1c8-r4c2-r4c5-r4c8-r7c2-r7c5-r7c8
unique-3: unique r1c3-r1c6-r1c9-r4c3-r4c6-r4c9-r7c3-r7c6-r7c9
unique-4: unique r2c1-r2c4-r2c7-r5c1-r5c4-r5c7-r8c1-r8c4-r8c7
unique-5: unique r2c2-r2c5-r2c8-r5c2-r5c5-r5c8-r8c2-r8c5-r8c8
unique-6: unique r2c3-r2c6-r2c9-r5c3-r5c6-r5c9-r8c3-r8c6-r8c9
unique-7: unique r3c1-r3c4-r3c7-r6c1-r6c4-r6c7-r9c1-r9c4-r9c7
unique-8: unique r3c2-r3c5-r3c8-r6c2-r6c5-r6c8-r9c2-r9c5-r9c8
unique-9: unique r3c3-r3c6-r3c9-r6c3-r6c6-r6c9-r9c3-r9c6-r9c9
```

```drawing
- {"id":"drawing-17","rules":[],"visual":{"kind":"shape","layer":"over","center":[7.5,4],"width":0,"height":0,"rounded":false,"thickness":0,"text":"v","textColor":"#000000","angle":-90,"fontSize":20}}
```

Normal Sudoku rules apply.

Digits must not repeat at corresponding box positions.

Circled digits where four cells meet must be present as values in those four cells.

A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Cells on either side of the inequality symbol must have values that abide by the indicated relationship.

Cells with a filled circle must be odd. Cells with a filled square must be even.

The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.
