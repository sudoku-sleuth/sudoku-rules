---
format: open-rules
title: TXT
setter: FullDeck and Missing a Few Cards
source: https://sudokupad.app/xbovqke5xe
case: https://sudoku-sleuth.com/cases/txt
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c8-r3c8 colour "white"
kropki-2: kropki r1c8-r2c8 colour "white"
kropki-3: kropki r9c1-r9c2 colour "white"
kropki-4: kropki r1c5-r2c5 colour "white"
kropki-5: kropki r2c5-r3c5 colour "white"
kropki-6: kropki r6c4-r7c4 colour "white"
kropki-7: kropki r6c3-r6c4 colour "white"
kropki-8: kropki r9c4-r9c5 colour "white"
kropki-9: kropki r6c2-r6c3 colour "white"
kropki-10: kropki r5c2-r6c2 colour "black"
kropki-11: kropki r7c2-r8c2 colour "black"
kropki-12: kropki r3c3-r4c3 colour "black"
kropki-13: kropki r6c7-r7c7 colour "black"
kropki-14: kropki r6c8-r7c8 colour "black"
kropki-15: kropki r3c8-r4c8 colour "black"
kropki-16: kropki r3c6-r3c7 colour "black"
kropki-17: kropki r6c9-r7c9 colour "black"
whispers-1: whispers r1c1-r1c2-r1c3 gap 5
whispers-2: whispers r3c2-r2c2-r1c2 gap 5
whispers-3: whispers r4c4-r5c5-r6c6 gap 5
whispers-4: whispers r6c4-r5c5-r4c6 gap 5
whispers-5: whispers r7c7-r7c8-r7c9 gap 5
whispers-6: whispers r9c8-r8c8-r7c8 gap 5
pair-1: pair r2c3-r3c3 relation {"op":"sum","value":10}
pair-2: pair r1c1-r2c1 relation {"op":"sum","value":10}
pair-3: pair r7c7-r8c7 relation {"op":"sum","value":10}
pair-4: pair r9c8-r9c9 relation {"op":"sum","value":10}
pair-5: pair r1c3-r2c3 relation {"op":"sum","value":5}
pair-6: pair r9c7-r9c8 relation {"op":"sum","value":5}
```

- Standard sudoku rules apply: The digits 1 through 9 appear in every row, column, and box.
- German Whispers: Usually shown as green lines, adjacent digits along a German Whispers line must differ by at least five.
- Kropki pairs: Digits in cells separated by a black dot are in a 2:1 ratio. Digits in cells separated by a white dot are consecutive. Not all dots are necessarily given.
- X and V pairs: Digits in cells separated by a V sum to 5. Digits in cells connected by a X sum to 10. Not all possible Xs or Vs are necessarily given.
