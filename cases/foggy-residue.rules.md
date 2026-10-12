---
fog:
  initiallyLit:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 9
    - 10
    - 11
    - 12
    - 13
    - 14
    - 18
    - 19
    - 20
    - 21
    - 22
    - 23
    - 27
    - 28
    - 29
    - 30
    - 31
    - 32
    - 36
    - 37
    - 38
    - 39
    - 40
    - 41
    - 45
    - 46
    - 47
    - 48
    - 49
    - 50
  links:
    - trigger:
        - 0
        - 1
        - 2
        - 3
        - 4
        - 5
        - 9
        - 10
        - 11
        - 12
        - 13
        - 14
        - 18
        - 19
        - 20
        - 21
        - 22
        - 23
        - 27
        - 28
        - 29
        - 30
        - 31
        - 32
        - 36
        - 37
        - 38
        - 39
        - 40
        - 41
        - 45
        - 46
        - 47
        - 48
        - 49
        - 50
      lights:
        - 6
        - 7
        - 8
        - 15
        - 16
        - 17
        - 24
        - 25
        - 26
        - 33
        - 34
        - 35
        - 42
        - 43
        - 44
        - 51
        - 52
        - 53
        - 54
        - 55
        - 56
        - 57
        - 58
        - 59
        - 60
        - 61
        - 62
        - 63
        - 64
        - 65
        - 66
        - 67
        - 68
        - 69
        - 70
        - 71
        - 72
        - 73
        - 74
        - 75
        - 76
        - 77
        - 78
        - 79
        - 80
format: open-rules
title: Foggy Residue
setter: Timotab
source: https://sudokupad.app/th3whfnxr2
case: https://sudoku-sleuth.com/cases/foggy-residue
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
quadruple-1: quadruple r1c1-r1c2-r2c1-r2c2 digits [2,5,7]
quadruple-2: quadruple r2c2-r2c3-r3c2-r3c3 digits [3,7,9]
quadruple-3: quadruple r1c5-r1c6-r2c5-r2c6 digits [3,8,9]
quadruple-4: quadruple r2c4-r2c5-r3c4-r3c5 digits [1,4,8]
quadruple-5: quadruple r4c2-r4c3-r5c2-r5c3 digits [2,8,9]
quadruple-6: quadruple r5c1-r5c2-r6c1-r6c2 digits [1,7,9]
quadruple-7: quadruple r4c4-r4c5-r5c4-r5c5 digits [3,4,6]
quadruple-8: quadruple r5c5-r5c6-r6c5-r6c6 digits [2,4,8]
quadruple-9: quadruple r7c7-r7c8-r8c7-r8c8 digits [3,4,6]
quadruple-10: quadruple r8c8-r8c9-r9c8-r9c9 digits [2,4,8]
window-classes classes "mod3" stated true
```

• Normal Sudoku rules apply: place the digits 1-9 in every row, column, and box, without repetition.
• Dynamic Fog: The grid is partially covered in fog. When all initially-unfogged cells have correct digits, the fog in the rest of the puzzle will clear. No guessing is necessary.
• Quadruples: Digits in the circles must all appear at least once in the cells touching them.
• Global modulo-3: Every 2x2 in the grid contains at least one digit from each of the modulo-3 residue class sets: {1,4,7}, {2,5,8}, {3,6,9}
