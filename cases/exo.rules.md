---
format: open-rules
title: EXO
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/w9vnesrx6z
case: https://sudoku-sleuth.com/cases/exo
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r3c2-r3c3 colour "white"
kropki-2: kropki r7c7-r8c7 colour "white"
kropki-3: kropki r7c5-r8c5 colour "white"
kropki-4: kropki r8c4-r9c4 colour "white"
kropki-5: kropki r9c1-r9c2 colour "white"
kropki-6: kropki r4c9-r5c9 colour "white"
kropki-7: kropki r2c2-r2c3 colour "black"
kropki-8: kropki r5c2-r5c3 colour "black"
kropki-9: kropki r8c7-r9c7 colour "black"
kropki-10: kropki r1c5-r1c6 colour "black"
kropki-11: kropki r1c2-r2c2 colour "black"
kropki-12: kropki r2c8-r2c9 colour "black"
kropki-13: kropki r7c7-r7c8 colour "black"
kropki-14: kropki r6c1-r7c1 colour "black"
kropki-15: kropki r7c3-r7c4 colour "black"
whispers-1: whispers r5c5-r4c4 gap 5
whispers-2: whispers r6c4-r5c5 gap 5
whispers-3: whispers r6c6-r5c5 gap 5
whispers-4: whispers r4c6-r5c5 gap 5
entropic-1: entropic r1c3-r1c2-r1c1-r2c1-r3c1-r3c2-r3c3
entropic-2: entropic r2c2-r2c3
entropic-3: entropic r8c7-r7c7-r7c8-r7c9-r8c9-r9c9-r9c8-r9c7
pair-1: pair r5c6-r5c7 sum 10
pair-2: pair r6c5-r7c5 sum 10
pair-3: pair r5c3-r5c4 sum 10
pair-4: pair r1c6-r2c6 sum 10
pair-5: pair r1c6-r1c7 sum 10
pair-6: pair r4c2-r5c2 sum 10
pair-7: pair r5c4-r5c5 sum 5
pair-8: pair r6c9-r7c9 sum 5
pair-9: pair r8c2-r8c3 sum 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Entropic lines: Any set of three sequential cells along an entropic line (usually peach in colour) must contain a low digit (123), a middle digit (456), and a high digit (789).
- German Whispers: Usually shown as green lines, adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. Not all possible Xs or Vs are necessarily given.
