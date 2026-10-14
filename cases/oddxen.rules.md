---
format: open-rules
title: OddXen
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/oddxen
case: https://sudoku-sleuth.com/cases/oddxen
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c6=9 r4c1=2 r6c9=3 r9c4=8
exported: 9dc6adcd16b114e5059779a2555173fc
---

```rules
sudoku 9x9
kropki-1: kropki r7c2-r8c2 white
kropki-2: kropki r8c2-r8c3 white
kropki-3: kropki r6c3-r7c3 white
kropki-4: kropki r7c3-r7c4 white
kropki-5: kropki r3c3-r4c3 white
kropki-6: kropki r3c3-r3c4 white
kropki-7: kropki r1c8-r1c9 white
kropki-8: kropki r1c9-r2c9 white
kropki-9: kropki r2c7-r2c8 white
kropki-10: kropki r2c8-r3c8 white
kropki-11: kropki r3c7-r4c7 white
kropki-12: kropki r7c6-r7c7 white
kropki-13: kropki r8c7-r8c8 white
kropki-14: kropki r9c8-r9c9 white
kropki-15: kropki r5c2-r5c3 black
parity-cells r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9-r9c1-r8c2-r7c3-r6c4-r4c6-r2c8-r3c7-r1c9 parity "odd"
```

**Sudoku, Odds, Consecutive Dots**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Odds: Digits in cells marked with a grey circle are odd.
- Consecutive Dots: Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
