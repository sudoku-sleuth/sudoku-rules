---
format: open-rules
title: Modular Shhhhtaples
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/uogw8zo22j
case: https://sudoku-sleuth.com/cases/modular-shhhhtaples
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4236f0dd764f0cd0834b19e8b6bc965b
---

```rules
sudoku 9x9
kropki-1: kropki r1c4-r1c5 black
kropki-2: kropki r3c7-r4c7 black
kropki-3: kropki r8c2-r9c2 black
kropki-4: kropki r9c6-r9c7 black
kropki-5: kropki r6c5-r7c5 black
modular-1: modular r2c1-r1c1-r1c2-r2c2
whispers-1: whispers r2c1-r1c1-r1c2-r2c2 gap 5
modular-2: modular r3c7-r2c7-r2c8-r3c8
whispers-2: whispers r3c7-r2c7-r2c8-r3c8 gap 5
modular-3: modular r1c4-r2c4-r2c5-r1c5
whispers-3: whispers r1c4-r2c4-r2c5-r1c5 gap 5
modular-4: modular r4c7-r4c8-r5c8-r5c7
whispers-4: whispers r4c7-r4c8-r5c8-r5c7 gap 5
modular-5: modular r6c1-r5c1-r5c2-r6c2
whispers-5: whispers r6c1-r5c1-r5c2-r6c2 gap 5
modular-6: modular r7c1-r8c1-r8c2-r7c2
whispers-6: whispers r7c1-r8c1-r8c2-r7c2 gap 5
modular-7: modular r7c7-r7c6-r8c6-r8c7
whispers-7: whispers r7c7-r7c6-r8c6-r8c7 gap 5
modular-8: modular r5c4-r6c4-r6c5-r5c5
whispers-8: whispers r5c4-r6c4-r6c5-r5c5 gap 5
modular-9: modular r2c1-r1c1-r1c2-r2c2
whispers-9: whispers r2c1-r1c1-r1c2-r2c2 gap 5
modular-10: modular r3c7-r2c7-r2c8-r3c8
whispers-10: whispers r3c7-r2c7-r2c8-r3c8 gap 5
modular-11: modular r1c4-r2c4-r2c5-r1c5
whispers-11: whispers r1c4-r2c4-r2c5-r1c5 gap 5
modular-12: modular r4c7-r4c8-r5c8-r5c7
whispers-12: whispers r4c7-r4c8-r5c8-r5c7 gap 5
modular-13: modular r6c1-r5c1-r5c2-r6c2
whispers-13: whispers r6c1-r5c1-r5c2-r6c2 gap 5
modular-14: modular r7c1-r8c1-r8c2-r7c2
whispers-14: whispers r7c1-r8c1-r8c2-r7c2 gap 5
modular-15: modular r7c7-r7c6-r8c6-r8c7
whispers-15: whispers r7c7-r7c6-r8c6-r8c7 gap 5
modular-16: modular r5c4-r6c4-r6c5-r5c5
whispers-16: whispers r5c4-r6c4-r6c5-r5c5 gap 5
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Ratio Dots: Digits separated by a black dot are in a 1:2 ratio. Not all possible dots are necessarily shown.
- All lines in this puzzles are BOTH German Whisper AND Modular Lines.
- German Whispers: Adjacent digits along a German Whispers line must differ by at least five.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
