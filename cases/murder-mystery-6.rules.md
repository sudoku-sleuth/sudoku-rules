---
format: open-rules
title: Murder Mystery 6
setter: The Bard
source: https://sudokupad.app/lx9rxrb1qx
case: https://sudoku-sleuth.com/cases/murder-mystery-6
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
board:
  rows: 9
  cols: 9
  symbols:
    - 0
    - 1
    - 2
    - 3
    - 4
    - 5
    - 6
    - 7
    - 8
    - 9
  regions:
    - - r1c1
      - r1c2
      - r1c3
      - r2c1
      - r2c2
      - r2c3
      - r3c1
      - r3c2
      - r3c3
    - - r1c4
      - r1c5
      - r1c6
      - r2c4
      - r2c5
      - r2c6
      - r3c4
      - r3c5
      - r3c6
    - - r1c7
      - r1c8
      - r1c9
      - r2c7
      - r2c8
      - r2c9
      - r3c7
      - r3c8
      - r3c9
    - - r4c1
      - r4c2
      - r4c3
      - r5c1
      - r5c2
      - r5c3
      - r6c1
      - r6c2
      - r6c3
    - - r4c4
      - r4c5
      - r4c6
      - r5c4
      - r5c5
      - r5c6
      - r6c4
      - r6c5
      - r6c6
    - - r4c7
      - r4c8
      - r4c9
      - r5c7
      - r5c8
      - r5c9
      - r6c7
      - r6c8
      - r6c9
    - - r7c1
      - r7c2
      - r7c3
      - r8c1
      - r8c2
      - r8c3
      - r9c1
      - r9c2
      - r9c3
    - - r7c4
      - r7c5
      - r7c6
      - r8c4
      - r8c5
      - r8c6
      - r9c4
      - r9c5
      - r9c6
    - - r7c7
      - r7c8
      - r7c9
      - r8c7
      - r8c8
      - r8c9
      - r9c7
      - r9c8
      - r9c9
---

```rules
unique-1: unique r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9
unique-2: unique r2c1-r2c2-r2c3-r2c4-r2c5-r2c6-r2c7-r2c8-r2c9
unique-3: unique r3c1-r3c2-r3c3-r3c4-r3c5-r3c6-r3c7-r3c8-r3c9
unique-4: unique r4c1-r4c2-r4c3-r4c4-r4c5-r4c6-r4c7-r4c8-r4c9
unique-5: unique r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8-r5c9
unique-6: unique r6c1-r6c2-r6c3-r6c4-r6c5-r6c6-r6c7-r6c8-r6c9
unique-7: unique r7c1-r7c2-r7c3-r7c4-r7c5-r7c6-r7c7-r7c8-r7c9
unique-8: unique r8c1-r8c2-r8c3-r8c4-r8c5-r8c6-r8c7-r8c8-r8c9
unique-9: unique r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9
unique-10: unique r1c1-r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1-r9c1
unique-11: unique r1c2-r2c2-r3c2-r4c2-r5c2-r6c2-r7c2-r8c2-r9c2
unique-12: unique r1c3-r2c3-r3c3-r4c3-r5c3-r6c3-r7c3-r8c3-r9c3
unique-13: unique r1c4-r2c4-r3c4-r4c4-r5c4-r6c4-r7c4-r8c4-r9c4
unique-14: unique r1c5-r2c5-r3c5-r4c5-r5c5-r6c5-r7c5-r8c5-r9c5
unique-15: unique r1c6-r2c6-r3c6-r4c6-r5c6-r6c6-r7c6-r8c6-r9c6
unique-16: unique r1c7-r2c7-r3c7-r4c7-r5c7-r6c7-r7c7-r8c7-r9c7
unique-17: unique r1c8-r2c8-r3c8-r4c8-r5c8-r6c8-r7c8-r8c8-r9c8
unique-18: unique r1c9-r2c9-r3c9-r4c9-r5c9-r6c9-r7c9-r8c9-r9c9
unique-19: unique r1c1-r1c2-r1c3-r2c1-r2c2-r2c3-r3c1-r3c2-r3c3
unique-20: unique r1c4-r1c5-r1c6-r2c4-r2c5-r2c6-r3c4-r3c5-r3c6
unique-21: unique r1c7-r1c8-r1c9-r2c7-r2c8-r2c9-r3c7-r3c8-r3c9
unique-22: unique r4c1-r4c2-r4c3-r5c1-r5c2-r5c3-r6c1-r6c2-r6c3
unique-23: unique r4c4-r4c5-r4c6-r5c4-r5c5-r5c6-r6c4-r6c5-r6c6
unique-24: unique r4c7-r4c8-r4c9-r5c7-r5c8-r5c9-r6c7-r6c8-r6c9
unique-25: unique r7c1-r7c2-r7c3-r8c1-r8c2-r8c3-r9c1-r9c2-r9c3
unique-26: unique r7c4-r7c5-r7c6-r8c4-r8c5-r8c6-r9c4-r9c5-r9c6
unique-27: unique r7c7-r7c8-r7c9-r8c7-r8c8-r8c9-r9c7-r9c8-r9c9
cage-1: cage r1c2-r1c3 repeats false total 3 connected true
cage-2: cage r3c2-r3c3 repeats false total 4 connected true
cage-3: cage r2c2-r2c3 repeats false total 16 connected true
cage-4: cage r1c1-r2c1-r3c1 repeats false total 19 connected true
diagonal direction "anti"
thermo-1: thermo r7c1-r7c2-r7c3-r8c3-r8c2-r8c1
thermo-2: thermo r9c3-r9c2-r9c1
kropki-1: kropki r1c9-r2c9 colour "white"
kropki-2: kropki r2c9-r3c9 colour "white"
kropki-3: kropki r2c8-r3c8 colour "white"
kropki-4: kropki r2c7-r3c7 colour "white"
kropki-5: kropki r1c7-r2c7 colour "black"
kropki-6: kropki r1c8-r2c8 colour "black"
arrow-1: arrow r4c6-r5c5-r6c4 bulb ["r5c6"]
arrow-2: arrow r4c4-r4c5 bulb ["r5c4"]
renban-1: renban r4c2-r4c1-r5c1-r6c1-r6c2
renban-2: renban r2c6-r1c6-r1c5
renban-3: renban r9c4-r9c5
pair-1: pair r7c7-r8c7 relation {"op":"sum","value":10}
pair-2: pair r8c8-r9c8 relation {"op":"sum","value":10}
pair-3: pair r9c7-r9c8 relation {"op":"sum","value":5}
pair-4: pair r7c7-r7c8 relation {"op":"sum","value":5}
parity-cells-1: parity-cells r5c2-r4c3-r7c6-r7c4 parity "odd"
parity-cells-2: parity-cells r6c8-r6c3-r1c6 parity "even"
```

```drawing
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

Murder Mystery 6 
Sherdoku Holmes after 5 cases you are now called back to where is all started and there is now a copycat killer on the loose. As before, all the digits went to a party but there was a murderer among them. We need your help to with the clues solve who the killer is. 
Place all the digits 0-9 in each row, column, box, and marked diagonal but one digit in each was murdered and will not fit. The victims vary and can even be the same value as the killer. 
Box 1: The Dungeon - Killer cages: All digits in their cage sum to the value in the corner.
Box 3: The Library - White Dots: Digits are consecutive. Black dots: Digits have a ratio of 1:2.
Box 5: The Tower - Arrows: Digits along an arrow add to the number in the circle.
Box 7: The Ballroom - Thermometers: Digits along the grey line increase from bulb end.
Box 9: The Billiards room - XV: Digits with an X add to 10, Digits with a V add to 5.
Box 2,4,6,8: Hallways - Odd – Even: Digits in a greyed circle are odd, and digits in a greyed square are even. For this mystery 0 is considered even. Renban: Digits along a purple line are consecutive in some order. 
Find the killer as they hide their last victim. You will unmask this killer once all else has been eliminated and you realize this time it wasn’t a digit doing the killing but rather a prime example of a backwards letter impersonating a digit. Place the digit it is impersonating in the final cell to complete the puzzle.
