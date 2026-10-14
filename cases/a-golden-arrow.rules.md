---
format: open-rules
title: A Golden Arrow
setter: Dr Logic
source: ""
case: https://sudoku-sleuth.com/cases/a-golden-arrow
library: https://rules.sudoku-sleuth.com/
status: read
exported: 9e57021bcf8396b972e8afc4fdcb972f
---

```rules
sudoku 9x9
thermo-1: thermo r8c1-r8c2-r8c3-r7c4-r6c5
thermo-2: thermo r2c1-r2c2-r2c3-r3c4-r4c5-r5c6
kropki-1: kropki r2c8-r3c8 white
kropki-2: kropki r5c1-r6c1 black
kropki-3: kropki r1c8-r2c8 black
kropki-4: kropki r7c9-r8c9 black
kropki-5: kropki r6c9-r7c9 black
kropki-6: kropki r7c8-r8c8 black
kropki-7: kropki r1c6-r1c7 black
kropki-8: kropki r9c3-r9c4 black
kropki-9: kropki r3c6-r3c7 black
whispers r5c1-r5c2-r5c3-r5c4-r5c5-r5c6-r5c7-r5c8 gap 5
renban r2c1-r3c1-r4c1-r5c1-r6c1-r7c1-r8c1
region-sum-1: region-sum r1c2-r1c3-r2c4 segments [["r1c2","r1c3"],["r2c4"]]
region-sum-2: region-sum r9c2-r9c3-r8c4 segments [["r9c2","r9c3"],["r8c4"]]
region-sum-3: region-sum r3c5-r4c6 segments [["r3c5"],["r4c6"]]
region-sum-4: region-sum r7c5-r6c6 segments [["r7c5"],["r6c6"]]
nabner r4c7-r5c7-r6c7-r5c8
```

Normal Sudoku Rules apply.
German Whispers (Green): Adjacent digits must differ by at least 5.
Renban (purple): Form a set of consecutive digits in any order.
Region Sum (blue): Digits along each region sum line must sum to N in each 3x3 the line passes through. N can be different for different lines.
Nabner (gold): No digits along a nabner line can be consecutive. (e.g, 135 is allowed but 192 is not, because 1 and 2 are consecutive)
Thermometer (grey): Digits along a thermometer must strictly increase starting at the bulb (the grey circle)
Ratio (black dot): Cells separated by a black dot must be in a 1:2 ratio.
Difference (white dot): Cells separated by a white dot must be consecutive.
