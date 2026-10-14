---
fog:
  initiallyLit:
    - r2c1
    - r2c7
    - r4c7
    - r4c8
    - r7c7
    - r7c8
    - r8c5
    - r8c6
    - r8c9
format: open-rules
title: "Shifter Lines 116: A multitude of constraints (with fog)"
setter: gUBBLOR and Jasura
source: https://sudokupad.app/sa67mct4yb
case: https://sudoku-sleuth.com/cases/shifter-lines-116-a-multitude-of-constraints-with-fog
library: https://rules.sudoku-sleuth.com/
status: flagged
drawingCoverage: unclaimed-only
flags:
  - The source describes Renban lines that are not yet included in our reading.
board:
  rows: 9
  cols: 9
  symbols:
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
exported: 60b97397324426a6d3c96b8e57bd24f4
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
cage r2c7-r3c7-r4c7 total 6 connected true
thermo r7c8-r8c9-r9c9
kropki-1: kropki r6c3-r6c4 black
kropki-2: kropki r2c1-r2c2 white
arrow r8c6-r8c5 bulb ["r7c7"]
parity r4c3-r4c4-r5c4
whispers-1: whispers r6c7-r5c7-r5c6 gap 4
palindrome r7c2-r6c1-r5c1
between r9c2 ends ["r8c1","r8c3"]
whispers-2: whispers r1c7-r1c6-r2c5 gap 5
pair-1: pair r6c9-r7c9 sum 10
pair-2: pair r4c6-r5c6 sum 5
```

```drawing
- {"id":"drawing-2","rules":[],"visual":{"kind":"shape","layer":"under","center":[2.5,4.5],"width":0.34,"height":0.34,"rounded":true,"fill":"#b088deff","thickness":0,"angle":0}}
- {"id":"drawing-4","rules":[],"visual":{"kind":"line","points":[[6.5,7.5],[6.5,6.5],[7.5,5.5],[7.5,4.5]],"color":"#d8ee25ff","thickness":10,"rounded":true}}
- {"id":"drawing-5","rules":[],"visual":{"kind":"line","points":[[1.5,6.5],[2.5,7.5],[3.5,7.5],[3.5,6.5]],"color":"#d8ee25ff","thickness":10,"rounded":true}}
- {"id":"drawing-6","rules":[],"visual":{"kind":"line","points":[[1.5,0.5],[2.5,0.5],[3.5,1.5],[4.5,1.5]],"color":"#d8ee25ff","thickness":10,"rounded":true}}
- {"id":"drawing-7","rules":[],"visual":{"kind":"line","points":[[5.5,1.5],[5.5,2.5],[6.5,2.5]],"color":"#d8ee25ff","thickness":10,"rounded":true}}
- {"id":"drawing-8","rules":[],"visual":{"kind":"line","points":[[0.5,4.5],[0.5,3.5],[1.5,3.5],[1.5,2.5]],"color":"#2ecbffff","thickness":10,"rounded":true}}
- {"id":"drawing-11","rules":[],"visual":{"kind":"line","points":[[0.5,7.5],[0.5,8.5],[1.5,8.5]],"color":"#f067f0ff","thickness":10,"rounded":true}}
- {"id":"drawing-14","rules":[],"visual":{"kind":"line","points":[[2.5,3.5],[2.5,4.5],[3.5,5.5]],"color":"#b088deff","thickness":10,"rounded":true}}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter lines: Adjacent digits within the same box on a shifter line share both parity (even/odd) AND polarity (low/high). Whenever the line enters a new box either the parity OR the polarity shifts, never both. Shifter lines can never have 5 on it. Digits may repeat on lines.

Region sum line (box 1+2): Digits along the region sum line have the same sum in both boxes.

Kropki dots (box 1+4+5): A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values.

German Whisper (box 2+3): Adjacent digits along the German Whisper line must have a difference of at least 5.

Zipper line (box 2+5): Digits an equal distance from the center (the cell with the dot) of the zipper line must sum to the digit in the middle of the line.

Renban (box 3): Digits along the renban line must be a set of consecutive digits in any order, and must not repeat.

Killer cage (box 3+6): The digits in a cage must sum to the number printed in its corner.

Parity line (box 4+5): Adjacent digits along the parity line must alternate between odd and even.

Palindrome (box 4+7): Digits along the palindrome line read the same forwards or backwards.

Dutch Whisper (box 5+6): Adjacent digits along the Dutch Whisper line must have a difference of at least 4.

XV (box 5+6+9): Adjacent cells connected with the X must sum to 10. Adjacent cells connected with the V must sum to 5.

Between line (box 7): The cell between the two filled circles must have a value between those in the circles.

Arrow (box 8+9): The digits along each arrow must sum to the digit in the circled cell.

Thermometer (box 9): Digits along the thermometer must increase starting from the bulb end.

Fog of war: The grid is covered in fog. Placing correct digits will clear the fog from the surrounding cells.
