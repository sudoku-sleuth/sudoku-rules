---
format: open-rules
title: "Shifter Lines 102: Lock the killer in the cage"
setter: gUBBLOR
source: ""
case: https://sudoku-sleuth.com/cases/shifter-lines-2
library: https://rules.sudoku-sleuth.com/
status: read
exported: a80a59b8ce0b2b56ffd001f548999182
---

```rules
sudoku 9x9
cage-1: cage r7c2-r7c3-r8c3 total 9 connected true
cage-2: cage r9c7-r9c8-r9c9 total 16 connected true
cage-3: cage r2c7-r3c7 total 15 connected true
cage-4: cage r1c1-r1c2 total 9 connected true
cage-5: cage r1c8-r2c8 total 9 connected true
cage-6: cage r1c9-r2c9 total 9 connected true
kropki-1: kropki r9c1-r9c2 black
kropki-2: kropki r1c8-r1c9 black
kropki-3: kropki r7c5-r7c6 white
kropki-4: kropki r3c9-r4c9 white
shifter-line-1: shifter-line r7c3-r8c3-r8c4-r7c4-r6c3-r6c2-r7c1-r8c1
shifter-line-2: shifter-line r7c4-r6c4-r5c4-r5c3-r4c3-r3c3
shifter-line-3: shifter-line r9c2-r9c3
shifter-line-4: shifter-line r7c6-r8c7-r7c8
shifter-line-5: shifter-line r8c6-r9c7
shifter-line-6: shifter-line r2c7-r1c7-r2c6-r3c6-r4c6-r4c7-r3c8-r3c9
shifter-line-7: shifter-line r4c6-r4c5
shifter-line-8: shifter-line r4c2-r4c1-r3c1
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Killer cages: The digits in a cage must sum to the number printed in its corner. Digits may not repeat within a cage.
