---
format: open-rules
title: Roman Baths
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/roman-baths
case: https://sudoku-sleuth.com/cases/roman-baths
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
thermo-1: thermo r1c3-r2c3-r3c4-r3c5-r4c6-r5c6
thermo-2: thermo r7c7-r6c6-r6c5-r6c4-r5c3-r4c3
thermo-3: thermo r5c2-r6c2-r7c3-r8c3-r9c4-r9c5
thermo-4: thermo r5c9-r4c9-r3c8-r2c8-r1c7-r1c6
pair-1: pair r3c4-r3c5 relation {"op":"sum","value":10}
pair-2: pair r5c6-r6c6 relation {"op":"sum","value":10}
pair-3: pair r4c2-r4c3 relation {"op":"sum","value":10}
pair-4: pair r1c1-r2c1 relation {"op":"sum","value":10}
pair-5: pair r8c1-r9c1 relation {"op":"sum","value":10}
pair-6: pair r5c9-r6c9 relation {"op":"sum","value":10}
pair-7: pair r6c5-r7c5 relation {"op":"sum","value":10}
pair-8: pair r6c2-r7c2 relation {"op":"sum","value":10}
pair-9: pair r4c2-r5c2 relation {"op":"sum","value":5}
pair-10: pair r6c1-r6c2 relation {"op":"sum","value":5}
```

**Sudoku, Thermometers, XV Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Thermometers: Digits on thermometers are strictly increasing from bulb to tip.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells separated by a X sum to 10. Not all possible Xs or Vs are necessarily given.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
