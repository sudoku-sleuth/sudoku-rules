---
format: open-rules
title: Murder Mystery 3
setter: The Bard
source: https://sudokupad.app/yt8xvev56z
case: https://sudoku-sleuth.com/cases/murder-mystery-3
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
cage-1: cage r4c5-r4c6-r5c6-r6c6 repeats false total 6 connected true
cage-2: cage r4c4-r5c4-r6c4-r6c5 repeats false total 30 connected true
diagonal-1: diagonal direction "main"
diagonal-2: diagonal direction "anti"
thermo r7c2-r7c3-r8c3-r9c3-r9c2-r9c1-r8c1-r7c1
kropki-1: kropki r6c1-r6c2 colour "white"
kropki-2: kropki r5c2-r5c3 colour "white"
kropki-3: kropki r2c5-r2c6 colour "white"
kropki-4: kropki r1c4-r1c5 colour "white"
kropki-5: kropki r7c4-r7c5 colour "white"
kropki-6: kropki r7c6-r8c6 colour "white"
kropki-7: kropki r4c9-r5c9 colour "white"
kropki-8: kropki r5c1-r6c1 colour "black"
kropki-9: kropki r6c2-r6c3 colour "black"
kropki-10: kropki r7c4-r8c4 colour "black"
kropki-11: kropki r7c5-r8c5 colour "black"
pair-1: pair r5c1-r5c2 sum 10
pair-2: pair r9c5-r9c6 sum 10
pair-3: pair r5c8-r6c8 sum 10
pair-4: pair r2c6-r3c6 sum 10
pair-5: pair r2c4-r3c4 sum 10
pair-6: pair r7c5-r7c6 sum 10
pair-7: pair r4c8-r4c9 sum 10
pair-8: pair r2c5-r3c5 sum 5
pair-9: pair r1c8-r1c9 sum 5
parity-cells r2c3-r1c2-r2c1-r3c2-r2c2 parity "even"
```

```drawing
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[7.5,8.5],[8.5,8.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[7.5,6.5],[8.5,6.5],[8.5,7.5],[7.5,7.5]],"color":"#F067F0","thickness":12.8,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[0.5,8.5],[0.5,7.5],[0.5,6.5],[1.5,6.5],[1.5,7.5],[1.5,8.5],[2.5,8.5],[2.5,7.5],[2.5,6.5]],"color":"#67F067","thickness":9.6,"rounded":true}}
- {"id":"drawing-33","rules":[],"visual":{"kind":"line","points":[[0,0],[9,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
- {"id":"drawing-34","rules":[],"visual":{"kind":"line","points":[[9,0],[0,9]],"color":"#34bbe6","thickness":1.28,"rounded":true}}
```

Murder Mystery 3
Sherdoku Holmes is needed again!  A new numeral killer is on the loose in the town square and we need your help to solve who the killer is. 
Place all the digits 0-9 in each row, column, box, and marked diagonals but one digit in each was murdered and will not fit. The victims vary and can even be the same value as the killer. 
Box 1 The Arcade – Digits in a square must be even. For this puzzle 0 is considered even.
Box 3 Library - Adjacent digits on a green line must be at least 5 apart. (See V rule below)
Box 5 Boxing Arena – Digits in a cage must add up to the total in the corner. 
Box 7 Model Train Store - Digits along the grey line increase from bulb end.
Box 9 The Gym - Digits along the purple lines are consecutive in some order.
Box 2,4,6,8 Walkways - Digits separated by a X must add to 10, and digits separated by a V must add to 5. White Dots: Digits are consecutive. Black dots: Digits have a ratio of 1:2.
In the end you will find a single cell unresolved in which the killer is hiding his last victim. You must place the killer in the cell to be arrested: police found his manifesto and says “People come to me for answers of which I tell. All is revealed to me for I see infinity. Life and death are mine to decipher through eyes like lenses making me the reaper.”
