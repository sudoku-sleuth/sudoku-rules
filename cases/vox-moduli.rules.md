---
format: open-rules
title: Vox Moduli
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/vox-moduli
case: https://sudoku-sleuth.com/cases/vox-moduli
library: https://rules.sudoku-sleuth.com/
status: read
givens: r8c5=9
---

```rules
sudoku 9x9
modular-1: modular r2c2-r2c3-r3c3-r3c2-r4c2-r4c3-r4c4-r5c4-r6c4-r6c3-r6c2-r7c2-r7c3-r8c3-r8c2
modular-2: modular r2c8-r2c7-r3c7-r3c8-r4c8-r4c7-r4c6-r5c6-r6c6-r6c7-r6c8-r7c8-r7c7-r8c7-r8c8
modular-3: modular r1c3-r1c4-r1c5-r1c6-r1c7
modular-4: modular r9c3-r8c4-r9c5-r8c6-r9c7
modular-5: modular r3c1-r4c1-r5c2-r6c1
modular-6: modular r3c9-r4c9-r5c8-r6c9
pair-1: pair r2c3-r2c4 relation {"op":"sum","value":10}
pair-2: pair r2c3-r3c3 relation {"op":"sum","value":10}
pair-3: pair r8c7-r9c7 relation {"op":"sum","value":10}
pair-4: pair r9c6-r9c7 relation {"op":"sum","value":10}
pair-5: pair r9c3-r9c4 relation {"op":"sum","value":10}
pair-6: pair r5c2-r5c3 relation {"op":"sum","value":10}
pair-7: pair r4c7-r5c7 relation {"op":"sum","value":10}
pair-8: pair r1c7-r1c8 relation {"op":"sum","value":10}
pair-9: pair r1c5-r1c6 relation {"op":"sum","value":5}
pair-10: pair r1c7-r2c7 relation {"op":"sum","value":5}
pair-11: pair r1c4-r2c4 relation {"op":"sum","value":5}
pair-12: pair r8c3-r9c3 relation {"op":"sum","value":5}
```

**Sudoku, Modular lines, XV pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- XV pairs: Digits in cells separated by a V sum to 5. Digits in cells separated by a X sum to 10. Not all possible Xs or Vs are necessarily given.


Subscribe to our mailing list to receive a weekly email with all of our puzzles from the previous week: https://missingdeck.net/mailing.html
