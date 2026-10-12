---
format: open-rules
title: Happy 100th Stream, Tris!
setter: sujoyku
source: https://sudokupad.app/2979j8isq2
case: https://sudoku-sleuth.com/cases/happy-100th-stream-tris
library: https://rules.sudoku-sleuth.com/
status: flagged
flags:
  - A feature in the source still needs a drawing definition.
---

```rules
sudoku 9x9
kropki-1: kropki r9c8-r9c9 colour "black"
kropki-2: kropki r8c9-r9c9 colour "black"
whispers-1: whispers r6c1-r5c1-r4c1 gap 5
whispers-2: whispers r7c4-r8c4-r8c5-r7c5-r6c5-r6c4 gap 5 loop true
whispers-3: whispers r5c2-r6c2-r7c2-r7c3-r6c3-r5c3 gap 5 loop true
region-sum-1: region-sum r4c3-r3c3-r2c3-r2c4-r2c2 segments [["r4c3"],["r3c3","r2c3","r2c2"],["r2c4"]]
region-sum-2: region-sum r5c4-r4c4-r4c5-r3c5-r3c4-r5c5 segments [["r5c4","r4c4","r4c5","r5c5"],["r3c5","r3c4"]]
region-sum-3: region-sum r4c6-r3c6-r2c6 segments [["r4c6"],["r3c6","r2c6"]]
region-sum-4: region-sum r5c7-r5c8-r4c8-r4c7-r3c7-r3c8 segments [["r5c7","r5c8","r4c8","r4c7"],["r3c7","r3c8"]]
pair r1c5-r1c6 relation {"op":"sum","value":5}
little-killer-1: little-killer r1c3-r2c2-r3c1 sum 10
little-killer-2: little-killer r7c1-r8c2-r9c3 sum 10
little-killer-3: little-killer r9c7-r8c8-r7c9 sum 10
little-killer-4: little-killer r3c9-r2c8-r1c7 sum 10
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 box has to contain the digits from 1 to 9 once each.

- Region Sum Lines: Box borders divide the blue lines (Tris) into segments with the same sum. (Different lines may have different sums.)

- German Whispers: Adjacent digits on a green line (100) must have a difference of at least 5.

- Little Killers: Digits on a marked diagonal must sum to 10.

- Kropki: If two digits are joined by a black dot, one is double the other. (Not all black dots are given.)

- V: Digits joined by a V sum to 5. (Not all V are given.)
