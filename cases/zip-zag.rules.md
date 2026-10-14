---
format: open-rules
title: Zip Zag
setter: sujoyku
source: https://sudokupad.app/bo63al9pzv
case: https://sudoku-sleuth.com/cases/zip-zag
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A source detail is missing from our reading and needs to be checked.
  - A feature in the source still needs a drawing definition.
board:
  rows: 9
  cols: 9
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c9
      - r2c9
      - r3c9
      - r1c8
      - r2c8
      - r3c8
      - r1c7
      - r2c7
      - r3c7
    - - r4c9
      - r5c9
      - r6c9
      - r4c8
      - r5c8
      - r6c8
      - r4c7
      - r5c7
      - r6c7
    - - r7c9
      - r8c9
      - r9c9
      - r7c8
      - r8c8
      - r9c8
      - r7c7
      - r8c7
      - r9c7
    - - r1c6
      - r2c6
      - r3c6
      - r1c5
      - r2c5
      - r3c5
      - r1c4
      - r2c4
      - r3c4
    - - r4c6
      - r5c6
      - r6c6
      - r4c5
      - r5c5
      - r6c5
      - r4c4
      - r5c4
      - r6c4
    - - r7c6
      - r8c6
      - r9c6
      - r7c5
      - r8c5
      - r9c5
      - r7c4
      - r8c4
      - r9c4
    - - r1c3
      - r2c3
      - r3c3
      - r1c2
      - r2c2
      - r3c2
      - r1c1
      - r2c1
      - r3c1
    - - r4c3
      - r5c3
      - r6c3
      - r4c2
      - r5c2
      - r6c2
      - r4c1
      - r5c1
      - r6c1
    - - r7c3
      - r8c3
      - r9c3
      - r7c2
      - r8c2
      - r9c2
      - r7c1
      - r8c1
      - r9c1
exported: 05a4bc536fc7d683462c6d818a3fa143
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c9-r2c9-r3c9-r1c8-r2c8-r3c8-r1c7-r2c7-r3c7
unique-20: unique r4c9-r5c9-r6c9-r4c8-r5c8-r6c8-r4c7-r5c7-r6c7
unique-21: unique r7c9-r8c9-r9c9-r7c8-r8c8-r9c8-r7c7-r8c7-r9c7
unique-22: unique r1c6-r2c6-r3c6-r1c5-r2c5-r3c5-r1c4-r2c4-r3c4
unique-23: unique r4c6-r5c6-r6c6-r4c5-r5c5-r6c5-r4c4-r5c4-r6c4
unique-24: unique r7c6-r8c6-r9c6-r7c5-r8c5-r9c5-r7c4-r8c4-r9c4
unique-25: unique r1c3-r2c3-r3c3-r1c2-r2c2-r3c2-r1c1-r2c1-r3c1
unique-26: unique r4c3-r5c3-r6c3-r4c2-r5c2-r6c2-r4c1-r5c1-r6c1
unique-27: unique r7c3-r8c3-r9c3-r7c2-r8c2-r9c2-r7c1-r8c1-r9c1
zipper-1: zipper r1c9-r2c8-r3c7-r3c6-r3c5-r2c5-r1c5
zipper-2: zipper r5c9-r5c8-r5c7-r5c6-r6c7-r6c8-r7c9
zipper-3: zipper r8c9-r7c8-r7c7-r7c6-r8c7-r8c8-r9c9
zipper-4: zipper r9c5-r8c5-r7c5-r6c4-r5c3-r5c2-r5c1
zipper-5: zipper r1c4-r2c4-r3c4-r4c4-r4c3-r3c3-r3c2
zipper-6: zipper r9c2-r8c2-r7c3-r6c3-r6c2-r7c1-r8c1
```

Normal sudoku rules apply: Place the digits 1 to 9 once each in every row, column, and box.

Zipper lines: Cells on a lavender zipper line at an equal distance to the center, which is marked with a dot, sum to the digit at the center.
