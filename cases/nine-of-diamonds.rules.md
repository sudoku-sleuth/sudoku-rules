---
format: open-rules
title: Nine of Diamonds
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/v8n2m5fgbw
case: https://sudoku-sleuth.com/cases/nine-of-diamonds
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r2c3-r2c4 total 9 connected true
cage-2: cage r2c6-r2c7 total 9 connected true
cage-3: cage r3c2-r4c2 total 9 connected true
cage-4: cage r3c5-r4c5 total 9 connected true
cage-5: cage r3c8-r4c8 total 9 connected true
cage-6: cage r5c3-r5c4 total 9 connected true
cage-7: cage r5c6-r5c7 total 9 connected true
cage-8: cage r6c8-r7c8 total 9 connected true
cage-9: cage r8c6-r8c7 total 9 connected true
cage-10: cage r6c5-r7c5 total 9 connected true
cage-11: cage r8c3-r8c4 total 9 connected true
cage-12: cage r6c2-r7c2 total 9 connected true
cage-13: cage r1c1-r1c2-r2c1 total 9 connected true
cage-14: cage r8c9-r9c8-r9c9 total 9 connected true
cage-15: cage r1c8-r1c9-r2c9 total 9 connected true
cage-16: cage r1c5-r2c5 total 9 connected true
cage-17: cage r8c1-r9c1-r9c2 total 15 connected true
cage-18: cage r5c1-r5c2 total 7 connected true
cage-19: cage r5c8-r5c9 total 16 connected true
cage-20: cage r8c5-r9c5 total 14 connected true
cage-21: cage r6c6-r6c7 total 5 connected true
cage-22: cage r4c3-r4c4 total 5 connected true
parity-1: parity r7c5-r8c4-r9c5-r8c6 loop true
parity-2: parity r4c8-r5c7-r6c8-r5c9 loop true
parity-3: parity r1c5-r2c4-r3c5-r2c6 loop true
parity-4: parity r4c2-r5c1-r6c2-r5c3 loop true
modular-1: modular r1c2-r2c1-r3c2-r2c3 modulus 4 loop true
modular-2: modular r7c2-r8c1-r9c2-r8c3 modulus 4 loop true
modular-3: modular r7c8-r8c7-r9c8-r8c9 modulus 4 loop true
modular-4: modular r1c8-r2c7-r3c8-r2c9 modulus 4 loop true
modular-5: modular r4c5-r5c4-r6c5-r5c6 modulus 4 loop true
```

**Standard Sudoku, Cages, and Parity Lines; Mod4 Lines**

- Standard sudoku: The digits 1 through 9 appear in every row, column, and box.
- Parity Lines: Digits along blue parity lines alternate odd/even.
- Mod4 Lines: Any three adjacent cells along rose Mod4 lines must contain digits with three different remainders when divided by 4.
- Cages: Digits in cages cannot repeat and must sum to the value shown in the upper left corner of the cage.

The lines in boxes 1, 3, 5, 7, and 9 are rose Mod4 Lines. The lines in boxes 2, 4, 6, and 8 are blue Parity Lines.
