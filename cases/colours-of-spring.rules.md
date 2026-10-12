---
format: open-rules
title: Colours of Spring
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ugr6s9ip7u
case: https://sudoku-sleuth.com/cases/colours-of-spring
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r1c6-r1c7 colour "white"
kropki-2: kropki r1c1-r2c1 colour "white"
kropki-3: kropki r9c6-r9c7 colour "white"
kropki-4: kropki r1c7-r1c8 colour "black"
kropki-5: kropki r2c9-r3c9 colour "black"
kropki-6: kropki r1c2-r1c3 colour "black"
kropki-7: kropki r2c1-r3c1 colour "black"
kropki-8: kropki r9c2-r9c3 colour "black"
kropki-9: kropki r1c4-r1c5 colour "black"
kropki-10: kropki r4c1-r4c2 colour "black"
kropki-11: kropki r8c4-r8c5 colour "black"
kropki-12: kropki r7c1-r7c2 colour "black"
whispers-1: whispers r1c8-r2c8-r2c9 gap 5
whispers-2: whispers r1c7-r2c7-r3c7-r3c8-r3c9 gap 5
whispers-3: whispers r1c6-r2c6-r3c6-r4c6-r4c7-r4c8-r4c9 gap 5
modular-1: modular r2c1-r2c2-r1c2
modular-2: modular r3c1-r3c2-r3c3-r2c3-r1c3
modular-3: modular r4c1-r4c2-r4c3-r4c4-r3c4-r2c4-r1c4
entropic-1: entropic r8c1-r8c2-r9c2
entropic-2: entropic r7c1-r7c2-r7c3-r8c3-r9c3
entropic-3: entropic r6c1-r6c2-r6c3-r6c4-r7c4-r8c4-r9c4
renban-1: renban r9c8-r8c8-r8c9
renban-2: renban r9c7-r8c7-r7c7-r7c8-r7c9
renban-3: renban r9c6-r8c6-r7c6-r6c6-r6c7-r6c8-r6c9
```

**Sudoku, Modular Lines, German Whispers, Entropic Lines, Renban Lines, Kropki Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3. (Upper left corner)
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five. (Upper right corner)
- Entropic lines: Any set of three adjacent cells along an entropic line must contain a low digit (123), a middle digit (456), and a high digit (789). (Lower left corner)
- Renban lines: Digits along a Renban line must form a set of non-repeating consecutive digits in any order. (Lower right corner)
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.

For more of our puzzles, please visit https://missingdeck.net
