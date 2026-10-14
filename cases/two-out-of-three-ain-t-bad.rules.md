---
format: open-rules
title: Two Out of Three Ain't Bad
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/1cwnilmrp0
case: https://sudoku-sleuth.com/cases/two-out-of-three-ain-t-bad
library: https://rules.sudoku-sleuth.com/
status: read
exported: daac1ff619bbc985afc178dadf8becac
---

```rules
sudoku 9x9
cage-1: cage r1c4-r1c5 total 9 connected true
cage-2: cage r8c5-r9c5 total 12 connected true
cage-3: cage r9c1-r9c2 total 12 connected true
cage-4: cage r3c2-r3c3 total 9 connected true
cage-5: cage r3c7-r4c7 total 11 connected true
line-choice-1: line-choice r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-2: line-choice r9c8-r9c7-r9c6-r9c5-r9c4-r9c3-r9c2 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-3: line-choice r9c1-r8c1-r7c1-r6c1-r5c1-r4c1-r3c1-r2c1 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-4: line-choice r2c2-r2c3-r2c4 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-5: line-choice r3c2-r4c2-r5c2 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-6: line-choice r4c3-r5c3-r6c3 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-7: line-choice r4c5-r5c5-r6c5-r7c5-r8c5 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-8: line-choice r8c6-r8c7-r8c8 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-9: line-choice r6c7-r5c7-r4c7 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-10: line-choice r6c8-r5c8-r4c8 kinds ["modular","entropic","parity"] min 2 max 2
line-choice-11: line-choice r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 kinds ["modular","entropic","parity"] min 2 max 2
```

**Sudoku, Cages, Ambiguous Lines**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Cages: Digits in cages must sum to the value shown in the upper left corner of the cage.
- Ambiguous Lines: Each line in the puzzle is EXACTLY TWO of modular, entropic, or parity.
- Modular Lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).
- Parity Lines: Digits along parity lines alternate odd/even.

For more of our puzzles, please visit https://missingdeck.net
