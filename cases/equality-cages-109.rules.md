---
format: open-rules
title: "Equality Cages 109: Zip-tied and locked in a cage"
setter: gUBBLOR
source: https://sudokupad.app/3er87co261
case: https://sudoku-sleuth.com/cases/equality-cages-109
library: https://rules.sudoku-sleuth.com/
status: read
exported: d7a74da62d44500da3c067ebf9215bd7
---

```rules
sudoku 9x9
equality-cage-1: equality-cage r5c4-r6c4
equality-cage-2: equality-cage r5c5-r6c5
equality-cage-3: equality-cage r5c6-r6c6
equality-cage-4: equality-cage r7c4-r8c4
equality-cage-5: equality-cage r5c7-r5c8
equality-cage-6: equality-cage r3c8-r3c9
equality-cage-7: equality-cage r4c2-r5c2-r5c3-r6c2
equality-cage-8: equality-cage r7c2-r8c2
kropki-1: kropki r5c8-r6c8 white
kropki-2: kropki r3c9-r4c9 black
kropki-3: kropki r9c3-r9c4 black
kropki-4: kropki r8c4-r8c5 black
zipper-1: zipper r6c6-r6c5-r6c4-r5c3-r5c4-r5c5-r5c6
zipper-2: zipper r7c4-r8c3-r8c4
zipper-3: zipper r4c6-r4c5-r4c4
zipper-4: zipper r6c7-r5c7-r4c7-r5c8-r6c8
zipper-5: zipper r4c9-r3c9-r2c8-r3c8-r3c7
zipper-6: zipper r9c3-r9c4-r8c5
zipper-7: zipper r4c2-r4c1-r5c1-r6c2-r6c3
zipper-8: zipper r9c6-r8c6-r7c5
zipper-9: zipper r7c8-r7c9-r8c9
zipper-10: zipper r9c7-r8c7-r9c8
zipper-11: zipper r8c1-r9c1-r8c2
zipper-12: zipper r3c5-r2c5-r1c4-r1c3-r2c4
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Equality cages: Cages must have an equal number of low (1,2,3,4) and high (6,7,8,9) digits AND an equal number of even (2,4,6,8) and odd (1,3,7,9) digits. Equality cages can never contain 5. Digits may not repeat in a cage.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. A white dot between cells indicates cells with consecutive values. Not all dots are shown.

Zipper lines: Digits an equal distance from the center of a zipper line must sum to the digit in the middle of that line. Digits may repeat on lines.
