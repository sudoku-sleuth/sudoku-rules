---
format: open-rules
title: "Shifter Dots 103: There are sum shifty lines in this region"
setter: gUBBLOR
source: https://sudokupad.app/d0z9o7bjny
case: https://sudoku-sleuth.com/cases/there-are-sum-shifty-lines-in-this-region
library: https://rules.sudoku-sleuth.com/
status: read
---

```rules
sudoku 9x9
kropki-1: kropki r9c5-r9c6 colour "black"
kropki-2: kropki r2c2-r2c3 colour "black"
region-sum-1: region-sum r7c6-r7c5-r7c4-r6c4-r5c4-r4c3-r3c4-r2c4 segments [["r7c6","r7c5","r7c4"],["r6c4","r5c4"],["r4c3"],["r3c4","r2c4"]]
region-sum-2: region-sum r9c6-r9c7-r8c7-r7c7 segments [["r9c6"],["r9c7","r8c7","r7c7"]]
region-sum-3: region-sum r8c9-r7c9-r6c8 segments [["r8c9","r7c9"],["r6c8"]]
region-sum-4: region-sum r2c8-r3c8-r4c7-r5c7 segments [["r2c8","r3c8"],["r4c7","r5c7"]]
region-sum-5: region-sum r2c7-r2c6-r1c6 segments [["r2c7"],["r2c6","r1c6"]]
region-sum-6: region-sum r7c3-r6c2-r6c1 segments [["r7c3"],["r6c2","r6c1"]]
region-sum-7: region-sum r9c4-r9c3-r9c2 segments [["r9c4"],["r9c3","r9c2"]]
region-sum-8: region-sum r1c4-r2c3-r2c2 segments [["r1c4"],["r2c3","r2c2"]]
region-sum-9: region-sum r4c1-r3c1-r3c2 segments [["r4c1"],["r3c1","r3c2"]]
region-sum-10: region-sum r3c7-r3c6-r3c5 segments [["r3c7"],["r3c6","r3c5"]]
pair-1: pair r5c4-r6c4 relation {"op":"shift"}
pair-2: pair r7c4-r7c5 relation {"op":"shift"}
pair-3: pair r7c5-r7c6 relation {"op":"shift"}
pair-4: pair r7c4-r8c4 relation {"op":"shift"}
pair-5: pair r7c7-r8c7 relation {"op":"shift"}
pair-6: pair r7c8-r8c8 relation {"op":"shift"}
pair-7: pair r8c8-r9c8 relation {"op":"shift"}
pair-8: pair r4c5-r5c5 relation {"op":"shift"}
pair-9: pair r5c5-r6c5 relation {"op":"shift"}
pair-10: pair r6c1-r6c2 relation {"op":"shift"}
pair-11: pair r2c1-r2c2 relation {"op":"shift"}
pair-12: pair r1c2-r2c2 relation {"op":"shift"}
```

Normal Sudoku rules apply. Place the digits 1 through 9 in each empty cell. Digits must not repeat within the same row, column, or box.

Shifter dots: Digts on different sides of a shifter dot must always share either parity (even/odd) OR polarity (high/low) - never neither, never both. Shifter dots can never have 5 on it.

Kropki dots: A black dot between cells indicates cell values with a 2:1 ratio. Not all dots are shown.

Region sum lines: Digits along region sum lines have the same sum within each box the line passes through. I.e. if a line has 1,2,3 on it in one box, and only 1 digit in another box that digit has to be 6. If the line enters a third box with 2 digits on it, those would have to be either 2,4 or 1,5, so the total is 6 in all the boxes. Digits may repeat on lines.
