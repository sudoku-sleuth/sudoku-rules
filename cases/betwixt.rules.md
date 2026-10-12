---
format: open-rules
title: Betwixt
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/l85wpfeuei
case: https://sudoku-sleuth.com/cases/betwixt
library: https://rules.sudoku-sleuth.com/
status: read
givens: r3c6=8 r4c7=5 r6c2=7 r7c4=4
---

```rules
sudoku 9x9
double-arrow-1: double-arrow r2c1-r1c1-r1c2 ends ["r3c1","r1c3"]
double-arrow-2: double-arrow r3c3 ends ["r3c2","r2c3"]
double-arrow-3: double-arrow r7c2-r7c3 ends ["r7c1","r8c3"]
double-arrow-4: double-arrow r9c1-r9c2 ends ["r8c1","r9c3"]
double-arrow-5: double-arrow r9c8-r9c9 ends ["r9c7","r8c9"]
double-arrow-6: double-arrow r7c8-r7c7 ends ["r7c9","r8c7"]
double-arrow-7: double-arrow r2c7 ends ["r3c7","r1c7"]
double-arrow-8: double-arrow r4c9-r3c9-r2c9 ends ["r5c9","r1c9"]
double-arrow-9: double-arrow r4c5-r5c5-r6c5 ends ["r3c5","r7c5"]
double-arrow-10: double-arrow r5c1 ends ["r4c1","r5c2"]
double-arrow-11: double-arrow r6c8 ends ["r5c8","r6c9"]
double-arrow-12: double-arrow r2c1-r1c1-r1c2 ends ["r3c1","r1c3"]
double-arrow-13: double-arrow r3c3 ends ["r3c2","r2c3"]
double-arrow-14: double-arrow r7c2-r7c3 ends ["r7c1","r8c3"]
double-arrow-15: double-arrow r9c2-r9c1 ends ["r9c3","r8c1"]
double-arrow-16: double-arrow r9c8-r9c9 ends ["r9c7","r8c9"]
double-arrow-17: double-arrow r7c7-r7c8 ends ["r8c7","r7c9"]
double-arrow-18: double-arrow r4c9-r3c9-r2c9 ends ["r5c9","r1c9"]
double-arrow-19: double-arrow r2c7 ends ["r1c7","r3c7"]
double-arrow-20: double-arrow r4c5-r5c5-r6c5 ends ["r3c5","r7c5"]
double-arrow-21: double-arrow r5c1 ends ["r4c1","r5c2"]
double-arrow-22: double-arrow r6c8 ends ["r5c8","r6c9"]
renban-1: renban r3c1-r2c1-r1c1-r1c2-r1c3
renban-2: renban r3c2-r3c3-r2c3
renban-3: renban r7c1-r7c2-r7c3-r8c3
renban-4: renban r8c1-r9c1-r9c2-r9c3
renban-5: renban r9c7-r9c8-r9c9-r8c9
renban-6: renban r7c9-r7c8-r7c7-r8c7
renban-7: renban r3c7-r2c7-r1c7
renban-8: renban r5c9-r4c9-r3c9-r2c9-r1c9
renban-9: renban r3c5-r4c5-r5c5-r6c5-r7c5
renban-10: renban r4c1-r5c1-r5c2
renban-11: renban r5c8-r6c8-r6c9
```

**Sudoku, Duality Lines (Double Arrow, Renban)**

-Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Duality Lines: All lines in this puzzle are BOTH double arrows AND renban lines.
- Double Arrows: Digits along a line sum to same total as the digits in the circles connected to the line.
- Renban Lines: Digits along a Renban line must form a set of non-repeating consecutive digits in some order.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
