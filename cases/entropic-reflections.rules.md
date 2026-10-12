---
format: open-rules
title: Entropic Reflections
setter: sujoyku
source: https://sudokupad.app/53819pnc3m
case: https://sudoku-sleuth.com/cases/entropic-reflections
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
kropki-1: kropki r1c2-r1c3 colour "black"
kropki-2: kropki r1c1-r2c1 colour "black"
kropki-3: kropki r2c1-r3c1 colour "white"
kropki-4: kropki r1c1-r1c2 colour "white"
kropki-5: kropki r1c4-r2c4 colour "white"
arrow-1: arrow r6c4-r5c4 bulb ["r6c5"]
arrow-2: arrow r6c1-r6c2 bulb ["r5c1"]
whispers-1: whispers r4c5-r4c6-r5c6 gap 5
whispers-2: whispers r1c5-r1c6-r2c6 gap 5
whispers-3: whispers r4c1-r4c2 gap 5
whispers-4: whispers r7c6-r8c5-r7c4-r7c3 gap 5
whispers-5: whispers r6c7-r5c8-r4c7-r3c7 gap 5
pair-1: pair r7c8-r7c9 relation {"op":"sum","value":10}
pair-2: pair r9c7-r9c8 relation {"op":"sum","value":5}
same-class-1: same-class r1c2-r2c1 classes "entropy"
same-class-2: same-class r1c3-r3c1 classes "entropy"
same-class-3: same-class r1c4-r4c1 classes "entropy"
same-class-4: same-class r1c5-r5c1 classes "entropy"
same-class-5: same-class r1c6-r6c1 classes "entropy"
same-class-6: same-class r1c7-r7c1 classes "entropy"
same-class-7: same-class r1c8-r8c1 classes "entropy"
same-class-8: same-class r1c9-r9c1 classes "entropy"
same-class-9: same-class r2c3-r3c2 classes "entropy"
same-class-10: same-class r2c4-r4c2 classes "entropy"
same-class-11: same-class r2c5-r5c2 classes "entropy"
same-class-12: same-class r2c6-r6c2 classes "entropy"
same-class-13: same-class r2c7-r7c2 classes "entropy"
same-class-14: same-class r2c8-r8c2 classes "entropy"
same-class-15: same-class r2c9-r9c2 classes "entropy"
same-class-16: same-class r3c4-r4c3 classes "entropy"
same-class-17: same-class r3c5-r5c3 classes "entropy"
same-class-18: same-class r3c6-r6c3 classes "entropy"
same-class-19: same-class r3c7-r7c3 classes "entropy"
same-class-20: same-class r3c8-r8c3 classes "entropy"
same-class-21: same-class r3c9-r9c3 classes "entropy"
same-class-22: same-class r4c5-r5c4 classes "entropy"
same-class-23: same-class r4c6-r6c4 classes "entropy"
same-class-24: same-class r4c7-r7c4 classes "entropy"
same-class-25: same-class r4c8-r8c4 classes "entropy"
same-class-26: same-class r4c9-r9c4 classes "entropy"
same-class-27: same-class r5c6-r6c5 classes "entropy"
same-class-28: same-class r5c7-r7c5 classes "entropy"
same-class-29: same-class r5c8-r8c5 classes "entropy"
same-class-30: same-class r5c9-r9c5 classes "entropy"
same-class-31: same-class r6c7-r7c6 classes "entropy"
same-class-32: same-class r6c8-r8c6 classes "entropy"
same-class-33: same-class r6c9-r9c6 classes "entropy"
same-class-34: same-class r7c8-r8c7 classes "entropy"
same-class-35: same-class r7c9-r9c7 classes "entropy"
same-class-36: same-class r8c9-r9c8 classes "entropy"
```

- Normal sudoku rules apply, i.e. each row, column, and 3x3 region has to contain the digits from 1 to 9 once each.

- Entropy Mirror: The diagonal from r1c1 to r9c9 acts as an entropy mirror. Each cell has the same entropy as the cell reflected in the mirror, i.e. if r2c6 contains a low digit (from 123), then r6c2 must also have a low digit.

The remaining rules are standard. Feel free to skip them if you are familiar with XV, Kropki, GW and Arrows.

- XV: Digits joined by an X sum to 10. Digits joined by a V sum to 5. (Not all XV are given.)

- Kropki: Digits joined by a black dot have a 1:2 ratio. Digits joined by a white dot are consecutive. (Not all dots are given.)

- German Whispers: Adjacent digits on a green line must have a difference of at least 5. 

- Arrows: Digits on an arrow sum to the digit in the circle from which the arrow emerges.
