---
format: open-rules
title: HBD, FD!
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/ce7v2j9sgp
case: https://sudoku-sleuth.com/cases/hbd-fd
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r9c2-r9c3 colour "white"
kropki-2: kropki r6c3-r6c4 colour "white"
kropki-3: kropki r5c5-r5c6 colour "white"
kropki-4: kropki r3c5-r3c6 colour "white"
kropki-5: kropki r2c2-r3c2 colour "white"
kropki-6: kropki r6c1-r6c2 colour "white"
kropki-7: kropki r1c9-r2c9 colour "white"
kropki-8: kropki r2c7-r2c8 colour "white"
kropki-9: kropki r2c3-r2c4 colour "white"
kropki-10: kropki r3c2-r3c3 colour "white"
kropki-11: kropki r3c2-r4c2 colour "black"
kropki-12: kropki r4c2-r5c2 colour "black"
kropki-13: kropki r8c2-r9c2 colour "black"
kropki-14: kropki r6c8-r7c8 colour "black"
kropki-15: kropki r4c4-r5c4 colour "black"
kropki-16: kropki r6c4-r7c4 colour "black"
kropki-17: kropki r3c8-r4c8 colour "black"
kropki-18: kropki r1c5-r2c5 colour "black"
kropki-19: kropki r2c6-r3c6 colour "black"
kropki-20: kropki r1c3-r1c4 colour "black"
kropki-21: kropki r5c3-r5c4 colour "black"
kropki-22: kropki r2c9-r3c9 colour "black"
kropki-23: kropki r3c3-r4c3 colour "black"
whispers-1: whispers r7c3-r7c2-r7c1-r8c1-r9c1 gap 5
whispers-2: whispers r8c2-r8c1 gap 5
whispers-3: whispers r1c1-r2c1-r3c1 gap 4
whispers-4: whispers r1c3-r2c3-r3c3 gap 4
whispers-5: whispers r2c3-r2c2-r2c1 gap 4
whispers-6: whispers r1c7-r1c8-r1c9-r2c8-r3c9-r3c8-r3c7-r2c7 gap 4
modular-1: modular r4c4-r4c5-r5c6-r6c5-r6c4-r5c4 loop true
modular-2: modular r7c7-r7c8-r8c9-r9c8-r9c7-r8c7 loop true
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Modular lines: Any set of three adjacent digits along a teal modular line has three different remainders when divided by 3.
- Dutch Whispers: Adjacent digits along an orange Dutch Whispers line must differ by at least four.
- German Whispers: Adjacent digits along a green German Whispers line must differ by at least five.
- Kropki dots: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
