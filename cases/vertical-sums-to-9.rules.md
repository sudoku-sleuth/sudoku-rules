---
format: open-rules
title: Vertical Sums to 9
setter: Will Power
source: https://sudokupad.app/zbpu7fhdg8
case: https://sudoku-sleuth.com/cases/vertical-sums-to-9
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
  regions:
    - - r1c1
      - r2c1
      - r3c1
      - r4c1
      - r5c1
      - r6c1
      - r7c1
      - r8c1
      - r9c1
    - - r1c2
      - r2c2
      - r3c2
      - r4c2
      - r5c2
      - r6c2
      - r7c2
      - r8c2
      - r9c2
    - - r1c3
      - r2c3
      - r3c3
      - r4c3
      - r5c3
      - r6c3
      - r7c3
      - r8c3
      - r9c3
    - - r1c4
      - r2c4
      - r3c4
      - r4c4
      - r5c4
      - r6c4
      - r7c4
      - r8c4
      - r9c4
    - - r1c5
      - r2c5
      - r3c5
      - r4c5
      - r5c5
      - r6c5
      - r7c5
      - r8c5
      - r9c5
    - - r1c6
      - r2c6
      - r3c6
      - r4c6
      - r5c6
      - r6c6
      - r7c6
      - r8c6
      - r9c6
    - - r1c7
      - r2c7
      - r3c7
      - r4c7
      - r5c7
      - r6c7
      - r7c7
      - r8c7
      - r9c7
    - - r1c8
      - r2c8
      - r3c8
      - r4c8
      - r5c8
      - r6c8
      - r7c8
      - r8c8
      - r9c8
    - - r1c9
      - r2c9
      - r3c9
      - r4c9
      - r5c9
      - r6c9
      - r7c9
      - r8c9
      - r9c9
exported: 3e9fc3b8f2429c0bfafd730ee60f8c56
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
unique-19: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-20: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-21: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-22: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-23: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-24: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-25: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-26: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-27: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
kropki-1: kropki r1c9-r2c9 white
kropki-2: kropki r2c9-r3c9 white
kropki-3: kropki r3c9-r4c9 white
kropki-4: kropki r4c9-r5c9 white
kropki-5: kropki r5c9-r6c9 white
kropki-6: kropki r6c9-r7c9 white
kropki-7: kropki r7c9-r8c9 white
kropki-8: kropki r8c9-r9c9 white
kropki-9: kropki r6c8-r7c8 white
kropki-10: kropki r2c8-r3c8 white
kropki-11: kropki r2c7-r3c7 white
kropki-12: kropki r8c6-r9c6 white
kropki-13: kropki r6c6-r7c6 white
kropki-14: kropki r3c6-r4c6 white
kropki-15: kropki r1c6-r2c6 white
kropki-16: kropki r3c3-r4c3 white
kropki-17: kropki r7c2-r8c2 white
kropki-18: kropki r6c2-r7c2 white
kropki-19: kropki r5c2-r6c2 white
kropki-20: kropki r4c2-r5c2 white
kropki-21: kropki r3c2-r4c2 white
kropki-22: kropki r1c2-r2c2 white
kropki-23: kropki r3c1-r4c1 white
kropki-24: kropki r7c1-r8c1 white
kropki-25: kropki r1c8-r1c9 black
kropki-26: kropki r1c7-r1c8 black
kropki-27: kropki r1c5-r1c6 black
kropki-28: kropki r5c1-r5c2 black
kropki-29: kropki r7c3-r7c4 black
kropki-30: kropki r8c6-r8c7 black
kropki-31: kropki r9c2-r9c3 black
kropki-32: kropki r9c3-r9c4 black
kropki-33: kropki r9c5-r9c6 black
renban r1c1-r1c2-r1c3
negative relations [{"op":"difference","value":1},{"op":"ratio","value":2}] except [["r1c9","r2c9"],["r2c9","r3c9"],["r3c9","r4c9"],["r4c9","r5c9"],["r5c9","r6c9"],["r6c9","r7c9"],["r7c9","r8c9"],["r8c9","r9c9"],["r6c8","r7c8"],["r2c8","r3c8"],["r2c7","r3c7"],["r8c6","r9c6"],["r6c6","r7c6"],["r3c6","r4c6"],["r1c6","r2c6"],["r3c3","r4c3"],["r7c2","r8c2"],["r6c2","r7c2"],["r5c2","r6c2"],["r4c2","r5c2"],["r3c2","r4c2"],["r1c2","r2c2"],["r3c1","r4c1"],["r7c1","r8c1"],["r1c8","r1c9"],["r1c7","r1c8"],["r1c5","r1c6"],["r5c1","r5c2"],["r7c3","r7c4"],["r8c6","r8c7"],["r9c2","r9c3"],["r9c3","r9c4"],["r9c5","r9c6"]]
```

Every row and column must have all digits from 1 through 9, without repeats. THERE ARE NO 3x3 BOXES IN THIS PUZZLE. 
VERTICAL SUMS- IF ALL CASES OF THE 9 ARE SKIPPED / NOT CONSIDERED IN THE COUNTING, numbers an equal distance from the top and bottom of each column sum to 9.
KROPKI PAIRS- Numbers with a white dot between them are consecutive. ALL possible white dots between VERTICAL neighbors are given. Numbers with a black dot between them are in a ratio of 2:1. ALL possible black dots between HORIZONTAL neighbors are given.
RENBAN LINE- Numbers on the purple line are a set of non-repeating, consecutive numbers, in any order.
