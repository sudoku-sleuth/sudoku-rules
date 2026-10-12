---
format: open-rules
title: Missing Elements
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1cyjnm5z1o
case: https://sudoku-sleuth.com/cases/missing-elements
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=5 r2c8=1 r4c6=3 r5c7=6 r6c4=2 r9c3=4
---

```rules
sudoku 9x9
modular-1: modular r3c3-r3c4-r4c4
modular-2: modular r5c5-r5c4-r4c4-r3c4-r3c3
modular-3: modular r7c7-r7c6-r6c6-r5c6-r5c5-r5c4-r4c4-r3c4
modular-4: modular r2c5-r2c4-r2c3-r3c3-r3c4-r4c4-r5c4
modular-5: modular r5c8-r6c8-r7c8-r7c7-r7c6-r6c6-r5c6
modular-6: modular r6c9-r5c9-r4c9-r4c8-r5c8-r6c8-r7c8
modular-7: modular r8c6-r8c7-r8c8-r8c9-r7c9-r6c9-r5c9-r4c9-r4c8-r5c8
modular-8: modular r1c4-r1c5-r1c6-r2c6-r2c5-r2c4-r2c3-r3c3-r3c4
modular-9: modular r4c2-r3c2-r2c2-r1c2-r1c3-r1c4-r1c5-r1c6-r2c6-r2c5-r2c4-r2c3
modular-10: modular r7c1-r6c1-r5c1-r4c1-r4c2-r3c2-r2c2-r1c2-r1c3-r1c4
modular-11: modular r8c1-r7c1-r6c1-r5c1-r4c1
modular-12: modular r8c5-r8c4-r8c3-r8c2-r8c1-r7c1-r6c1-r5c1-r4c1
modular-13: modular r8c5-r8c6-r8c7-r8c8-r8c9
remainder-cage-1: remainder-cage r7c1-r7c2-r8c2 modulus 3 remainder 0 distinct true
remainder-cage-2: remainder-cage r3c3-r4c3-r4c4 modulus 3 remainder 0 distinct true
remainder-cage-3: remainder-cage r6c6-r6c7-r7c7 modulus 3 remainder 0 distinct true
remainder-cage-4: remainder-cage r3c1-r3c2-r4c1 modulus 3 remainder 0 distinct true
remainder-cage-5: remainder-cage r3c7-r4c7 modulus 3 remainder 0 distinct true
remainder-cage-6: remainder-cage r1c6-r1c7-r2c6 modulus 3 remainder 0 distinct true
```

**Sudoku, Modular Line, Cages Variant**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Cages: Digits cannot repeat within cages. Within each cage in this puzzle, the digits sum to a multiple of 3.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
