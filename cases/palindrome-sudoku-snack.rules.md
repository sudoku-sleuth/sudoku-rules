---
format: open-rules
title: Palindrome Sudoku Snack
setter: sujoyku
source: https://f-puzzles.com/?id=2dd3v89p
case: https://sudoku-sleuth.com/cases/palindrome-sudoku-snack
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
      - r3c1
    - - r1c4
      - r1c5
      - r1c6
      - r2c5
      - r2c6
      - r3c6
    - - r2c3
      - r2c4
      - r3c3
      - r3c4
      - r3c5
      - r4c5
    - - r3c2
      - r4c2
      - r4c3
      - r4c4
      - r5c3
      - r5c4
    - - r4c1
      - r5c1
      - r5c2
      - r6c1
      - r6c2
      - r6c3
    - - r4c6
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
unique-13: unique r1c1-r1c2-r1c3-r2c1-r2c2-r3c1
unique-14: unique r1c4-r1c5-r1c6-r2c5-r2c6-r3c6
unique-15: unique r2c3-r2c4-r3c3-r3c4-r3c5-r4c5
unique-16: unique r3c2-r4c2-r4c3-r4c4-r5c3-r5c4
unique-17: unique r4c1-r5c1-r5c2-r6c1-r6c2-r6c3
unique-18: unique r4c6-r5c5-r5c6-r6c4-r6c5-r6c6
kropki r4c3-r5c3 colour "white"
palindrome r6c4-r5c5-r4c5-r3c6-r2c6-r1c6-r1c5-r2c5-r3c5-r3c4-r2c4-r3c3-r4c2-r4c1-r3c2-r2c2-r1c3
pair-1: pair r1c1-r2c1 sum 5
pair-2: pair r5c6-r6c6 sum 5
negative relations [{"op":"sum","value":10},{"op":"sum","value":5}] except [["r4c3","r5c3"],["r1c1","r2c1"],["r5c6","r6c6"]]
```

Normal (irregular) 6x6 sudoku rules apply, i.e. each row, column and region has to contain the digits from 1 to 6. Digits joined by a V sum to 5. Digits joined by X sum to 10. NEGATIVE CONSTRAINT: All V and X are given. Digits NOT joined by V or X never sum to either 5 or 10. The digits on the gray line form a palindrome, i.e. the string reads the same forwards and backwards. Digits joined by a white dot are consecutive. (Not all dots are given.)
