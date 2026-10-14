---
fog:
  initiallyLit:
    - r4c4
    - r4c5
    - r4c6
    - r5c4
    - r5c5
    - r5c6
format: open-rules
title: Fogisphere
setter: Meggen033
source: https://sudokupad.app/viwj0ozkkq
case: https://sudoku-sleuth.com/cases/fogisphere
library: https://rules.sudoku-sleuth.com/
status: read
exported: 4315c2ec4a54b54332845f6acd82b8d4
---

```rules
sudoku 9x9
kropki-1: kropki r4c6-r5c6 white
kropki-2: kropki r4c3-r4c4 white
kropki-3: kropki r4c9-r5c9 white
kropki-4: kropki r8c4-r9c4 white
kropki-5: kropki r1c6-r2c6 white
kropki-6: kropki r4c5-r5c5 black
kropki-7: kropki r3c3-r4c3 black
kropki-8: kropki r6c7-r6c8 black
kropki-9: kropki r9c6-r9c7 black
whispers-1: whispers r6c4-r5c4-r5c5-r5c6-r6c6 gap 5
whispers-2: whispers r3c3-r3c4-r3c5-r3c6-r3c7 gap 5
renban-1: renban r4c4-r4c5-r4c6
renban-2: renban r6c3-r7c3-r7c4-r7c5-r7c6-r7c7-r6c7
renban-3: renban r4c2-r5c2-r6c2
renban-4: renban r2c6-r2c5-r2c4
pair-1: pair r5c2-r5c3 sum 10
pair-2: pair r5c8-r6c8 sum 10
pair-3: pair r3c1-r3c2 sum 10
pair-4: pair r7c1-r7c2 sum 10
extremum-1: extremum r7c8-r8c6-r6c5 type "min" exhaustive false
extremum-2: extremum r2c2 type "max" exhaustive false
```

•	Normal Sudoku rules apply. 
•	Digits along a magenta renban form a set of consecutive non-repeating digits in any order.
•	Adjacent digits along a green German Whisper line must have a difference of at least 5.
•	A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are given.
•	The grid is partially covered with fog. Correctly placed digits will clear the fog around that cell. No guessing is required.
•	Adjacent cells connected with a X must sum to 10.
•	Min/max cells must be greater than or less than their orthogonally adjacent neighbors as indicated by the symbols bordering the cell.
