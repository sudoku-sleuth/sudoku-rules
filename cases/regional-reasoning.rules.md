---
format: open-rules
title: Regional Reasoning
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/v7joseb482
case: https://sudoku-sleuth.com/cases/regional-reasoning
library: https://rules.sudoku-sleuth.com/
status: read
exported: 6cfeb9231b0ebd209ff8dadf4071900e
---

```rules
sudoku 9x9
cage-1: cage r4c2-r4c3-r4c4-r5c4-r5c5-r5c6-r6c6-r6c7-r6c8 connected true
cage-2: cage r1c2-r1c3-r1c4-r2c4-r2c5-r2c6-r3c6-r3c7-r3c8 connected true
cage-3: cage r7c2-r7c3-r7c4-r8c4-r8c5-r8c6-r9c6-r9c7-r9c8 connected true
kropki-1: kropki r8c4-r9c4 white
kropki-2: kropki r1c6-r2c6 white
kropki-3: kropki r3c5-r3c6 white
kropki-4: kropki r2c8-r2c9 white
kropki-5: kropki r8c8-r8c9 white
kropki-6: kropki r2c1-r3c1 white
kropki-7: kropki r6c1-r7c1 white
kropki-8: kropki r4c2-r5c2 white
kropki-9: kropki r7c2-r8c2 white
kropki-10: kropki r6c8-r7c8 white
kropki-11: kropki r4c2-r4c3 black
kropki-12: kropki r6c7-r6c8 black
kropki-13: kropki r4c4-r4c5 black
kropki-14: kropki r1c2-r1c3 black
kropki-15: kropki r3c7-r3c8 black
kropki-16: kropki r1c4-r1c5 black
kropki-17: kropki r7c3-r7c4 black
kropki-18: kropki r8c5-r8c6 black
kropki-19: kropki r9c6-r9c7 black
```

- Normal sudoku rules apply.
- Cages: Digits may not repeat within a cage.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all possible dots are necessarily given.
