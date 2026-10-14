---
format: open-rules
title: "UMBRAMETER: The Speed of Dark"
setter: Will Power
source: https://sudokupad.app/yh78kgu8c0
case: https://sudoku-sleuth.com/cases/umbrameter-the-speed-of-dark
library: https://rules.sudoku-sleuth.com/
status: read
exported: b7732cf8d3bd8cbec3a0c5581881785b
---

```rules
sudoku 9x9
kropki-1: kropki r2c3-r3c3 white
kropki-2: kropki r2c7-r3c7 white
kropki-3: kropki r1c5-r2c5 white
kropki-4: kropki r8c2-r9c2 white
kropki-5: kropki r8c8-r9c8 white
kropki-6: kropki r4c1-r4c2 white
kropki-7: kropki r1c8-r2c8 white
kropki-8: kropki r8c5-r9c5 black
kropki-9: kropki r6c6-r7c6 black
kropki-10: kropki r4c7-r5c7 black
kropki-11: kropki r7c5-r7c6 black
kropki-12: kropki r5c6-r5c7 black
kropki-13: kropki r9c4-r9c5 black
kropki-14: kropki r3c7-r4c7 black
whispers-1: whispers r9c6-r8c7-r7c8-r6c9 gap 4
whispers-2: whispers r5c1-r6c1-r7c2-r8c3-r9c4 gap 4
whispers-3: whispers r4c1-r3c1-r2c2-r2c3-r1c4-r1c5-r1c6-r2c7-r2c8-r3c9-r4c9-r5c9 gap 4
little-killer-1: little-killer r6c9-r7c8-r8c7-r9c6 sum 24
little-killer-2: little-killer r1c6-r2c7-r3c8-r4c9 sum 11
little-killer-3: little-killer r4c1-r3c2-r2c3-r1c4 sum 10
little-killer-4: little-killer r9c4-r8c3-r7c2-r6c1 sum 24
extremum-1: extremum r8c5-r5c6 type "min" exhaustive false
extremum-2: extremum r3c7 type "max" exhaustive false
```

Normal Sudoku rules apply. KROPKI PAIRS- Numbers with a black dot between them (meter needle) are in a ratio of 2:1. Numbers with a white dot between them are consecutive. Not all possible dots are shown. DUTCH WHISPERS(+)- Numbers on red lines (meter body) are at least 4 apart from their neighbors on the line. ALL NUMBERS on red lines are UNIQUE TO THAT LINE. No lines have any numbers in common with the other two lines. MIN/MAX- Cells with > (Greater than) pointing outward are greater than all adjacent cells. Cells with < (Less than) pointing inward are less than all adjacent cells. LITTLE KILLER- Numbers outside the grid are the sum of the indicated diagonal.
