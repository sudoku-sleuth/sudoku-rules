---
format: open-rules
title: Dagnabtropic Lines
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/dagnabtropic-lines
case: https://sudoku-sleuth.com/cases/dagnabtropic-lines
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c5=3 r2c7=1 r3c2=6 r5c1=1 r5c5=5 r5c9=4 r7c8=8 r8c3=3 r9c5=2
---

```rules
sudoku 9x9
entropic-1: entropic r3c1-r2c1-r1c1-r1c2-r1c3
entropic-2: entropic r9c7-r9c8-r9c9-r8c9-r7c9
entropic-3: entropic r7c1-r8c1-r9c1-r9c2
entropic-4: entropic r2c9-r1c9-r1c8-r1c7
entropic-5: entropic r7c4-r7c3-r6c3-r5c3
entropic-6: entropic r4c3-r3c3-r3c4-r3c5
entropic-7: entropic r3c6-r3c7-r4c7-r5c7
entropic-8: entropic r6c7-r7c7-r7c6-r7c5
entropic-9: entropic r3c1-r2c1-r1c1-r1c2-r1c3
entropic-10: entropic r1c7-r1c8-r1c9-r2c9
entropic-11: entropic r7c9-r8c9-r9c9-r9c8-r9c7
entropic-12: entropic r9c2-r9c1-r8c1-r7c1
entropic-13: entropic r7c4-r7c3-r6c3-r5c3
entropic-14: entropic r4c3-r3c3-r3c4-r3c5
entropic-15: entropic r3c6-r3c7-r4c7-r5c7
entropic-16: entropic r6c7-r7c7-r7c6-r7c5
nabner-1: nabner r3c1-r2c1-r1c1-r1c2-r1c3 distinct true
nabner-2: nabner r9c7-r9c8-r9c9-r8c9-r7c9 distinct true
nabner-3: nabner r7c1-r8c1-r9c1-r9c2 distinct true
nabner-4: nabner r2c9-r1c9-r1c8-r1c7 distinct true
nabner-5: nabner r7c4-r7c3-r6c3-r5c3 distinct true
nabner-6: nabner r4c3-r3c3-r3c4-r3c5 distinct true
nabner-7: nabner r3c6-r3c7-r4c7-r5c7 distinct true
nabner-8: nabner r6c7-r7c7-r7c6-r7c5 distinct true
```

**Sudoku, Duality Lines (Nabner, Entropic)**

- Standard 9x9 sudoku: The digits 1 through 9 appear in every row, column, and box without repetition.
- Duality Lines: All lines are both Nabner AND Entropic Lines.
- Nabner line: No two digits along a Nabner line can be consecutive, regardless of their position on the line. Digits may not repeat on Nabner lines.
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789).

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
