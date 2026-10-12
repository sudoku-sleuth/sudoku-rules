---
format: open-rules
title: Shmodular
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/mdp/shmodular
case: https://sudoku-sleuth.com/cases/shmodular
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c2=5 r2c9=8 r5c8=5 r7c5=8 r8c1=6
---

```rules
sudoku 9x9
kropki r6c2-r6c3 colour "black"
whispers-1: whispers r4c3-r4c2-r3c2-r2c2-r2c3-r2c4-r3c4 gap 4
whispers-2: whispers r6c3-r6c2-r7c2-r8c2-r8c3-r8c4-r7c4 gap 4
whispers-3: whispers r3c6-r2c6-r2c7-r2c8-r3c8-r4c8-r4c7 gap 4
whispers-4: whispers r7c6-r8c6-r8c7-r8c8-r7c8-r6c8-r6c7 gap 4
whispers-5: whispers r4c5-r4c6 gap 4
whispers-6: whispers r6c5-r6c6 gap 4
whispers-7: whispers r6c4-r5c4-r4c4 gap 4
modular-1: modular r4c3-r4c2-r3c2-r2c2-r2c3-r2c4-r3c4
modular-2: modular r3c6-r2c6-r2c7-r2c8-r3c8-r4c8-r4c7
modular-3: modular r6c3-r6c2-r7c2-r8c2-r8c3-r8c4-r7c4
modular-4: modular r7c6-r8c6-r8c7-r8c8-r7c8-r6c8-r6c7
modular-5: modular r6c4-r5c4-r4c4
modular-6: modular r4c5-r4c6
modular-7: modular r6c5-r6c6
```

**Sudoku, Duality Lines (Modular/Whisper-4), Ratio Pairs**

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- Duality Lines: All lines are both Modular AND Whisper-4.
- Modular lines: Any set of three adjacent digits along a modular line has three different remainders when divided by 3.
- Whisper-4 Lines: Adjacent digits along a Whisper-4 Line must differ by at least 4.
- Ratio Pairs: Digits in cells separated by a black dot are in a 1:2 ratio.

Subscribe to our mailing list to receive a weekly email with all of our puzzles from the past week: https://missingdeck.net/mailing.html
