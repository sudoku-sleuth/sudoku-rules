---
format: open-rules
title: Jellyfish
setter: Jobo
source: https://tinyurl.com/3d7a5jew
case: https://sudoku-sleuth.com/cases/jellyfish
library: https://rules.sudoku-sleuth.com/
status: read
exported: b0f3ce721ff71b2541c4957de110696d
---

```rules
sudoku 9x9
kropki-1: kropki r6c4-r7c4 white
kropki-2: kropki r6c6-r7c6 white
kropki-3: kropki r8c7-r9c7 white
kropki-4: kropki r8c3-r9c3 white
kropki-5: kropki r1c8-r1c9 white
kropki-6: kropki r6c3-r6c4 white
kropki-7: kropki r6c6-r6c7 white
kropki-8: kropki r1c3-r2c3 black
kropki-9: kropki r1c7-r2c7 black
parity-1: parity r9c3-r8c3-r7c3-r6c4-r5c4-r4c4
parity-2: parity r9c7-r8c7-r7c7-r6c6-r5c6-r4c6
region-sum-1: region-sum r4c2-r5c3-r6c3-r7c2-r8c2-r9c2 segments [["r4c2","r5c3","r6c3"],["r7c2","r8c2","r9c2"]]
region-sum-2: region-sum r4c8-r5c7-r6c7-r7c8-r8c8-r9c8 segments [["r4c8","r5c7","r6c7"],["r7c8","r8c8","r9c8"]]
slow-thermo-1: slow-thermo r1c5-r1c4-r1c3-r2c2-r3c1-r4c1
slow-thermo-2: slow-thermo r1c5-r1c6-r1c7-r2c8-r3c9-r4c9
slow-thermo-3: slow-thermo r1c5-r2c5-r3c5-r4c5
slow-thermo-4: slow-thermo r1c5-r1c4-r2c3-r3c3-r4c3
slow-thermo-5: slow-thermo r1c5-r1c6-r2c7-r3c7-r4c7
```

Normal sudoku rules apply.

Along thermometers, digits must either stay the same or increase from the bulb end (slow thermos).

Digits along a blue line sum to the same value in each 3x3 box the line passes through.

Adjacent digits along a red line must alternate in parity (odd/even).

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.
