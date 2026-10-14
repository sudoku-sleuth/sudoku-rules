---
format: open-rules
title: 52 weeks of setting joy
setter: Chip Sounder
source: https://sudokupad.app/e1hq833xuz
case: https://sudoku-sleuth.com/cases/52-weeks-of-setting-joy
library: https://rules.sudoku-sleuth.com/
status: read
exported: 63c4cf42c7892f514303015013931dd0
---

```rules
sudoku 9x9
cage-1: cage r4c1-r4c2-r4c3 total 21 connected true
cage-2: cage r6c8-r7c8 total 11 connected true
cage-3: cage r7c4-r7c5-r7c6 total 21 connected true
cage-4: cage r1c9-r2c9-r3c9 total 15 connected true
thermo-1: thermo r2c2-r2c3-r2c4-r2c5-r2c6-r2c7
thermo-2: thermo r7c1-r6c1-r6c2-r5c2
thermo-3: thermo r7c3-r6c4-r5c4-r5c5-r5c6
thermo-4: thermo r8c8-r7c9-r6c9-r5c9-r4c8
kropki-1: kropki r5c9-r6c9 white
kropki-2: kropki r8c1-r8c2 black
kropki-3: kropki r8c4-r9c4 black
kropki-4: kropki r6c7-r6c8 black
quadruple-1: quadruple r2c7-r2c8-r3c7-r3c8 digits [1,2,3]
quadruple-2: quadruple r6c1-r6c2-r7c1-r7c2 digits [4,7]
little-killer r1c8-r2c7-r3c6-r4c5-r5c4-r6c3-r7c2-r8c1 sum 52
```

• Normal Sudoku rules apply. Place the digits 1-9 in each row, column and box without repetition.
• Thermo: Digits on grey thermos must increase from the bulb to the tip.
• Cages: Digits in cages must sum to the number in the top left corner of the cage.
• Little Killer: Clues outside the grid with an arrow are the sum of the digits in the cells along the indicated diagonal. Digits may repeat along these diagonals if allowed by other rules.
• Quadruples: Digits in a Quadruple circle must be placed at least once in the four cells touching that circle.
• Kropki Pairs: Digits separated by a black dot must be in a 2:1 ratio. Digits separated by a white dot must be consecutive.
