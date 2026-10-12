---
format: open-rules
title: Ren and Thermy
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kjt04m1v8e
case: https://sudoku-sleuth.com/cases/ren-and-thermy
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c8=7
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r1c2-r1c3-r2c3-r2c2-r2c1-r3c1
thermo-2: thermo r2c4-r3c4-r3c5-r3c6-r4c6-r5c6
thermo-3: thermo r2c7-r3c7-r4c7-r5c7-r5c8-r4c8
thermo-4: thermo r6c9-r6c8-r6c7-r7c7-r8c7
thermo-5: thermo r9c6-r9c5-r8c5-r7c5-r7c4-r8c4
thermo-6: thermo r8c1-r8c2-r8c3-r7c3-r6c3-r6c2
renban-1: renban r7c3-r8c3-r8c4-r7c4
renban-2: renban r6c6-r6c7-r7c7-r7c6
renban-3: renban r4c6-r5c6-r5c7-r4c7
renban-4: renban r3c4-r4c4-r4c5-r3c5
renban-5: renban r2c2-r3c2-r3c3-r2c3
```

**Sudoku, Renban, Thermometers**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Thermometers: Digits on grey thermometers are strictly increasing from bulb to tip.

To get a weekly digest of puzzles, please join our mailing list at https://missingdeck.net/mailing.html
