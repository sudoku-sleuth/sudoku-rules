---
format: open-rules
title: Dotty Crown Seeking Palindrome
setter: Chip Sounder
source: https://sudokupad.app/7la0350d5m
case: https://sudoku-sleuth.com/cases/dotty-crown-seeking-palindrome
library: https://rules.sudoku-sleuth.com/
status: read
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
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
    - - r3c1
      - r3c2
      - r3c3
      - r4c1
      - r4c2
      - r4c3
    - - r3c4
      - r3c5
      - r3c6
      - r4c4
      - r4c5
      - r4c6
    - - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
exported: 5a773d717050de013c02fa248fd71f47
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
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3
unique-14: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6
unique-15: unique r3c1-r3c2-r3c3-r4c1-r4c2-r4c3
unique-16: unique r3c4-r3c5-r3c6-r4c4-r4c5-r4c6
unique-17: unique r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-18: unique r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
anti-king
kropki-1: kropki r3c3-r4c3 white
kropki-2: kropki r4c3-r4c4 white
kropki-3: kropki r3c4-r4c4 white
kropki-4: kropki r6c1-r6c2 black
kropki-5: kropki r1c1-r1c2 black
palindrome-1: palindrome r5c3-r4c2-r3c2-r2c3-r2c4-r3c5-r4c5
palindrome-2: palindrome r1c3-r2c2-r3c1
palindrome-3: palindrome r1c4-r2c5-r3c6
sandwich-1: sandwich r3c1-r3c2-r3c3-r3c4-r3c5-r3c6 crusts [1,6] sum 7
sandwich-2: sandwich r1c3-r2c3-r3c3-r4c3-r5c3-r6c3 crusts [1,6] sum 9
```

Normal 6x6 sudoku rules apply: each column, row, and 2x3 box must contain all the digits from 1 to 6.
Digits seperated by a king's move (in chess) cannot contain the same digit.
Digits separated by a white dot are consecutive. 
Digits seperated by a black dot are a 1:2 ratio.
Not all dots are given.
Clues outside the grid give the sum of the digits between 1 and 6.
Digits on a grey line are a palindrome and read the same forwards as backwards.
