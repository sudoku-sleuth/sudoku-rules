---
format: open-rules
title: ABENNR
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1uv7hh848p
case: https://sudoku-sleuth.com/cases/abennr
library: https://rules.sudoku-sleuth.com/
status: read
exported: 2d01572e2b280043623b8ac680adea86
---

```rules
sudoku 9x9
kropki-1: kropki r5c5-r6c5 black
kropki-2: kropki r6c3-r7c3 white
kropki-3: kropki r7c6-r7c7 white
kropki-4: kropki r1c8-r2c8 white
kropki-5: kropki r2c5-r3c5 white
kropki-6: kropki r4c4-r4c5 white
kropki-7: kropki r1c2-r2c2 white
kropki-8: kropki r5c2-r6c2 white
kropki-9: kropki r8c2-r9c2 white
parity-cells-1: parity-cells r5c2-r5c8-r6c3-r6c7 parity "odd"
parity-cells-2: parity-cells r2c2-r2c8-r1c9-r3c3-r8c2-r9c1-r7c7-r8c8 parity "even"
line-choice-1: line-choice r2c1-r1c1-r1c2-r1c3 kinds ["renban","nabner"] min 1 max 2
line-choice-2: line-choice r3c1-r3c2-r3c3-r2c3 kinds ["renban","nabner"] min 1 max 2
line-choice-3: line-choice r1c7-r1c8-r1c9-r2c9 kinds ["renban","nabner"] min 1 max 2
line-choice-4: line-choice r3c9-r3c8-r3c7-r2c7 kinds ["renban","nabner"] min 1 max 2
line-choice-5: line-choice r9c7-r9c8-r9c9-r8c9 kinds ["renban","nabner"] min 1 max 2
line-choice-6: line-choice r7c9-r7c8-r7c7-r8c7 kinds ["renban","nabner"] min 1 max 2
line-choice-7: line-choice r8c1-r9c1-r9c2-r9c3 kinds ["renban","nabner"] min 1 max 2
line-choice-8: line-choice r8c3-r7c3-r7c2-r7c1 kinds ["renban","nabner"] min 1 max 2
line-choice-9: line-choice r4c7-r4c8-r4c9-r5c9-r6c9 kinds ["renban","nabner"] min 1 max 2
line-choice-10: line-choice r4c3-r4c2-r4c1-r5c1-r6c1 kinds ["renban","nabner"] min 1 max 2
line-choice-11: line-choice r5c7-r6c7-r6c8 kinds ["renban","nabner"] min 1 max 2
line-choice-12: line-choice r6c2-r6c3-r5c3 kinds ["renban","nabner"] min 1 max 2
line-choice-13: line-choice r4c4-r4c5-r4c6 kinds ["renban","nabner"] min 1 max 2
line-choice-14: line-choice r5c5-r5c4-r6c4 kinds ["renban","nabner"] min 1 max 2
line-choice-15: line-choice r6c5-r6c6-r5c6 kinds ["renban","nabner"] min 1 max 2
```

**Standard Sudoku, Kropki Pairs, Ambiguous Renban/ Nabner, Even/Odd**

Each line in this puzzle is either a Renban Line or a Nabner Line. The solver must determine which is which.

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Renban Line: Digits along a Renban line must form a set of non-repeating consecutive digits in any order.
- Nabner line: No two digits along a Nabner line can be consecutive, regardless of their position on the line. 
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- Even/Odd: Cells marked with a grey square contain even digits. Cells marked with a grey circle contain odd digits.
