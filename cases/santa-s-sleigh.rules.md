---
format: open-rules
title: Santa's Sleigh
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/santa-s-sleigh
library: https://rules.sudoku-sleuth.com/
status: read
givens: r2c8=1 r3c9=2 r4c3=2 r5c3=5
---

```rules
sudoku 9x9
kropki-1: kropki r6c8-r7c8 colour "white"
kropki-2: kropki r3c6-r4c6 colour "white"
kropki-3: kropki r5c4-r5c5 colour "white"
kropki-4: kropki r4c8-r4c9 colour "white"
kropki-5: kropki r2c2-r2c3 colour "white"
kropki-6: kropki r3c2-r3c3 colour "white"
kropki-7: kropki r7c3-r8c3 colour "black"
kropki-8: kropki r7c7-r8c7 colour "black"
whispers-1: whispers r3c3-r4c2-r5c2-r6c2-r6c3-r6c4-r5c4-r4c4 gap 5
whispers-2: whispers r4c4-r3c3-r2c2 gap 5
whispers-3: whispers r3c3-r2c4 gap 5
modular r3c2-r4c1-r5c1-r6c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r6c8-r5c9-r4c9
entropic r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r7c9
```

Normal sudoku rules apply: every row, column, and box must contain a complete set of the digits 1-9.

The sleigh (teal line) is a modular line: every three contiguous digits on the line must contain one digit from each of {147}, {258}, and {369}.

The runner of the sleigh (peach line) is an entropic line: every three contiguous digits on the line must contain one digit from each of {123}, {456}, {789}.

Santa's bag of gifts (green line) is a German whispers line: consecutive digits along the line must differ by at least five.

Digits on either side of a snowflake (white dot) form a consecutive pair. Digits on either side of the black dots attaching the runner to the sleigh are in a 1:2 ratio. Not all possible dots are given.
