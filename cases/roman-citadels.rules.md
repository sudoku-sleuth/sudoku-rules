---
format: open-rules
title: Roman Citadels
setter: Blobz
source: https://sudokupad.app/blobz/roman-citadels
case: https://sudoku-sleuth.com/cases/roman-citadels
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
exported: 8b5f945a643e43e6f963bc60b0d52e36
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
pair-1: pair r3c3-r3c4 sum 10
pair-2: pair r7c6-r7c7 sum 10
pair-3: pair r3c7-r4c7 sum 10
pair-4: pair r1c6-r2c6 sum 10
pair-5: pair r6c3-r7c3 sum 10
pair-6: pair r4c5-r5c5 sum 5
pair-7: pair r6c5-r6c6 sum 5
pair-8: pair r7c2-r7c3 sum 5
pair-9: pair r4c1-r4c2 sum 5
pair-10: pair r4c5-r4c6 sum 5
pair-11: pair r4c2-r5c2 sum 5
unique-15: unique r2c6-r2c7-r3c1-r4c3-r5c2-r5c4-r7c6
```

```drawing
- {"id":"drawing-8","rules":[],"visual":{"kind":"cage","cells":[20]}}
- {"id":"drawing-9","rules":[],"visual":{"kind":"cage","cells":[12]}}
- {"id":"drawing-10","rules":[],"visual":{"kind":"cage","cells":[48]}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"cage","cells":[47]}}
- {"id":"drawing-12","rules":[],"visual":{"kind":"cage","cells":[29]}}
- {"id":"drawing-13","rules":[],"visual":{"kind":"cage","cells":[23]}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"cage","cells":[32]}}
- {"id":"drawing-15","rules":[],"visual":{"kind":"cage","cells":[25]}}
```

Divide the grid into seven provinces, each consisting of seven orthogonally connected cells. Every row, column and province must contain the digits 1 to 7 once each.

Every province contains a Citadel (circle). The seven citadels form a set of the digits 1-7.

Digits in caged cells indicate how many cells of the same province are seen orthogonally from that position, including itself. Other provinces block vision.

Digits separated by an X sum to 10. Digits separated by a V sum to 5. Additionally, X's and V's lie on the boundary between two provinces.
