---
format: open-rules
title: Ratio Citadels
setter: Blobz
source: https://sudokupad.app/blobz/ratio-citadels
case: https://sudoku-sleuth.com/cases/ratio-citadels
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 7
  cols: 7
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
exported: b04ab3267b76adf86f9ce593d4b491d3
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7
unique-8: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1
unique-9: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2
unique-10: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3
unique-11: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4
unique-12: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5
unique-13: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6
unique-14: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7
kropki-1: kropki r1c5-r2c5 black
kropki-2: kropki r3c5-r4c5 black
kropki-3: kropki r6c3-r6c4 black
kropki-4: kropki r5c1-r6c1 black
kropki-5: kropki r2c3-r2c4 black
kropki-6: kropki r2c3-r3c3 black
kropki-7: kropki r7c2-r7c3 black
kropki-8: kropki r5c7-r6c7 black
kropki-9: kropki r4c4-r4c5 black
kropki-10: kropki r4c5-r4c6 black
kropki-11: kropki r5c1-r5c2 black
unique-15: unique r1c5-r2c1-r2c5-r3c5-r4c5-r6c2-r6c5
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[4]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[11]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[7]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[36]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[25]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[18]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[26]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[35]}}
- {"id":"drawing-16","rules":[],"visual":{"kind":"cage","cells":[21]}}
- {"id":"drawing-17","rules":[],"visual":{"kind":"cage","cells":[17]}}
```

Divide the grid into seven kingdoms, each consisting of seven orthogonally connected cells. Every row, column and kingdom must contain the digits 1 to 7 once each.

Every kingdom contains a Citadel (circle). The seven citadels form a set of the digits 1-7.

Digits in caged cells indicate how many cells of the same kingdom are seen orthogonally from that position, including itself. Other kingdoms block vision.

Black dots lie on the boundary between two kingdoms. Additionally, they separate digits where one is double the other.
