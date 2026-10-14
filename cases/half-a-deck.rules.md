---
format: open-rules
title: Half a Deck
setter: sujoyku
source: https://sudokupad.app/903be63ej2
case: https://sudoku-sleuth.com/cases/half-a-deck
library: https://rules.sudoku-sleuth.com/
status: read
exported: 68e3e85547adc40cefd5f4557c662e42
---

```rules
sudoku 9x9
cage-1: cage r6c7-r6c8-r7c7-r7c8 total 26 connected true
cage-2: cage r7c9-r8c9-r9c8-r9c9 total 26 connected true
cage-3: cage r8c6-r8c7-r8c8-r9c6-r9c7 total 26 connected true
cage-4: cage r5c6-r6c4-r6c5-r6c6 total 26 connected true
cage-5: cage r4c7-r5c7-r5c8-r5c9-r6c9 total 26 connected true
cage-6: cage r3c2-r3c5-r4c2-r4c3-r4c4-r4c5 total 26 connected true
cage-7: cage r2c8-r2c9-r3c9-r4c8-r4c9 total 26 connected true
cage-8: cage r1c1-r1c2-r1c3-r2c1-r2c3-r3c1 total 26 connected true
cage-9: cage r1c4-r1c5-r2c5-r2c6-r3c6 total 26 connected true
cage-10: cage r5c1-r6c1-r7c1-r7c2 total 26 connected true
cage-11: cage r8c3-r9c3-r9c4-r9c5 total 26 connected true
cage-12: cage r1c6-r1c7-r1c8-r2c7-r3c7-r3c8 total 26 connected true
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Killer cages: Digits in a cage do not repeat and must sum to 26.
