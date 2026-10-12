---
format: open-rules
title: Cubing the Square?
setter: EPH
source: https://sudokupad.app/rdrrpbttp7
case: https://sudoku-sleuth.com/cases/cubing-the-square
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - Some of the source rules still need to be included in our reading.
board:
  rows: 6
  cols: 6
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
  givens: r2c6=1 r6c1=9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6
unique-7: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1
unique-8: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2
unique-9: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3
unique-10: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4
unique-11: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5
unique-12: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-15: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-16: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
renban-1: renban r1c1-r1c2-r1c3-r2c4-r2c5-r2c6
renban-2: renban r3c1-r3c2-r3c3-r4c4-r4c5-r4c6
renban-3: renban r5c1-r5c2-r5c3-r6c4-r6c5-r6c6
pair-1: pair r4c2-r5c2 relation {"op":"sum","value":10}
pair-2: pair r3c2-r4c2 relation {"op":"sum","value":5}
```

```drawing
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[2.5,4.5],[3.5,5.5],[5.5,5.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[0.5,2.5],[2.5,2.5],[3.5,3.5],[5.5,3.5]],"color":"#e6261fff","thickness":3,"rounded":true}}
```

Standard quattroquadri rules: all the digits from 1 to 9 must appear in each 3x3 box, and digits may not repeat in a row or column.
Renban: a purple line must contain a non-repeating set of consecutive digits in any order.
Anti-palindrome: digits equidistant from each end of a red line must sum to 10.
XV pairs: digits separated by a V must sum to 5; digits separated by an X must sum to 10.
