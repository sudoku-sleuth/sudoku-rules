---
format: open-rules
title: GAS Register
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/cv07d28f2s
case: https://sudoku-sleuth.com/cases/gas-register
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=2 r1c8=3 r5c5=3 r6c9=1 r8c1=6 r9c2=8 r9c8=2
---

```rules
sudoku 9x9
thermo-1: thermo r7c2-r6c2-r5c2-r4c2-r3c2
thermo-2: thermo r7c4-r6c4-r5c4-r4c4-r3c4
thermo-3: thermo r7c6-r6c6-r5c6-r4c6-r3c6
thermo-4: thermo r7c8-r6c8-r5c8-r4c8-r3c8
thermo-5: thermo r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8
thermo-6: thermo r2c8-r2c7-r2c6-r2c5-r2c4-r2c3-r2c2
```

**Sudoku, Thermometers**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
