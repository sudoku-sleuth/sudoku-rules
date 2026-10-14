---
format: open-rules
title: Turnabout
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/h2lflsvmiw
case: https://sudoku-sleuth.com/cases/turnabout
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=9 r1c9=1 r5c1=6 r5c9=4 r9c1=9 r9c6=1
exported: 355e6fad8a5ac4881cb8eb0a52d7e5da
---

```rules
sudoku 9x9
thermo-1: thermo r2c1-r1c2-r1c3-r2c4-r3c4-r4c3
thermo-2: thermo r8c1-r9c2-r9c3-r8c4-r7c4-r6c3
thermo-3: thermo r6c7-r7c6-r8c6-r9c7-r9c8-r8c9
thermo-4: thermo r4c7-r3c6-r2c6-r1c7-r1c8-r2c9
renban-1: renban r3c1-r3c2-r3c3
renban-2: renban r3c7-r3c8-r3c9
renban-3: renban r7c1-r7c2-r7c3
renban-4: renban r7c7-r7c8-r7c9
renban-5: renban r3c5-r4c5
renban-6: renban r6c5-r7c5
renban-7: renban r5c2-r5c3-r5c4
renban-8: renban r5c6-r5c7-r5c8
renban-9: renban r6c8-r6c7
```

**Sudoku, Thermometers, Renban Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
