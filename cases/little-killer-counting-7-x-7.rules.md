---
format: open-rules
title: Little Killer Counting (7 x 7)
setter: sujoyku
source: https://sudokupad.app/q5aqil9pzo
case: https://sudoku-sleuth.com/cases/little-killer-counting-7-x-7
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - A feature in the source still needs a drawing definition.
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
  regions:
    - - r1c7
      - r2c6
      - r2c7
      - r3c6
      - r3c7
      - r4c6
      - r4c7
    - - r1c4
      - r2c2
      - r2c3
      - r2c4
      - r3c2
      - r3c4
      - r4c2
    - - r1c5
      - r1c6
      - r2c5
      - r3c5
      - r4c5
      - r5c5
      - r6c5
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r3c1
      - r4c1
      - r5c1
    - - r3c3
      - r4c3
      - r4c4
      - r5c4
      - r6c4
      - r7c3
      - r7c4
    - - r5c6
      - r5c7
      - r6c6
      - r6c7
      - r7c5
      - r7c6
      - r7c7
    - - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
      - r7c1
      - r7c2
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
unique-15: unique r1c7-r2c6-r2c7-r3c6-r3c7-r4c6-r4c7
unique-16: unique r1c4-r2c2-r2c3-r2c4-r3c2-r3c4-r4c2
unique-17: unique r1c5-r1c6-r2c5-r3c5-r4c5-r5c5-r6c5
unique-18: unique r1c1-r1c2-r1c3-r2c1-r3c1-r4c1-r5c1
unique-19: unique r3c3-r4c3-r4c4-r5c4-r6c4-r7c3-r7c4
unique-20: unique r5c6-r5c7-r6c6-r6c7-r7c5-r7c6-r7c7
unique-21: unique r5c2-r5c3-r6c1-r6c2-r6c3-r7c1-r7c2
little-killer-1: little-killer r1c6-r2c7 sum 8
little-killer-2: little-killer r3c7-r4c6-r5c5-r6c4-r7c3 sum 20
little-killer-3: little-killer r5c7-r6c6-r7c5 sum 17
little-killer-4: little-killer r7c3-r6c2-r5c1 sum 20
little-killer-5: little-killer r7c2-r6c1 sum 8
```

```drawing
- {"id":"drawing-6","rules":[],"visual":{"kind":"shape","layer":"under","center":[6.5,-0.5],"width":0.8,"height":0.8,"rounded":true,"fill":"#FFFFFF","thickness":0,"angle":0}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[-0.273,3.727],[-0.061,3.939]],"color":"#579affff","thickness":2,"headLength":0.16,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[7.273,5.273],[7.061,5.061]],"color":"#579affff","thickness":2,"headLength":0.16,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[6.273,-0.273],[6.061,-0.061]],"color":"#579affff","thickness":2,"headLength":0.16,"rounded":true}}
```

- Normal (irregular) 7x7 sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 7 once each.

- Counting little killers: Digits along a marked diagonal sum to the clue outside the grid, if one is given. (If there is no conflict with other rules, digits on such a diagonal may repeat.) Moreover, any digit along a little killer diagonal indicates exactly how many little killers contain that digit. For example, if a little killer diagonal has a 3, there are exactly three little killer diagonals containing at least one 3.
