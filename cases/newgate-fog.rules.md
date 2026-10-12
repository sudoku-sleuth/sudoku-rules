---
fog:
  initiallyLit:
    - 1
    - 10
    - 11
    - 31
    - 39
    - 40
    - 41
    - 49
format: open-rules
title: Newgate Fog
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/4n43nc0xv2
case: https://sudoku-sleuth.com/cases/newgate-fog
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
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
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
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
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
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r3c3-r3c4-r4c3-r4c4 total 30 connected true
cage-2: cage r6c6-r6c7-r7c6-r7c7 total 30 connected true
cage-3: cage r4c5-r5c4-r5c5-r5c6-r6c5 total 15 connected true
cage-4: cage r7c2-r8c1-r8c2-r8c3-r9c2 total 35 connected true
cage-5: cage r1c8-r2c7-r2c8-r2c9-r3c8 total 35 connected true
cage-6: cage r1c2-r2c2-r2c3 total 7 connected true
cage-7: cage r8c7-r8c8-r9c8 total 16 connected true
kropki-1: kropki r5c6-r5c7 colour "white"
kropki-2: kropki r5c7-r6c7 colour "white"
kropki-3: kropki r2c8-r3c8 colour "white"
kropki-4: kropki r2c8-r2c9 colour "white"
kropki-5: kropki r7c2-r8c2 colour "white"
kropki-6: kropki r8c1-r8c2 colour "white"
kropki-7: kropki r2c1-r2c2 colour "white"
kropki-8: kropki r2c2-r2c3 colour "white"
kropki-9: kropki r8c8-r9c8 colour "white"
kropki-10: kropki r9c1-r9c2 colour "white"
kropki-11: kropki r3c6-r3c7 colour "white"
kropki-12: kropki r3c7-r4c7 colour "white"
kropki-13: kropki r4c7-r4c8 colour "white"
kropki-14: kropki r4c4-r4c5 colour "black"
kropki-15: kropki r6c5-r6c6 colour "black"
kropki-16: kropki r5c3-r5c4 colour "black"
kropki-17: kropki r4c3-r5c3 colour "black"
kropki-18: kropki r2c7-r3c7 colour "black"
kropki-19: kropki r7c3-r8c3 colour "black"
kropki-20: kropki r2c6-r2c7 colour "black"
kropki-21: kropki r8c3-r8c4 colour "black"
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

Normal killer cage rules: digits inside cages marked by dashed lines cannot repeat and must sum to the value shown in the upper left corner of the cage.

Digits separated by a black dot are a number and its double in some order. Digits separated by a white dot are a consecutive pair. Not all dots are given.

Fog: Standard fog rules apply. When a correct digit is placed, the eight cells surrounding the correct digit will be revealed, including any clues in those cells hidden by the fog. It is possible to pencilmark or place digits in the fog.

Exported from f-puzzles.com
