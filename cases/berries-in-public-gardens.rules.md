---
format: open-rules
title: Berries in Public Gardens
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/fq3yuo1ouf
case: https://sudoku-sleuth.com/cases/berries-in-public-gardens
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c1=1 r1c2=8 r1c3=3 r1c4=6
---

```rules
sudoku 9x9
kropki-1: kropki r8c2-r9c2 colour "white"
kropki-2: kropki r2c8-r3c8 colour "white"
kropki-3: kropki r4c2-r5c2 colour "black"
kropki-4: kropki r3c4-r4c4 colour "black"
kropki-5: kropki r2c8-r2c9 colour "black"
kropki-6: kropki r1c5-r2c5 colour "black"
kropki-7: kropki r5c6-r5c7 colour "black"
kropki-8: kropki r4c9-r5c9 colour "black"
kropki-9: kropki r2c6-r2c7 colour "black"
whispers-1: whispers r9c3-r8c3-r7c3-r6c2-r6c1 gap 5
whispers-2: whispers r6c2-r5c1 gap 5
whispers-3: whispers r6c2-r5c2 gap 5
whispers-4: whispers r7c3-r6c4-r5c4 gap 5
whispers-5: whispers r6c4-r5c5 gap 5
whispers-6: whispers r5c4-r4c3 gap 5
whispers-7: whispers r5c4-r4c4 gap 5
whispers-8: whispers r5c5-r4c5-r3c5 gap 5
whispers-9: whispers r4c5-r3c4 gap 5
whispers-10: whispers r4c5-r3c6 gap 5
whispers-11: whispers r8c7-r7c7-r6c7 gap 5
whispers-12: whispers r7c7-r6c8-r5c8-r4c9 gap 5
whispers-13: whispers r5c8-r4c8 gap 5
whispers-14: whispers r6c7-r5c6 gap 5
whispers-15: whispers r6c7-r5c7 gap 5
whispers-16: whispers r9c7-r8c7-r7c6-r6c6 gap 5
whispers-17: whispers r4c8-r3c7 gap 5
whispers-18: whispers r4c8-r3c8 gap 5
whispers-19: whispers r3c4-r2c4 gap 5
whispers-20: whispers r3c5-r2c5 gap 5
whispers-21: whispers r3c7-r2c7 gap 5
whispers-22: whispers r3c8-r2c9 gap 5
whispers-23: whispers r9c5-r8c4-r7c4 gap 5
whispers-24: whispers r9c5-r8c5 gap 5
whispers-25: whispers r9c5-r8c6 gap 5
```

- Normal sudoku rules apply.
- German Whispers: Adjacent digits along a green German Whispers line differ by at least 5.
- Kropki pairs: Digits separated by a black dot are in a 1:2 ratio. Digits separated by a white dot are consecutive. Not all dots are necessarily given.
