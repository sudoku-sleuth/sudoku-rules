---
format: open-rules
title: Shaking Hands
setter: sujoyku
source: https://sudokupad.app/7mhy2vdll5
case: https://sudoku-sleuth.com/cases/shaking-hands
library: https://rules.sudoku-sleuth.com/
status: read
exported: 5f11d16e296b70c602dfc03e074456ab
---

```rules
sudoku 9x9
cage-1: cage r1c2-r1c3 total 11 connected true
cage-2: cage r1c5-r1c6-r1c7 total 20 connected true
cage-3: cage r2c9-r3c9 total 12 connected true
cage-4: cage r5c9-r6c9-r7c9 total 20 connected true
cage-5: cage r9c7-r9c8 total 13 connected true
cage-6: cage r9c3-r9c4-r9c5 total 20 connected true
cage-7: cage r3c1-r4c1-r5c1 total 20 connected true
cage-8: cage r2c2-r3c2-r4c2 total 13 connected true
cage-9: cage r3c4-r4c4-r5c4 total 12 connected true
cage-10: cage r5c6-r6c6-r7c6 total 11 connected true
cage-11: cage r6c8-r7c8-r8c8 total 10 connected true
cage-12: cage r8c5-r8c6 total 8 connected true
cage-13: cage r6c3-r7c3 total 6 connected true
cage-14: cage r7c1-r8c1 total 14 connected true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.
 
- Killer cages: Digits in a cage must sum to the clue in the top left. 

- STINGY CONDITION: Any two killer cages can have at most one digit in common. For example, if a cage contains the digits 1 and 2, no other cage may have both these digits.
