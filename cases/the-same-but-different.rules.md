---
format: open-rules
title: The Same, But Different
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/eyms7m3zgf
case: https://sudoku-sleuth.com/cases/the-same-but-different
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c9=5 r3c3=6
exported: e8049b3bae7f1bb59acf0a1c56296017
---

```rules
sudoku 9x9
entropic-1: entropic r2c1-r3c2-r4c3-r5c3-r6c3-r7c4-r7c5
entropic-2: entropic r4c5-r4c6-r5c7-r6c6-r6c5
entropic-3: entropic r1c6-r2c6-r3c7-r4c8-r4c9
entropic-4: entropic r8c2-r9c3-r9c4
entropic-5: entropic r8c7-r7c7-r6c8
entropic-6: entropic r9c6-r9c7-r8c8
entropic-7: entropic r5c8-r6c9-r7c9
entropic-8: entropic r2c1-r3c2-r4c3-r5c3-r6c3-r7c4-r7c5
entropic-9: entropic r4c5-r4c6-r5c7-r6c6-r6c5
entropic-10: entropic r1c6-r2c6-r3c7-r4c8-r4c9
entropic-11: entropic r8c2-r9c3-r9c4
entropic-12: entropic r8c7-r7c7-r6c8
entropic-13: entropic r9c6-r9c7-r8c8
entropic-14: entropic r5c8-r6c9-r7c9
entropic-15: entropic r1c3-r2c4-r3c4
region-sum-1: region-sum r2c1-r3c2-r4c3-r5c3-r6c3-r7c4-r7c5 segments [["r2c1","r3c2"],["r4c3","r5c3","r6c3"],["r7c4","r7c5"]]
region-sum-2: region-sum r4c5-r4c6-r5c7-r6c6-r6c5 segments [["r4c5","r4c6"],["r5c7"],["r6c6","r6c5"]]
region-sum-3: region-sum r1c6-r2c6-r3c7-r4c8-r4c9 segments [["r1c6","r2c6"],["r3c7"],["r4c8","r4c9"]]
region-sum-4: region-sum r8c2-r9c3-r9c4 segments [["r8c2","r9c3"],["r9c4"]]
region-sum-5: region-sum r8c7-r7c7-r6c8 segments [["r8c7","r7c7"],["r6c8"]]
region-sum-6: region-sum r9c6-r9c7-r8c8 segments [["r9c6"],["r9c7","r8c8"]]
region-sum-7: region-sum r5c8-r6c9-r7c9 segments [["r5c8","r6c9"],["r7c9"]]
region-sum-8: region-sum r1c3-r2c4-r3c4 segments [["r1c3"],["r2c4","r3c4"]]
```

**Sudoku, Duality Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Duality Lines: Each line in the puzzle is BOTH region sum AND entropic.
- Sum Line: Box borders split blue lines into sections, and the digits on those sections must sum to the same value. If a line has multiple sections within a box, these sections are summed separately.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).

For more of our puzzles, please visit https://missingdeck.net
