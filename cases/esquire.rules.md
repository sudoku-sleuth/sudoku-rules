---
format: open-rules
title: Esquire
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1n9ns3kas8
case: https://sudoku-sleuth.com/cases/esquire
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c5=1 r4c1=4 r5c4=8 r5c6=4 r6c9=5 r7c5=5
---

```rules
sudoku 9x9
anti-knight
little-killer-1: little-killer r3c1-r2c2-r1c3 sum 22
little-killer-2: little-killer r2c1-r1c2 sum 13
little-killer-3: little-killer r3c9-r2c8-r1c7 sum 10
little-killer-4: little-killer r2c9-r1c8 sum 5
little-killer-5: little-killer r7c9-r8c8-r9c7 sum 21
little-killer-6: little-killer r8c9-r9c8 sum 14
little-killer-7: little-killer r8c1-r9c2 sum 6
little-killer-8: little-killer r7c1-r8c2-r9c3 sum 9
little-killer-9: little-killer r1c1-r2c2-r3c3-r4c4-r5c5-r6c6-r7c7-r8c8-r9c9 sum 28
little-killer-10: little-killer r1c9-r2c8-r3c7-r4c6-r5c5-r6c4-r7c3-r8c2-r9c1 sum 50
```

- Normal sudoku rules apply.
- Antiknight: Digits a chess knight's move apart must be different.
- Little killers: Clues outside the grid give the sum of the digits along the indicated diagonal.
