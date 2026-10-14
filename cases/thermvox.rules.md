---
format: open-rules
title: ThermVoX
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/thermvox
case: https://sudoku-sleuth.com/cases/thermvox
library: https://rules.sudoku-sleuth.com/
status: read
exported: 322215e4d1a568b0944f25dbf20b29be
---

```rules
sudoku 9x9
thermo-1: thermo r1c1-r2c1-r3c1-r3c2-r3c3-r3c4
thermo-2: thermo r3c6-r3c7-r3c8-r3c9-r2c9-r1c9
thermo-3: thermo r7c3-r8c3-r9c3-r9c2-r9c1
thermo-4: thermo r7c7-r8c7-r9c7-r9c8-r9c9
pair-1: pair r3c2-r4c2 sum 10
pair-2: pair r3c3-r4c3 sum 10
pair-3: pair r3c4-r4c4 sum 10
pair-4: pair r1c5-r2c5 sum 10
pair-5: pair r3c6-r4c6 sum 10
pair-6: pair r3c7-r4c7 sum 10
pair-7: pair r8c1-r9c1 sum 10
pair-8: pair r6c6-r6c7 sum 10
pair-9: pair r5c4-r5c5 sum 10
pair-10: pair r1c1-r1c2 sum 5
pair-11: pair r2c1-r2c2 sum 5
pair-12: pair r2c6-r3c6 sum 5
pair-13: pair r2c7-r3c7 sum 5
```

**Sudoku, Thermometers, XV Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells separated by a X sum to 10. Not all possible Xs or Vs are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
