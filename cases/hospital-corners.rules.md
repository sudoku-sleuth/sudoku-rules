---
format: open-rules
title: Hospital Corners
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdt1vx6l8g
case: https://sudoku-sleuth.com/cases/hospital-corners
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c8=1 r5c4=3 r8c6=7
exported: b2dd52687703a6a14e6261fd1a55741d
---

```rules
sudoku 9x9
renban-1: renban r3c1-r3c2-r3c3-r2c3-r1c3
renban-2: renban r1c7-r2c7-r3c7-r3c8-r3c9
renban-3: renban r7c9-r7c8-r7c7-r8c7-r9c7
renban-4: renban r7c1-r7c2-r7c3-r8c3-r9c3
renban-5: renban r4c4-r3c5-r4c6
renban-6: renban r6c4-r7c5-r6c6
renban-7: renban r9c8-r8c9
renban-8: renban r2c1-r1c2
renban-9: renban r1c8-r2c9
renban-10: renban r8c1-r9c2
renban-11: renban r4c3-r5c2-r6c3
renban-12: renban r4c9-r5c8-r6c9
parity-cells-1: parity-cells r4c4-r6c4-r9c5 parity "odd"
parity-cells-2: parity-cells r7c2-r2c3-r7c3-r3c3-r3c7-r3c8-r7c7-r8c7-r9c3-r1c7-r3c1-r7c9-r4c9 parity "even"
```

**Standard Sudoku, Renban, Even/Odd**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Even/Odd: Cells marked with a grey square contain even digits. Cells marked with a grey circle contain odd digits.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
