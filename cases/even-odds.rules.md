---
format: open-rules
title: Even Odds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fxwv7jnz60
case: https://sudoku-sleuth.com/cases/even-odds
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c3=2 r3c7=1 r5c2=5 r5c8=3 r7c5=6 r8c1=3 r8c9=9
---

```rules
sudoku 9x9
renban-1: renban r4c1-r3c1-r2c2-r1c3-r1c4
renban-2: renban r1c6-r1c7-r2c8-r3c9-r4c9
renban-3: renban r6c9-r7c9-r8c8-r9c7-r9c6
renban-4: renban r9c4-r9c3-r8c2-r7c1-r6c1
renban-5: renban r4c2-r4c3-r3c4-r2c4
renban-6: renban r2c6-r3c6-r4c7-r4c8
renban-7: renban r6c8-r6c7-r7c6-r8c6
renban-8: renban r6c2-r6c3-r7c4-r8c4
parity-cells-1: parity-cells r7c3-r4c7-r2c6-r2c4-r6c3-r8c4-r8c6-r6c7-r4c3 parity "odd"
parity-cells-2: parity-cells r1c1-r1c5-r1c9-r5c1-r9c1-r9c5-r9c9-r5c9-r4c4-r6c6-r4c6-r6c4 parity "even"
```

**Sudoku, Renban, Even/Odd**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Even/Odd: Cells marked with a grey square contain even digits. Cells marked with a grey circle contain odd digits.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
