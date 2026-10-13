---
format: open-rules
title: Spider
setter: Jobo
source: https://tinyurl.com/ycxtnrfv
case: https://sudoku-sleuth.com/cases/spider-2
library: https://rules.sudoku-sleuth.com/
status: read
drawingCoverage: unclaimed-only
---

```rules
sudoku 9x9
thermo-1: thermo r5c5-r5c4-r4c3-r3c2-r2c2
thermo-2: thermo r5c5-r5c6-r4c7-r3c8-r2c8
thermo-3: thermo r5c5-r4c4-r3c4-r2c4
thermo-4: thermo r5c5-r4c6-r3c6-r2c6
thermo-5: thermo r5c5-r5c4-r6c3-r7c3-r8c3
thermo-6: thermo r5c5-r5c6-r6c7-r7c7-r8c7
thermo-7: thermo r5c5-r5c4-r5c3-r6c2-r7c1
thermo-8: thermo r5c5-r5c6-r5c7-r6c8-r7c9
kropki-1: kropki r6c5-r7c5 colour "white"
kropki-2: kropki r4c4-r5c4 colour "black"
kropki-3: kropki r4c6-r5c6 colour "black"
region-sum r5c5-r6c4-r7c4-r8c5-r7c6-r6c6 segments [["r5c5","r6c4","r6c6"],["r7c4","r8c5","r7c6"]]
pair-1: pair r2c2-r2c3 sum 10
pair-2: pair r2c7-r2c8 sum 10
```

```drawing
- {"id":"drawing-24","rules":[],"visual":{"kind":"shape","layer":"over","center":[6.5,6.5],"width":0,"height":0,"rounded":false,"thickness":0,"text":"o","textColor":"#888888","fontSize":23}}
```

Normal sudoku rules apply.

Along thermometers, digits must increase from the bulb end.

Digits separated by a white dot must be consecutive. Digits separated by a black dot must be in a 1:2 ratio. Not all dots are given.

Digits along the blue line sum to the same value in each 3x3 box the line passes through.

Digits separated by an X must sum to 10.

The cell marked with an 'O' contains an odd digit.
