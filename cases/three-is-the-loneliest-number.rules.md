---
format: open-rules
title: Three is the Loneliest Number
setter: FullDeck and Missing a Few Cards
source: ""
case: https://sudoku-sleuth.com/cases/three-is-the-loneliest-number
library: https://rules.sudoku-sleuth.com/
status: read
givens: r1c4=3 r2c7=3
---

```rules
sudoku 9x9
thermo-1: thermo r4c6-r5c5-r6c5-r7c5-r6c4
thermo-2: thermo r1c1-r2c1-r2c2-r2c3-r2c4-r2c5
thermo-3: thermo r9c9-r9c8-r9c7-r9c6-r9c5
pair-1: pair r2c7-r2c8 ratio 3
pair-2: pair r3c9-r4c9 ratio 3
pair-3: pair r3c7-r4c7 ratio 3
pair-4: pair r4c7-r4c8 ratio 3
pair-5: pair r5c4-r5c5 ratio 3
pair-6: pair r9c2-r9c3 ratio 3
pair-7: pair r7c8-r8c8 ratio 3
pair-8: pair r8c3-r8c4 ratio 3
sandwich-1: sandwich r1c1-r1c2-r1c3-r1c4-r1c5-r1c6-r1c7-r1c8-r1c9 sum 2
sandwich-2: sandwich r9c1-r9c2-r9c3-r9c4-r9c5-r9c6-r9c7-r9c8-r9c9 sum 31
```

Normal sudoku rules apply. Thermometers are strictly increasing from bulb to tip (standard thermo constraint). Numbers outside the grid indicate the sum of the digits between 1 and 9 in that row or column (standard sandwich sum constraint). Some sandwich sums are indicated by dashes and you must determine their value. However, each sandwich sum (whether indicated by a value or a dash) is a distinct prime number and those values increase from top to bottom and from left to right. Cells separated by a black dot are in a 3:1 ratio. Not all black dots in the grid are indicated.
