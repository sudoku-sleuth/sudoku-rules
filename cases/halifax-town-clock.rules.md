---
format: open-rules
title: Halifax Town Clock
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/kyk5b5uczk
case: https://sudoku-sleuth.com/cases/halifax-town-clock
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c3=4 r2c1=1 r2c3=9 r3c1=7
exported: e32c213e55a3b029fa266fd92c74667b
---

```rules
sudoku 9x9
kropki-1: kropki r8c8-r9c8 white
kropki-2: kropki r8c5-r9c5 white
kropki-3: kropki r8c4-r9c4 white
kropki-4: kropki r5c2-r5c3 white
kropki-5: kropki r9c5-r9c6 white
kropki-6: kropki r8c6-r9c6 black
kropki-7: kropki r6c3-r7c3 black
whispers-1: whispers r9c2-r8c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9-r8c9-r9c9 gap 5
whispers-2: whispers r6c8-r5c8 gap 5
whispers-3: whispers r6c4-r5c4-r5c5-r5c6-r5c7-r5c8-r6c8 gap 5
whispers-4: whispers r4c5-r3c5-r3c6-r3c7-r4c7 gap 5
whispers-5: whispers r2c5-r1c5-r1c6-r1c7-r2c7 gap 5
parity-cells r4c6-r2c6 parity "odd"
```

- Normal sudoku rules apply.
- German Whispers: Adjacent digits along green German Whispers line differ by at least 5.
- Kropki Pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.
- Odds: Digits in a grey circle are odd.
