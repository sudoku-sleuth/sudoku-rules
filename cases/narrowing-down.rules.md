---
format: open-rules
title: Narrowing Down
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/w6q6yldld3
case: https://sudoku-sleuth.com/cases/narrowing-down
library: https://rules.sudoku-sleuth.com/
status: read
givens: r5c3=4
exported: 2a0d61072857a14382fcd41bc9c4cd59
---

```rules
sudoku 9x9
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo-1: thermo r3c2-r2c1-r3c1-r4c1-r4c2-r4c3
thermo-2: thermo r2c3-r1c2-r1c3-r1c4-r2c4-r3c4
thermo-3: thermo r7c8-r8c9-r7c9
thermo-4: thermo r3c8-r2c9-r3c9
thermo-5: thermo r2c7-r1c8-r1c7-r1c6
thermo-6: thermo r8c3-r9c2-r9c3
thermo-7: thermo r8c7-r9c8-r9c7-r8c6-r7c5
thermo-8: thermo r4c5-r5c6
quadruple-1: quadruple r2c2-r2c3-r3c2-r3c3 digits [1]
quadruple-2: quadruple r7c7-r7c8-r8c7-r8c8 digits [1]
quadruple-3: quadruple r8c8-r8c9-r9c8-r9c9 digits [2]
quadruple-4: quadruple r1c1-r1c2-r2c1-r2c2 digits [2]
quadruple-5: quadruple r2c7-r2c8-r3c7-r3c8 digits [3]
quadruple-6: quadruple r7c2-r7c3-r8c2-r8c3 digits [3]
quadruple-7: quadruple r8c1-r8c2-r9c1-r9c2 digits [4]
quadruple-8: quadruple r1c8-r1c9-r2c8-r2c9 digits [4]
quadruple-9: quadruple r4c4-r4c5-r5c4-r5c5 digits [1,9]
quadruple-10: quadruple r5c5-r5c6-r6c5-r6c6 digits [2,8]
quadruple-11: quadruple r4c5-r4c6-r5c5-r5c6 digits [3,6]
quadruple-12: quadruple r5c4-r5c5-r6c4-r6c5 digits [4,7]
```

**Sudoku, Diagonals, Thermometers, Quadruples**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Diagonals: Digits may not repeat along either of the marked long diagonals.
- Thermometers: Digits along thermometers strictly increase as you move away from the bulb.
- Quadruples: Digits in a quadruples circle must appear at least once in the four cells surrounding the quadruple.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
