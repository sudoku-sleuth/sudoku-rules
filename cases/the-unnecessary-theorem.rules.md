---
format: open-rules
title: The Unnecessary Theorem
setter: Dr Logic
source: https://sudokupad.app/cjdlm65r1i
case: https://sudoku-sleuth.com/cases/the-unnecessary-theorem
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r2c7-r2c8 colour "white"
kropki-2: kropki r4c1-r5c1 colour "black"
arrow-1: arrow r2c8-r2c9-r1c9 bulb ["r3c7"]
arrow-2: arrow r4c7-r5c7-r6c7 bulb ["r4c8"]
arrow-3: arrow r3c4-r3c5-r3c6 bulb ["r2c4"]
arrow-4: arrow r2c2-r2c1-r1c1 bulb ["r3c3"]
arrow-5: arrow r6c3-r5c3-r4c3 bulb ["r6c2"]
arrow-6: arrow r8c2-r9c2-r9c1 bulb ["r7c3"]
arrow-7: arrow r7c6-r7c5-r7c4 bulb ["r8c6"]
arrow-8: arrow r8c8-r9c8-r9c9 bulb ["r7c7"]
whispers-1: whispers r5c5-r6c4 gap 5
whispers-2: whispers r5c7-r5c8-r6c9 gap 5
zipper-1: zipper r1c4-r1c3-r2c3
zipper-2: zipper r8c3-r8c4-r9c3
nabner r2c6-r2c7-r1c8-r1c9-r2c9 distinct true
pair-1: pair r3c1-r3c2 sum 10
pair-2: pair r3c8-r3c9 sum 10
parity-cells r1c4 parity "even"
```

Normal Sudoku rules apply.

Digits along the arrow sum to the digit placed in the connected circle. 

Digits cannot repeat along a gold 'nabner' line and cannot contain any two consecutive numbers. 

Digits equidistant from the centre of purple 'zipper' lines sum to the digit in the centre.

Adjacent digits along a green 'german whispers' line differ by at least 5.

Cells separated by an X sum to 10. Not all such Xs are given.

Cells separated by a black dot are in a 1:2 ratio. Cells separated by a white dot are consecutive. Not all such dots are given.

Cells marked with a square are even.
