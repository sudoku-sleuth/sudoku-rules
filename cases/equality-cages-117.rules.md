---
format: open-rules
title: Equality Cages 117
setter: gUBBLOR and Isamook
source: https://sudokupad.app/xd5la42tsu
case: https://sudoku-sleuth.com/cases/equality-cages-117
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
exported: e373c62ea1c9324b8894814eb99a2916
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
equality-cage-1: equality-cage r2c2-r3c1-r3c2-r4c2
equality-cage-2: equality-cage r5c2-r5c3-r6c2-r6c3-r7c2-r8c2
equality-cage-3: equality-cage r1c6-r1c7-r1c8-r2c6
equality-cage-4: equality-cage r2c9-r3c8-r3c9-r4c8
equality-cage-5: equality-cage r3c5-r3c6-r4c6-r4c7
equality-cage-6: equality-cage r6c7-r7c7
equality-cage-7: equality-cage r7c8-r7c9
equality-cage-8: equality-cage r1c3-r2c3
equality-cage-9: equality-cage r8c4-r9c4
kropki-1: kropki r1c1-r1c2 black
kropki-2: kropki r7c4-r7c5 black
kropki-3: kropki r1c8-r1c9 white
kropki-4: kropki r1c9-r2c9 white
kropki-5: kropki r2c2-r2c3 white
kropki-6: kropki r4c3-r4c4 white
kropki-7: kropki r7c7-r7c8 white
kropki-8: kropki r5c1-r5c2 white
kropki-9: kropki r3c5-r3c6 white
kropki-10: kropki r5c8-r5c9 white
kropki-11: kropki r9c7-r9c8 white
pair-1: pair r5c2-r6c2 sum 10
pair-2: pair r2c4-r2c5 sum 10
pair-3: pair r5c6-r5c7 sum 10
pair-4: pair r4c4-r4c5 sum 10
pair-5: pair r8c3-r9c3 sum 10
pair-6: pair r5c3-r6c3 sum 10
pair-7: pair r8c1-r9c1 sum 10
pair-8: pair r2c2-r3c2 sum 5
constructed-regions size 9 borders [] joins []
```

Chaos Construction: Place the digits 1 to 9 once each in every row, column, and region. The regions are orthogonally connected and the shapes must be deduced by the solver. No constraint may cross region borders.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

XV: Adjacent cells connected with an X must sum to 10. Adjacent cells connected with a V must sum to 5. Not all X's or V's are shown.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.
