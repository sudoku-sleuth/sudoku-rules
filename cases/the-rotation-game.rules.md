---
format: open-rules
title: The Rotation Game
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/the-rotation-game
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
cage-1: cage r4c9-r5c9-r6c9 total 24 connected true
cage-2: cage r1c4-r1c5-r1c6 total 6 connected true
cage-3: cage r9c4-r9c5-r9c6 total 6 connected true
cage-4: cage r4c1-r5c1-r6c1 total 24 connected true
thermo-1: thermo r1c1-r2c2-r3c3
thermo-2: thermo r9c9-r8c8-r7c7
thermo-3: thermo r6c5-r5c6-r4c5-r5c4
kropki-1: kropki r5c3-r5c4 colour "black"
kropki-2: kropki r5c6-r5c7 colour "black"
kropki-3: kropki r3c5-r4c5 colour "black"
arrow-1: arrow r2c8-r3c7 bulb ["r1c9"]
arrow-2: arrow r8c2-r7c3 bulb ["r9c1"]
whispers-1: whispers r4c1-r3c2-r2c3-r1c4 gap 5
whispers-2: whispers r9c6-r8c7-r7c8-r6c9 gap 5
whispers-3: whispers r6c1-r7c2-r8c3-r9c4 gap 5
whispers-4: whispers r1c6-r2c7-r3c8-r4c9 gap 5
renban r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8
pair-1: pair r2c3-r2c4 relation {"op":"sum","value":10}
pair-2: pair r8c6-r8c7 relation {"op":"sum","value":10}
sandwich r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9 sum 5
```

Normal sudoku rules apply.
Digits along thermometers must increase from the bulb end.
Digits along a green 'German whisper' line must have a difference of at least 5.
Digits along a purple 'renban' line must form a consecutive string of digits, in any order.
Digits along the shaft of an arrow must sum to the number in the circle at the end.
Digits in a killer cage must sum to the small clue in the top left of the cage.
Digits seperated by a black dot must be in the ratio 1:2 (not all black dots are given)
Digits seperated by an 'x' must sum to 10.
Clues outside of the grid are the sum of the digits between 1 and 9 in that row/column.
