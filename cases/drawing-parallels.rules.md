---
format: open-rules
title: Drawing parallels
setter: sujoyku
source: ""
case: https://sudoku-sleuth.com/cases/drawing-parallels
library: https://rules.sudoku-sleuth.com/
status: read
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
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
    - - r1c5
      - r1c6
      - r1c7
      - r2c5
      - r2c6
      - r2c7
      - r3c7
    - - r1c4
      - r2c4
      - r3c2
      - r3c3
      - r3c4
      - r4c1
      - r4c2
    - - r4c6
      - r4c7
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r7c4
    - - r3c5
      - r3c6
      - r4c3
      - r4c4
      - r4c5
      - r5c2
      - r5c3
    - - r5c1
      - r6c1
      - r6c2
      - r6c3
      - r7c1
      - r7c2
      - r7c3
    - - r5c7
      - r6c5
      - r6c6
      - r6c7
      - r7c5
      - r7c6
      - r7c7
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
unique-15: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1
unique-16: unique r1c5-r1c6-r1c7-r2c5-r2c6-r2c7-r3c7
unique-17: unique r1c4-r2c4-r3c2-r3c3-r3c4-r4c1-r4c2
unique-18: unique r4c6-r4c7-r5c4-r5c5-r5c6-r6c4-r7c4
unique-19: unique r3c5-r3c6-r4c3-r4c4-r4c5-r5c2-r5c3
unique-20: unique r5c1-r6c1-r6c2-r6c3-r7c1-r7c2-r7c3
unique-21: unique r5c7-r6c5-r6c6-r6c7-r7c5-r7c6-r7c7
cage-1: cage r2c1-r3c1 repeats false total 9 connected true
cage-2: cage r5c1-r6c1 repeats false total 5 connected true
cage-3: cage r5c7-r6c7 repeats false total 11 connected true
cage-4: cage r2c7-r3c7 repeats false total 5 connected true
cage-5: cage r1c2-r1c3 repeats false total 9 connected true
cage-6: cage r7c5-r7c6 repeats false total 8 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
palindrome-1: palindrome r7c3-r6c3-r5c2-r4c1-r3c2
palindrome-2: palindrome r7c4-r6c4-r5c3-r4c2-r3c3
palindrome-3: palindrome r1c4-r2c4-r3c5-r4c6-r5c5
palindrome-4: palindrome r1c5-r2c5-r3c6-r4c7-r5c6
```

Normal irregular 7x7 Sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 7. Digits on a grey line form a palindrome, i.e. they read the same forward and backward. On the marked diagonals digits do not repeat. Digits in a cage do not repeat and sum to the clue in the top left.
