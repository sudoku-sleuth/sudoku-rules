---
format: open-rules
title: 8x8 Zigzag Sudoku Snack
setter: sujoyku
source: https://tinyurl.com/3xm637nm
case: https://sudoku-sleuth.com/cases/8x8-zigzag-sudoku-snack
library: https://rules.sudoku-sleuth.com/
status: read
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
      - r2c1
      - r2c2
      - r2c3
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r3c4
      - r3c5
      - r4c4
      - r5c4
    - - r3c1
      - r4c1
      - r4c2
      - r4c3
      - r5c2
      - r5c3
      - r6c3
      - r6c4
    - - r1c7
      - r1c8
      - r2c5
      - r2c6
      - r2c7
      - r2c8
      - r3c7
      - r4c7
    - - r5c1
      - r6c1
      - r6c2
      - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
    - - r3c6
      - r4c5
      - r4c6
      - r5c5
      - r5c6
      - r5c7
      - r6c6
      - r6c7
    - - r6c5
      - r7c4
      - r7c5
      - r7c6
      - r8c3
      - r8c4
      - r8c5
      - r8c6
    - - r3c8
      - r4c8
      - r5c8
      - r6c8
      - r7c7
      - r7c8
      - r8c7
      - r8c8
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
unique-17: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c2-r3c3
unique-18: unique r1c4-r1c5-r1c6-r2c4-r3c4-r3c5-r4c4-r5c4
unique-19: unique r3c1-r4c1-r4c2-r4c3-r5c2-r5c3-r6c3-r6c4
unique-20: unique r1c7-r1c8-r2c5-r2c6-r2c7-r2c8-r3c7-r4c7
unique-21: unique r5c1-r6c1-r6c2-r7c1-r7c2-r7c3-r8c1-r8c2
unique-22: unique r3c6-r4c5-r4c6-r5c5-r5c6-r5c7-r6c6-r6c7
unique-23: unique r6c5-r7c4-r7c5-r7c6-r8c3-r8c4-r8c5-r8c6
unique-24: unique r3c8-r4c8-r5c8-r6c8-r7c7-r7c8-r8c7-r8c8
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
arrow-1: arrow r3c3-r2c3-r1c3 bulb ["r4c3"]
arrow-2: arrow r8c4-r8c5-r8c6 bulb ["r8c3"]
arrow-3: arrow r7c2-r6c2-r6c1 bulb ["r7c3"]
palindrome-1: palindrome r4c6-r3c6-r3c5-r3c4-r4c3-r5c4-r5c3-r5c2-r5c1-r6c1
palindrome-2: palindrome r3c7-r3c8-r4c7-r5c7-r6c7-r6c6-r7c6-r7c5-r8c5-r7c4-r8c3-r8c2-r7c1
little-killer r6c8-r5c7-r4c6-r3c5-r2c4-r1c3 sum 14
```

Normal irregular 8x8 Sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 8. On the main diagonals digits do not repeat. Digits on a grey line form a palindrome, i.e. they read the same forward and backward. Digits on an arrow sum to the digit in the circle from which the arrow emerges. Digits on a marked diagonal sum to the little killer clue outside the grid. (If there is no conflict with other rules, digits on such a diagonal may repeat.)
