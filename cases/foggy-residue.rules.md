---
fog:
  initiallyLit:
    - r1c1
    - r1c2
    - r1c3
    - r1c4
    - r1c5
    - r1c6
    - r2c1
    - r2c2
    - r2c3
    - r2c4
    - r2c5
    - r2c6
    - r3c1
    - r3c2
    - r3c3
    - r3c4
    - r3c5
    - r3c6
    - r4c1
    - r4c2
    - r4c3
    - r4c4
    - r4c5
    - r4c6
    - r5c1
    - r5c2
    - r5c3
    - r5c4
    - r5c5
    - r5c6
    - r6c1
    - r6c2
    - r6c3
    - r6c4
    - r6c5
    - r6c6
  links:
    - trigger:
        - r1c1
        - r1c2
        - r1c3
        - r1c4
        - r1c5
        - r1c6
        - r2c1
        - r2c2
        - r2c3
        - r2c4
        - r2c5
        - r2c6
        - r3c1
        - r3c2
        - r3c3
        - r3c4
        - r3c5
        - r3c6
        - r4c1
        - r4c2
        - r4c3
        - r4c4
        - r4c5
        - r4c6
        - r5c1
        - r5c2
        - r5c3
        - r5c4
        - r5c5
        - r5c6
        - r6c1
        - r6c2
        - r6c3
        - r6c4
        - r6c5
        - r6c6
      lights:
        - r1c7
        - r1c8
        - r1c9
        - r2c7
        - r2c8
        - r2c9
        - r3c7
        - r3c8
        - r3c9
        - r4c7
        - r4c8
        - r4c9
        - r5c7
        - r5c8
        - r5c9
        - r6c7
        - r6c8
        - r6c9
        - r7c1
        - r7c2
        - r7c3
        - r7c4
        - r7c5
        - r7c6
        - r7c7
        - r7c8
        - r7c9
        - r8c1
        - r8c2
        - r8c3
        - r8c4
        - r8c5
        - r8c6
        - r8c7
        - r8c8
        - r8c9
        - r9c1
        - r9c2
        - r9c3
        - r9c4
        - r9c5
        - r9c6
        - r9c7
        - r9c8
        - r9c9
format: open-rules
title: Foggy Residue
setter: Timotab
source: https://sudokupad.app/th3whfnxr2
case: https://sudoku-sleuth.com/cases/foggy-residue
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
exported: 0d4f1992bae61a930e7cdd4035173307
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
