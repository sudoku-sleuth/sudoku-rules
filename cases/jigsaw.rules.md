---
format: open-rules
title: Jigsaw
setter: Blobz
source: https://sudokupad.app/blobz/jigsaw
case: https://sudoku-sleuth.com/cases/jigsaw
library: https://rules.sudoku-sleuth.com/
status: read
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
  givens: r2c5=9 r5c2=6 r5c5=3 r7c7=2 r9c4=1
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r2c4
      - r3c1
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c5
      - r2c6
      - r2c7
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
      - r4c8
    - - r3c2
      - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
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
    - - r4c7
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
      - r7c8
    - - r6c2
      - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c3
      - r8c4
      - r8c5
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c9
      - r8c6
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
exported: b59cad763d1c8f8ed1000c1ad094138c
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
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r2c4-r3c1-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c5-r2c6-r2c7-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c8-r2c9-r3c7-r3c8-r3c9-r4c8
unique-22: unique r3c2-r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9-r7c8
unique-25: unique r6c2-r7c1-r7c2-r7c3-r8c1-r8c2-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c3-r8c4-r8c5-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c9-r8c6-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
palindrome-1: palindrome r3c7-r2c6-r1c5
palindrome-2: palindrome r2c1-r3c2
palindrome-3: palindrome r5c1-r6c2
palindrome-4: palindrome r5c3-r4c4-r3c5
palindrome-5: palindrome r6c3-r5c4-r4c5
palindrome-6: palindrome r7c3-r6c4-r5c5
palindrome-7: palindrome r8c3-r7c4-r6c5
palindrome-8: palindrome r9c3-r8c4-r7c5
palindrome-9: palindrome r7c6-r8c7-r9c8
palindrome-10: palindrome r4c6-r5c7-r6c8
pair-1: pair r2c4-r3c4 sum 10
pair-2: pair r4c1-r4c2 sum 10
pair-3: pair r7c2-r8c2 sum 10
pair-4: pair r7c3-r7c4 sum 10
pair-5: pair r7c6-r8c6 sum 10
pair-6: pair r9c6-r9c7 sum 10
pair-7: pair r6c7-r6c8 sum 10
pair-8: pair r5c6-r5c7 sum 10
pair-9: pair r1c8-r2c8 sum 10
negative relations [{"op":"sum","value":10}] except [["r2c4","r3c4"],["r4c1","r4c2"],["r7c2","r8c2"],["r7c3","r7c4"],["r7c6","r8c6"],["r9c6","r9c7"],["r6c7","r6c8"],["r5c6","r5c7"],["r1c8","r2c8"]]
```

Normal irregular sudoku rules apply: every row, column, and outlined region must contain the digits 1 to 9.

Digits separated by an X sum to 10; ALL such X's are given.

Grey lines are palindromes and read the same in both directions.
