---
fog:
  initiallyLit:
    - r4c4
    - r4c5
    - r4c6
    - r5c4
    - r5c5
    - r5c6
    - r6c4
    - r6c5
    - r6c6
format: open-rules
title: Fräulein Fog
setter: Meggen033
source: https://sudokupad.app/54kzqr9j6g
case: https://sudoku-sleuth.com/cases/fraulein-fog
library: https://rules.sudoku-sleuth.com/
status: read
exported: 21589a25030f5ef542690c6435fea198
---

```rules
sudoku 9x9
kropki-1: kropki r7c4-r8c4 white
kropki-2: kropki r6c3-r7c3 white
kropki-3: kropki r6c2-r6c3 white
kropki-4: kropki r6c7-r6c8 white
kropki-5: kropki r7c7-r8c7 white
kropki-6: kropki r1c7-r2c7 white
kropki-7: kropki r4c7-r4c8 white
kropki-8: kropki r9c2-r9c3 white
kropki-9: kropki r2c1-r3c1 white
kropki-10: kropki r6c5-r7c5 black
kropki-11: kropki r7c3-r7c4 black
whispers-1: whispers r4c4-r5c5-r6c6 gap 5
whispers-2: whispers r4c5-r5c6 gap 5
whispers-3: whispers r5c4-r6c5 gap 5
whispers-4: whispers r3c4-r3c5-r3c6-r3c7 gap 5
renban-1: renban r6c4-r5c5-r4c6
renban-2: renban r5c4-r4c5
renban-3: renban r6c5-r5c6
renban-4: renban r6c7-r5c7-r4c7-r3c7
renban-5: renban r6c8-r7c8-r8c8
renban-6: renban r1c2-r1c1-r2c1-r3c1-r3c2
pair-1: pair r5c5-r5c6 sum 10
pair-2: pair r4c4-r5c4 sum 10
pair-3: pair r8c4-r8c5 sum 10
pair-4: pair r2c6-r2c7 sum 10
pair-5: pair r2c3-r2c4 sum 10
```

•	Normal Sudoku rules apply. 
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	Adjacent cells connected with a X must sum to 10.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
