---
fog:
  initiallyLit: []
format: open-rules
title: I'll Cry If I Want To
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/i-ll-cry-if-i-want-to
library: https://rules.sudoku-sleuth.com/
status: read
exported: 27b5c78190d5d948b05379d45c7b94e6
---

```rules
sudoku 9x9
modular-1: modular r1c3-r2c3-r3c3
modular-2: modular r3c6-r4c6-r5c6
modular-3: modular r6c9-r7c9-r8c9
modular-4: modular r9c2-r9c3-r9c4
modular-5: modular r4c9-r3c9-r2c9-r1c9
modular-6: modular r5c5-r5c4-r6c3
modular-7: modular r6c2-r6c3
modular-8: modular r8c6-r8c7-r8c8
negative relations [{"op":"ratio","value":2}] except [] stated true
x-sum-1: x-sum r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 sum 26
x-sum-2: x-sum r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 27
x-sum-3: x-sum r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 sum 24
x-sum-4: x-sum r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 sum 25
hidden-modular-1: hidden-modular r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5 extent "first-x" stated true
hidden-modular-2: hidden-modular r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 extent "first-x" stated true
hidden-modular-3: hidden-modular r3c9-r3c8-r3c7-r3c6-r3c5-r3c4-r3c3-r3c2-r3c1 extent "first-x" stated true
hidden-modular-4: hidden-modular r6c9-r6c8-r6c7-r6c6-r6c5-r6c4-r6c3-r6c2-r6c1 extent "first-x" stated true
```

Normal sudoku rules apply. Along modular lines, every set of three contiguous digits has three different remainders when divided by 3. Numbers outside the grid give the sum of the first X digits along that row or column, where X is the first digit seen from the direction of the clue. In addition to any modular lines revealed as the fog lifts, every X-sum forms a hidden modular line at least X cells long starting from the cell closest to the clue. Digits separated by a black dot are in a 1:2 ratio. ALL blacks dots are given. As correct digits are placed, fog will lift, potentially revealing more clues.
