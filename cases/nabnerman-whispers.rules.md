---
format: open-rules
title: Nabnerman Whispers
setter: sujoyku
source: https://sudokupad.app/j8w8x8m49u
case: https://sudoku-sleuth.com/cases/nabnerman-whispers
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki r2c5-r2c6 colour "black"
whispers-1: whispers r4c2-r3c2-r2c3-r2c4 gap 5
whispers-2: whispers r7c4-r6c4-r6c5 gap 5
whispers-3: whispers r4c7-r4c6-r5c6 gap 5
whispers-4: whispers r5c1-r6c2 gap 5
whispers-5: whispers r1c5-r2c6 gap 5
whispers-6: whispers r2c7-r3c8-r2c9-r1c8 gap 5 loop true
whispers-7: whispers r8c3-r9c2-r8c1-r7c2 gap 5 loop true
nabner-1: nabner r1c8-r2c8-r3c8 distinct true
nabner-2: nabner r7c8-r8c8-r9c8-r8c9-r8c7 distinct true
nabner-3: nabner r8c1-r8c2-r8c3 distinct true
nabner-4: nabner r5c3-r4c3-r4c4-r3c4-r3c5 distinct true
nabner-5: nabner r5c6-r5c5-r6c5 distinct true
nabner-6: nabner r5c7-r6c6-r7c5 distinct true
```

- Normal sudoku rules apply, i.e. each row, column and 3x3 region has to contain the digits from 1 to 9 once each.

- German Whispers: Adjacent digits on a green line must have a difference of at least 5.

- Nabner Lines: The yellow lines are Nabner Lines, i.e. on such a line there may not be consecutive or repeated digits. For example, if a 5 lies on a Nabner line, this line may not contain another 5 and neither a 4 nor a 6.

- Kropki: Digits joined by a black dot are in a 1:2 ratio. (Not all dots are given.)
