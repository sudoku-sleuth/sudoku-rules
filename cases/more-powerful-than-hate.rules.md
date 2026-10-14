---
format: open-rules
title: More Powerful Than Hate
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/za3z46tyiu
case: https://sudoku-sleuth.com/cases/more-powerful-than-hate
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=2 r7c2=1 r8c3=4 r8c8=2 r9c9=6
exported: 72fb54439a6712bee64cbde602f05328
---

```rules
sudoku 9x9
kropki-1: kropki r7c5-r8c5 white
kropki-2: kropki r3c5-r4c5 white
kropki-3: kropki r2c5-r3c5 white
kropki-4: kropki r8c5-r9c5 white
kropki-5: kropki r1c5-r2c5 white
kropki-6: kropki r6c5-r7c5 white
kropki-7: kropki r7c7-r8c7 white
kropki-8: kropki r2c1-r3c1 white
kropki-9: kropki r6c1-r7c1 white
kropki-10: kropki r6c3-r7c3 white
kropki-11: kropki r2c3-r3c3 white
kropki-12: kropki r8c1-r9c1 white
kropki-13: kropki r5c3-r5c4 white
kropki-14: kropki r5c5-r5c6 white
kropki-15: kropki r5c8-r5c9 white
parity r3c6-r3c7-r4c7-r5c7-r6c6-r7c5-r6c4-r5c3-r4c3-r3c3-r3c4-r4c5 loop true
entropic r3c9-r2c8-r1c7-r1c6-r2c5-r1c4-r1c3-r2c2-r3c1-r4c1-r5c1-r6c2-r7c3-r8c4-r9c5-r8c6-r7c7-r6c8-r5c9-r4c9
renban-1: renban r8c5-r7c6-r6c7-r5c8-r4c8-r3c8-r2c7-r2c6
renban-2: renban r3c5-r2c4-r2c3-r3c2-r4c2-r5c2-r6c3-r7c4
```

**Sudoku, Entropic Line, Renban, Parity Line, Consecutive Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic Line: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789). The outer heart in this puzzle is an Entropic Line.
- Renban line: Digits along a Renban line must form a set of non-repeating consecutive digits in some order. The middle heart in this puzzle is made up of two Renban lines.
- Parity line: Digits along a parity line alternate odd/even. The inner heart in this puzzle is a parity line.
- Consecutive Pairs: Digits in cells separated by a white dot are consecutive.

For more of our puzzles, please visit https://missingdeck.net or join our mailing list to get a weekly digest of puzzles: missingdeck.net/mailing
