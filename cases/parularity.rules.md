---
format: open-rules
title: Parularity
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/l8bazn6ca2
case: https://sudoku-sleuth.com/cases/parularity
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c6=2 r6c8=1 r9c1=3
exported: 0bb1b4a45d18f337235940cb4a99f67c
---

```rules
sudoku 9x9
modular-1: modular r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
parity-1: parity r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
modular-2: modular r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
parity-2: parity r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
modular-3: modular r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2
parity-3: parity r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2
modular-4: modular r8c2-r7c2-r6c2-r5c2-r4c2-r3c2
parity-4: parity r8c2-r7c2-r6c2-r5c2-r4c2-r3c2
modular-5: modular r3c3-r3c4-r3c5-r3c6-r3c7
parity-5: parity r3c3-r3c4-r3c5-r3c6-r3c7
modular-6: modular r4c7-r5c7-r6c7-r7c7
parity-6: parity r4c7-r5c7-r6c7-r7c7
modular-7: modular r7c6-r7c5-r7c4
parity-7: parity r7c6-r7c5-r7c4
modular-8: modular r6c4-r5c4-r5c5
parity-8: parity r6c4-r5c4-r5c5
modular-9: modular r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
parity-9: parity r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
modular-10: modular r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
parity-10: parity r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
modular-11: modular r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2
parity-11: parity r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2
modular-12: modular r8c2-r7c2-r6c2-r5c2-r4c2-r3c2
parity-12: parity r8c2-r7c2-r6c2-r5c2-r4c2-r3c2
modular-13: modular r3c3-r3c4-r3c5-r3c6-r3c7
parity-13: parity r3c3-r3c4-r3c5-r3c6-r3c7
modular-14: modular r4c7-r5c7-r6c7-r7c7
parity-14: parity r4c7-r5c7-r6c7-r7c7
modular-15: modular r7c6-r7c5-r7c4
parity-15: parity r7c6-r7c5-r7c4
modular-16: modular r6c4-r5c4-r5c5
parity-16: parity r6c4-r5c4-r5c5
```

**Sudoku, Duality Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Duality Lines: Each line in the puzzle is BOTH modular AND parity.
- Modular Lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3
- Parity Lines: Digits along parity lines alternate odd/even.

Set in response to Scojo's Saturday setting prompt 13-April-2025. For more of our puzzles, please visit https://missingdeck.net
