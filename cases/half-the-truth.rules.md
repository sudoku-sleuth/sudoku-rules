---
format: open-rules
title: Half the truth
setter: sujoyku
source: https://sudokupad.app/q13yshjndb
case: https://sudoku-sleuth.com/cases/half-the-truth
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
board:
  rows: 8
  cols: 8
  symbols:
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r1c4
      - r2c1
      - r2c2
      - r2c3
      - r2c4
    - - r1c5
      - r1c6
      - r1c7
      - r1c8
      - r2c5
      - r2c6
      - r2c7
      - r2c8
    - - r3c1
      - r3c2
      - r3c3
      - r3c4
      - r4c1
      - r4c2
      - r4c3
      - r4c4
    - - r3c5
      - r3c6
      - r3c7
      - r3c8
      - r4c5
      - r4c6
      - r4c7
      - r4c8
    - - r5c1
      - r5c2
      - r5c3
      - r5c4
      - r6c1
      - r6c2
      - r6c3
      - r6c4
    - - r5c5
      - r5c6
      - r5c7
      - r5c8
      - r6c5
      - r6c6
      - r6c7
      - r6c8
    - - r7c1
      - r7c2
      - r7c3
      - r7c4
      - r8c1
      - r8c2
      - r8c3
      - r8c4
    - - r7c5
      - r7c6
      - r7c7
      - r7c8
      - r8c5
      - r8c6
      - r8c7
      - r8c8
exported: b5a8c82eaeeba0bd13c5e6377d6df5cd
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
unique-9: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
unique-10: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2
unique-11: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3
unique-12: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4
unique-13: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5
unique-14: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6
unique-15: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7
unique-16: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8
unique-17: unique r1c1-r1c2-r1c3-r1c4-r2c1-r2c2-r2c3-r2c4
unique-18: unique r1c5-r1c6-r1c7-r1c8-r2c5-r2c6-r2c7-r2c8
unique-19: unique r3c1-r3c2-r3c3-r3c4-r4c1-r4c2-r4c3-r4c4
unique-20: unique r3c5-r3c6-r3c7-r3c8-r4c5-r4c6-r4c7-r4c8
unique-21: unique r5c1-r5c2-r5c3-r5c4-r6c1-r6c2-r6c3-r6c4
unique-22: unique r5c5-r5c6-r5c7-r5c8-r6c5-r6c6-r6c7-r6c8
unique-23: unique r7c1-r7c2-r7c3-r7c4-r8c1-r8c2-r8c3-r8c4
unique-24: unique r7c5-r7c6-r7c7-r7c8-r8c5-r8c6-r8c7-r8c8
cage-1: cage r1c1-r1c2-r2c1-r2c2 repeats false total 15 connected true
cage-2: cage r1c7-r1c8-r2c7-r2c8 repeats false total 24 connected true
cage-3: cage r7c7-r7c8-r8c7-r8c8 repeats false total 12 connected true
cage-4: cage r7c1-r7c2-r8c1-r8c2 repeats false total 22 connected true
arrow-1: arrow r2c3-r3c2-r4c1 bulb ["r1c4"]
arrow-2: arrow r7c6-r6c7-r5c8 bulb ["r8c5"]
arrow-3: arrow r6c2-r7c3-r8c4 bulb ["r5c1"]
arrow-4: arrow r3c7-r2c6-r1c5 bulb ["r4c8"]
arrow-5: arrow r7c5 bulb ["r6c6"]
arrow-6: arrow r2c4 bulb ["r3c3"]
little-killer-1: little-killer r5c8-r6c7-r7c6-r8c5 sum 16
little-killer-2: little-killer r8c4-r7c3-r6c2-r5c1 sum 10
little-killer-3: little-killer r4c1-r3c2-r2c3-r1c4 sum 12
little-killer-4: little-killer r1c5-r2c6-r3c7-r4c8 sum 14
little-killer-5: little-killer r2c1-r1c2 sum 11
little-killer-6: little-killer r8c2-r7c1 sum 13
little-killer-7: little-killer r7c8-r8c7 sum 9
little-killer-8: little-killer r1c7-r2c8 sum 15
```

- Normal 8x8 sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 8 once each.

- Killer cages: Digits in a cage sum to the clue in the top left.

- Little killers: Digits on a marked diagonal sum to the clue outside the grid. (If there is no conflict with other rules, digits on such a diagonal may repeat.)

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.
